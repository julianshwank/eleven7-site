import "./globals.css";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-black text-white">
          {/* <Navbar />  <- remove this line */}
          {children}
        </body>
      </html>
    )
  }