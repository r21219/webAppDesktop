import {Alert, Button, Col, Form, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
//TODO alert - if account doesnt exist/wrong password
const Login = () => {
  return <>
    <Form>
      <Row style={{height:"100", justifyContent:"center", padding:"5%"}}>
        <Col xs={"5"}>
          <Stack gap={3}>
            <h2>Register</h2>
            <Form.Control type={"email"} placeholder={"E-mail"}/>
            <Form.Control type={"password"} placeholder={"Password"}/>
            <p>Don't have an account? <Link to={"/register"} className={"text-decoration-none"}>Sign up</Link></p>
            <Button variant={"primary"} type={"submit"}> Login </Button>
            <Alert variant={"danger"}><p>Error</p></Alert>

          </Stack>
        </Col>
      </Row>
    </Form>
  </>
}
export default Login;