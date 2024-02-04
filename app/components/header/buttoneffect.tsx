export const ButtonEffect = () => {
    return (
        <a href="#_" className="relative inline-flex items-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 overflow-hidden text-sm sm:text-md font-medium text-emerald-300 border-2 border-emerald-500 rounded-full hover:text-gray-200 group">
            <span className="absolute left-0 block w-full h-0 transition-all bg-transparent opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease">
            </span>



            
            <span className="absolute right-0 flex items-center justify-start w-8 sm:w-10 h-8 sm:h-10 duration-300 transform translate-x-full group-hover:translate-x-2 ease">
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative">Download CV</span>
        </a>
    )
}