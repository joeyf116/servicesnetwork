import type { NextPage } from 'next';
import React from 'react';
import { Container } from 'react-bootstrap';
import LoginForm from '../components/auth/LoginForm';
import { useSession, signIn, signOut } from "next-auth/client"

const Login: NextPage = () => {
    const [session, loading] = useSession()
    if (session) {
      return (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )
    }
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
    // return (
    //     <Container style={{
    //         maxWidth: '500px', 
    //         marginTop: '5vh', 
    //         boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', 
    //         background: '#f5f5f5', 
    //         padding: '3rem', 
    //         borderRadius: '5px'
    //         }}>
    //         <LoginForm />
            
    //     </Container>
    // )
}

export default Login;