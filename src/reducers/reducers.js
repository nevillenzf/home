import { combineReducers } from 'redux'
import * as actions from '../actions'
const initSection = "AboutMe"

function currSection(state = initSection, action) {
  if (action.type === actions.CURR_SECTION)
  {
    console.log("what")
    //Get new section
    return action.sect;
  }
  else return state;
}

const reducers = combineReducers({
  currSection,
})

export default reducers;
