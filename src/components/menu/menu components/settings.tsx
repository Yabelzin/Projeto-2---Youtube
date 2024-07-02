import SettingsIcon from '../../../assets/settings-assets/settings.png';
import ReportIcon from '../../../assets/settings-assets/flag.png';
import HelpIcon from '../../../assets/settings-assets/interrogation.png';
import FeedbackIcon from '../../../assets/settings-assets/chat-bubble.png';
import { ButtonIcon, Divisory, InnerContainer, MenuItem, SharedStyle } from "../styles";

interface IProps {
    turnMenu: boolean;
};

function Settings({ turnMenu }: IProps) {
    return (
        <SharedStyle turnMenu={turnMenu}>
            <InnerContainer>
                <Divisory/>
                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={SettingsIcon}/>
                    <span>Settings</span>
                </MenuItem>

                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={ReportIcon}/>
                    <span>Report history</span>
                </MenuItem>

                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={HelpIcon}/>
                    <span>Help</span>
                </MenuItem>

                <MenuItem turnMenu={turnMenu}>
                    <ButtonIcon alt="" src={FeedbackIcon}/>
                    <span>Send feedback</span>
                </MenuItem>

                <Divisory/>

                <div>
                    Copyright ©
                </div>
                
            </InnerContainer>

        </SharedStyle>
    )
}

export default Settings;