import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BackgroundInfo from "../components/BackgroundIntro";
import Portfolio from "../components/Portfolio";
import MyExperience from "../components/MyExperience";
import MainLayout from "../components/Layout/MainLayout";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <MainLayout>
        <section className="min-h-screen">
          <Navbar />
          <HeroSection />
        </section>

        <section>
          <BackgroundInfo />
          <MyExperience />
        </section>

        <Portfolio />
      </MainLayout>
    </div>
  );
}
