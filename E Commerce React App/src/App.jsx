import "./App.css";
import Header from "./components/header/header";
import SectionStrip from "./components/SectionStrip/SectionStrip";
import Carousel from "./components/carousel/carousel";
export default function App() {
  return (
    <>
      <Header />
      <SectionStrip />
      <Carousel CWidth={150} CHeight={200} delay={2000} />
      <Carousel CWidth={250} CHeight={250} delay={900} />
    </>
  );
}
