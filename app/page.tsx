import Home from "@/components/Home";
import Error from "./error";

export const revalidate = 0;

const getRoom = async () => {
  const res = await fetch(`${process.env.API_URL}/api/rooms`);
  return res.json();
}

export default async function HomePage() {

  const data = await getRoom();

  if (data?.message) {
    return <Error error={data} />
  }

  return <Home data={data} />;
}
