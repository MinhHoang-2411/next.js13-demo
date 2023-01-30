export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      {children}
      <p>This is footer</p>
    </>
  );
}
