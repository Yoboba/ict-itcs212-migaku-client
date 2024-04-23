import Index from "@/containers/team-page/index";
import Banner from "@/containers/team-page/banner";
export default function TeamPage() {
  return (
    <div className="flex flex-col gap-10 py-10">
      <Banner />
      <Index />
    </div>
  );
}
