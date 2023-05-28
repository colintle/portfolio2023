export const metadata = {
  title: "Colin's Portfolio",
  description: 'About Colin Le',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/b935e69800.js" crossOrigin="anonymous"></script>
        <link rel="icon" href="/images/icon.png" type="image/png"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
