import Image from "next/image";

//import Footer from "./components/footer";
//import Navbar1 from "./components/Navbar1";
//import Navbar2 from "./components/Navbar2";
//import Navbar3 from "./components/Navbar3";

export default function Home() {
  return (
   <div className="h-10 flex justify-end items-center">
  <Image
    src="/sofa.png" 
    alt="Chair Image"
    width={300}
    height={300}
  />

  </div>
  );
}
