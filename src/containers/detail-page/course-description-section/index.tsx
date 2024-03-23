/* eslint-disable tailwindcss/no-custom-classname */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CourseDescriptionSection() {
    return (
        <div className="flex h-full gap-10 p-10">
            <div className="flex h-full w-1/3 flex-col items-start justify-center rounded-xl bg-white p-5 drop-shadow-lg">
                <p>Course Code   : 123456</p>
                <p>Duration      : 08:57:21</p>
                <p>No. of videos : 120</p>
                <p>Recommend for : Olympic Swimmer </p>
            </div>
            <Tabs defaultValue="about" className="h-full w-2/3">
                <TabsList className=" h-8 w-fit gap-2 bg-transparent">
                    <TabsTrigger value="about" className="py-[2px] focus:border-2">About</TabsTrigger>
                    <TabsTrigger value="outcome" className="py-[2px] focus:border-2">Outcome</TabsTrigger>
                    <TabsTrigger value="course" className="py-[2px] focus:border-2">Course</TabsTrigger>
                </TabsList>
                <div className="bg-c0 mt-2 h-px w-full"/>
                <TabsContent value="about" className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</TabsContent>
                <TabsContent value="outcome" className="text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</TabsContent>
                <TabsContent value="course" className="text-justify">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</TabsContent>
            </Tabs>
        </div>
    )
}