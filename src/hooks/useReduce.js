import { useState } from "react";

export const useReduce = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const updateState = action =>
    setState(state => reducer(state, action));

  const dispatch = action =>
    action instanceof Promise
      ? action.then(updateState)
      : updateState(action);

  return [state, dispatch]
}

export function reduceData(state = {}, action = {}) {
  switch (action.type) {
    case 'shared_user': {
      const { id, name, email, profileImageSource: profileImg } = action.payload;
      state = { id, name, email, profileImg }
      break;
    }
    case 'shared_folderName':
      const { folder: { name: folderName, owner } } = action.payload;
      state = { folderName, owner }
      break;
    case 'shared_folder':
      const { folder: { links } } = action.payload;
      state = links;
      break;
    case 'folder_user': {
      const { data: [{ id, name, email, image_source: profileImg }] } = action.payload;
      state = { id, name, email, profileImg }
      break;
    }
    case 'folder_links':
      const { data } = action.payload;
      state = data;
      break;
    default:
  }
  return state;
}