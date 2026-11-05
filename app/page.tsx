import HomeHero from "@/components/home/HomeHero";
import IntroSection from "@/components/home/IntroSection";
import FeaturedDevelopments from "@/components/home/FeaturedDevelopments";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyWakusini from "@/components/home/WhyWakusini";
import HomeCTA from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <IntroSection />
      <FeaturedDevelopments />
      <ServicesOverview />
      <WhyWakusini />
      <HomeCTA />
    </>
  );
}
