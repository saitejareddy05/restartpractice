export const metadata = {
title: "My Next.js App",
};


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function RootLayout({ children }) {
return (
<html lang="en">
<body>
<Navbar />
<main style={{ padding: "20px" }}>{children}</main>
<Footer />
</body>
</html>
);
}