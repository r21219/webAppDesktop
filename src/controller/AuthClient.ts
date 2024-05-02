const apiPrefix = "http://localhost:9090/api/v1/auth";

export class AuthClient {
    public static async login(name: string, password: string): Promise<boolean> {
        const apiUrl = `${apiPrefix}/login`;

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    password,
                }),
            });
            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                console.log("Login token:", token);
                localStorage.setItem("token",token);
                return true;
            } else {
                const errorData = await response.json();
                console.error("Login error:", errorData);
                throw new Error(errorData.message || "Login failed");
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
            throw new Error("An error occurred during login");
        }
    }

    public static async register(name: string, password: string): Promise<boolean> {
        const apiUrl = `${apiPrefix}/register`;

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    password,
                }),
            });

            if (response.ok) {
                return true;
            } else {
                const errorData = await response.json();
                console.error("Register error:", errorData);
                throw new Error(errorData.message || "Registration failed");
            }
        } catch (error) {
            console.error("An error occurred during registration:", error);
            throw new Error("An error occurred during registration");
        }
    }
}