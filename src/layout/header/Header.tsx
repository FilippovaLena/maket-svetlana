import styled from 'styled-components';
import {Menu} from "../../components/menu/Menu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Menu></Menu>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: pink;
`