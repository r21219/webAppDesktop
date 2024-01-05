import {useEffect, useState} from "react";
import WebSocketService from "../service/WebSocketService";
//TODO make sure to implement message model
const ChatMessageManagerComponent = () => {
    const [message, setMessage] = useState<string | null>(null);
    const {connect, disconnect, stompClient} = WebSocketService();

    useEffect(() => {
        const onMessageReceived = (msg: string) => {
            setMessage(msg);
        };

        connect('/topic/msg', onMessageReceived);

        return () => {
            disconnect();
        };
    }, [connect, disconnect]);

    return (
        <div>
            <h2>Received Message:</h2>
            {message && <p>{message}</p>}
        </div>
    );
};
export default ChatMessageManagerComponent;