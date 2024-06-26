import {
        ButtonContainer,
        ButtonIcon,
        Container,
        HeaderButton,
        LogoContainer,
        SearchButton,
        SearchContainer, 
        SearchInput, 
        SearchInputContainer
    } from "./styles";
import HamburgerIcon from '../../assets/header-assets/hamburger.png';
import Logo from '../../assets/header-assets/YouTube-Logo.png'
import SearchIcon from '../../assets/header-assets/search.png'
import MicIcon from '../../assets/header-assets/microfone-gravador.png'
import VideoIcon from '../../assets/header-assets/video.png'
import BellIcon from '../../assets/header-assets/sino.png'
import { useContext } from "react";
import { PagesContext } from "../contexts/pagesContexts";

function Header() {

    const {turnMenu, setTurnMenu} = useContext(PagesContext)

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => {setTurnMenu(!turnMenu)}} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburgerIcon}/>
                </ButtonContainer>
                <img 
                    style={{cursor: 'pointer', width: '80px'}}
                    alt=""
                    src={Logo}
                />
            </LogoContainer>
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar"/>
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon}/>
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon}/>
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>

                <ButtonContainer margin='0 0 0 0'>
                    <ButtonIcon alt="" src={VideoIcon}/>
                </ButtonContainer>

                <ButtonContainer margin='0 0 0 0'>
                    <ButtonIcon alt="" src={BellIcon}/>
                </ButtonContainer>

                <ButtonContainer margin='0 0 0 0'>
                    J
                </ButtonContainer>

            </HeaderButton>
        </Container>
    )
};

export default Header;