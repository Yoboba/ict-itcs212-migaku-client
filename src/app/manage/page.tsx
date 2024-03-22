import TableSection from "@/containers/manage-page/table-section";
export default function ManagePage() {
  return (
    <div className="flex size-full">
        <div id="content-container" className="mx-auto mt-24 size-full flex-col items-center justify-center px-6 md:w-[720px] lg:w-[1020px] xl:w-[1220px]">
            <div className="flex justify-between space-x-2">
              <div className="text-4xl font-semibold">Management Panel 🎉</div>
              <div className=""></div>
            </div>
            <TableSection/>
        </div>
    </div>
  )
}