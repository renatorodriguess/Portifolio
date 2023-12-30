import Image from "next/image";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
      <div id="contact" className="mt-[-5%] w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form action="https://api.staticforms.xyz/submit" method="POST" className="flex flex-col max-w-[600px] w-full">
          <div className="pb-8">
            <p className="text-5xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contato
            </p>
            <p className="text-gray-300 text-[21px] py-4 text-center">Me envie um email para conversarmos! Você também pode me encontrar no <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/renato-rodrigues-2240251b5/" className="underline decoration-sky-600 hover:text-sky-700">Linkedin</a> se desejar mais praticidade!.</p>
              <div>
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=renato072002@gmail.com" className="text-2xl flex items-center justify-center gap-3
                text-pink-600 hover:text-pink-800">
                  <MdEmail/>
                  renato072002@gmail.com</a>
              </div>
          </div>
        </form>
      </div>
    );
  };

export default Contact;