import React from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
    const { userName, logout } = useAuth();
    console.log('Přihlášený uživatel:', userName);

    return (
        <Navbar bg="dark" className="mb-4" style={{ color: 'white' }}>
            <Container>
                <h2>
                    <Link to="/" className="link-light text-decoration-none">
                        ChatApp
                    </Link>
                </h2>
                {userName ? (
                    <>
                        <span className="text-info">Logged as {userName}</span>
                        <Nav>
                            <Stack direction={"horizontal"} gap={3}>
                                <Link to={"/logout"} className={"link-light text-decoration-none"} onClick={logout}>Logout</Link>
                            </Stack>
                        </Nav>
                    </>
                ) : (
                    <Nav>
                        <Stack direction={"horizontal"} gap={3}>
                            <Link to={"/login"} className={"link-light text-decoration-none"}>Login</Link>
                            <Link to={"/register"} className={"link-light text-decoration-none"}>Register</Link>
                        </Stack>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
};

export default NavBar;