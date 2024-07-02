import YTStudioIcon from '../../../assets/more-assets/icons8-youtube-studio-480.png';
import YTMusicIcon from '../../../assets/more-assets/icons8-youtube-music-480.png';
import YTKidsIcon from '../../../assets/more-assets/vecteezy_youtube-kids-google-apps-logo_17396821.png';
import { ButtonIcon, Divisory, InnerContainer, MenuItem, SharedStyle } from "../styles";

interface IProps {
    turnMenu: boolean;
};

function More({ turnMenu }: IProps) {
    return (
        <SharedStyle turnMenu={turnMenu}>
            <InnerContainer>
                <Divisory/>
                <span style={{
                    fontWeight: '600',
                    width: '100%',
                    padding: '2px 2px 2px 15px'
                    }}>
                    More from Youtube
                </span>
                
                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={YTStudioIcon}/>
                    <span>Youtube Studio</span>
                </MenuItem>
                
                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={YTMusicIcon}/>
                    <span>Youtube Music</span>
                </MenuItem>

                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={YTKidsIcon}/>
                    <span>Youtube Kids</span>
                </MenuItem>

            </InnerContainer>
        </SharedStyle>
    )
}

export default More;