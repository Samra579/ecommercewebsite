import Image from "next/image";

export default function Home() {
  
  return (
    <div className="flex flex-col items-center p-4"> {/* Adjusted className for better layout */}
      <Image
        src="/sofa.png"
        alt="Chair Image"
        width={300}
        height={300}
        className="mt-8"
      />
    </div>
  );
}