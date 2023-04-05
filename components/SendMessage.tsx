"use client";

import { useState, useRef, useEffect } from "react";
import { auth, db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";

const SendMessage = () => {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser!;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
      photoURL,
    });
    setInput("");
  };

  return (
    <div className="py-6">
      <form onSubmit={sendMessage} className="w-full flex gap-4 sticky">
        <div className="grid place-items-center">
          <Image
            src={user?.photoURL!}
            width={35}
            height={35}
            alt="Form image"
            className="rounded-full border-2 border-gray-600"
          />
        </div>
        <input
          value={input}
          type="text"
          className="w-full flex-1 text-lg bg-[#1f2026] text-gray-300 outline-none border-none px-4 py-2 rounded-md"
          placeholder="Write a reply"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          type="submit"
          className="flex gap-1 items-center px-4 py-2 bg-[#5c61ed] rounded-md"
        >
          <PaperAirplaneIcon className="w-5 -rotate-45 text-gray-300" />
          <span className="text-gray-300">Send</span>
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
