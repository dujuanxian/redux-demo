const name = (state = "Default Name", action) => {
  console.log(action);
  if (action.type === "SET_NAME") {
    return action.layload;
  }
  return state;
};

export default name;
