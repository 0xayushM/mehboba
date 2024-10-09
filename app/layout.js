import { Inter, Poppins, Fredoka, Pacifico, Luckiest_Guy, Staatliches } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: '--font-fredoka',
  weight: ['400', '500', '600', '700'],
  style: "normal"
})
const pacifico = Pacifico({
  subsets: ["latin"],
  variable: '--font-pacifico',
  weight: ['400'],
  style: "normal"
})

const luckiest = Luckiest_Guy({
  subsets: ["latin"],
  variable: '--font-luckiest',
  weight: ['400'],
  style: "normal"
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins'
});

const staatliches = Staatliches({
  subsets: ["latin"],
  weight: ['400'],
  display: 'swap',
  variable: '--font-staatliches'
});


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mehboba",
  description: "Created by Ayush Mangal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} ${fredoka.variable} ${luckiest.variable} ${staatliches.variable} ${pacifico.variable}`}>{children}</body>
    </html>
  );
}
