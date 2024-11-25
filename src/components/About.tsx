import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>

        <div className="text-lg text-white-700 leading-relaxed max-w-3xl mx-auto text-center">
          <p className="mb-4">
            Hello! Iam Hussain, a passionate web developer with over 5 years of experience in building modern, responsive, and user-friendly websites. 
          </p>
          <p className="mb-4">
            My expertise lies in technologies like React, Next.js, TypeScript, and Tailwind CSS. I enjoy creating seamless user experiences and 
            writing clean, efficient code. Whether it is a personal project or a collaborative effort, I strive to deliver quality results that exceed expectations.
          </p>
          <p>
            When Iam not coding, you can find me exploring new technologies, learning new skills, or indulging in my hobbies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
