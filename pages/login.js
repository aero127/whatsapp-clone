import styled from "styled-components";
import Head from "next/head"
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";

function login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    };

    return (
        <Container>
            <Head>
            <title>Login</title>
                
            </Head>
            <LoginContainer>
                <Logo 
                    src="https://wificomplete.nl/wp-content/uploads/2017/02/whatsapp-logo-PNG-Transparent.png"
                />
                <LoginButton onClick={signIn}>Sign in with Google</LoginButton>
            </LoginContainer>
        </Container>
    );
}

export default login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    display: flex;
    padding: 100px;
    align-items: center;
    background-color: white;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0.7);
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
    `

const LoginButton = styled.button`
    width: 100%;
    border: none;
    font-size: larger;
    height: 40px;
    cursor: pointer;
    border: 2px lightgrey solid
`