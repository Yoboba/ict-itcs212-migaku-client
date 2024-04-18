import Image from "next/image";

type CourseImageProps = {
  src: string;
};

const CourseImage = ({ src }: CourseImageProps) => {
  return (
    <div>
      <Image
        src={src}
        alt="Course Banner"
        fill
        style={{
          objectFit: "cover",
        }}
        className="absolute opacity-85"
      />
    </div>
  );
};

export default CourseImage;
