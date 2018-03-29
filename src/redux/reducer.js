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
    case 'TOGGLE_IS_MOBILE': {
      return {
        ...state,
        isMobile: action.isMobile,
      }
    }
    default:
      return state
  }
}
 
export default resume
