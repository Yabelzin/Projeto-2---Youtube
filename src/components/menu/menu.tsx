import HamburgerIcon from '../../assets/header-assets/hamburger.png';
import HomeIcon from '../../assets/header-assets/8723112_home_icon.png';
import ShortsIcon from '../../assets/header-assets/icons8-youtube-shorts-96.png'
import SubscriptionsIcon from '../../assets/header-assets/subscribe.png';
import YoutubeMusicIcon from '../../assets/header-assets/play-video-.png';
import YouIcon from '../../assets/header-assets/icons8-name-96.png'
import DownloadsIcon from '../../assets/header-assets/download .png'
import {
    ButtonIcon,
    Container,
    MenuItem,
} from './styles';
import You from './menu components/you';
import Subscriptions from './menu components/subscriptions';
import { useContext, useState } from 'react';
import { PagesContext } from '../contexts/pagesContexts';


interface IProps {
    turnMenu: boolean;
    seeChannels: boolean;
};
    
function Menu({ turnMenu }: IProps, {seeChannels}: IProps) {   
    
    return (
        <Container turnMenu={turnMenu}>
            <MenuItem id={'homeItem'} style={{backgroundColor: `${turnMenu ? '#f2f2f2' : ''}`}} turnMenu={turnMenu}>
                <ButtonIcon alt="" src={HomeIcon}/>
                <span>
                    Home
                </span>
            </MenuItem>
            <MenuItem turnMenu={turnMenu}>
                <ButtonIcon alt="" src={ShortsIcon}/>
                <span>
                    Shorts
                </span>
            </MenuItem>
            <MenuItem turnMenu={turnMenu}>
                <ButtonIcon alt="" src={SubscriptionsIcon}/>
                <span>
                    Subscriptions
                </span>
            </MenuItem>
            <MenuItem turnMenu={turnMenu}>
                <ButtonIcon alt="" src={YoutubeMusicIcon}/>
                <span>
                    Youtube Music
                </span>
            </MenuItem>
            <MenuItem style={{display: `${turnMenu? 'none' : ''}`}}
                turnMenu={turnMenu}>
                <ButtonIcon alt="" src={YouIcon}/>
                <span>
                    You
                </span>
            </MenuItem>
            <MenuItem style={{display: `${turnMenu? 'none' : ''}`}}
                turnMenu={turnMenu}>
                <ButtonIcon alt="" src={DownloadsIcon}/>
                <span>
                    Downloads
                </span>
            </MenuItem>
            <You turnMenu={turnMenu}/>
            <Subscriptions seeChannels={seeChannels} turnMenu={turnMenu}/>
        </Container>
    )
};

export default Menu;