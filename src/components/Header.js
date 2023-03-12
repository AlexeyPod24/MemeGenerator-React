import React from 'react';
import styled from 'styled-components';
import { StyledHeader, TrollImage, Hone, HeaderTitle } from './styles/Header.styled';





const Header = () => {
    return (
        <StyledHeader>
        <TrollImage src="./images/troll.png" />
        <Hone>Meme Generator</Hone>
        <HeaderTitle>React Course - Project 3</HeaderTitle>
        </StyledHeader>
    )
}

export default Header