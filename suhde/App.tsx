import { useState } from 'react';
import { VeiculosList } from "./src/pages/VeiculosList";
import { ListaVazia } from "./src/pages/ListaVazia";

export default function App() {
  // 1. Aqui você teria o seu estado com os carros
  // Se for [], ele renderiza a ListaVazia. Se tiver itens, renderiza a VeiculosList.
  const [veiculos, setVeiculos] = useState([]); 

  // 2. A estrutura do IF organizada:
  if (veiculos.length === 0) {
    return <ListaVazia />;
  }

  return <VeiculosList dados={veiculos} />;
}