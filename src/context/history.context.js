import React, { useState, createContext } from "react";

export const historyContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [editValue, setEditValue] = useState([]);
  const value = { history, setHistory, editValue, setEditValue };

  return (
    <historyContext.Provider value={value}>{children}</historyContext.Provider>
  );
};
