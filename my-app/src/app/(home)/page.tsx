import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-red-600">Ini website font menggunakan geistSans</h1>
      <h1 className="text-3xl text-red-600 font-geist-mono">Ini website font menggunakan geistMono</h1>
    </div>
  );
}
