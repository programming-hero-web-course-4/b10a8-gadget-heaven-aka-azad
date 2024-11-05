export const addToStoredList = (listArray, listKey) => {
  localStorage.setItem(listKey, JSON.stringify(listArray));
};
