import "./globals.css";

export const metadata = {
  title: "NFT Grid",
  description: "A grid of NFT images with psychiatric terms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
