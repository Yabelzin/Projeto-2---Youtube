import styled from "styled-components";

export const FeedContainer = styled.div<{turnMenu: boolean}> `
 width: 100%;
 display: grid;
 grid-template-columns: ${({ turnMenu }) => turnMenu? 'repeat(3, 1fr)' : 'repeat(3, 1fr)'};
 column-gap: 20px;
 row-gap: 50px;
`;

export const MainPageContainer = styled.div `
 
`;