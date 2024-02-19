import Image from "next/image";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

export default function Home() {
  return (
   <div className="bg-[#f3f2ef] flex flex-col">
      {/* Header */}
        <Header />
      {/* App Body */}
        <div className="flex">
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
   </div>
  )
}
