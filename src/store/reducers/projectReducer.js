var initState = {
  projects: [
    {
      id: 1,
      title: "help me find peach",
      content: "lorem ipsum is a random greek characters"
    },
    {
      id: 2,
      title: "collect all stars",
      content: "i don't know what i am typing"
    },
    {
      id: 3,
      title: "egg hunt with yoshi",
      content: "this is a peace of dummy data"
    }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      break;
    // default:
    //   console.log("default case executed...");
  }
  return state;
};

export default projectReducer;
