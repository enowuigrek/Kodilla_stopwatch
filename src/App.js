import React, { useEffect, useState } from 'react';

import Navigation from './components/Navigation/Navigation';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import formatTime from './utils/formatTime';

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(0);

  const start = () => {
    setTimer(setInterval(() => {
      setTime((prevValue) => prevValue + 0.01);
    }, 10));
    clearInterval(timer);
  };

  const stop = () => {
    clearInterval(timer);
    setTimer();
  };

  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    return () => {
       if(timer) clearInterval(timer);
    };
  }, []);
  
  return (
    <Container>
      {formatTime(time)}
      <Navigation>
        <Button action={start}>START</Button>
        <Button action={stop}>STOP</Button>
        <Button action={reset}>RESET</Button>
      </Navigation>
    </Container>
  );

}

export default App;