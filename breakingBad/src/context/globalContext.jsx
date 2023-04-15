import { createContext, useState } from "react";

//create context
export const GlobalContext = createContext({});

//using context & creating state
export const GlobalState = ({ children }) => {
  const [movieItems, setMovieItems] = useState([]);
  const [showItems, setShowItems] = useState([]);
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        movieItems,
        setMovieItems,
        showItems,
        setShowItems,
        id,
        setId,
        loading,
        setLoading,
        category,
        setCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
