
export class ApiClient{
    public static async getConversationByTopicNameAndRoutingKey(topicName: String, routingKey: String | undefined): Promise<String[]> {
        const response = await fetch("http://localhost:9090/api/v1/conversation" + topicName + "/" + routingKey);
        if (response.ok) {
            return await response.json();
        }
        throw new Error(await response.json());
    }
}