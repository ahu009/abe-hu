const resume = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_RESUME': {
      return {
        ...state,
        shouldShowResume: action.shouldShowResume,
      }
    }
    case 'SET_ACTIVE_TAB': {
      return {
        ...state,
        active: action.active,
      }
    }
    default:
      return state
  }
}
 
export default resume
