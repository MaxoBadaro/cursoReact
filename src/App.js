import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import Componente from "./components/Componente";

function App() {
  return (
    <>
    <NavBar />
    <section>
      <Componente msg="hola, me pasaron por una prop"/>
    </section>
    </>
  );
}

export default App;
