import { Button, Container, Form, Stack, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import MainChatWindow from "../components/Chat/MainChatWindow";
import SideContactWindow from "../components/Chat/SideContactsWindow";

//Todo
// replace static info for components that display messages instead
const Chat = () => {
    return (
        <Container>
            <Stack direction={"horizontal"} className={"align-items-start"} gap={4}>
                <SideContactWindow />
                <MainChatWindow />
            </Stack>
        </Container>

    );
};

export default Chat;
