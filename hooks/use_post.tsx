interface UseGetProps {
  url: string;
}
export default async function UsePOST(props: UseGetProps) {
  const response = fetch(props.url, {
    method: "POST",
    // TODO : specify all properties
  });

  console.log(response);
}
