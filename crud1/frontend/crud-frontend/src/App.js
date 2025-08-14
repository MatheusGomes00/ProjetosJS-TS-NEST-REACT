import "./App.css";
import { useEffect, useState } from "react";
import { api } from "./services/api";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";


function App() {
  const [itens, setItens] = useState([]);
  
  const buscarItens = async () => {
    try{
      const response = await api.get("/itens")
      setItens(response.data)
    } catch (erro) {
      console.erro("erro ao buscar itens: ", erro.message)
    }
  }

  useEffect(() => {
    buscarItens();
  }, [])
  
  const adicionarItem = async (item) => {
    try{
      const response = await api.post("/itens/criar", item);
      console.log(response)
      setItens([...itens, response.data]);
    } catch (erro) {
      console.erro("Erro ao adicionar item", erro.message);
    }
  };

  const deletarItem = async (id) => {
    try {
      const response = await api.delete(`/itens/excluir/${id}`);
      console.log(response.data.message);
      console.log(response);
      setItens(itens.filter(item => item._id !== id));
    } catch (erro) {   
        console.error("Erro ao deletar item: ", erro.message)
    }
  }


  return (
    <div style={{ padding: "20px" }}>
      <h1>CRUD NODEJS-REACT 1</h1>
      <ItemForm onAdd={adicionarItem} />
      <ItemList itens={itens} onDelete={deletarItem} />
    </div>
  );
}

export default App;