import React from "react";

interface Props {
  fechaTotalizacion: string;
}

export default function TitleMain({ fechaTotalizacion }: Props) {
  return (
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
  );
}
