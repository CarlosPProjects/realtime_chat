"use client";

import { ArrowLeftOnRectangleIcon, BellIcon } from "@heroicons/react/24/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import { auth } from "@/firebase";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <main className="flex py-6 justify-between items-center text-gray-300">
      <Image src={"/assets/logo.png"} width={60} height={60} alt="Logo" />
      <div className="flex gap-4 items-center">
        <div className="flex h-10 w-10 bg-[#1f2026]  items-center justify-center rounded-full relative">
          <BellIcon className="w-5 text-gray-300" />
          <div className="absolute rounded-full top-0 right-1 w-2 h-2 bg-pink-300 shadow-md shadow-pink-300"></div>
        </div>
        <div className="h-10 bg-[#1f2026] rounded-full p-1 relative">
          <Image
            src={user?.photoURL!}
            width={32}
            height={32}
            alt="User profile pic"
            className="rounded-full"
          />
          <div className="absolute rounded-full top-0 right-1 w-2 h-2 bg-green-300 shadow-md shadow-green-300"></div>
        </div>
        <div className="flex h-10 w-10 bg-[#1f2026]  items-center justify-center rounded-full relative cursor-pointer">
          <ArrowLeftOnRectangleIcon className="w-5 text-gray-300 rotate-180 " />
        </div>
      </div>
    </main>
  );
};
export default Header;
