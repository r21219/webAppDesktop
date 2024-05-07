import CustomerConversationDTO from "../model/CustomerConversationDTO";

const apiPrefix = "http://localhost:9090/api/v1/conversation";
export class ConversationClient {

    public static async createConversation(selectedUsers: string[], conversationName: string): Promise<boolean> {
        const apiUrl = `${apiPrefix}/create`;
        const currentUser = localStorage.getItem('userName')
        if (currentUser !== null) {
            selectedUsers.push(currentUser);
        }
        try {
            const token = localStorage.getItem('token');
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
    public static async getConversations(): Promise<CustomerConversationDTO[]> {
        const currentUser = localStorage.getItem('userName');
        if (!currentUser) {
            throw new Error("Current user username not found in localStorage");
        }

        const apiUrl = `${apiPrefix}/get/${currentUser}`;

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("No token available");
            }

            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data: CustomerConversationDTO[] = await response.json();
                console.log("Get Conversations response:", data);
                return data;
            } else {
                const errorData = await response.json();
                console.error("Get Conversations error:", errorData);
                throw new Error(errorData.message || "Failed to get conversations");
            }
        } catch (error) {
            console.error("An error occurred while fetching conversations:", error);
            throw new Error("An error occurred while fetching conversations");
        }
    }
}