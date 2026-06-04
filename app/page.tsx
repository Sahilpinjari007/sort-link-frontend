import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { LandingPage } from "@/components/landing/landing-page";

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
