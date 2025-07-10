import ProjectCard from "../components/ProjectCard";

const dummyProjects = [
  { title: "Project 1", description: "Deskripsi singkat project 1." },
  { title: "Project 2", description: "Deskripsi singkat project 2." },
  { title: "Project 3", description: "Deskripsi singkat project 3." },
  { title: "Project 4", description: "Deskripsi singkat project 4." },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blush via-soft to-primary py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {dummyProjects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            description={proj.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
