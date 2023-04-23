import Navbar from "../components/Navbar";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";

export const metadata = {
  title: "ToWP",
  description: "Watch videos together with your friends",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
