import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { PersonFillAdd } from 'react-bootstrap-icons';
import SideContactsModal from './SideContactsModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CustomerClient} from "../../controller/CustomerClient";
import CustomerConversationDTO from "../../model/CustomerConversationDTO";
import {ConversationClient} from "../../controller/ConversationClient";
import './SideContactsWindow.css';

const SideContactsWindow = () => {
    const [showModal, setShowModal] = useState(false);
    const [conversations, setConversations] = useState<CustomerConversationDTO[]>([]);
    const [users, setUsers] = useState<string[]>([]);

    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const conversationList = await ConversationClient.getConversations();
                setConversations(conversationList);
            } catch (error) {
                console.error('Error fetching conversations:', error);
            }
        };
        const fetchUsers = async () => {
            try {
                const userList = await CustomerClient.getAllUsersList();
                setUsers(userList);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
        fetchConversations();
    }, []);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleConversationClick = (routingKey: string) => {
        console.log('Clicked conversation with routing key:', routingKey);
    };

    return (
        <div className="size-box d-flex flex-column">
            <div className="position-sticky top-0 bg-white">
                <Button variant="primary" type="button" className="btn-lg d-flex align-items-center rounded-pill" onClick={() => setShowModal(true)}>
                    <PersonFillAdd />
                </Button>
            </div>
            {showModal && <SideContactsModal users={users} onClose={handleModalClose} />}
            <div className="conversation-list">
                {conversations.map((conversation, index) => (
                    <div key={index} className="conversation-item" onClick={() => handleConversationClick(conversation.routingKey)}>
                        {conversation.conversationName}
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default SideContactsWindow;