import TableTabs from "@/components/my-ui/table_tabs";
export default function LandingPage() {
  return (
    <div className="w-full h-full flex">
        <div id="content-container" className="px-6 flex-col items-center justify-center w-full md:w-[720px] lg:w-[900px] xl:w-[1220px] h-full mt-24 mx-auto">
            <div className="flex space-x-2 justify-between">
              <div className="text-4xl font-semibold">Management Panel 🎉</div>
              <div className=""></div>
            </div>
            <TableTabs/>
        </div>
    </div>
  )
}