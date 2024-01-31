import {Container,Nav, Navbar, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
//TODO show logged person (span) name and logout instead of login/register
const NavBar = () => {
    return <Navbar bg={"dark"} className={"mb-4"} style={{ color: 'white' }}>
    <Container>
        <h2>
           <Link to={"/"} className={"link-light text-decoration-none"}>ChatApp</Link>
        </h2>

        <span className={"text-info"}>Logged as ...</span>
        <Nav>
            <Stack direction={"horizontal"} gap={3}>
                <Link to={"/login"} className={"link-light text-decoration-none"}>Login</Link>
                <Link to={"/register"} className={"link-light text-decoration-none"}>Register</Link>
            </Stack>
        </Nav>
    </Container>
    </Navbar>
};
export default NavBar;