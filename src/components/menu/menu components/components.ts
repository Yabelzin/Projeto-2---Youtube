import styled from "styled-components";

export const Container = styled.div <{ turnMenu: boolean}> `
    width: ${({ turnMenu }) => turnMenu? '204px' : '81px'};
    height: auto;
    box-sizing: border-box;
    padding: 0px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    display: ${({ turnMenu }) => turnMenu? '' : 'none'}
`;

export const MenuItem = styled.div<{turnMenu: boolean}> `
    width: 90%;
    min-height: 40px;
    max-height: ${({ seeChannels }) => seeChannels? '4080px' : '320px'};
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

export const Divisory = styled.div `
    width: 90%;
    height: .5px;
    background-color: #212121;
    margin: 10px 0 10px 0
`;

export const SubscriptionsItem = styled.div<{turnMenu: boolean}, {seeChannels: boolean}> `
    width: 90%;
    min-height: 40px;
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