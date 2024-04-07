import {useEffect, useState} from "react";
import WebSocketService from "../service/WebSocketService";
import {CustomerMessage} from "../model/CustomerMessage";
import {ApiClient} from "../controller/ApiClient";

//TODO make sure to implement message model
const ChatMessageManagerComponent = () => {
    const [message, setMessage] = useState<CustomerMessage | null>(null);

    useEffect(() => {
        const token = ApiClient.getToken();
        if (token) {
            const {connect, disconnect} = WebSocketService();
            const onMessageReceived = (msg: CustomerMessage) => {
                setMessage(msg);
            };
            const topic = '/topic/msg/';

            connect(onMessageReceived);

            return () => {
                disconnect();
            };
        }
    }, []);

    return (
        <div>
            {message && <p>{message.content}</p>}
        </div>
    );
};

export default ChatMessageManagerComponent;