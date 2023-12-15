import { dataAboutMe } from "../shared/enums";
//aca se cargan los datos para ser exportados y usados en el componente principal.
const AboutMeItem = () => {
   return (
      <div className="flex items-center justify-center h-screen">
         {dataAboutMe.map((card, index) => (
            <div key={index} className="card-container">
               <p className="text-center py-8">{card.resume}</p>
               <div className="flex items-center justify-center">
                  <img
                     src={card.image}
                     alt="Foto de Perfil"
                     className="rounded-xl"
                     width={300}
                     height={300}
                  />
               </div>
               <h1 className="text-center text-xl font-bold">{card.name}</h1>
               <p className="text-center">{card.description}</p>
            </div>
         ))}
      </div>
   );
};

export default AboutMeItem;
