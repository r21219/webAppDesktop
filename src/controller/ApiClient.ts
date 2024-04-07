export class ApiClient {
    private static token: string | null = null;

    public static async login(name: string, password: string): Promise<boolean> {
        const apiUrl = "http://localhost:9090/api/v1/auth/login";

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
                const token = data.token; // Extract the token from the response data
                console.log("Login token:", token); // Log the token
                this.token = token; // Update the token
                return true;
            } else {
                const errorData = await response.json();
                console.error("Login error:", errorData); // Log the error data
                throw new Error(errorData.message || "Login failed");
            }
        } catch (error) {
            console.error("An error occurred during login:", error); // Log the error
            throw new Error("An error occurred during login");
        }
    }

    public static async register(name: string, password: string): Promise<boolean> {
        const apiUrl = "http://localhost:9090/api/v1/auth/register";

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
                const token = data.token; // Extract the token from the response data
                console.log("Register token:", token); // Log the token
                this.token = token; // Update the token
                return true; // Registration successful
            } else {
                const errorData = await response.json();
                console.error("Register error:", errorData); // Log the error data
                throw new Error(errorData.message || "Registration failed");
            }
        } catch (error) {
            console.error("An error occurred during registration:", error); // Log the error
            throw new Error("An error occurred during registration");
        }
    }

    public static getToken(): string | null {
        return this.token;
    }
}