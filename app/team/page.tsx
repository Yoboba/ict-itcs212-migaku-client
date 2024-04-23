import Index from "@/containers/team-page/index";
import Banner from "@/containers/team-page/banner";
export default function TeamPage() {
  return (
    <div className="py-10">
      <div className="mb-10">
        <Banner />
        <Index />
      </div>
    </div>
  );
}
