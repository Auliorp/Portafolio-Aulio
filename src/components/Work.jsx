import WorkItem from "./WorkItem";

//componente que muestra los Trabajos
const Work = () => {
   return (
      <div
         id="work"
         className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 tablet-container"
      >
         <h1 className="text-4xl font-bold text-center text-[#001b5e]">
            Trabajos
         </h1>
         <WorkItem />
      </div>
   );
};

export default Work;
