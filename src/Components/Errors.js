import React, { useContext, useEffect } from 'react';
import { AppContext } from "./Context/ContextProvider";
import { AlertCircle, X } from "lucide-react";


const Errors = () => {
  const { showError, setShowError,setUserInput } = useContext(AppContext);

  useEffect(() => {
    let timer;
    
    if (showError) {
      timer = setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showError, setShowError]);

  if (!showError) return null;

  return (
    <div className="error-notification">
      <div className="error-icon">
        <AlertCircle />
      </div>
      <p className="error-message">
        <span className="desktop-message">Sorry, there was an error. Please try again later.</span>
        <span className="mobile-message">Error occurred. Please try again.</span>
      </p>
      <button 
        className="close-button"
        onClick={() => setShowError(false)}
        aria-label="Close notification"
      >
        <X />
      </button>
    </div>
  );
};

export default Errors;