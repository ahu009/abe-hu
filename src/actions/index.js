export function setShowResume (shouldShowResume) {
  return dispatch => new Promise((resolve) => {
    return resolve(dispatch({
      type: 'TOGGLE_SHOW_RESUME',
      shouldShowResume: shouldShowResume
    }));
  });
}
