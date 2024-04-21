export default async function Footer() {
  const response = await fetch("https://catfact.ninja/fact", {
    next: { revalidate: 10 },
  });
  const data = await response.json();

  return (
    <div className="flex size-full flex-col items-center justify-center gap-3 bg-white p-5">
      <h1 className=" text-xl font-semibold text-c6">
        Fun Fact Everyday About Cat :3
      </h1>
      <h1 className=" text-lg font-normal text-black">
        &quot;{data.fact}&quot;
      </h1>
    </div>
  );
}
