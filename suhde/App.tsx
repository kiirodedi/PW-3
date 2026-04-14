import { useEffect, useState } from 'react';
import { VeiculosList } from "./src/pages/VeiculosList";
import { ListaVazia } from "./src/pages/ListaVazia";
import { getVeiculos } from "./src/services/veiculoService";
import type { Veiculo } from "./src/types/veiculo";

export default function App() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchVeiculos() {
      try {
        const data = await getVeiculos();
        setVeiculos(data);
      } catch {
        setError(true);
      }
    }
    fetchVeiculos();
  }, []);

  if (error) {
    return <ListaVazia />;
  }

  if (veiculos.length === 0) {
    return <ListaVazia />;
  }

  return <VeiculosList dados={veiculos} />;
}