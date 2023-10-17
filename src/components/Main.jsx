import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Main = () => {
   const handleRedirect = (url) => {
      window.location.href = url;
   };

   return (
      <div id="main">
         <img
            className="w-full h-screen object-cover object-left scale-x-[1]"
            src="https://cocosolution.com/cms/uploads/1657204741-o_1fj38p0rk1m0oc6fjbpfda4k1a.png"
            alt="image home"
         />
         <div className="w-full h-screen absolute top-0 left-0 bg-white/10">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
               <h1 className="sm:text-5xl text-4xl font-bold text-white/90">
                  Aulio Rovero
               </h1>
               <h2 className="flex sm:text-3xl text-2xl pt-4 text-white/90">
                  Soy
                  <TypeAnimation
                     sequence={[
                        //texto con animacion
                        "Desarrollador",
                        2000, //tiempo de la animacion
                        "Full Stack",
                        2000,
                        "Amante de la tecnologia",
                        2000,
                     ]}
                     wrapper="div"
                     cursor={true}
                     repeat={Infinity}
                     style={{ fontSize: "1em", paddingLeft: "5px" }}
                  />
               </h2>
               <div className="flex justify-between pt-6 max-w-[120px] w-full">
                  <FaLinkedinIn
                     onClick={() =>
                        handleRedirect(
                           "https://www.linkedin.com/in/auliorovero/"
                        )
                     }
                     className="cursor-pointer"
                     size={20}
                  />
                  <FaGithub
                     onClick={() =>
                        handleRedirect("https://github.com/Auliorp")
                     }
                     className="cursor-pointer"
                     size={20}
                  />
                  <FaInstagram
                     onClick={() =>
                        handleRedirect(
                           "https://www.instagram.com/aulioroverop/"
                        )
                     }
                     className="cursor-pointer"
                     size={20}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Main;
