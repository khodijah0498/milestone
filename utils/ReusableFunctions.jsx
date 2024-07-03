import { createContext, useContext, useState } from "react";

const Context = createContext();

export const CreateUserContext = ({ children }) => {
  const [navShow, setNav] = useState(false);
  const [project, setProject] = useState(false);

  const displayProjects = () => {
    setProject(!project);
  };

  return (
    <Context.Provider
      value={{
        displayProjects,
        navShow,
        setNav,
        project,
        setProject,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const ContextUser = () => {
  const context = useContext(Context);
  return context;
};
