"use client";

import {
  ArrowLeftOnRectangleIcon,
  RectangleGroupIcon,
  ChartBarSquareIcon,
  WalletIcon,
  ChartPieIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

const Navigator = () => {
  return (
    <main>
      <div className="flex flex-col justify-between h-screen p-4">
        <div className="flex flex-col gap-4 items-center">
          <div className="p-2 bg-[#1f2026] rounded-lg cursor-pointer">
            <RectangleGroupIcon className="w-6 text-white" />
          </div>
          <div className="p-2 cursor-pointer hover:bg-[#1f2026] rounded-lg relative">
            <ChartBarSquareIcon className="w-6 text-gray-500" />
            <div className="w-2 h-2 absolute rounded-full bg-sky-300 top-2 right-2 shadow-md shadow-sky-300"></div>
          </div>
          <div className="p-2 cursor-pointer hover:bg-[#1f2026] rounded-lg">
            <WalletIcon className="w-6 text-gray-500" />
          </div>
          <div className="p-2 cursor-pointer hover:bg-[#1f2026] rounded-lg">
            <ChartPieIcon className="w-6 text-gray-500" />
          </div>
          <hr className="w-10 border-gray-500" />
          <div className="p-2 cursor-pointer hover:bg-[#1f2026] rounded-lg">
            <EllipsisHorizontalCircleIcon className="w-6 text-gray-500" />
          </div>
        </div>
        <div className="flex justify-center cursor-pointer">
          <div
            className="p-2 cursor-pointer rounded-lg hover:bg-[#1f2026]"
            onClick={() => signOut(auth)}
          >
            <ArrowLeftOnRectangleIcon className="w-6 text-gray-500 rotate-180" />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Navigator;
