export function setShowResume (shouldShowResume) {
  return dispatch => new Promise((resolve) => {
    return resolve(dispatch({
      type: 'TOGGLE_SHOW_RESUME',
      shouldShowResume: shouldShowResume
    }));
  });
}

export function setActiveTab (active) {
  return dispatch => new Promise((resolve) => {
    return resolve(dispatch({
      type: 'SET_ACTIVE_TAB',
      active: active
    }));
  });
}
