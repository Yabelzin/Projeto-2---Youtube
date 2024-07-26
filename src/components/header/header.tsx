import {
        ButtonContainer,
        ButtonIcon,
        Container,
        HeaderButton,
        LoginButton,
        LoginImage,
        LoginImageContainer,
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
import LoginIcon from '../../assets/header-assets/icons8-user-96.png'
import { useContext } from "react";
import { PagesContext } from "../contexts/pagesContexts";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";


function Header() {
    const { login, logOut, setUser, user} = useContext(UserContext);
    const {turnMenu, setTurnMenu} = useContext(PagesContext);
    const navigate = useNavigate();
    

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
                    onClick={() => navigate('/')}
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

                {login? 
                    <>
                        <ButtonContainer margin='0 0 0 0'>
                            J
                        </ButtonContainer>
                        <button onClick={() => logOut()}>Logout</button>
                    </>
                    :
                    <LoginButton onClick={() => navigate('/user/login')}>
                        <LoginImageContainer>
                            <LoginImage src={LoginIcon} alt="" />
                        </LoginImageContainer>
                        <span style={{paddingLeft: '10%'}}>Login</span>
                    </LoginButton>
                }

            </HeaderButton>
        </Container>
    )
};

export default Header;