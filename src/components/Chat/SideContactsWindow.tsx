import {Button, Col, Form, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";

const SideContactsWindow = () =>{
    return (
        <div className={"d-flex flex-column"} style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            width: "350px",
            height: "550px",
            overflowY: "auto"
        }}>
            <Stack className={"flex-grow-1 message-box pe-3"} gap={3}>


                <Form className="bg-white position-sticky top-0">
                    <Form.Group className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                        <Form.Control type="text" placeholder="Type message"/>
                        <Button variant="primary" type="button">
                            Odeslat
                        </Button>
                    </Form.Group>
                </Form>

                {/* List of Chats */}
                <div className="chat_list">
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
    )
}
export default SideContactsWindow;