import {Button, Col, Form, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import { PersonFillAdd  } from 'react-bootstrap-icons';
import { ListGroup } from 'react-bootstrap';

const SideContactsWindow = () =>{
    return (
        <div className= " size-box d-flex flex-column">
            <div className="position-sticky top-0 bg-white pb-2">
                <Form>
                    <Form.Group className="text-muted d-flex justify-content-start align-items-center pe-3 mt-0">
                        <Form.Control type="text" placeholder="Find conversation..."/>
                    </Form.Group>
                </Form>
            </div>
            <ListGroup variant="flush" className={"flex-grow-1 message-box pe-3 overflow-auto"}>
                {/* List of Chats */}
                <ListGroup.Item className="chat_list">
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
                </ListGroup.Item>

                <ListGroup.Item className="chat_list">
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
                </ListGroup.Item>

                <ListGroup.Item className="chat_list">
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
                </ListGroup.Item>

                <ListGroup.Item className="chat_list">
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
                </ListGroup.Item>

                <ListGroup.Item className="chat_list">
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
                </ListGroup.Item>

                <ListGroup.Item className="chat_list">
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
                </ListGroup.Item>

                <div className = "position-sticky bottom-0 d-flex justify-content-end">
                    <Button variant="primary" type="button" className="btn-lg d-flex align-items-center rounded-pill">
                        <PersonFillAdd  />
                    </Button>
                </div>
            </ListGroup>

        </div>
    )
}
export default SideContactsWindow;

