import {Container, Stack} from "react-bootstrap";
import MainChatWindow from "./MainChatWindow";
import SideContactWindow from "./SideContactsWindow";

const Chat = () => {
    return (
        <Container>
            <Stack direction={"horizontal"} className={"align-items-start"} gap={4}>
                <SideContactWindow/>
                <MainChatWindow/>
            </Stack>
        </Container>

    );
};

export default Chat;
