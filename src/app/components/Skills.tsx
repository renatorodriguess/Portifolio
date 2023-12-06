import Image from 'next/image'

import HTML from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import Tailwind from '../assets/tailwind.png'
import GitHub from '../assets/github.png'
import ReactImg from '../assets/react.png'
import CSS from '../assets/css.png'
import NEXT from '../assets/nextjs.png'
import JAVA from '../assets/java.png'
import NODE from '../assets/nodejs.png'

const Skills = () => {
    return (
        <div id="skills" className='mt-[-10%] w-full h-screen bg-[#0a192f] text-gray-300'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-5xl font-bold inline border-b-4 border-pink-600 '>Habilidades</p>
          <p className='py-4 text-[19px]'>Essas são as tecnologias que trabalho</p>
        </div>
        
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image className='w-20 mx-auto' src={HTML} alt='Html icon' />
            <p className='my-4'>HMTL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image className='w-20 mx-auto' src={CSS} alt='Html icon' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <Image className='w-20 mx-auto' src={JavaScript} alt='Html icon' />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image className='w-20 mx-auto' src={ReactImg} alt='Html icon' />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image className='w-20 mx-auto' src={GitHub} alt='Html icon' />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image className='w-20 mx-auto' src={Tailwind} alt='Html icon' />
            <p className='my-4'>TAILWIND</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image className='w-20 mx-auto' src={NEXT} alt='Html icon' />
            <p className='my-4'>NEXTJS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image className='w-20 mx-auto' src={NODE} alt='Html icon' />
            <p className='my-4'>NODEJS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image className='w-20 mx-auto' src={HTML} alt='Html icon' />
            <p className='my-4'>MYSQL</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Skills;