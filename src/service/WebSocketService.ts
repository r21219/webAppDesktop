import { Client, Message } from '@stomp/stompjs';
import { CustomerMessage } from "../model/CustomerMessage";

const WebSocketService = () => {
    let stompClient: Client | null = null;

    const connect = (onMessageCallback: (message: CustomerMessage) => void) => {
        const token = localStorage.getItem("token");
        const newSocket = new WebSocket(`ws://localhost:9090/api/v1/ws-message?token=${token}`);
        const stompClient = new Client({
            webSocketFactory: () => newSocket,
        });

        stompClient.onConnect = (frame: any) => {
            console.log('WebSocket connected successfully');
            stompClient?.subscribe('/topic/msg/', (message: Message) => {
                try {
                    const msg: CustomerMessage = JSON.parse(message.body);
                    onMessageCallback(msg);
                } catch (error) {
                    console.error("Error parsing WebSocket message:", error);
                }
            });
        };
//Todo create /notification for ws create a channel on BE install
        stompClient.onStompError = (error: any) => {
            console.error("WebSocket connection error:", error);
        };

        stompClient.activate();
    };

    const disconnect = () => {
        if (stompClient !== null) {
            stompClient.deactivate();
        }
    };

    return { connect, disconnect };
};

export default WebSocketService;
