// a reducer takes in two things:

// 1. The action (info about what happened
//2. Copy of current state
import { INCREMENT_LIKES } from '../actions/actionCreators';

const posts = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case INCREMENT_LIKES:
      console.log("INCREMENT_LIKES");
      const i = action.index;
      //return the updated state
      return [
        ...state.slice(0, i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1) // after the one we are updating
      ]
    default:
      return state;
  }
  return state;
}

export default posts;