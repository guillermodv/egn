"use client";
import { useEffect, useState } from "react";
import {
  GeneralResult,
  ValoresTotalizadosOtros,
} from "./components/interfaces";
import { PieChartGeneral } from "./components/pieChartGeneral";
import { PorcentPieChart } from "./components/porcentPieChart";
import LoadingIndicator from "./components/loadingIndicator";
import TitleMain from "./components/titleMain";

const url =
  "https://resultados.mininterior.gob.ar/api/resultados/getResultados?anioEleccion=2019&tipoRecuento=1&tipoEleccion=1&categoriaId=2&distritoId=1&seccionProvincialId=0&seccionId=3&circuitoId=000039&mesaId=1244";

export default function Home() {
  const [arrivedData, setArrivedData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArrivedData(data));
  }, []);
  const answerForServer: any = arrivedData;

  const {
    fechaTotalizacion,
    estadoRecuento,
    valoresTotalizadosPositivos,
    valoresTotalizadosOtros,
  } = answerForServer;

  const dataPieLabels = valoresTotalizadosPositivos?.map(
    (valor: any) => valor.nombreAgrupacion
  );

  const dataPieValues = valoresTotalizadosPositivos?.map(
    (valor: any) => valor.votosPorcentaje
  );

  return (
    <section className="flex p-4 items-center justify-center">
      {answerForServer?.length === 0 && <LoadingIndicator />}
      {answerForServer?.length !== 0 && (
        <article className="flex flex-col gap-4 w-100">
          <div className="p-4 uppercase">
            <TitleMain fechaTotalizacion={fechaTotalizacion} />
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-4 w-1/2">
              <div className="flex flex-row gap-4 w-100 bg-sky-100 px-10 py-4 rounded-xl">
                <div className="flex flex-col justify-center py-4 gap-2 w-1/2">
                  <p className="text-2xl font-bold">Estado de Recuento</p>

                  <div className="pl-2">
                    <div className="flex flex-row">
                      <div className="w-2/3">
                        <p>Mesas esperadas:</p>
                      </div>
                      <div className="w-2/6">
                        <span className="inline-block font-bold">
                          <p>{estadoRecuento.mesasEsperadas}</p>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-2/3">
                        <p className="inline-block">Mesas totalizadas:</p>
                      </div>
                      <div className="w-2/6">
                        <span className="inline-block font-bold">
                          {estadoRecuento.mesasTotalizadas}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-2/3">
                        <p className="inline-block">Porcentaje Totalizado:</p>
                      </div>
                      <div className="w-2/6">
                        <span className="inline-block font-bold">
                          {estadoRecuento.mesasTotalizadas}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center align-center py-10">
                  <PorcentPieChart
                    dataPieLabels={["si", "no"]}
                    dataPieValues={[
                      estadoRecuento.mesasTotalizadasPorcentaje,
                      100 - estadoRecuento.mesasTotalizadasPorcentaje,
                    ]}
                    dataPieTitle="Porcentaje totalizado"
                  />
                </div>
              </div>
              <div className=" flex flex-row gap-4 w-100 bg-sky-100 px-10 py-4 rounded-xl">
                <div className="flex flex-col justify-center py-4 gap-2 w-1/2">
                  <p className="text-2xl font-bold">Totalizaciones</p>

                  <div className="pl-2">
                    <div className="flex flex-row">
                      <div className="w-2/3">
                        <p>Cantidad De Electores:</p>
                      </div>
                      <div className="w-2/6">
                        <span className="inline-block font-bold">
                          <p>{estadoRecuento.cantidadElectores}</p>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-2/3">
                        <p className="inline-block">Cantidad de Votantes:</p>
                      </div>
                      <div className="w-2/6">
                        <span className="inline-block font-bold">
                          {estadoRecuento.cantidadVotantes}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-2/3">
                        <p className="inline-block">Participacion:</p>
                      </div>
                      <div className="w-2/6">
                        <span className="inline-block font-bold">
                          {estadoRecuento.participacionPorcentaje}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center align-center py-10">
                  <PorcentPieChart
                    dataPieLabels={["si", "no"]}
                    dataPieValues={[
                      estadoRecuento.participacionPorcentaje,
                      100 - estadoRecuento.participacionPorcentaje,
                    ]}
                    dataPieTitle="Porcentaje totalizado"
                  />
                </div>
              </div>

              <div className=" flex flex-row gap-4 w-100 bg-sky-100 px-10 py-4 rounded-xl">
                <div className="flex flex-col justify-center py-4 gap-2 w-1/2">
                  <p className="text-2xl font-bold inline-block">
                    Valores Totalizados Otros
                  </p>

                  <div className="pl-2">
                    <div className="flex flex-row">
                      <div className="w-2/3">
                        <p>Votos Nulos:</p>
                      </div>
                      <div className="w-2/6">
                        <span className="inline-block font-bold">
                          <p>{valoresTotalizadosOtros.votosNulos || 0}</p>
                        </span>
                      </div>
                      <div className="w-2/6">
                        <span className="inline-block font-bold">
                          <p>
                            {valoresTotalizadosOtros.votosNulosPorcentaje || 0}%
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-2/3">
                        <p className="inline-block"> Votos en Blanco: </p>
                      </div>
                      <div className="w-2/6">
                        <span className="inline-block font-bold">
                          {valoresTotalizadosOtros.votosEnBlanco || 0}
                        </span>
                      </div>
                      <div className="w-2/6">
                        <span className="inline-block font-bold">
                          {valoresTotalizadosOtros.votosEnBlancoPorcentaje || 0}
                          %
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-2/3">
                        <p className="inline-block"> Votos Impugnados:</p>
                      </div>
                      <div className="w-2/6">
                        <span className="inline-block font-bold">
                          {valoresTotalizadosOtros.votosRecurridosComandoImpugnados ||
                            0}
                        </span>
                      </div>
                      <div className="w-2/6">
                        <span className="inline-block font-bold">
                          {valoresTotalizadosOtros.votosRecurridosComandoImpugnadosPorcentajes ||
                            0}
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center align-center py-10">
                  <PorcentPieChart
                    dataPieLabels={["a", "b", "c"]}
                    dataPieValues={[
                      valoresTotalizadosOtros.votosNulosPorcentaje,
                      valoresTotalizadosOtros.votosRecurridosComandoImpugnadosPorcentajes,
                      valoresTotalizadosOtros.votosRecurridosComandoImpugnadosPorcentaje,
                    ]}
                    dataPieTitle="Porcentaje totalizado"
                  />
                </div>
              </div>
            </div>
            <div className="flex border-4 w-1/2 p-14">
              <PieChartGeneral
                dataPieTitle={"Porcentaje de votos"}
                dataPieLabels={dataPieLabels}
                dataPieValues={dataPieValues}
              />
            </div>
          </div>
        </article>
      )}
    </section>
  );
}
