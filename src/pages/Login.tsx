import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.password) {
      setError("All fields are required");
      return;
    }

    const apiUrl = "http://localhost:9090/api/v1/login";

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
        const responseData = await response.json();
        console.log("Login successful:", responseData);
        navigate("/"); // Redirect to the home page or another page after successful login
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred during login");
    }
  };

  return (
      <>
        <Form>
          <Row style={{ height: "100", justifyContent: "center", padding: "5%" }}>
            <Col xs={"5"}>
              <Stack gap={3}>
                <h2>Login</h2>
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
                <p>
                  Don't have an account?{" "}
                  <Link to={"/register"} className={"text-decoration-none"}>
                    Sign up
                  </Link>
                </p>
                <Button variant={"primary"} type={"submit"} onClick={handleLogin}>
                  Login
                </Button>
                {error && <Alert variant={"danger"}>{error}</Alert>}
              </Stack>
            </Col>
          </Row>
        </Form>
      </>
  );
};

export default Login;
