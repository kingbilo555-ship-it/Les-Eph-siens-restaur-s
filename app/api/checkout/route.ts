import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with the secret key from env variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2026-04-22.dahlia", // Use the latest compatible API version
});

export async function POST(req: NextRequest) {
  try {
    const { amount, frequency } = await req.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Montant invalide" }, { status: 400 });
    }

    // Prepare line item (What the user is paying for)
    // Stripe expects amounts in cents (e.g., 50 euros = 5000 cents)
    const lineItem: any = {
      price_data: {
        currency: "eur",
        product_data: {
          name: "Donation - Les Éphésiens Restaurés",
          description: frequency === "mensuel" ? "Donation mensuelle" : "Donation ponctuelle",
          images: ["https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2946&auto=format&fit=crop"], // Placeholder beautiful image
        },
        unit_amount: Math.round(amount * 100), // Convert to cents safely
      },
      quantity: 1,
    };

    // If it's a monthly donation, we need to add recurring object to price_data
    if (frequency === "mensuel") {
      lineItem.price_data.recurring = {
        interval: "month",
      };
    }

    // Determine the base URL for success/cancel redirects
    // Depending on environment (local vs production)
    const origin = req.headers.get("origin") || "http://localhost:3000";

    // Create the Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [lineItem],
      mode: frequency === "mensuel" ? "subscription" : "payment",
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
      submit_type: frequency === "mensuel" ? "auto" : "donate",
    });

    // Return the session ID to the client
    return NextResponse.json({ sessionId: session.id });
    
  } catch (error: any) {
    console.error("Erreur Stripe Checkout:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
