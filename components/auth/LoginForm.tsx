import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { IoMdFitness } from 'react-icons/io';
import { ImInstagram, ImFacebook2 } from 'react-icons/im';
import { Container, Stack } from 'react-bootstrap';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"

const LoginForm = (): JSX.Element => {
    // const [session, loading] = useSession()
    // if (session) {
    //   return (
    //     <>
    //       Signed in as {session.user.email} <br />
    //       <button onClick={() => signOut()}>Sign out</button>
    //     </>
    //   )
    // }
    // return (
    //   <>
    //     Not signed in <br />
    //     <button onClick={() => signIn()}>Sign in</button>
    //   </>
    // )
    return (
            <Form>
                <Container fluid style={{alignItems: 'center'}}>
                    <Stack gap={1}>
                        <Image src="/AnywhereFitness.png" width="100" height="50" objectFit="contain" layout="responsive" alt="logo" />
                    </Stack>
                </Container>
                <hr />
                <Container>
                    <Stack gap={1}>
                        <Button 
                        onClick={(e)=> {e.preventDefault(); signIn()}}
                            variant="#3b5998" 
                            type="submit" 
                            style={{
                                backgroundColor: '#3b5998 !important', 
                                color: 'white', 
                                borderColor: '#3b5998'
                                }}>
                            <ImFacebook2 
                                size="1.2rem"
                                style={{verticalAlign: "middle"}}
                            /> Log in with Facebook
                        </Button>
                        <Button onClick={(e)=> {e.preventDefault(); signIn()}} type="submit" 
                                style={{
                                    backgroundColor: '#E33E5C !important', 
                                    color: 'white', 
                                    borderColor: '#E33E5C'
                                    }}>
                            <ImInstagram  size="1.2rem" style={{verticalAlign: "middle"}} /> Log in with Instagram
                        </Button>
                    </Stack>
                </Container>
            </Form>
    )
}

export default LoginForm;