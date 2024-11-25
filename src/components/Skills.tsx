import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="bg-white-100 py-20"> 
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center">My Skills</h2>
        
        {/* Skill list */}
        <ul className="list-disc list-inside text-center mt-8 text-xl">
          <li className="text-white-700">TypeScript</li>
          <li className="text-white-700">ReactJS</li>
          <li className="text-white-700">Next.js</li>
          <li className="text-white-700">HTML</li>
          <li className="text-white-700">CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
