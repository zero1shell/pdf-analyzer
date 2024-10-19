import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import {LogIn} from "lucide-react";
import FileUpload from "@/components/FileUpload";

// 28:58 last timeStamp
export default async function Home(){
  const {userId} = await auth()
  const isAuth = !!userId
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center">
          <h1 className="mr-3 text-7xl front-semibold">Let's Analyze Your Resume</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className="flex mt-3">
          {isAuth && <Button className="text-2xl">Go to Charts</Button>}
        </div>
    <p className="max-w-xl mt-1 text-lg">
      Join million of students, resercher!
    </p>
    <div className="w-full mt-4">
    {isAuth ? (
        <FileUpload/>
      ):(<Link href ="/sign-in">
        <Button>Login to Get Start!
          <LogIn className="w-4 h-4 ml-1"></LogIn></Button>
      </Link>

      )}
    
    </div>
      </div>
      </div>  
    </div>
  )
}
