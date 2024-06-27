import VerticalArrowIcon from '../../../assets/you-assets/icons8-arrow-vertical.png';
import { useContext, useState } from 'react';
import {
    ButtonIcon,
    Container,
    Divisory,
    MenuItem,
    SubscriptionsItem,
} from './components';
import { PagesContext } from '../../contexts/pagesContexts';

interface IProps {
    turnMenu: boolean;
    seeChannels: boolean;
};

function Subscriptions({ turnMenu }: IProps, {  }: IProps) {

    const {seeChannels, setSeeChannels} = useContext(PagesContext);
    
    return (
        <Container turnMenu={ turnMenu }>
            <Divisory/>
            <div
             style={{paddingRight: '22px', marginLeft: '6px', fontWeight: '600'}}>Subscriptions
            </div>
            <div
            style={{fontSize: '10px'}}
            >Aqui ficam as inscrições</div>
            <SubscriptionsItem
                onClick={() => {setSeeChannels(!seeChannels)}} turnMenu={turnMenu}>
                <ButtonIcon alt="" src={VerticalArrowIcon} style={{transform: `${seeChannels ? 'rotate(180deg)' : ''}`, display: 'flex', justifyContent: 'center'}}/>
                <span>{`${seeChannels? 'Show less' : 'Show more'}`}</span>
            </SubscriptionsItem>


        </Container>
    )
}

export default Subscriptions;