import Header from "./components/header";
import HeroSection from "./components/hero-section";
import HeroBottomLogos from "./components/hero-bottom-logos";
import AuthorTrustUs from "./components/author-trust-us";
import PublishYourChildrenBook from "./components/publish-your-children-book";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <HeroBottomLogos />
      <AuthorTrustUs />
      <PublishYourChildrenBook />
    </>
  );
}
