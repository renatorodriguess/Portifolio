const Contact = () => {
    return (
      <div id="contact" className="mt-[-5%] w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form action="https://api.staticforms.xyz/submit" method="POST" className="flex flex-col max-w-[600px] w-full">
          <div className="pb-8">
            <p className="text-5xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contato
            </p>
            <p className="text-gray-300 text-[19px] py-4"><span>// </span>Me mande um e-mail</p>
          </div>
  
          <input type="hidden" name="accessKey" value={"513d613e-07c2-4e7c-9828-e597b8914680"}></input>
           <input type="hidden" name="redirectTo" value="http://localhost:3000/"></input>
  
          <label htmlFor=""></label>
          <input
            className="bg-[#ccd6f6] p-3"
            type="text"
            placeholder="Nome"
            name="nome"
            required
          />
  
          <input
            className="my-4 p-3 bg-[#ccd6f6]"
            type="text"
            placeholder="Email"
            name="email"
            required
          />
  
          <textarea
            className="bg-[#ccd6f6] p-4"
            name="message"
            rows={10}
            placeholder="Mensagem"
            required
          />
  
          <button
            type="submit"
            className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex item-center"
          >
            Vamos Colaborar !!!
          </button>
        </form>
      </div>
    );
  };

export default Contact;