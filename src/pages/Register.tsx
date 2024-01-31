import {Alert, Button, Form, Row, Col, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
//TODO alert - if email is not in right format/passwords arent same
const Register = () => {
    return <>
        <Form>
            <Row style={{height:"100", justifyContent:"center", padding:"5%"}}>
                <Col xs={"5"}>
                    <Stack gap={3}>
                        <h2>Register</h2>
                        <Form.Control type={"text"} placeholder={"Name"}/>
                        <Form.Control type={"email"} placeholder={"E-mail"}/>
                        <Form.Control type={"password"} placeholder={"Password"}/>
                        <Form.Control type={"password"} placeholder={"Confirm password"}/>
                        <p>Already have an account? <Link to={"/login"} className={"text-decoration-none"}>Login</Link></p>
                        <Button variant={"primary"} type={"submit"}> Register </Button>
                        <Alert variant={"danger"}><p>Error</p></Alert>

                    </Stack>
                </Col>
            </Row>
        </Form>
        </>
}
export default Register;