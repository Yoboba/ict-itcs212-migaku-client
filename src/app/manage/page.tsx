import TableSection from "@/containers/manage-page/table-section";
export default function ManagePage() {
  return (
    <div className="w-full h-full flex">
        <div id="content-container" className="px-6 flex-col items-center justify-center w-full md:w-[720px] lg:w-[1020px] xl:w-[1220px] h-full mt-24 mx-auto">
            <div className="flex space-x-2 justify-between">
              <div className="text-4xl font-semibold">Management Panel 🎉</div>
              <div className=""></div>
            </div>
            <TableSection/>
        </div>
    </div>
  )
}