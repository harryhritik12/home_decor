import React from "react";
import ImageSlider from "../components/ImageSlider";
import HeroSection from "../sections/Hero";
import ProjectGrid from "../components/ProjectGrids";
import InteriorSection from "../components/InteriorSection";
import InteriorFeature from "../components/InteriorFeature";

export default function Home() {
  return (
    <div >
      <div className="h-full w-full">
        <ImageSlider />
        <HeroSection />
        <ProjectGrid />
        <InteriorSection />
        <InteriorFeature />
      </div>
    </div>
  );
}
