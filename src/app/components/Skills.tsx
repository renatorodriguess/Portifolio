import Image from 'next/image'

import HTMLImg from '../assets/html.png'
import JavaScriptImg from '../assets/javascript.png'
import TailwindImg from '../assets/tailwind.png'
import GitHubImg from '../assets/github.png'
import ReactImg from '../assets/react.png'
import CSSImg from '../assets/css.png'
import NextImg from '../assets/nextjs.png'
import NodeImg from '../assets/nodejs.png'
import JestImg from '../assets/jest.png'
import TypescriptImg from '../assets/typescript.png'


const Skills = () => {
    return (
      <div id='skills' className='mt-[-10%] w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
            <p className='text-5xl font-bold inline border-b-4 border-pink-600 '>Habilidades</p>
            <p className='py-4 text-[19px]'>/ Tecnologias às quais eu utilizo.</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <Image className='w-20 mx-auto' src={HTMLImg} alt='HTML Icon' />
              <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <Image className='w-20 mx-auto' src={CSSImg} alt='CSS Icon' />
              <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <Image className='w-20 mx-auto' src={JavaScriptImg} alt='JAVASCRIPT Icon' />
              <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <Image className='w-20 mx-auto' src={TypescriptImg} alt='REACT Icon' />
              <p className='my-4'>TYPESCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <Image className='w-20 mx-auto' src={ReactImg} alt='REACT Icon' />
              <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <Image className='w-20 mx-auto' src={NextImg} alt='NEXT Icon' />
              <p className='my-4'>NEXT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <Image className='w-20 mx-auto' src={NodeImg} alt='NODE Icon' />
              <p className='my-4'>NODE</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <Image className='w-20 mx-auto' src={TailwindImg} alt='TAILWIND Icon' />
              <p className='my-4'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <Image className='w-20 mx-auto' src={GitHubImg} alt='GITHUB Icon' />
              <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <Image className='w-20 mx-auto' src={JestImg} alt='JEST Icon' />
              <p className='my-4'>JEST</p>
            </div>

          </div>
        </div>
      </div>
    )
}

export default Skills;