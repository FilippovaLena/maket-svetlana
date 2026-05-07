import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import React, {type ElementRef, useRef} from "react";
import {S} from "./Contacts_Styles.ts";
import emailjs from '@emailjs/browser';


export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs.sendForm('service_b3epg4h', 'template_79vewyf', form.current,
            {publicKey: 'av28a4yTfBt_FDU-c',})
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
                );
        e.target.reset();
    };

    return (
    <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"name"} name={"user_name"}/>
                    <S.Field required placeholder={"email"} name={"email"}/>
                    <S.Field required placeholder={"subject"} name={"subject"}/>
                    <S.Field required placeholder={"message"} as={"textarea"} name={"message"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};

