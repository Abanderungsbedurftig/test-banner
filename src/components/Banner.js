import React, { useState } from 'react';
import Progress from './Progress';
import Close from './Close';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media screen and (max-width: 1024px) and (orientation:portrait){
    background-image: url('https://static.aviapark.com/files/155333/nc_ss19_620x960px_1.png');
    background-color: #f4584f;
  }
  @media screen and (max-height: 1024px) and (orientation:landscape){
    background-image: url('https://static.aviapark.com/files/155333/960x576_1.png');
    background-color: #44b858;
}
`;

const Banner = ({ onClose=f=>f }) => {
  let [isLoaded, setIsLoaded] = useState(false);

  return (
    <Container>
      <Image/>
      { !isLoaded && <Progress onEnd={() => setIsLoaded(true)}/> }
      { isLoaded && <Close onClose={() => onClose()}/> }
    </Container>
  );
}

export default Banner;
