import AboutMeItem from "./AboutMeItem";
//Componente que muestra informacion sobre mi
const AboutMe = () => {
   return (
      <div
         id="aboutMe"
         className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 tablet-container "
      >
         <h1 className="text-4xl font-bold text-center text-[#001b5e]">
            Sobre mi
         </h1>
         <p className="text-center py-8">
            Una pequeña introduccion sobre quien soy.
         </p>
         <AboutMeItem />
      </div>
   );
};
export default AboutMe;
