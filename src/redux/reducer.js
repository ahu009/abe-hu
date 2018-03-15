const resume = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_RESUME': {
      return {
        ...state,
        shouldShowResume: action.shouldShowResume,
      }
    }
    default:
      return state
  }
}
 
export default resume
