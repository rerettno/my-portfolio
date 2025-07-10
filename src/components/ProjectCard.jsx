const ProjectCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-all duration-300">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ProjectCard;
