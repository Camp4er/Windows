const Projects: React.FC = () => {
    return (
      <section id="projects" className="bg-gray-800 text-white py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">Project {i + 1}</h3>
                <p className="text-sm mb-4">
                  A brief description of the project goes here. It highlights key features.
                </p>
                <a
                  href="#"
                  className="text-blue-400 hover:underline"
                >
                  View Details →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  