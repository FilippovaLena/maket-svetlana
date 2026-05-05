import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./../skills/Skills_Styles.ts"
import React from "react";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id={"testimony"}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <S.IconWrapper>
                        <Icon iconId={"quote"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    position: relative;
    
${S.IconWrapper} {
    margin: 40px 0 72px
}`