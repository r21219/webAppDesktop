
export class ApiClient {
    public static async getConversationByTopicNameAndRoutingKey(topicName: string, routingKey: string | undefined): Promise<string[]> {
        const response = await fetch("http://localhost:9090/api/v1/conversation" + topicName + "/" + routingKey);
        if (response.ok) {
            return await response.json();
        }
        throw new Error(await response.json());
    }

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
                return true; // Login successful
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || "Login failed");
            }
        } catch (error) {
            throw new Error("An error occurred during login");
        }
    }

    public static async register(name: string, password: string): Promise<void> {
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

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Registration failed");
            }
        } catch (error) {
            throw new Error("An error occurred during registration");
        }
    }
}