import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    background-color: rgba(0,0,0,.4);
    border-radius: 24px;
    color: white;
    text-align: center;
    line-height: 52px;
    font-size: 34px;
    box-shadow: 0 0 2px rgba(0,0,0,.5);

`;

const Close = ({ onClose=f=>f }) => {

    return (
        <Button onClick={() => onClose()}>
            &#10008;
        </Button>
    );
}

export default Close;