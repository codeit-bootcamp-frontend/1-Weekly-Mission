import { useEffect, useState } from "react";
import { getData } from "src/utils/getData";
import { Action, ReduceData, Return, URLS, UrlType } from "src/utils/getData.type";

export const reduceData: ReduceData = (action) => {
  switch (action.path) {
    case URLS.SHARED_USER:
      const { id, name, email, profileImageSource: profileImg } = action;
      return { path: action.path, id, name, email, profileImg };
    case URLS.SHARED_FOLDER:
      const {
        folder: { links },
      } = action;
      return { path: action.path, links };
    case URLS.SHARED_FOLDERNAME:
      const {
        folder: { name: folderName, owner },
      } = action;
      return { path: action.path, folderName, owner };
    case URLS.FOLDER_USER: {
      const {
        data: [{ id, name, email, image_source: profileImg }],
      } = action;
      return { path: action.path, id, name, email, profileImg };
    }
    case URLS.FOLDER_CATEGORY:
      return action;
    case URLS.FOLDER_LINKS:
      return action;
  }
};

export const useReduce = (reducer: ReduceData) => {
  const [state, setState] = useState<Return>();

  const updateState = (action: Action) => setState((state) => reducer(action));

  const dispatch = (action: Promise<Action> | Action) => (action instanceof Promise ? action.then(updateState) : updateState(action));

  return { state, dispatch };
};

const useData = (path: UrlType, id?: number) => {
  const { state, dispatch } = useReduce(reduceData);

  useEffect(() => {
    dispatch(getData(path, id));
  }, [dispatch, path, id]);

  return state;
};

export default useData;
