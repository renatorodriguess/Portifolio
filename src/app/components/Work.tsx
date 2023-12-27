import React from "react"

const Work = () => {
    
  return (
    <div id="work" className='mt-[-10%] w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-5xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Projetos</p>
                <p className='py-6 text-[19px]'>/ Olhe alguns dos meus projetos.</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>

                {/* Grid Item */}
                <div className=' bg-first-image shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto text-center items-center content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 transition duration-400 ease-in-out'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'> 
                            <a href="https://nextjs-dashboard-zeta-snowy.vercel.app" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-slate-300 text-gray-800 hover:text-black font-bold text-lg'>Abrir Projeto</button>
                            </a>
                            <a href="" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-black hover:bg-slate-300'>Repositório</button>
                            </a>
                        </div>
                        <div className='absolute mt-4 ml-9'>
                            <span className='text-pink-600 font-extrabold '>React, Node, Next e Tailwind</span>
                        </div>
                    </div>
                </div>
                
                <div className='bg-second-image shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div '>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-black hover:bg-slate-300'>Abrir Projeto</button>
                            </a>
                            <a href="" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-black hover:bg-slate-300'>Repositório</button>
                            </a>
                            <div className='absolute mt-4 ml-9'>
                            <span className='text-pink-600 font-extrabold '>React, Node, Next e Tailwind</span>
                        </div>
                        </div>
                    </div>
                    
                </div>
                <div className='bg-third-image shadow-lg shadow-[#040c16] group text-center container rounded-md  flex justify-center mx-auto items-center content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            DevBooks
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://dev-books-renatorodriguess.vercel.app" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-black hover:bg-slate-300'>Abrir Projeto</button>
                            </a>
                            <a href="https://github.com/renatorodriguess/DevBooks" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg hover:text-black hover:bg-slate-300'>Repositório</button>
                            </a>
                        </div>
                        <div className='absolute mt-4 ml-5'>
                            <span className='text-pink-600 font-extrabold'>React, Typescript, Next e Tailwind</span>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Work