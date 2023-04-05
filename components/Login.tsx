"use client";

import Image from "next/image";
import { auth } from "@/firebase";
import { signInWithRedirect, GoogleAuthProvider, User } from "firebase/auth";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const googleSignIn = () => {
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-1/2">
      <div className="w-full max-w-sm p-6 rounded-lg shadow-lg bg-gray-100 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center mb-12">
          <Image
            src={"/assets/logo.png"}
            width={80}
            height={80}
            alt="Login logo"
          />
          <p className="text-gray-700 text-xs uppercase">
            official networking platform
          </p>
        </div>
        <form className="w-full">
          <div className="mb-4 relative">
            <label
              className="mb-2 text-gray-800 absolute -top-2 left-3 text-xs bg-gray-100 rounded-full px-2"
              htmlFor="email"
            >
              Email
            </label>

            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder=""
            />
          </div>
          <div className="mb-6 relative">
            <label
              className="mb-2 text-gray-800 absolute -top-2 left-3 text-xs rounded-full bg-gray-100 px-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <EyeSlashIcon className="absolute right-2 top-3 w-4 text-gray-500" />
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-100 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder=""
            />
          </div>
          <div className="flex flex-col space-y-4">
            <button className="w-full px-4 py-2 text-lg font-bold text-white bg-[#FB8500] hover:opacity-80">
              Login
            </button>
          </div>
        </form>
        <div className="w-full flex gap-2 items-center">
          <hr className="w-full border-b-0 border-blue-900 border-opacity-50" />
          <span>or</span>
          <hr className="w-full border-b-0 border-blue-900 border-opacity-50" />
        </div>
        <div className="cursor-pointer" onClick={googleSignIn}>
          <FcGoogle size={25} />
        </div>
      </div>
    </div>
  );
};
export default Login;
