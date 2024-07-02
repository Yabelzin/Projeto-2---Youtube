import styled from "styled-components";

export const Container = styled.div <{turnMenu: boolean}>`
    width: ${({ turnMenu }) => turnMenu? '204px' : '81px'};
    height: 100vh;
    box-sizing: border-box;
    padding: 10px 0px 1px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const MenuItem = styled.div<{turnMenu: boolean}> `
    width: 100%;
    min-height: ${({ turnMenu }) => turnMenu? '40px' : '65px'}; //fechado 40px - aberto 70px 
    border-radius: 10px;
    cursor: pointer;
    padding: 2px;
    box-sizing: border-box; //para que o tamanho do elemento não aumentar com o padding
    display: flex;
    flex-direction: ${({ turnMenu }) => turnMenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ turnMenu }) => turnMenu ? 'none' : 'center'};
    padding-left: ${({ turnMenu }) => turnMenu ? '15px' : '0'};
    overflow: none;
    span {
    font-weight: ${({ turnMenu }) => turnMenu ? '600' : '400'};
    margin-left: ${({ turnMenu }) => turnMenu ? '15px' : '0'};
    font-size: ${({ turnMenu }) => turnMenu ? '12px' : '9px'};
    max-width: ${({ turnMenu }) => turnMenu ? '205px' : '50px'};
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    }

    &:hover {
    background-color: #f2f2f2
    };

    span {
        font-size: .7rem;
    }
`;

export const ButtonIcon = styled.img `
    width: 15px;
`;

export const SubSizeChanger = styled.div<{seeChannels: boolean}> `
    max-height: ${({ seeChannels}) => seeChannels? 'auto' : '280px'};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const SubscriptionsItem = styled.div<{turnMenu: boolean}, {seeChannels: boolean}> `
    display: flex;
    cursor: pointer;
    align-items: center;
`;

export const Divisory = styled.div `
    width: 100%;
    height: .5px;
    background-color: #212121;
    margin: 10px 0 10px 0;
`;

export const SharedStyle = styled.div<{ turnMenu: boolean }>`
    width: ${({ turnMenu }) => turnMenu ? '204px' : '81px'};
    display: flex;
    display: ${({ turnMenu }) => turnMenu? '' : 'none'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    margin: 0;
`;

export const InnerContainer = styled.div`
    width: 169.19px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const You = styled.div`

`;