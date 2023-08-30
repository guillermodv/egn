"use client";
import results from "./data/results.json";
import {
  GeneralResult,
  EstadoRecuento,
  ValoresTotalizadosOtros,
} from "./components/interfaces";
import MyLineChart from "./components/myLineChart";
import { Pie } from "react-chartjs-2";
import { PieChart } from "./components/pieChart";
import { AreaChart } from "./components/areaChart";

export default function Home() {
  const answerForServer: GeneralResult = results;

  const {
    fechaTotalizacion,
    estadoRecuento,
    valoresTotalizadosPositivos,
    valoresTotalizadosOtros,
  } = answerForServer;

  const data = {
    labels: [
      "FRENTE DE TODOS",
      "UNITE POR LA LIBERTAD",
      "FRENTE IZQUIERDA",
      "EL MOVIMIENTO",
      "OTRO",
      "OTRO 2",
    ],
    datasets: [
      {
        label: "Numero de votos",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="flex flex-row items-center justify-center">
      <article>
        <div>
          <p className="py-4 text-3xl font-bold">
            Elecciones 2023 -{" "}
            {new Date(fechaTotalizacion).toLocaleDateString("es", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
        </div>
        <div>
          <p className="py-4 text-2xl font-bold">Estado de Recuento</p>
          <div>Mesas esperadas: {estadoRecuento.mesasEsperadas}</div>
          <div>Mesas totalizadas: {estadoRecuento.mesasTotalizadas}</div>
          <div>
            Porcentaje Totalizado: {estadoRecuento.mesasTotalizadasPorcentaje} %
          </div>
        </div>
        <div>
          <p className="py-4 text-2xl font-bold">Totalizaciones</p>
          <div>Cantidad De Electores: {estadoRecuento.cantidadElectores}</div>
          <div>Cantidad de Votantes: {estadoRecuento.cantidadVotantes}</div>
          <div>Participacion: {estadoRecuento.participacionPorcentaje} %</div>
        </div>
        <div>
          <p className="py-4 text-2xl font-bold">
            Valores ValoresTotalizados Otros
          </p>
          <div>
            Votos Nulos: {valoresTotalizadosOtros.votosNulos}
            {" - "}
            {valoresTotalizadosOtros.votosNulosPorcentaje}%
          </div>
          <div>
            Votos en Blanco: {valoresTotalizadosOtros.votosEnBlanco}
            {" - "}
            {valoresTotalizadosOtros.votosEnBlancoPorcentaje}%
          </div>
          <div>
            Votos Impugnados:
            {valoresTotalizadosOtros.votosRecurridosComandoImpugnados}
            {" - "}
            {valoresTotalizadosOtros.votosRecurridosComandoImpugnadosPorcentaje}
            %
          </div>
        </div>
        <div>
          <MyLineChart />
          <PieChart data={data} />
          <AreaChart />
        </div>
      </article>
    </section>
  );
}
