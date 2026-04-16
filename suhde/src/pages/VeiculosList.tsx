//import { useEffect, useState } from "react";
//import { getVeiculos } from "../services/veiculoService";
//import type { Veiculo } from "../types/veiculo";
import { VeiculoCard } from "../components/VeiculoCard";
import { useVeiculos } from "../hooks/useVeiculos";

export function VeiculosList() {
  const {veiculos, loading, error} = useVeiculos();
// const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
//
// useEffect(() => {
//   getVeiculos().then(setVeiculos);
// }, []);
//
// return (
//   <div>
//     <h1>Lista de Veículos</h1>
//
//     {veiculos.map((v) => (
//    //  <div key={v.id}>
//    //    <h2>{v.modelo}</h2>
//    //    <p>{v.descricao}</p>
//    //    <strong>R$ {v.valor}</strong>
//       <VeiculoCard key={v.id} veiculo={v} />
//     ))}
//   </div>
// );
  if (loading) {
    return <p>Carregando veículos...</p>
  }
  
  if (error) {
    return <p>{error}</p>
  }
  
  return (
    <div>
      <h1>Lista de Veículos</h1>
  
      {veiculos.map((v) => (
        <VeiculoCard key={v.id} veiculo={v} />
      ))}
    </div>
  );
}