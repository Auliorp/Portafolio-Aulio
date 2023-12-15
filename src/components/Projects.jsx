import ProjectItem from "./ProjectItem";

//contenedor que muestra los Proyectos
const Projects = () => {
   return (
      <div
         id="projects"
         className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 tablet-container "
      >
         <h1 className="text-4xl font-bold text-center text-[#001b5e]">
            Proyectos
         </h1>
         <p className="text-center py-8">
            Descripcion de los proyectos que he realizado bla bla bla
         </p>
         <div className="grid sm:grid-cols-2  gap-12">
            <ProjectItem />
         </div>
      </div>
   );
};

export default Projects;
