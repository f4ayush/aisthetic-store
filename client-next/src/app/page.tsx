import HomeComponent from "@/components/Home";
import Navbar from "@/components/NavBar";

export default async function Home() {

  return (
    <main>
      <Navbar />
      <HomeComponent />
    </main>
  )
}
