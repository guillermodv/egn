"use client";
import results from "./data/results.json";
import { GeneralResult, EstadoRecuento } from "./components/interfaces";

export default function Home() {
  const answerForServer: GeneralResult = results;

  const {
    fechaTotalizacion,
    estadoRecuento,
    valoresTotalizadosPositivos,
    valoresTotalizadosOtros,
  } = answerForServer;

  return (
    <section className="flex flex-col items-center justify-center">
      <article>
        <div>
          <h1>Elecciones 2023 - {fechaTotalizacion}</h1>
        </div>
        <div>
          <h2>Estado de recuento</h2>
          <div>{estadoRecuento.mesasEsperadas}</div>
          <div>{estadoRecuento.mesasTotalizadas}</div>
          <div>{estadoRecuento.mesasTotalizadasPorcentaje}</div>
        </div>
        <div>
          <h2>Totalizaciones</h2>
          <div>{estadoRecuento.cantidadElectores}</div>
          <div>{estadoRecuento.cantidadVotantes}</div>
          <div>{estadoRecuento.participacionPorcentaje}</div>
        </div>
      </article>
    </section>
  );
}
