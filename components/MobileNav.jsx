"use client"

import { Sheet , SheetContent , SheetTrigger } from "./ui/sheet"
import { CiMenuFries } from 'react-icons/ci'
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
      name:"home",
      path:"/"
    },
    {
      name: "services",
      path: "/services"
    },
    {
      name:"resume",
      path:"/resume"
    },
    {
      name: "work",
      path: "/work"
    },
    {
      name: "contact",
      path: "/contact"
    },
  ]

function MobileNav() {
    const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger className=" flex justify-center items-center">
            <CiMenuFries className=" text-[32px] text-accent"/>
        </SheetTrigger>

        <SheetContent className=" flex justify-center flex-col">

        <nav className=" flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
                return(
                    <Link href={link.path} key={index} className={` ${ link.path === pathname && "text-accent border-b-2 border-accent" } text-2xl capitalize hover:text-accent transition-all `}>
                        {link.name}
                    </Link>
                )
            })}
        </nav>
        </SheetContent>

    </Sheet>
  )
}

export default MobileNav