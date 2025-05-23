import "@/node_modules/react-modal-video/css/modal-video.css";
import "public/assets/css/color.css";
import "public/assets/css/style.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { heebo, manrope } from "@/lib/font";
export const metadata = {
  title: "Pushtech Solutions Limited",
  description: "Advanced Machienary Hub ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${heebo.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
