import { useEffect, useState } from "react";
import { getData } from "../utils/api";

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
    case 'SHARED_USER': {
      const { id, name, email, profileImageSource: profileImg } = action.payload;
      state = { id, name, email, profileImg }
      break;
    }
    case 'SHARED_FOLDER':
      const { folder: { links } } = action.payload;
      state = links;
      break;
    case 'SHARED_FOLDERNAME':
      const { folder: { name: folderName, owner } } = action.payload;
      state = { folderName, owner }
      break;
    case 'FOLDER_USER': {
      const { data: [{ id, name, email, image_source: profileImg }] } = action.payload;
      state = { id, name, email, profileImg }
      break;
    }
    case 'FOLDER_CATEGORY': {
      const { data } = action.payload;
      state = data;
    }
      break;
    case 'FOLDER_LINKS':
      const { data } = action.payload;
      state = data;
      break;
    default:
  }
  return state;
}

function useData(type) {
  const [state, dispatch] = useReduce(reduceData, undefined);

  useEffect(() => {
    dispatch(getData(type))
  }, [dispatch, type])

  return [state]
}

export default useData