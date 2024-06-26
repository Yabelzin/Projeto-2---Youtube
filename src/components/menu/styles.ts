import styled from "styled-components";

export const Container = styled.div <{turnMenu: boolean}>`
    width: ${({ turnMenu }) => turnMenu? '189px' : '75px'};
    height: 100vh;
    box-sizing: border-box;
    padding: 65px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
`;

export const MenuItem = styled.div<{turnMenu: boolean}> `
    width: 90%;
    min-height: ${({ turnMenu }) => turnMenu? '30px' : '53px'}; //fechado 40px - aberto 70px 
    border-radius: 10px;
    cursor: pointer;
    padding: 2px, 17px;
    box-sizing: border-box; //para que o tamanho do elemento não aumentar com o padding
    display: flex;
    flex-direction: ${({ turnMenu }) => turnMenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ turnMenu }) => turnMenu ? 'none' : 'center'};
    padding-left: ${({ turnMenu }) => turnMenu ? '15px' : '0'};

    span {
    font-weight: ${({ turnMenu }) => turnMenu ? '600' : '400'};
    margin-left: ${({ turnMenu }) => turnMenu ? '15px' : '0'};
    font-size: ${({ turnMenu }) => turnMenu ? '12px' : '9px'};
    max-width: ${({ turnMenu }) => turnMenu ? '205px' : '50px'};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }

    &:hover {
    background-color: #f2f2f2
    }
`;

export const ButtonIcon = styled.img `
    width: 15px;
`;