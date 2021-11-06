import { useState, useEffect } from "react";

export const NoSsr = (props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return <>{mounted ? props.children : null}</>;
};
