import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { FaGithub, FaGoogle } from 'react-icons/fa';

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4">
        <h2 className="text2xl font-bold">Welcome, {session.user.name} </h2>
        <p className="py-4">Signed in as {session.user.email}</p>
        <div className="pb-4 m-auto">
          <Image src={session.user.image} className='rounded-full' alt="/" width="100" height="100"/>
        </div>
        <button className="flex items-center justify-center p-3 bg-gray-600 border border-gray-600 rounded-lg" onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4">
      <h2 className="text-3xl font-bold text-violet-600">Login</h2>
      <p className="py-4 text-blue-200">Choose the account you want to sign in with.</p>
      <button className="flex items-center justify-center p-3 bg-gray-600 border border-gray-600 my-2 rounded-xl" onClick={() => signIn()}> <FaGithub className ='mr-2'/> Sign in with <span className="font-bold pl-1">Github</span></button>
      <button className="flex items-center justify-center p-3 bg-blue-600 border border-gray-600 my-2 rounded-xl" onClick={() => signIn()}> <FaGoogle className ='mr-2'/> Sign in with <span className="font-bold pl-1">Google</span></button>
    </div>
  )
}