import { Client, Message } from '@stomp/stompjs';
import {CustomerMessage} from "../model/CustomerMessage";

const WebSocketService = () => {
    let stompClient: Client | null = null;

    const connect = (topic: string, onMessageCallback: (message: CustomerMessage) => void) => {
        stompClient = new Client({
            brokerURL: 'ws://localhost:9090/ws-message',
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
        });

        const onConnect = (frame: any) => {
            console.log('Connected to WebSocket');
            stompClient?.subscribe(topic, (message: Message) => {
                // Parse the message body to a CustomerMessage object
                const msg: CustomerMessage = JSON.parse(message.body);
                onMessageCallback(msg);
            });
        };
//Hello
        const onError = (error: any) => {
            console.error('WebSocket Error:', error);
            // Handle the error as needed
        };

        stompClient.onConnect = onConnect;

        stompClient.activate();
    };

    const disconnect = () => {
        if (stompClient !== null) {
            stompClient.deactivate();
            console.log('Disconnected from WebSocket');
        }
    };

    return { connect, disconnect, stompClient };
};

export default WebSocketService;
