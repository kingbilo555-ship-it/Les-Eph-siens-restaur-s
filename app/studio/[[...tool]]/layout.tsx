export const metadata = {
  title: 'Sanity Studio - Les Éphésiens Restaurés',
  description: 'Tableau de bord administrateur',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ margin: 0, padding: 0, height: '100vh', width: '100vw' }}>
      {children}
    </div>
  )
}
