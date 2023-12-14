import { dataAboutMe } from "../shared/enums";
/* import Proptypes from "prop-types";
import ProjectItem from "./ProjectItem"; */
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

/* ProjectItem.propTypes = {
   img: Proptypes.string.isRequired,
}; */

export default AboutMeItem;
