import { createContext, useState } from "react";
import api from "../services/api";

export const AnticipationContext = createContext();

const AnticipationProvider = ({ children }) => {
  const [anticipation, setAnticipation] = useState({
    1: 0,
    15: 0,
    30: 0,
    90: 0,
  });

  const createAnticipation = (data) => {
    api
      .post("/", data)
      .then((response) => {
        setAnticipation(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AnticipationContext.Provider
      value={{
        createAnticipation,
        anticipation,
      }}
    >
      {children}
    </AnticipationContext.Provider>
  );
};

export default AnticipationProvider;
