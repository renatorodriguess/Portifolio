import WorkImg from '../assets/workImg.jpeg'


const About = () => {
    return (
        <div id='about' className='mt-[-10%] w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-5xl font-bold inline border-b-4 border-pink-600'>
              Sobre Mim
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div  className='sm:text-right text-4xl font-bold'>
              <p>Olá. Sou Renato Rodrigues prazer me conhecê-lo. Dê uma olhada em volta.</p>
            </div>
            <div> 
              <p>Desde a infância, minha paixão pela tecnologia foi alimentada pelos jogos, despertando muita curiosidade em saber como funcionavam. Essa fascinação guiou minha decisão de seguir o caminho da tecnologia, com especial interesse pela programação. Na qual, encontrei não apenas uma habilidade técnica, mas uma linguagens pela qual eu poderia dar vida às minhas ideias e solucionar desafios complexos. Hoje, cada linha de código representa não apenas um comando, mas uma expressão do meu entusiasmo em contribuir para o avanço constante do mundo digital.</p>  
            </div>
          </div>
      </div>
    </div>
    )
}

export default About;