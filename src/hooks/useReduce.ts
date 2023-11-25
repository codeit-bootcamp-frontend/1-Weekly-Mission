import { useEffect, useState } from "react";
import { getData } from "src/utils/getData";
import { Action, Rgeneric, URLS, UrlType } from "src/utils/getData.type";

export const reduceData = <T>(action: Action) => {
  switch (action.path) {
    case URLS.SHARED_USER:
      const { id, name, email, profileImageSource: profileImg } = action;
      return { path: action.path, id, name, email, profileImg } as Rgeneric<T>;
    case URLS.SHARED_FOLDER:
      const {
        folder: { links },
      } = action;
      return { path: action.path, links } as Rgeneric<T>;
    case URLS.SHARED_FOLDERNAME:
      const {
        folder: { name: folderName, owner },
      } = action;
      return { path: action.path, folderName, owner } as Rgeneric<T>;
    case URLS.FOLDER_USER: {
      const {
        data: [{ id, name, email, image_source: profileImg }],
      } = action;
      return { path: action.path, id, name, email, profileImg } as Rgeneric<T>;
    }
    case URLS.FOLDER_CATEGORY:
      return action as Rgeneric<T>;
    case URLS.FOLDER_LINKS:
      return action as Rgeneric<T>;
  }
};

export const useReduce = <T>(reducer: (action: Action) => Rgeneric<T>) => {
  const [state, setState] = useState<Rgeneric<T>>();

  const updateState = (action: Action) => setState(() => reducer(action));

  const dispatch = (action: Promise<Action> | Action) => (action instanceof Promise ? action.then(updateState) : updateState(action));

  return { state, dispatch };
};

const useData = <T extends UrlType>(path: T, id?: number): Rgeneric<T> => {
  const { state, dispatch } = useReduce<T>(reduceData<T>);

  useEffect(() => {
    dispatch(getData(path, id));
  }, [dispatch, path, id]);

  return state!;
};

export default useData;
