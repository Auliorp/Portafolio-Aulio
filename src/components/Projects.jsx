import ProjectItem from "./ProjectItem";
import adipweb from "../assets/adipweb.jpg";
import foodpi from "../assets/foodpi.jpg";
import rickandmorty from "../assets/rickandmorty.jpg";
import tasks from "../assets/tasks.jpg";

const Projects = () => {
   return (
      <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
         <h1 className="text-4xl font-bold text-center text-[#001b5e]">
            Proyectos
         </h1>
         <p className="text-center py-8">
            Descripcion de los proyectos que he realizado bla bla bla
         </p>
         <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={adipweb} title="Adip web" />
            <ProjectItem img={foodpi} title="Food PI web" />
            <ProjectItem img={rickandmorty} title="Rick and Morty web" />
            <ProjectItem img={tasks} title="tasks web" />
         </div>
      </div>
   );
};

export default Projects;
