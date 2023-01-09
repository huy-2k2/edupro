import { createContext, useContext, useState } from "react";
const CommentContext = createContext();

function useComment() {
  const context = useContext(CommentContext);
  return context;
}

function CommentProvider({ children, ...props }) {
  const [comment, setComment] = useState([]);
  return (
    <CommentContext.Provider value={[comment, setComment]} {...props}>
      {children}
    </CommentContext.Provider>
  );
}

export { useComment, CommentProvider };
