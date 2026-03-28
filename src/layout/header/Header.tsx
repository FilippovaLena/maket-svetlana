import styled from 'styled-components';
import {Menu} from "../../components/menu/Menu.tsx";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: pink;
    display: flex;
    justify-content: space-between;
`