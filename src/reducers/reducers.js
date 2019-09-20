import { combineReducers } from 'redux'
import * as actions from '../actions'
const initSection = "AboutMe"

function currSection(state = initSection, action) {
  //Current Section Action
  if (action.type === actions.CURR_SECTION)
  {
    //Get new section
    return action.sect;
  }
  else return state;
}

const reducers = combineReducers({
  currSection,
})

export default reducers;
