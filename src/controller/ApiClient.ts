export class ApiClient {
    //Todo once project is finished remove all console logs!!!!
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
                const token = data.token;
                console.log("Login token:", token);
                this.token = token;
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
                const token = data.token;
                console.log("Register token:", token);
                this.token = token;
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

    public static async getAllUsersList(): Promise<string[]> {
        const apiUrl = "http://localhost:9090/api/v1/message/get/users";

        try {
            const token = this.getToken();
            if (!token) {
                throw new Error("No token available");
            }

            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                const errorData = await response.json();
                console.error("Error fetching users:", errorData);
                throw new Error(errorData.message || "Failed to fetch users");
            }
        } catch (error) {
            console.error("An error occurred during fetch:", error);
            throw new Error("An error occurred during fetch");
        }
    }

    public static getToken(): string | null {
        return this.token;
    }
}
