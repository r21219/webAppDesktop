export class ApiClient {
    //Todo once project is finished remove all console logs!!!!
    // fix a bug when the side gets refreshed everything is lost I recommend getting token saved in localStorage
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
                console.log("The current user:", localStorage.getItem('userName'));
                return data.filter((user: string | null) => user !== localStorage.getItem('userName'));
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

    public static async createConversation(selectedUsers: string[], conversationName: string): Promise<boolean> {
        const apiUrl = "http://localhost:9090/api/v1/message/create";
        const currentUser = localStorage.getItem('userName')
        if (currentUser !== null) {
            selectedUsers.push(currentUser);
        }
        try {
            const token = this.getToken();
            if (!token) {
                throw new Error("No token available");
            }

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    conversationName,
                    userNames: selectedUsers,
                }),
            });

            if (response.ok) {
                // Handle the plain text response here
                const data = await response.text();
                console.log("Create Conversation response:", data);
                return true;
            } else {
                const errorData = await response.json();
                console.error("Create Conversation error:", errorData);
                throw new Error(errorData.message || "Failed to create conversation");
            }
        } catch (error) {
            console.error("An error occurred during conversation creation:", error);
            console.log(error);
            throw new Error("An error occurred during conversation creation");
        }
    }

    public static getToken(): string | null {
        return this.token;
    }
}
