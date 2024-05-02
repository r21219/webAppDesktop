const apiPrefix = "http://localhost:9090/api/v1/customer";
export class CustomerClient {
    public static async getAllUsersList(): Promise<string[]> {
        const apiUrl = `${apiPrefix}/get/all`;

        try {
            const token = localStorage.getItem("token");
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
}