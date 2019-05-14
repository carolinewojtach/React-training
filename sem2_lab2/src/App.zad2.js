import React, { useState, useEffect } from "react";

function useMobile() {
  const [isMobile, setMobile] = useState(false);

  const handleResize = () => {
    console.log("handle resize");

    setMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return { isMobile };
}

function App() {
  const { isMobile } = useMobile();
  return <div> {isMobile ? "mobile" : "desktop"} </div>;
}
export default App;
