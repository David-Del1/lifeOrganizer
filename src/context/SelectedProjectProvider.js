import React, { createContext, useContext } from 'react'
import { useProjects } from '../hooks';

export const SelectedProjectContext = createContext();

export function SelectedProjectProvider({children}) {
  const { selectedProject, setSelectedProject } = useProjects('INBOX');

  return (
    <SelectedProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </SelectedProjectContext.Provider>
  )
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);

