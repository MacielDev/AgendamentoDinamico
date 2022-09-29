import { eventosAsync } from './seletores/index';
import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: eventosAsync // utilizando o seletor que realiza a busca dos eventos de nossa "API do Json server"
});

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key: 'filtroDeEventos',
  default: {}
})
