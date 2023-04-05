"use client";

import { db } from "@/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapShot) => {
      let messages: Message[] = [];
      querySnapShot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [messages]);

  return (
    <div className="h-full relative">
      <div className="flex absolute bottom-0 left-0 right-0 top-0">
        <div className="flex flex-col flex-1 justify-between">
          <main className="chat flex flex-col overflow-y-auto">
            {messages &&
              messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
            <span ref={scrollRef}></span>
          </main>
          <SendMessage />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
