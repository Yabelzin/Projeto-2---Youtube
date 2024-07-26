import VerticalArrowIcon from '../../../../assets/you-assets/icons8-arrow-vertical.png';
import { useContext } from 'react';
import {
    ButtonIcon,
    Divisory,
    InnerContainer,
    MenuItem,
    SharedStyle,
} from '../../styles';
import { PagesContext } from '../../../contexts/pagesContexts';
import SubChanger from './subsciptionsChanger';

interface IProps {
    turnMenu: boolean;
    seeChannels: boolean;
};

function Subscriptions({ turnMenu }: IProps) {

    const {seeChannels, setSeeChannels} = useContext(PagesContext);
    
    return (
    <SharedStyle turnMenu={turnMenu} style={{display: `${turnMenu? '' : 'none'}`}}>
        <InnerContainer>

            <Divisory/>
            <div
                style={{
                    fontWeight: '600',
                    width: '100%',
                    padding: '2px 2px 2px 15px'
                }}>
                Subscriptions
            </div>
            <SubChanger seeChannels={seeChannels} turnMenu={turnMenu}/>
            <MenuItem
                onClick={
                    () => {setSeeChannels(!seeChannels)}
                } 
                turnMenu={turnMenu}
            >
                <ButtonIcon
                    alt="" 
                    src={VerticalArrowIcon}
                    style={{
                        transform: `${seeChannels ? 'rotate(180deg)' : ''}`,
                        display: 'flex',
                        justifyContent: 'center',
                        padding: `${seeChannels? '0 0 0 10px' : '0 10px 0 0'}`,
                        width: '10px',
                    }
                }/>
                <span>
                    {`${seeChannels? 'Show less' : 'Show more'}`}
                </span>
            </MenuItem>
        </InnerContainer>

    </SharedStyle>
    )
}

export default Subscriptions;