import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../../classes/controle/ControleEditora';

/*
Controle das editoras para recebimento do nome da editoras e conversão em number para o código
*/

const editoras = new ControleEditora();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {

  const { codEditora } = req.query;
    res.status(200).json(editoras.getNomeEditora(Number(codEditora)));

};
