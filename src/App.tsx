import React from 'react';
//import logo from './logo.svg';
import './App.css';
import{Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import NavBar from "./parts/NavBar";
import { AuthProvider } from './context/AuthContext';

import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";
//Todo
// 1. whenever a user logs in or registers they will be connected to ws and sent do the chat window
// 2. the UI design will follow the design in the docs
// 3. Once in the chat window you can create a conversation by clicking a button which will make window for creating a conversation appear
// 3.1 in that window you can search for users and click on their name to add them (will be added to an internal list which will be send to API)
// 3.2 either way will show a message on the status if it was or was not created if it was the conversation will be immediately added to other conversations
// 3.3 When a user receives a message in a conversations that conversations div will have an extra icon to imply a message was received or just use TOAST for that
function App() {
  return (
      <>
      <AuthProvider>
      <NavBar/>
      <Container>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/chat" element={<Chat />} />

              <Route path="*" element={<Navigate to="/" />} />
          </Routes>

      </Container>
      </AuthProvider>
      </>

  );
}

export default App;
