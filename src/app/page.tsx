import ContentSection from "@/containers/landing-page/content-section";
import SideImageSection from "@/containers/landing-page/side-image-section";

export default function LandingPage() {
  return (
    <div className="flex size-full flex-col xl:flex-row">
        <ContentSection/>
        <SideImageSection/>
    </div>
  )
}