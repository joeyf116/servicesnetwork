import type { NextPage } from "next";
import { useUser } from "@auth0/nextjs-auth0";
import { Container, Button, Row, Col, Stack } from "react-bootstrap";
import Link from "next/link";
import React from "react";
import { FcServices } from "react-icons/fc";

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <Container fluid>
        <h1 className="lead text-capitalize">Welcome {user.name}</h1>
      </Container>
    );
  }

  return (
    <Container className="justify-content-center">
      <Stack direction="vertical" gap={3}>
        <h1 className="display-1 fw-lighter">
          My Services Network <FcServices size={"50"} />{" "}
        </h1>
        {/* <FcServices size={"50"} /> */}
        <p className="lead">
          Template and Automate your business process to focus more on what you
          want.
        </p>
        <Stack direction="horizontal" gap={3}>
          <Link href="/api/auth/login">
            <Button variant="outline-secondary">Login</Button>
          </Link>
          <Link href="/">
            <Button variant="outline-secondary">Learn More</Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;
