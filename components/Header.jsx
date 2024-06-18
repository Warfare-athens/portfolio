
import { Button } from "./ui/button"
import Link from "next/link"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
const Header = () => {
  return (
    <header className=" py-8 xl:py-12 text-white" >
        <div className=" container mx-auto flex justify-between items-center ">
          <Link href="/">
            <h1 className=" text-4xl font-semibold">Athens<span className=" text-accent">.</span></h1>
          </Link>

          <div className=" hidden md:flex items-center gap-8">
            <Nav/>
            <Link href="/contact">
              <Button>Hire me</Button>
            </Link>
          </div>

          <div className=" md:hidden">
            <MobileNav/>
          </div>
          
        </div>
    </header>
  )
}

export default Header