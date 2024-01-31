import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ChatMessageManagerComponent from "./components/ChatMessageManagerComponent";
import{Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import NavBar from "./parts/NavBar";
//boostrap imports
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";


function App() {
  return (
      <>
      <NavBar/>
      <Container>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/chat" element={<Chat />} />

              <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <ChatMessageManagerComponent></ChatMessageManagerComponent>
      </Container>
      </>
  );
}

export default App;
