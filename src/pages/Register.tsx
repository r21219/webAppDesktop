import {Alert, Button, Form, Row, Col, Stack} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({ //definuju
        name: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleRegistration = async (e: React.FormEvent) => {
        e.preventDefault();

//validation............................................................................................
    if (!formData.name || !formData.password || !formData.confirmPassword) {
        setError("All fields are required");
        return;
    }

    if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
    }
//API-POST...............................................................................................
        const apiUrl = "http://localhost:9090/api/v1/auth/register";

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    password: formData.password,
                }),
            });

            if (response.ok) {
                // Registration successful, navigate to login page or display a success message
                navigate("/login");
            } else {
                // Registration failed, handle the error
                const errorData = await response.json();
                setError(errorData.message); // Replace "message" with the actual property in your API response containing the error message
            }
        } catch (error) {
            // Handle network errors, parsing errors, etc.
            setError("An error occurred during registration");
        }
    };


//......................................................................................................
        return <>
            <Form>
                <Row style={{height: "100", justifyContent: "center", padding: "5%"}}>
                    <Col xs={"5"}>
                        <Stack gap={3}>
                            <h2>Register</h2>
                            <Form.Control type={"text"}
                                          placeholder={"Name"}
                                          name="name"
                                          value={formData.name}
                                          onChange={handleInputChange}/>

                            <Form.Control type={"password"}
                                          placeholder={"Password"}
                                          name="password"
                                          value={formData.password}
                                          onChange={handleInputChange}/>

                            <Form.Control type={"password"}
                                          placeholder={"Confirm password"}
                                          name="confirmPassword"
                                          value={formData.confirmPassword}
                                          onChange={handleInputChange}/>

                            <p>Already have an account? <Link to={"/login"} className={"text-decoration-none"}>Login</Link></p>
                            <Button variant={"primary"} type={"submit"} onClick={handleRegistration}> Register </Button>
                            {error && <Alert variant={"danger"}>{error}</Alert>}
                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    }
export default Register;