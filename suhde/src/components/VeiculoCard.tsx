import type { Veiculo } from "../types/veiculo";

interface Props {
  veiculo: Veiculo;
}
export function VeiculoCard({ veiculo }: Props) {
    return (
        <div style={{border: '1px solid #ccc', margin: 10, padding: 10}}>
            <h2>{veiculo.modelo}</h2>
            <p>{veiculo.descricao}</p>
            
            <p>
                Ano: {veiculo.ano} / {veiculo.ano_modelo}
            </p>
            <p>
                Fabricante: {veiculo.Fabricantes_id}
            </p>

            <strong>
                R$ {veiculo.valor.toLocaleString("pr-BR", {
                    style: "currency",
                    currency: "BRL",
                })}
            </strong>

            <img src={veiculo.fotos} alt={veiculo.modelo} style={{width: '100%', marginTop: 10}} />
        </div>
    );
}