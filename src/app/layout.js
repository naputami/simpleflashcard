import "./global.css";
import { CardContextProvider } from "@/context/CardContext";
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body>
        <CardContextProvider>{children}</CardContextProvider>
      </body>
    </html>
  );
}
