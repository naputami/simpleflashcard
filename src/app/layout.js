import "./global.css";
import { CardContextProvider } from "@/context/CardContext";
export const metadata = {
  title: "Simple English Flash Card",
  description: "Next.js application for creating simple english flash card",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body>
        <CardContextProvider>{children}</CardContextProvider>
      </body>
    </html>
  );
}
