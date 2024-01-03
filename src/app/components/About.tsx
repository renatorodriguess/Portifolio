

const About = () => {
    return (
        <div id='about' className='mt-[-10%] w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-5xl font-bold inline border-b-4 border-pink-600'>
              Sobre
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div  className='sm:text-right text-4xl font-bold '>
              <p>Olá. Prazer me conhecê-lo. Dê uma olhada em volta.</p>
            </div>
            <div> 
              <p> <span className="bg-pink-500 font-bold text-xl p-1 rounded-sm mr-1">M</span>e chamo Renato Rodrigues, tenho 21 anos e sou apaixonado desde criança por tecnologia, jogos e programação. Quando era mais jovem, fui movido pela pura curiosidade e pela esperança de criar meu próprio jogo, o que me levou a explorar a programação em Javascript. </p>
              <br />
              <p>Em 2022, decidi ingressar na faculdade de ADS para me aprimorar, na qual meus estudos em programação. Desta vez, focando em Javascript para a área de Desenvolvimento Frontend. Escolhi o Javascript devido a sua grande comunidade, enorme potencial de crescimento e sua grande adaptabilidade que se expande para a Web, Mobile e Backend, através de React e Node.</p>   
              <br />
              <p>Estou buscando minha primeira vaga onde possa fundir meu amor pelo código com a comunicação. Se você tem uma vaga que eu poderia gostar, vamos nos conectar!</p>
            </div>
          </div>
      </div>
    </div>
    )
}

export default About;