import styled from "styled-components";

export const CategoriesContainer = styled.div `
 width: 100%;
 height: 62px;
 display: flex;
 position: sticky;
 top: 55px;
 background-color: #fff;
 align-items: center;
 margin-bottom: 10px;
`;

export const CategoriesList = styled.div `
 padding: 0 25px;
 height: 100%;
 display: flex;
 overflow-x: scroll;
`;

export const CategoryFrame = styled.div `
 width: auto;
 height: 23.5px;
 background-color: #c1c1c1;
 transition: .3s;
 border-radius: 7px;
 margin: 10px 10px 10px 0;
 cursor: pointer;
 &:hover {
    background-color: #d9d9d9;
 }
`;

export const CategoryName = styled.span `
 font-size: 14px;
 height: 20px;
 padding: 0 10px;
 white-space: nowrap;
 
 div {
   box-shadow: -20px 0 10px green inset;
 }
`;
