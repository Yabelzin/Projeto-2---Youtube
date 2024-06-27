import styled from "styled-components";

export const Container = styled.div <{turnMenu: boolean}>`
    width: ${({ turnMenu }) => turnMenu? '204px' : '81px'};
    height: auto;
    box-sizing: border-box;
    padding: 65px 8px 1px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const MenuItem = styled.div<{turnMenu: boolean}> `
    width: 90%;
    min-height: ${({ turnMenu }) => turnMenu? '40px' : '65px'}; //fechado 40px - aberto 70px 
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
    };
`;

export const ButtonIcon = styled.img `
    width: 15px;
`;