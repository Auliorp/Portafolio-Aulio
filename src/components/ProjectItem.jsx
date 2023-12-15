import { dataProjects } from "../shared/enums";

//componente que muestra los Proyectos
const ProjectItem = () => {
   return (
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
         {dataProjects.map((project, index) => (
            <div
               key={index}
               className="relative group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] rounded-xl overflow-hidden shadow-xl"
            >
               <img
                  src={project.image}
                  alt="Imagen representativa de proyecto"
                  width={300}
                  height={300}
                  className="rounded-xl group-hover:opacity-10"
               />
               <div className="group-hover:opacity-100 opacity-0 transition-opacity absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                     {project.title}
                  </h3>
                  <p className="pb-4 pt-2 text-white text-center">
                     {/* {project.technologies} */}
                  </p>

                  <a href={project.urlDeploy}>
                     <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                        Ver Proyecto
                     </p>
                  </a>
               </div>
            </div>
         ))}
      </div>
   );
};

export default ProjectItem;
