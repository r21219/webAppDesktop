import {Alert, Button, Col, Form, Row, Stack} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {ApiClient} from "../controller/ApiClient";
import WebSocketService from "../service/WebSocketService";
import {CustomerMessage} from "../model/CustomerMessage";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const {connect} = WebSocketService();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleRegistration = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.password || !formData.confirmPassword) {
            setError("All fields are required");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            await ApiClient.register(formData.name, formData.password);
            console.log("Registration successful");
            connectWebSocket();
            navigate("/login");
        } catch (error: unknown) {
            if (typeof error === "string") {
                setError(error);
            } else {
                setError("An error occurred during registration");
            }
        }
    };

    const connectWebSocket = async () => {
        // Connect to WebSocket upon successful registration
        connect('/topic/msg/', (message: CustomerMessage) => {
            // Handle incoming messages
            console.log(message);
        });
    };

    return (
        <>
            <Form>
                <Row style={{height: "100", justifyContent: "center", padding: "5%"}}>
                    <Col xs={"5"}>
                        <Stack gap={3}>
                            <h2>Register</h2>
                            <Form.Control
                                type={"text"}
                                placeholder={"Name"}
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />

                            <Form.Control
                                type={"password"}
                                placeholder={"Password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />

                            <Form.Control
                                type={"password"}
                                placeholder={"Confirm password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                            />

                            <p>
                                Already have an account?{" "}
                                <Link to={"/login"} className={"text-decoration-none"}>
                                    Login
                                </Link>
                            </p>
                            <Button variant={"primary"} type={"submit"} onClick={handleRegistration}>
                                Register
                            </Button>
                            {error && <Alert variant={"danger"}>{error}</Alert>}
                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default Register;