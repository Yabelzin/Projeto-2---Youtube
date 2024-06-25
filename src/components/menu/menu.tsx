import { useState } from 'react';
import {
        Container,
        MenuItem,
    } from './styles';
import { PagesContext } from '../contexts/pagesContexts';

const items = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

    
function Menu() {
    const [openMenu, setOpenMenu] = useState(PagesContext)

    
    return (
        <Container>
            {items.map(() => (
                <MenuItem>
                    Início
                </MenuItem>
            ))}
        </Container>
    )
}

export default Menu;