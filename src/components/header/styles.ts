import styled from "styled-components";


export const Container = styled.header `
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
`;

export const LogoContainer = styled.div `
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{margin?: string}> `
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
    background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img `
    width: 15px;
`;


export const SearchContainer = styled.div `
    display: flex;
`;

export const SearchInputContainer = styled.div `
    width: 338px;
    height: 32px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;

`;

export const SearchInput = styled.input `
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
    font-size: .9rem;
`;

export const SearchButton = styled.div `
    border-radius: 0 40px 40px 0;
    height: 32px;
    width: 53px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const HeaderButton = styled.div `
    width: 200px;
    display: flex;
`;

export const LoginButton = styled.div `
 width: 97px;
 height: 30px;
 color: rgb(6, 95, 212);
 border: solid 1px;
 border-color: rgb(229, 229, 229);
 border-radius: 40px 40px 40px 40px;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;

 &:hover {
    background-color: rgb(222, 241, 255);
    border-color: rgb(222, 241, 255);
 }
`;

export const LoginImageContainer = styled.div `
 border-radius: 50%;
 overflow: hidden;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 18px;
 height: 18px;
`;

export const LoginImage = styled.img `
 width: 25px;
`;