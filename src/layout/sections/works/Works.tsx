import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from "./../../../assets/images/proj-1.webp"
import socialTimer from "./../../../assets/images/proj-2.webp"
import {Container} from "../../../components/Container.ts";
const worksItems = ["All", "landing page", "React", "spa"]
import {S} from "./Works_Styles.ts"

const workData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },

    {
        title: "Timer",
        src: socialTimer,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
    }
]

export const Works = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {workData.map((w) => {
                        return <Work title={w.title}
                                     src={w.src}
                                     text={w.text}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

