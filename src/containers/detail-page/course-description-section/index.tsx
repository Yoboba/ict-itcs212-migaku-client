import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CourseDescriptionSection() {
    return (
        <div className="flex gap-10 p-10 h-full">
            <div className="flex flex-col justify-center items-start bg-white w-1/3 h-full drop-shadow-lg rounded-xl p-5">
                <p>Course Code   : 123456</p>
                <p>Duration      : 08:57:21</p>
                <p>No. of videos : 120</p>
                <p>Recommend for : Olympic Swimmer </p>
            </div>
            <Tabs defaultValue="about" className="w-2/3 h-full">
                <TabsList className=" w-fit h-8 bg-transparent gap-2">
                    <TabsTrigger value="about" className="py-[2px] focus:border-2">About</TabsTrigger>
                    <TabsTrigger value="outcome" className="py-[2px] focus:border-2">Outcome</TabsTrigger>
                    <TabsTrigger value="course" className="py-[2px] focus:border-2">Course</TabsTrigger>
                </TabsList>
                <div className="h-[1px] mt-2 w-full bg-c0"/>
                <TabsContent value="about" className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</TabsContent>
                <TabsContent value="outcome" className="text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</TabsContent>
                <TabsContent value="course" className="text-justify">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</TabsContent>
            </Tabs>
        </div>
    )
}