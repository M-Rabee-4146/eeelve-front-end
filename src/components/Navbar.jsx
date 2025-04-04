import { useState } from "react"
import { Search, ShoppingCart, Menu, X, User, Phone, LocateIcon, Locate, Pin, MapPin, User2, Heart, Recycle, SearchIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { ExclamationCircleIcon, HeartIcon, UserCircleIcon } from "@heroicons/react/16/solid"
import { AtSymbolIcon } from "@heroicons/react/16/solid"
import { PhotoIcon } from "@heroicons/react/24/solid"
import Dropdown_2 from "./Dropdown_2"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // console.log(`Menu is close:${isMenuOpen}`)
    if(isSearchOpen){
      setIsSearchOpen(false)
      // console.log(`search is close:${isSearchOpen}`)
    }
  }
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    // console.log(`search is close:${isSearchOpen}`)
    if(isMenuOpen){
      setIsMenuOpen(false)}
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    // Implement your search logic here
  }

  return (
    <div className="helo">
      <div className="yellow bg-amber-300 w-full h-10 text-center py-2  font-bold hover:text-amber-400">
        <Link className='text-center py-2  font-bold hover:text-amber-400 transition-colors duration-500'>Winter Sale is Live UPTO 70% OFF
        </Link>
      </div>
      <div className="links w-full h-10 hidden justify-between md:flex">
        <div className="left flex items-center ">
          <Phone className="size-4 mx-2 text-amber-400" />
          <span className="text-gray-600 text-sm">92 309 4053841</span>
          <AtSymbolIcon className="size-4 text-amber-400  mx-1 ml-5" />
          <span className="text-gray-600 text-sm">rabijamul@gmail.com</span>
        </div>
        <div className="right flex items-center">
          <MapPin className="size-4 text-gray-600 mx-1" />
          <span className="text-gray-600 mr-3 text-sm">Store Location</span>
          <User2 className="size-4 text-gray-600 mx-1" />
          <Link to={'/Login'} >    <span className="text-gray-600 mr-1 text-sm hover:text-amber-400 transition-all duration-300  ">Login  </span></Link><span className="text-gray-600"> Or</span>
          <Link to={'/Register'}>
            <span className="text-gray-600 mr-5 text-sm hover:text-amber-400 transition-all duration-300"> &nbsp;Register</span>
          </Link>
        </div>
      </div>

      <nav className="bg-white border-b border-gray-200  sticky top-0 z-50 container-fluid mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between h-16  ">
            {/* Logo and brand */}
            <div className="flex-shrink-0 hidden items-center  md:flex">
              <a href="/" className="flex items-center">
                <img className="w-36" src="../images/th.png" alt="" />
              </a>
            </div>

            {/* Desktop search bar */}
            <div className="hidden md:flex items-center flex-1 px-10 ">
              <form onSubmit={handleSearch} className="  w-full  max-w-lg mx-auto ">
                <div className="relative  ">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-5 pr-4  h-10 border-amber-300 focus-within:border-amber-300 focus-visible:outline-none focus-within:outline-none border-2  rounded-3xl  focus:outline-none    "
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" variant="ghost" className="absolute inset-y-0 right-0 bg-amber-300  rounded-r-3xl  hover:bg-black duration-500">
                    <Search className="h-10 w-20 p-3 text-black hover:text-amber-300  rounded-r-3xl duration-500" />

                  </button>

                </div>
              </form>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <button variant="outline" size="sm" asChild>
                <Link to={'/Register'}><User className="size-5" /></Link>
              </button>
              <button size="sm" asChild>
                <Heart className="size-5" />
              </button>
              <Link href="/cart" className="flex items-center text-gray-700 hover:text-primary transition-colors duration-500">
                <ShoppingCart className="h-5 w-5 mr-1" />
                {/* <span>Cart</span> */}
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center justify-between w-full">

              <div className="left-small flex ">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none duration-500"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
                {/* Logo and brand */}
                <div className="flex-shrink-0 flex items-center mx-10">
                  <a href="/" className="flex items-center">
                    <img className="w-24" src="../images/th.png" alt="" />
                  </a>
                </div>
              </div>
             <div className="right-small flex">
             <Link href="/cart" onClick={toggleSearch} className="flex items-center text-gray-700 hover:text-primary transition-all mr-4 duration-500">
                <SearchIcon className="h-5 w-5"   />
              </Link>
             <Link href="/Login" className="flex items-center text-gray-700 hover:text-primary transition-colors mr-4 duration-500">
                <User className="h-5 w-5" />
              </Link>
             <Link href="/cart" className="flex items-center text-gray-700 hover:text-primary transition-colors mr-4 duration-500">
                <ShoppingCart className="h-5 w-5 " />
              </Link>
             </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isSearchOpen && (
          <div className={`md:hidden ${isSearchOpen? 'translate-x-3/4':'translate-x-0'}duration-500 transition`} >
            <div className="px-2 pt-2 pb-3 z-30 space-y-1 sm:px-3 duration-500 transition-all ease-in-out">
              {/* Mobile search */}
              <form onSubmit={handleSearch} className="mb-3 ">
                <div className="relative ">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />    <button type="submit" variant="ghost" className="absolute inset-y-0 right-0 bg-amber-300  hover:bg-black duration-500 transition-all ease-in-out">
                  <Search className="h-10 w-20 p-3 text-black hover:text-amber-300  rounded-r-3xl duration-500" />

                </button>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </form>

            </div>
          </div>
        )}
        {/* {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <form onSubmit={handleSearch} className="mb-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </form>

              <div className="flex flex-col space-y-3">
                <a
                  href="/login"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                >
                  <User className="h-5 w-5 mr-2" />
                  Login
                </a>
                <a
                  href="/signup"
                  className="flex items-center px-3 py-2 bg-primary text-black rounded-md hover:bg-primary/90 transition-colors"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )} */}
      <div className="dropdown-1 mx-auto my-3 hidden md:flex items-center container md:px-10">

{/* <CustomDropdownMenu/> */}
<Dropdown_2/>
<Link to={'/'} className="mx-5 font-bold text-red-600">Home</Link>
<Link className="mr-5 font-semibold text-gray-800 text-md">About Us</Link>
<Link className="mr-5 font-semibold text-gray-800 text-md">Even Organics</Link>
<Link className="mr-5 font-semibold text-gray-800 text-md relative ">Best Sellers </Link>

      </div>
      </nav>
    </div>
  )
}

