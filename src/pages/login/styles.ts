import styled from "styled-components";

export const Container = styled.div `
 width: 100%;
 height: 100vh;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background-color: rgb(240, 244, 259);
 font-family: 'Roboto', sans-serif;
`;

export const InfoContainer = styled.div `
 width: 70%;
 height: 44%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 background-color: #fff;
 border-radius: 28px;
 padding: 0 16px;
`;

export const Subtitle = styled.span `
 font-size: .875rem;
 font-weight: 400;
 color: rgb(89, 90, 91);
 margin-bottom: 20px;
`;

 export const InfoSpan = styled.span `
 font-size: .875rem;
 font-weight: 700;
 `;

export const CredentialsInput = styled.input `
 margin: 6px 0;
 padding: 8px 10px;
 width: 60%;
 border: none;
 border-radius: 4px;
 transition: .2s;
 outline:solid .1px #a9a9a9;

 &:focus{
    outline-color: rgb(11, 87, 208);
 }
 `;

export const LoginOrRegister = styled.div `
 display: flex;
 width: 60%;
 justify-content: end;
 align-items: center;
`;

export const SendCredentials = styled.button `
 margin-left: 20px;
 color: #fff;
 padding: 10px 20px;
 border-radius: 18px;
 background-color: rgb(11, 87, 208);
 border: none;
 cursor: pointer;
 transition: .3s ease;
 will-change: transform;

 &:hover {
    background-color: rgb(14, 78, 181);
    transform: scale(1.01)
 }
`;

export const SignUpNavigate = styled.button `
  padding: 10px 20px;
 border-radius: 18px;
 color: rgb(11, 87, 208);
 border: none;
 cursor: pointer;
 background-color: #fff;
 
 &:hover {
   background-color: rgb(245, 248, 253);
 }
`;





export const MoreInfo = styled.div `
 width: 70%;
 height: 6%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-size: .7rem;
 font-weight: 400;
 color: rgb(89, 90, 91);
`;

export const LegalitiesContainer = styled.div `
 width: 23%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
`;

export const SelectionFrame = styled.div `
 height: 55%;
 display: flex;
 align-items: center;
 border-top-left-radius: 8px;
 border-top-right-radius: 8px;
 border-bottom-left-radius: 8px;
 border-bottom-right-radius: 8px;
 justify-content: space-between;
 cursor: pointer;

 &:hover {
    background-color: rgb(226, 231, 235);
 }
`;

export const Legality = styled.span `
 padding: 0 7px;
 cursor: pointer;
`;
