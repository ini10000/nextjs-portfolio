// components/ProjectList.tsx
import ProjectItem from "./ProjectItem";

const projects = [
  { name: "COLDTIVATE", link: "https://app.coldtivate.org" },
  { name: "ASHIPA ELECTRIC", link: "https://www.ashipaelectric.com" },
  { name: "ARKBUILDERS", link: "https://www.abcenterprise.xyz" },
  { name: "SHECLUDED", link: "https://www.shecluded.com" },
  { name: "MUSIC BRAINBOX", link: "https://www.musicbrainbox.nicepage.io" },
  { name: "INVESTNAIRA", link: "https://www.investnaira.com" },
  { name: "KIDSINSPRING", link: "https://www.kidsinspring.com" },
];

const ProjectList: React.FC = () => (
  <div className="">
    {projects.map((project, index) => (
      <ProjectItem key={index} name={project.name} link={project.link} />
    ))}
  </div>
);

export default ProjectList;
