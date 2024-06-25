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
import HamburgerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo.png'
import SearchIcon from '../../assets/search.png'
import MicIcon from '../../assets/microfone-gravador.png'
import VideoIcon from '../../assets/video.png'
import BellIcon from '../../assets/sino.png'
import { PagesContext } from "../contexts/pagesContexts";
import { useState } from "react";

function Header() {
    const { openMenu, setOpenMenu} = useState(PagesContext)


    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => {}} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburgerIcon}/>
                </ButtonContainer>
                <img 
                    style={{cursor: 'pointer', width: '100px'}}
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