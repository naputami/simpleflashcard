import "./global.css"
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body>{children}</body>
    </html>
  );
}
