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

interface IProps {
    turnMenu: boolean;
};
    
function Menu({ turnMenu }: IProps) {

    
    return (
        <Container turnMenu={turnMenu}>
            <MenuItem turnMenu={turnMenu}>
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
            <MenuItem style={{visibility: `${turnMenu? 'hidden' : 'visible'}`}}
                turnMenu={turnMenu}>
                <ButtonIcon alt="" src={YouIcon}/>
                <span>
                    You
                </span>
            </MenuItem>
            <MenuItem style={{visibility: `${turnMenu? 'hidden' : 'visible'}`}}
                turnMenu={turnMenu}>
                <ButtonIcon alt="" src={DownloadsIcon}/>
                <span>
                    Downloads
                </span>
            </MenuItem>


        </Container>
    )
};

export default Menu;