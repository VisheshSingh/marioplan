export const createProject = project => {
  return (dispatch, getState) => {
    // Make async call to DB
    dispatch({
      type: "CREATE_PROJECT",
      project: project
    });
  };
};
