import YourChannelIcon from '../../../assets/you-assets/icons8-name-96.png'
import HistoryIcon from '../../../assets/you-assets/icons8-history-96.png'
import PlaylistsIcon from '../../../assets/you-assets/playlist-videos-icon.png'
import YourVideosIcon from '../../../assets/you-assets/free-play-video-icon-26.png'
import WatchLaterIcon from '../../../assets/you-assets/watch-later.png'
import LikedVideosIcon from '../../../assets/you-assets/noun-like-button-4530409.png'
import DownloadsIcon from '../../../assets/you-assets/download .png'
import YourClipsIcon from '../../../assets/you-assets/scissors.png'
import ArrowIcon from '../../../assets/you-assets/icons8-arrow-100.png'
import {
    ButtonIcon,
    Divisory,
    InnerContainer,
    MenuItem,
    SharedStyle,
} from '../styles';
import { useNavigate } from 'react-router-dom'

interface IProps {
    turnMenu: boolean;
};
    
function You({ turnMenu }: IProps) {
    const navigate = useNavigate()
    
    return (
        <SharedStyle 
            turnMenu={turnMenu}
            style={{
                display: `${turnMenu? '' : 'none'}`,
            }}
        >
            <InnerContainer>

                <Divisory />

                <MenuItem turnMenu={turnMenu}>
                    <span style={{fontSize: '1rem', fontWeight: '600', marginLeft: '0'}}>
                        You
                    </span>
                    <ButtonIcon style={{marginLeft: '6px', width: '10px', alignItems: 'center'}} alt="" src={ArrowIcon}/>
                </MenuItem>
                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={YourChannelIcon}/>
                    <span>
                        Your channel
                    </span>
                </MenuItem>
                <MenuItem onClick={() => {navigate('/feed/history')}} turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={HistoryIcon}/>
                    <span>
                        History
                    </span>
                </MenuItem>
                <MenuItem onClick={() => {navigate('/feed/playlists')}} turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={PlaylistsIcon}/>
                    <span>
                        Playlists
                    </span>
                </MenuItem>
                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={YourVideosIcon}/>
                    <span>
                        Your videos
                    </span>
                </MenuItem>
                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={WatchLaterIcon}/>
                    <span>
                        Watch later
                    </span>
                </MenuItem>
                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={LikedVideosIcon}/>
                    <span>
                        Liked videos
                    </span>
                </MenuItem>
                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={DownloadsIcon}/>
                    <span>
                        Downloads
                    </span>
                </MenuItem>
                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={YourClipsIcon}/>
                    <span>
                        Your clips
                    </span>
                </MenuItem>
            </InnerContainer>
        </SharedStyle>
    )
};

export default You;