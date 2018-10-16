import React from "react";

const ProjectDetail = props => {
  //   console.log(props);
  let id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
            velit officiis? Earum sequi corporis tenetur incidunt blanditiis
            alias quos iusto doloribus facere et nemo dolore, veniam quibusdam
            quam nihil temporibus.
          </p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Net Ninja</div>
          <div>2nd September, 2 am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
