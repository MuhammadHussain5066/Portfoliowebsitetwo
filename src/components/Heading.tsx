import React from 'react';

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className="text-3xl font-bold mb-4">
      {title}
    </div>
  );
}

export default Heading;
