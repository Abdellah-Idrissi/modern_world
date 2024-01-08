import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Header() {

  return (
    <header className="bg-white rounded-full fixed w-[90%] max-w-[800px] sm:w-[85%] md:w-[75%] left-1/2 -translate-x-1/2 top-5 border z-[100]">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex h-[50px] sm:h-16 items-center justify-between">

          <div className="w-6 h-6 bg-gradient-to-tl from-black via-neutral-600 to-black rounded-full background-animate"></div>


          <Sheet>
            <SheetTrigger className="sm:hidden" asChild>
              <div className="flex flex-col gap-1 group w-6 h-6 justify-evenly cursor-pointer">
                <span className="h-[2px] bg-black w-1/2 ml-[8px] group-hover:w-full group-hover:ml-0 transition-all duration-200"></span>
                <span className="h-[2px] w-[80%] bg-black mx-auto group-hover:w-full  transition-all duration-200"></span>
                <span className="h-[2px] w-1/2 bg-black ml-[5px] group-hover:w-full group-hover:ml-0 transition-all duration-200"></span>
              </div>
            </SheetTrigger>
            <SheetContent side={'bottom'} >
              <SheetHeader className="mt-[25px]">
                <SheetTitle className={`font-secondFont text-3xl font-medium text-center underline underline-offset-1 decoration-2`}>Navigation</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-y-4 mt-8 pb-5">
              <SheetTrigger asChild>
                <a href="/#" className={`text-sm  text-center`}>Home</a>
              </SheetTrigger>
              <SheetTrigger asChild>
                <a href="/#architectures" className={`text-sm   text-center`}>Architectures</a>
              </SheetTrigger>
              <SheetTrigger asChild>
                <a href="/#buildings" className={`text-sm   text-center`}>Buildings</a>
              </SheetTrigger>
              <SheetTrigger asChild>
                <a href="/#testimonials" className={`text-sm   text-center`}>Testimonials</a>
              </SheetTrigger>

                
                
                
              </div>
            </SheetContent>
          </Sheet>


          <div className="md:flex md:items-center md:gap-12 hidden sm:block">
            <nav aria-label="Global" className="">
              <ul className="flex items-center gap-6 text-sm">
              <li>
                  <a
                    className={`text-gray-500 transition hover:text-gray-500/75`}
                    href={'/#'}
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className={`text-gray-500 transition hover:text-gray-500/75`}
                    href={'/#architectures'}

                  >
                    Architectures
                  </a>
                </li>

                <li>
                  <a
                    className={`text-gray-500 transition hover:text-gray-500/75 `}
                    href={'/#buildings'}
                  >
                    Buildings
                  </a>
                </li>

                <li>
                  <a
                    className={`text-gray-500 transition hover:text-gray-500/75 `}
                    href={'/#testimonials'}
                  >
                    Testimonials
                  </a>
                </li>


              </ul>
            </nav>
          </div>


          <div className="hidden sm:block w-6 h-6 bg-gradient-to-tl from-black via-neutral-600 to-black rounded-full background-animate"></div>

        </div>

      </div>
    </header>  
  )
}
