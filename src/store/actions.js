export const addToList = data => (
  {
    type: 'ADD_TO_HISTORY',
    payload: data.data,
  }
);