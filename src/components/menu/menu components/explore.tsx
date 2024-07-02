import TrendingIcon from '../../../assets/explore-assets/Lovepik_com-450086830-Trending Video Icon Vector.png'
import MusicIcon from '../../../assets/explore-assets/icons8-musical-note-384.png'
import MoviesIcon from '../../../assets/explore-assets/icons8-clapperboard-96.png'
import LiveIcon from '../../../assets/explore-assets/icons8-live-500.png'
import GamingIcon from '../../../assets/explore-assets/game.png'
import NewsIcon from '../../../assets/explore-assets/newspaper.png'
import SportsIcon from '../../../assets/explore-assets/trophy.png'
import CoursesIcon from '../../../assets/explore-assets/idea.png'
import PodcastsIcon from '../../../assets/explore-assets/podcast-.png'

import { ButtonIcon, Divisory, InnerContainer, MenuItem, SharedStyle } from "../styles";

interface IProps {
    turnMenu: boolean;
};

function Explore({ turnMenu }: IProps) {
    return (
        <SharedStyle 
            turnMenu={turnMenu}
            style={{
                display: `${turnMenu? '' : 'none'}`,
            }}
        >
            <InnerContainer>

                <Divisory />

                <span style={{
                    fontWeight: '600',
                    width: '100%',
                    padding: '2px 2px 2px 15px'
                    }}>
                    Explore
                </span>

                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={TrendingIcon}/>
                    <span>Trending</span>
                </MenuItem>

                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={MusicIcon}/>
                    <span>Music</span>
                </MenuItem>

                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={MoviesIcon}/>
                    <span>Movies</span>
                </MenuItem>

                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={LiveIcon}/>
                    <span>Live</span>
                </MenuItem>

                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={GamingIcon}/>
                    <span>Gaming</span>
                </MenuItem>

                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={NewsIcon}/>
                    <span>News</span>
                </MenuItem>

                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={SportsIcon}/>
                    <span>Sports</span>
                </MenuItem>

                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={CoursesIcon}/>
                    <span>Courses</span>
                </MenuItem>

                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={PodcastsIcon}/>
                    <span>Podcasts</span>
                </MenuItem>


            </InnerContainer>

        </SharedStyle>
    )
}

export default Explore;