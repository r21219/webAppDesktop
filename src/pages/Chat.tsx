import { Button, Container, Form, Stack } from "react-bootstrap";

const Chat = () => {
    return (
        <Container>

            <Stack direction={"horizontal"} className={"align-items-start"} gap={4} >
                {/* side contact list */}
                <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
                <Stack className={"flex-grow-0 message-box pe-3"} gap={3}>

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="search" placeholder="Search" />
                            <Button variant="primary" type="button">
                                lupa
                            </Button>
                        </Form.Group>
                    </Form>

                    <p>Pavel Pavlovský</p>
                    <p>Pavlína Pavenlová</p>

                </Stack>
                </div>
                {/* main chat window */}
                <div className="flex-grow-1 message-box" style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
                    {/* Your ChatBox content */}
                    <p>Chat</p>
                    <Form>
                        {/* Additional Search input inside the ChatBox */}
                        <Form.Group className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                            <Form.Control type="text" placeholder="Type message" />
                            <Button variant="primary" type="button">
                                Odeslat
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </Stack>
        </Container>
    );
};

export default Chat;