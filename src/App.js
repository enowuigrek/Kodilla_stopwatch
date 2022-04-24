// import React, {useEffect, useState} from "react";

import Navigation from "./components/Navigation/Navigation";
import Container from './components/Container/Container'
import Timer from './components/Timer/Timer'

const App = () => {

  return (
    <Container>
      <Timer/>
      <Navigation/>
    </Container>
  );

}

export default App;