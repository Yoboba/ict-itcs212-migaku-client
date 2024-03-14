import ContentSection from "@/containers/landing-page/content-section";
import SideImageSection from "@/containers/landing-page/side-image-section";

export default function LandingPage() {
  return (
    <div className="w-full h-full flex">
        <ContentSection/>
        <SideImageSection/>
    </div>
  )
}