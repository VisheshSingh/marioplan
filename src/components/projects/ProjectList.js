import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = props => {
  const { projects } = props;
  const projectList = projects.length ? (
    projects.map(project => {
      return <ProjectSummary project={project} key={project.id} />;
    })
  ) : (
    <p>No project yet...</p>
  );

  return <div className="project-list section">{projectList}</div>;
};

export default ProjectList;
