import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return (
        <div id="home" className='w-full h-screen bg-[#0a192f]'>


      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600 text-[25px] '>Olá, meu nome é </p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Renato Rodrigues</h1>
          <h2 className='text-xl sm:text-7xl font-bold text-[#8892b0]'>Eu sou Desenvolvedor Front-End</h2>
          <p className='text-[#8892b0] py-4 text-[20px] max-w-[700px]'> Trabalho em desenvolver experiências de usuários ricas e intuitivas, utilizando  <span className=' font-semibold text-pink-600'>HTML, CSS/Tailwind, JavaScript, React e Node.js</span> para a criação de websites interativos e responsivos, com o objetivo de proporcionar a melhor experiência possível aos usuários <span className='font-bold text-pink-600'>.</span></p>
          <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>Ver Trabalhos 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
          </div>
      </div>
    </div>
    )
}

export default Home;