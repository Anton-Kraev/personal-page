import React, {createContext, useMemo, useState} from 'react';

export const PagesContext = createContext(undefined);

export const PagesProvider = ({children, initialPage}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const value = useMemo(() => ({currentPage: currentPage, setCurrentPage: setCurrentPage}), [currentPage]);

  return (
    <PagesContext.Provider value={value}>
      {children}
    </PagesContext.Provider>
  );
};