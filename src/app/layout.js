import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
<<<<<<< HEAD
  title: "Mansarovar Tour & Travels",
=======
  title: "Himalayan Glory Travels",
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
  description: "Best travel experiences in the Himalayas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
