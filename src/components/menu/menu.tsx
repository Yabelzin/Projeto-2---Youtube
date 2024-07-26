import HomeIcon from '../../assets/header-assets/8723112_home_icon.png';
import ShortsIcon from '../../assets/header-assets/icons8-youtube-shorts-96.png'
import SubscriptionsIcon from '../../assets/header-assets/subscribe.png';
import YoutubeMusicIcon from '../../assets/header-assets/play-video-.png';
import YouIcon from '../../assets/header-assets/icons8-name-96.png';
import DownloadsIcon from '../../assets/header-assets/download .png';
import {
    ButtonIcon,
    Container,
    MenuItem,
    SharedStyle
} from './styles';

import You from './menu components/you';
import Subscriptions from './menu components/subscriptionsFolder/subscriptions';
import Explore from './menu components/explore';
import More from './menu components/more';
import Settings from './menu components/settings';
import { useNavigate } from 'react-router-dom';

interface IProps {
    turnMenu: boolean;
    seeChannels: boolean;
};
    
function Menu({ turnMenu }: IProps, {seeChannels}: IProps) {

    const navigate = useNavigate()
    
    return (
        <Container id="menu-container" turnMenu={turnMenu}>

            <MenuItem className='menuItem homeItem' onClick={() => {navigate('/')}} id={'homeItem'} style={{backgroundColor: `${turnMenu ? '#f2f2f2' : ''}`}} turnMenu={turnMenu}>
                <ButtonIcon alt="" src={HomeIcon}/>
                <span>
                    Home
                </span>
            </MenuItem>
            <MenuItem className='menuItem shortsItem' turnMenu={turnMenu}>
                <ButtonIcon alt="" src={ShortsIcon}/>
                <span>
                    Shorts
                </span>
            </MenuItem>
            <MenuItem className='menuItem subscriptionsItem' turnMenu={turnMenu}>
                <ButtonIcon alt="" src={SubscriptionsIcon}/>
                <span>
                    Subscriptions
                </span>
            </MenuItem>
            <MenuItem className='menuItem musicItem' turnMenu={turnMenu}>
                <ButtonIcon alt="" src={YoutubeMusicIcon}/>
                <span>
                    Youtube Music
                </span>
            </MenuItem>
            <MenuItem className='menuItem youItem' onClick={() => {navigate('/feed/you')}} style={{display: `${turnMenu? 'none' : ''}`}}
                turnMenu={turnMenu}>
                <ButtonIcon alt="" src={YouIcon}/>
                <span>
                    You
                </span>
            </MenuItem>
            <MenuItem className='menuItem downloadsItem' style={{display: `${turnMenu? 'none' : ''}`}}
                turnMenu={turnMenu}>
                <ButtonIcon alt="" src={DownloadsIcon}/>
                <span>
                    Downloads
                </span>
            </MenuItem>

            <SharedStyle id="shared-style" turnMenu={turnMenu}>
                <You turnMenu={turnMenu}/>
                
                <Subscriptions turnMenu={turnMenu} seeChannels={seeChannels}/>

                <Explore turnMenu={turnMenu}/>

                <More turnMenu={turnMenu}/>

                <Settings turnMenu={turnMenu}/> 
            </SharedStyle>  

            <div>
                
            </div>

        </Container>

        
    )
};

export default Menu;