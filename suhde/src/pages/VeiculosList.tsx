import { VeiculoCard } from "../components/VeiculoCard";
import type { Veiculo } from "../types/veiculo";

interface VeiculosListProps {
  dados: Veiculo[];
}

export function VeiculosList({ dados }: VeiculosListProps) {
  return (
    <div>
      <h1>Lista de Veículos</h1>

      {dados.map((v) => (
        <VeiculoCard key={v.id} veiculo={v} />
      ))}
    </div>
  );
}