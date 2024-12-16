import React from 'react';
import ProgressBar from './DashboardChart';

interface ProjectCardProps {
  name: string;
  status: string;
  progress: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, status, progress }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{status}</p>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default ProjectCard;
