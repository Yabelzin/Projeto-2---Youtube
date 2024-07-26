import { useContext, useState } from "react";
import { UserContext } from "../../components/contexts/userContext";
import { Container, CredentialsInput, InfoContainer, InfoSpan, LegalitiesContainer, Legality, LoginOrRegister, MoreInfo, SelectionFrame, SendCredentials, SignUpNavigate, Subtitle } from "./styles";
import { useNavigate } from "react-router-dom";
import YTLogo from '../../assets/header-assets/YouTube-Logo.png'


function Login() {

    const {handleLogin} = useContext(UserContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authorizedLogin, setAuthorizedLogin] = useState(false)
    
    return (
        <Container>
            <InfoContainer>
                <div style={{paddingBottom:'30px', display: 'flex', alignItems: "center"}}>
                    <text style={{fontWeight:'600', fontSize:'30px', padding: '0 20px'}}>
                        Welcome back
                    </text>
                    <img style={{width: '90px'}} alt="" src={YTLogo}/>
                </div>
                <Subtitle>
                    Please enter your credentials.
                </Subtitle>


                <div style={{width: '62%', display: 'flex', justifyContent: 'start'}}>
                    <InfoSpan>
                        Email
                    </InfoSpan>
                </div>
                <CredentialsInput placeholder="Email" type="email" value={email} onChange={(e) => {{setEmail(e.target.value)} {setAuthorizedLogin(true)}}}/>
                
                <div style={{width: '62%', display: 'flex', justifyContent: 'start'}}>
                    <InfoSpan>
                        Password
                    </InfoSpan>
                </div>
                <CredentialsInput placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <LoginOrRegister>
                    <SignUpNavigate onClick={() => navigate('/user/signup')}>Create Account</SignUpNavigate>
                    <SendCredentials>login</SendCredentials>
                </LoginOrRegister>  
            </InfoContainer>



            <MoreInfo>
                <SelectionFrame>
                    <div style={{padding: '0 35px 0 10px'}}>aqui vão ficar as línguas</div>
                    <div style={{paddingRight: '10px'}}>Img</div>
                </SelectionFrame>
                <LegalitiesContainer>
                    <SelectionFrame>
                        <Legality id="help-login">Privacy</Legality>
                    </SelectionFrame>
                    <SelectionFrame>
                        <Legality id="help-login">Help</Legality>
                    </SelectionFrame>
                    <SelectionFrame>
                        <Legality id="help-login">Terms</Legality>
                    </SelectionFrame>
                </LegalitiesContainer>
            </MoreInfo>
        </Container>

    )
};

export default Login;   