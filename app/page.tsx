import Home from "@/components/Home";

const getRoom = async () => {
  const res = await fetch('http://localhost:3000/api/rooms', {
    cache: "no-store"
  });
  return res.json();
}

export default async function HomePage() {

  const rooms = await getRoom();
  console.log(rooms.resPerPage);
  return <Home />;
}
