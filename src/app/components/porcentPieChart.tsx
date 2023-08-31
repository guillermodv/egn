"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  dataPieLabels: string[];
  dataPieTitle: string;
  dataPieValues: number[];
}

export function PorcentPieChart({
  dataPieLabels,
  dataPieTitle,
  dataPieValues,
}: PieChartProps) {
  const dataPieChunk = {
    labels: dataPieLabels,
    datasets: [
      {
        label: dataPieTitle,
        data: dataPieValues,
        backgroundColor: ["rgba(100, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(100, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={dataPieChunk} />;
}
