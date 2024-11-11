import Hero from "./components/Hero";
import Management from "./components/Management";
import Nabar from "./components/Nabar";
import Extensions from "./components/Extensions";
import Customise from "./components/Customise";
import Work from "./components/Work";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Nabar />
      <Hero />
      <Management />
      <Extensions />
      <Customise />
      <Work />
      <Sponsors />
      <Footer />
    </div>
  );
}
