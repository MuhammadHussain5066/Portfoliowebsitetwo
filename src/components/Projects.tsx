import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white-100">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="p-4 border rounded shadow hover:shadow-lg">
          <img src="/portfolioone.png" alt="Car Website" className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold">Car Website</h3>
          <p>Built using React, CSS, and Next.js</p>
        </div>
        <div className="p-4 border rounded shadow hover:shadow-lg">
          <img src="/portfoliotwo.png" alt="Restaurant Website" className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold">Restaurant Website</h3>
          <p>Built using Tailwind CSS, React, and Next.js</p>
        </div>
        <div className="p-4 border rounded shadow hover:shadow-lg">
          <img src="/portfolio.png" alt="Static Website" className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold">Static Website</h3>
          <p>Built using HTML, CSS, and TypeScript</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
