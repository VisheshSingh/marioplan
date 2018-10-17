import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = props => {
  const { projects } = props;
  const projectList = projects ? (
    projects.map(project => {
      return (
        <Link to={"/project/" + project.id}>
          <ProjectSummary project={project} key={project.id} />
        </Link>
      );
    })
  ) : (
    <p>No project yet...</p>
  );

  return <div className="project-list section">{projectList}</div>;
};

export default ProjectList;
