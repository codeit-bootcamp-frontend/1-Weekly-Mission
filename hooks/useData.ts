import { useCallback, useEffect, useState } from "react";
import { getData } from "@/utils/getData";
import { Action, Rgeneric, UrlType } from "@/utils/getData.type";
import { PATHS } from "@/constants/path";

export const reduceData = <T>(action: Action) => {
  switch (action.path) {
    case PATHS.SHARED_USER:
      const { id, name, email, profileImageSource: profileImg } = action;
      return { path: action.path, id, name, email, profileImg } as Rgeneric<T>;
    case PATHS.SHARED_FOLDER:
      const {
        folder: { links },
      } = action;
      return { path: action.path, links } as Rgeneric<T>;
    case PATHS.SHARED_FOLDERNAME:
      const {
        folder: { name: folderName, owner },
      } = action;
      return { path: action.path, folderName, owner } as Rgeneric<T>;
    case PATHS.FOLDER_USER: {
      const {
        data: [{ id, name, email, image_source: profileImg }],
      } = action;
      return { path: action.path, id, name, email, profileImg } as Rgeneric<T>;
    }
    case PATHS.FOLDER_CATEGORY:
      return action as Rgeneric<T>;
    case PATHS.FOLDER_LINKS: {
      const { data: links } = action;
      return { path: action.path, links } as Rgeneric<T>;
    }
  }
};

export const useReduce = <T>(reducer: (action: Action) => Rgeneric<T>) => {
  const [state, setState] = useState<Rgeneric<T>>();

  const updateState = useCallback((action: Action) => setState(() => reducer(action)), [reducer]);

  const dispatch = useCallback(
    (action: Promise<Action> | Action) => (action instanceof Promise ? action.then(updateState) : updateState(action)),
    [updateState]
  );

  return { state, dispatch };
};

const useData = <T extends UrlType>(path: T, id?: number) => {
  const { state, dispatch } = useReduce<T>(reduceData<T>);

  useEffect(() => {
    dispatch(getData(path, id));
  }, [dispatch, path, id]);

  return state as Rgeneric<T>;
};

export default useData;
