import CourseCardSection from "@/containers/detail-page/course-card-section";
import CourseDescriptionSection from "@/containers/detail-page/course-description-section";

export default function DetailPage({
  params,
}: Readonly<{ params: { id: number } }>) {
  return (
    <div>
      <CourseCardSection courseId={params.id} />
      <CourseDescriptionSection courseId={params.id} />
    </div>
  );
}
