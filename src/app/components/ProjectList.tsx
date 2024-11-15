// components/ProjectList.tsx
import ProjectItem from "./ProjectItem";

const projects = [
  { name: "COLDTIVATE", link: "/coldtivate" },
  { name: "ASHIPA ELECTRIC", link: "/ashipa-electric" },
  { name: "ARKBUILDERS", link: "/arkbuilders" },
  { name: "SHECLUDED", link: "/shecluded" },
  { name: "MUSIC BRAINBOX", link: "/music-brainbox" },
  { name: "INVESTNAIRA", link: "/investnaira" },
  { name: "KIDSINSPRING", link: "/kidsinspring" },
];

const ProjectList: React.FC = () => (
  <div className="">
    {projects.map((project, index) => (
      <ProjectItem key={index} name={project.name} link={project.link} />
    ))}
  </div>
);

export default ProjectList;
