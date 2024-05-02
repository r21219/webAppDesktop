import React, { useState } from 'react';
import { Accordion, Button, Form, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ConversationClient} from "../../controller/ConversationClient";

interface SideContactsModalProps {
    users: string[];
    onClose: () => void;
}

const SideContactsModal: React.FC<SideContactsModalProps> = ({ users, onClose }) => {
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const [conversationName, setConversationName] = useState<string>('');

    const handleCheckboxChange = (userName: string) => {
        if (selectedUsers.includes(userName)) {
            setSelectedUsers(selectedUsers.filter(user => user !== userName));
        } else {
            setSelectedUsers([...selectedUsers, userName]);
        }
    };

    const handleCreate = async () => {
        try {
            await ConversationClient.createConversation(selectedUsers, conversationName);
            toast.success('Conversation created successfully.');
            onClose();
        } catch (error) {
            console.error('Error creating conversation:', error);
            toast.error('Failed to create conversation.');
        }
    };

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Conversation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="conversationName">
                    <Form.Label>Conversation Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={conversationName}
                        onChange={(e) => setConversationName(e.target.value)}
                    />
                </Form.Group>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Users</Accordion.Header>
                        <Accordion.Body>
                            {users.map((user) => (
                                <Form.Check
                                    key={user}
                                    type="checkbox"
                                    label={user}
                                    checked={selectedUsers.includes(user)}
                                    onChange={() => handleCheckboxChange(user)}
                                />
                            ))}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleCreate}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SideContactsModal;