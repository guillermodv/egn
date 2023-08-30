"use client";
import results from "./data/results.json";
import { GeneralResult } from "./components/interfaces";
import { PieChartGeneral } from "./components/pieChartGeneral";
import { PorcentPieChart } from "./components/porcentPieChart";
import { useCallback } from "react";

export default function Home() {
  const answerForServer: GeneralResult = results;

  const {
    fechaTotalizacion,
    estadoRecuento,
    valoresTotalizadosPositivos,
    valoresTotalizadosOtros,
  } = answerForServer;

  const dataPieLabels = valoresTotalizadosPositivos.map(
    (valor) => valor.nombreAgrupacion
  );

  const dataPieValues = valoresTotalizadosPositivos.map(
    (valor) => valor.votosPorcentaje
  );

  return (
    <section className="flex p-4 flex-row items-center justify-center">
      <article>
        <div className="p-4">
          <p className="py-4 text-3xl text-center font-bold">
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
        <figure className="flex bg-sky-100 rounded-xl p-8 md:p-0 ">
          <p className="py-4 text-1xl font-bold">Estado de Recuento</p>
          <div>Mesas esperadas: {estadoRecuento.mesasEsperadas}</div>
          <div>Mesas totalizadas: {estadoRecuento.mesasTotalizadas}</div>
          <div>
            Porcentaje Totalizado: {estadoRecuento.mesasTotalizadasPorcentaje} %
          </div>
          <div>
            <PorcentPieChart
              dataPieLabels={["si", "no"]}
              dataPieValues={[
                estadoRecuento.mesasTotalizadasPorcentaje,
                100 - estadoRecuento.mesasTotalizadasPorcentaje,
              ]}
              dataPieTitle="Porcentaje totalizado"
            />
          </div>
        </figure>
        <figure className="flex bg-sky-100 rounded-xl p-8 md:p-0 ">
          <p className="py-4 text-1xl font-bold">Totalizaciones</p>
          <div>Cantidad De Electores: {estadoRecuento.cantidadElectores}</div>
          <div>Cantidad de Votantes: {estadoRecuento.cantidadVotantes}</div>
          <div>Participacion: {estadoRecuento.participacionPorcentaje} %</div>
        </figure>
        <figure className="flex bg-sky-100 rounded-xl p-8 md:p-0 ">
          <p className="py-4 text-1xl font-bold">
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
          <div>
            <PorcentPieChart
              dataPieLabels={["si", "no"]}
              dataPieValues={[
                valoresTotalizadosOtros.votosRecurridosComandoImpugnadosPorcentaje,
                100 -
                  valoresTotalizadosOtros.votosRecurridosComandoImpugnadosPorcentaje,
              ]}
              dataPieTitle="Porcentaje totalizado"
            />
          </div>
        </figure>
        <div>
          {/* <MyLineChart data={data2} /> */}
          <PieChartGeneral
            dataPieTitle={"Porcentaje de votos"}
            dataPieLabels={dataPieLabels}
            dataPieValues={dataPieValues}
          />
          {/*  <AreaChart />*/}
        </div>
      </article>
    </section>
  );
}
