import { auth } from "@/firebase";
import { Timestamp } from "firebase/firestore";
import Image from "next/image";

type Message = {
  id: string;
  text?: string;
  timestamp?: Timestamp;
  name?: string;
  uid?: string;
  photoURL?: string;
};

type Props = {
  message: Message;
};

const Message = ({ message }: Props) => {

  const date = message?.timestamp ? message.timestamp.toDate() : new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hours}:${minutes}`;

  return (
    <div
      className={`flex gap-2 justify-end py-6 relative ${
        message.uid !== auth.currentUser?.uid && "flex-row-reverse"
      }`}
    >
      <div
        className={`flex py-2 px-4 rounded-md ${
          message.uid === auth.currentUser?.uid
            ? "bg-[#5c61ed] text-[#5c61ed] bg-opacity-20"
            : "bg-[#1f2026] text-gray-300"
        }`}
      >
        <p>{message.text}</p>
        <div
          className={`flex gap-2 text-gray-400 w-full ${
            message.uid !== auth.currentUser?.uid && "flex-row-reverse"
          } absolute bottom-0 right-0 justify-end text-xs`}
        >
          <span className="text-gray-600">{time}</span>
          {message.uid === auth.currentUser?.uid ? (
            <span>You</span>
          ) : (
            <span>{message.name}</span>
          )}
        </div>
      </div>
      {message.uid !== auth.currentUser?.uid && (
        <div className="grid place-items-center">
          <Image
            src={message?.photoURL!}
            width={35}
            height={35}
            alt="User message photoURL"
            className="rounded-full border-2 border-gray-600"
          />
        </div>
      )}
    </div>
  );
};
export default Message;
