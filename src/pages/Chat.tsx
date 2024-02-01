import { Button, Container, Form, Stack, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import the Link component

const Chat = () => {
    return (
        <Container>
            <Stack direction={"horizontal"} className={"align-items-start"} gap={4}>
                {/* Side contact list */}
                <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", width: "350px", height:"550px", overflowY: "auto" }}>
                    <Stack className={"flex-grow-1 message-box pe-3"} gap={3}>
                        <div style={{ backgroundColor: "black", height: "80px" }} /> {/* White background to fill the space */}
                        <div className="headind_srch" style={{ position: "fixed", backgroundColor: "white", width:"300px", paddingTop:"5px"}}>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control type="search" placeholder="Search" />
                                </Form.Group>
                            </Form>
                        </div>

                        {/* List of Chats */}
                        <div className="chat_list" style={{paddingTop: "50px"}} >
                            <div className="chat_people">
                                <Link to="/chat">
                                    <div className="chat_ib">
                                        <Row>
                                            <Col xs={8}>
                                                <h5>Pavlína Pavenlová</h5>
                                            </Col>
                                            <Col xs={4} className="text-end">
                                                <span className="chat_date">Dec 25</span>
                                            </Col>
                                        </Row>
                                        <p>Another chat message...</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="chat_people">
                                <Link to="/chat">
                                    <div className="chat_ib">
                                        <Row>
                                            <Col xs={8}>
                                                <h5>Pavlína Pavenlová</h5>
                                            </Col>
                                            <Col xs={4} className="text-end">
                                                <span className="chat_date">Dec 25</span>
                                            </Col>
                                        </Row>
                                        <p>Another chat message...</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="chat_people">
                                <Link to="/chat">
                                    <div className="chat_ib">
                                        <Row>
                                            <Col xs={8}>
                                                <h5>Pavlína Pavenlová</h5>
                                            </Col>
                                            <Col xs={4} className="text-end">
                                                <span className="chat_date">Dec 25</span>
                                            </Col>
                                        </Row>
                                        <p>Another chat message...</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="chat_people">
                                <Link to="/chat">
                                    <div className="chat_ib">
                                        <Row>
                                            <Col xs={8}>
                                                <h5>Pavlína Pavenlová</h5>
                                            </Col>
                                            <Col xs={4} className="text-end">
                                                <span className="chat_date">Dec 25</span>
                                            </Col>
                                        </Row>
                                        <p>Another chat message...</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="chat_people">
                                <Link to="/chat">
                                    <div className="chat_ib">
                                        <Row>
                                            <Col xs={8}>
                                                <h5>Pavlína Pavenlová</h5>
                                            </Col>
                                            <Col xs={4} className="text-end">
                                                <span className="chat_date">Dec 25</span>
                                            </Col>
                                        </Row>
                                        <p>Another chat message...</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="chat_people">
                                <Link to="/chat">
                                    <div className="chat_ib">
                                        <Row>
                                            <Col xs={8}>
                                                <h5>Pavlína Pavenlová</h5>
                                            </Col>
                                            <Col xs={4} className="text-end">
                                                <span className="chat_date">Dec 25</span>
                                            </Col>
                                        </Row>
                                        <p>Another chat message...</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="chat_people">
                                <Link to="/chat">
                                    <div className="chat_ib">
                                        <Row>
                                            <Col xs={8}>
                                                <h5>Pavlína Pavenlová</h5>
                                            </Col>
                                            <Col xs={4} className="text-end">
                                                <span className="chat_date">Dec 25</span>
                                            </Col>
                                        </Row>
                                        <p>Another chat message...</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="chat_people">
                                <Link to="/chat">
                                    <div className="chat_ib">
                                        <Row>
                                            <Col xs={8}>
                                                <h5>Pavlína Pavenlová</h5>
                                            </Col>
                                            <Col xs={4} className="text-end">
                                                <span className="chat_date">Dec 25</span>
                                            </Col>
                                        </Row>
                                        <p>Another chat message...</p>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </Stack>
                </div>

                {/* Main chat window */}
                <div className="flex-grow-1 message-box d-flex flex-column justify-content-end" style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", overflowY: "auto", height:"550px"}}>
                    <Stack direction="vertical" gap={3} className="justify-content-end">
                        <p className="text-start">Chat1</p>
                        <p className="text-end">Chat2</p>
                        <p className="text-start">Chat3</p>
                    </Stack>
                    <Form className="mt-auto">
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
