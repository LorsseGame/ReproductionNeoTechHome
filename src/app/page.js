import Face from "@/components/Face";
import Installation from "@/components/Installation";
import Navbar from "@/components/Navbar";
import Notification from "@/components/Notification";
import Information from "@/components/Information";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <Notification />
        <Navbar />
      </header>

      <main>
        <Face />
        <Installation />
        <Information />
      </main>
    </div>
  );
}
