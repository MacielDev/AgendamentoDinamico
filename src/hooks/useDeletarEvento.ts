import { IEvento } from '../interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { listaDeEventosState } from '../state/atom';

const useDeletarEvento = () => {
    const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    return (evento : IEvento) =>{
      setListaEventos((listaAntiga) => [
        ...listaAntiga.filter(evt => evt.id !== evento.id)
      ])
    }
}
export default useDeletarEvento;