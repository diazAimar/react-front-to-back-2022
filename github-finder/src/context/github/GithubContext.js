import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  /* Initial State */
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  /* Reducer */
  const [state, dispatch] = useReducer(githubReducer, initialState);

  /* Return Context.Provider */
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
