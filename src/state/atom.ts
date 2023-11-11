import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltrodeEventos } from "../interfaces/IFiltroDeEventos";
import { eventoAsync } from "./seletores";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: eventoAsync,
});

export const filtroDeEventos = atom<IFiltrodeEventos>({
  key: "filtroDeEventos",
  default: {},
});
