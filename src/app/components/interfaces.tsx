export interface GeneralResult {
  fechaTotalizacion: string;
  estadoRecuento: EstadoRecuento;
  valoresTotalizadosPositivos: ValoresTotalizadosPositivo[];
  valoresTotalizadosOtros: ValoresTotalizadosOtros;
}

export interface EstadoRecuento {
  mesasEsperadas: number;
  mesasTotalizadas: number;
  mesasTotalizadasPorcentaje: number;
  cantidadElectores: number;
  cantidadVotantes: number;
  participacionPorcentaje: number;
}

export interface ValoresTotalizadosOtros {
  votosNulos: number;
  votosNulosPorcentaje: number;
  votosEnBlanco: number;
  votosEnBlancoPorcentaje: number;
  votosRecurridosComandoImpugnados: number;
  votosRecurridosComandoImpugnadosPorcentaje: number;
}

export interface ValoresTotalizadosPositivo {
  idAgrupacion: string;
  nombreAgrupacion: string;
  votos: number;
  votosPorcentaje: number;
  idAgrupacionTelegrama: string;
  urlLogo: string;
  listas: Lista[];
}

export interface Lista {
  nombre: string;
  numero: string;
  votos: number;
}
