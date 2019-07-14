import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ProgressBar = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 14px;
    background-color: rgba(0,0,0,.1); 
`;

const Strip = styled.div`
    width: 1%;
    height: 100%;
    background-color: #1862e2; 
`;

const Progress = ({ onEnd=f=>f }) => {
    let el = useRef(null);

    useEffect(() => {
        let width = 1;
        const id = setInterval(function () {
            if (width >= 100) {
                clearInterval(id);
                onEnd();
            } else {
                width ++;
                el.current.style.width = `${width}%`;
            }
        }, 30);
    });

    return(
        <ProgressBar>
            <Strip ref={el}/>
        </ProgressBar>
    );
}

export default Progress;