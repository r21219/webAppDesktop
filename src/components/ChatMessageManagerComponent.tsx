import {useEffect, useState} from "react";
import WebSocketService from "../service/WebSocketService";
import {CustomerMessage} from "../model/CustomerMessage";

//TODO make sure to implement message model
const ChatMessageManagerComponent = () => {
    const [message, setMessage] = useState<CustomerMessage | null>(null);
    const {connect, disconnect, stompClient} = WebSocketService();

    useEffect(() => {
        const onMessageReceived = (msg: CustomerMessage) => {
            setMessage(msg);
        };

        connect('/topic/msg', onMessageReceived);

        return () => {
            disconnect();
        };
    }, [connect, disconnect]);

    return (
        <div>

            {message && <p>{message.content}</p>}
        </div>
    );
};
export default ChatMessageManagerComponent;
