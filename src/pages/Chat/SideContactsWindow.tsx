import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { PersonFillAdd } from 'react-bootstrap-icons';
import SideContactsModal from './SideContactsModal';
import { ApiClient } from "../../controller/ApiClient";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SideContactsWindow = () => {
    const [showModal, setShowModal] = useState(false);
    const [users, setUsers] = useState<string[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userList = await ApiClient.getAllUsersList();
                setUsers(userList);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <div className="size-box d-flex flex-column">
            <div className="position-sticky top-0 bg-white">
                <Button variant="primary" type="button" className="btn-lg d-flex align-items-center rounded-pill" onClick={() => setShowModal(true)}>
                    <PersonFillAdd />
                </Button>
            </div>
            {showModal && <SideContactsModal users={users} onClose={handleModalClose} />}
            <ToastContainer />
        </div>
    );
};

export default SideContactsWindow;
