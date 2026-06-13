import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { LandingPage } from "@/components/landing/landing-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SortLink - Modern URL Shortener & Link Analytics",
  description:
    "Create short links, generate QR codes, and track analytics with SortLink.",
};

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
