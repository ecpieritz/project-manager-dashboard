import React from 'react';
import ProjectCard from '../../components/ProjectCard';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Projetos Ativos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard name="Projeto 1" status="Ativo" progress={60} />
        <ProjectCard name="Projeto 2" status="Concluído" progress={100} />
      </div>
    </div>
  );
};

export default DashboardPage;
