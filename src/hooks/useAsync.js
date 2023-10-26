import { useCallback, useReducer, useEffect } from "react"

const initialState = {
  loading: false,
  data: null,
  error: null,
}

// Fetch Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      }
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      }

    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

// skip = false 일 경우 useEffect 작동
const useAsync = (callback, deps = [], skip = false) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = useCallback(async () => {
    try {
      dispatch({ type: "LOADING" })
      const data = await callback()
      dispatch({ type: "SUCCESS", data })
    } catch (error) {
      dispatch({ type: "ERROR", error: error })
    }
  }, deps)

  useEffect(() => {
    if (skip) return
    fetchData()

    // eslint-disable-next-line;
  }, [])

  return [state, fetchData]
}

export default useAsync
