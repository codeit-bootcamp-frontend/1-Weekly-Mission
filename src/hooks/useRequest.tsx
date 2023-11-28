// import { useState } from "react";

// function useRequest(getFunction: (i?: string) => any) {
//   const [data, setData] = useState();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setIsError] = useState<unknown>();

//   const fetcher = async () => {
//     try {
//       setIsLoading(true);
//       const result = getFunction();
//       if (result) {
//         setData(result);
//         return data;
//       }
//     } catch (e: unknown) {
//       setIsError(e);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { data, isLoading, error, fetcher };
// }

// export default useRequest;
