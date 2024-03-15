import TableSearchBar from "@/components/my-ui/table_search_bar";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";

export default function LandingPage() {
  return (
    <div className="w-full h-full flex">
        <div id="content-container" className="px-6 flex-col items-center justify-center w-full md:w-[720px] lg:w-[900px] xl:w-[1220px] h-full mt-24 mx-auto">
            <div className="flex space-x-2 justify-between">
              <div className="text-4xl font-semibold">Management Panel 🎉</div>
              <div className=""></div>
            </div>
            <div id="table" className="mt-4 border rounded-md"> 
              <div id="table-container w-full flex-col items-center">
                <div id="table-header" className="flex space-x-2 items-center justify-between p-4">
                  <TableSearchBar/>
                  <Button className="h-full">
                    <IconPlus size={16} className="mr-2"/>
                    Add Course
                  </Button>
                </div>
              </div>
              
            </div>
        </div>
    </div>
  )
}