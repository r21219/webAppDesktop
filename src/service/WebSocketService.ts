import {Client, Message} from '@stomp/stompjs';
import {CustomerMessage} from "../model/CustomerMessage";
import {ApiClient} from "../controller/ApiClient";

const WebSocketService = () => {
    let stompClient: Client | null = null;

    const connect = (topic: string, onMessageCallback: (message: CustomerMessage) => void) => {
        const token = ApiClient.getToken();
        stompClient = new Client({
            brokerURL: `ws://localhost:9090/ws-message?token=${token}`,
            reconnectDelay: 5000,
        });

        const onConnect = (frame: any) => {
            console.log('WebSocket connected successfully');
            stompClient?.subscribe(topic, (message: Message) => {
                // Parse the message body to a CustomerMessage object
                const msg: CustomerMessage = JSON.parse(message.body);
                onMessageCallback(msg);
            });
        };

        stompClient.onConnect = onConnect;

        stompClient.activate();
    };

    const disconnect = () => {
        if (stompClient !== null) {
            stompClient.deactivate();
        }
    };

    return {connect, disconnect, stompClient};
};

export default WebSocketService;