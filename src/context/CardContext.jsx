"use client";
import { createContext, useState, useContext } from "react";

const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
  const [deletedId, setDeletedId] = useState("");
  const [isRemembered, setIsRemembered] = useState(false);
  const [updatedCard, setUpdatedCard] = useState({});

  return (
    <CardContext.Provider
      value={{
        deletedId,
        setDeletedId,
        isRemembered,
        setIsRemembered,
        updatedCard,
        setUpdatedCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);
