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
                this.token = data.token;
                return true;
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || "Login failed");
            }
        } catch (error) {
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
                this.token = data.token; // Store the token
                return true; // Registration successful
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || "Registration failed");
            }
        } catch (error) {
            throw new Error("An error occurred during registration");
        }
    }

    public static getToken(): string | null {
        return this.token;
    }
}