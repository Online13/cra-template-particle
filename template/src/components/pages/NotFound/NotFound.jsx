import { useMemo } from "react";
import Example from "../../sections/Example/Example";

function NotFound() {
  const message = useMemo(() => {
    return (<>Page not found</>);
  },[]);

  return (
    <Example message={message} />
  );
}

export default NotFound;