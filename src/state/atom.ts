import { atom } from "recoil"
import { IEvento } from "../interfaces/IEvento"
import { IFiltrodeEventos } from "../interfaces/IFiltroDeEventos"

export const listaDeEventosState = atom<IEvento[]>({
	key: "listaDeEventosState",
	default: [
		{
			descricao: "Estudar React",
			inicio: new Date("2023-08-21T09:00"),
			fim: new Date("2023-08-21T13:00"),
			completo: false,
			id: 1642342747,
		},
		{
			descricao: "Estudar Recoil",
			inicio: new Date("2023-08-26T09:00"),
			fim: new Date("2023-08-26T11:00"),
			completo: false,
			id: 1642342959,
		},
	],
})

export const filtroDeEventos = atom<IFiltrodeEventos>({
	key: 'filtroDeEventos',
	default:{}
})
