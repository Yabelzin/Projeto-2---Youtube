import { MenuItem, SubSizeChanger } from "../../styles";

interface IProps {
    seeChannels: boolean
    turnMenu: boolean
};

const items = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

function SubChanger({seeChannels}: IProps, { turnMenu }: IProps) {
    return (
        <SubSizeChanger style={{overflow: 'hidden'}} seeChannels={seeChannels}>
            {items.map((items) => (
                <MenuItem style={{minHeight: '40px'}} turnMenu={turnMenu}>
                    <span style={{maxWidth: '100px'}}>Nome do canal</span>
                </MenuItem>
            ))}
        </SubSizeChanger>
    )
}

export default SubChanger;