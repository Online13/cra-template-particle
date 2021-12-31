import { useMemo } from 'react';
import Example from '../../sections/Example/Example';

function Home() {

  const message = useMemo(() => {
    return (<>Edit <code>src/components/App.js</code> and save to reload.</>);
  },[]);

  return (
    <Example message={message} />
  );
}

export default Home;