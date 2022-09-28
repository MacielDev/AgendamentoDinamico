import { IEvento } from './../interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { listaDeEventosState } from '../state/atom';
import { obterId } from '../util';

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (evento : IEvento) => {
    const hoje = new Date();
    if(evento.inicio < hoje){
      throw new Error ("Eventos não podem ser cadastrados com data menor do que a data atual");
    }
    evento.id = obterId();
    return setListaDeEventos(listaAntiga => [...listaAntiga,evento])
  }
}

export default useAdicionarEvento;