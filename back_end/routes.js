import express from 'express'

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const chamados = await getAllChamados();
    return res.json(chamados);
  } 
  catch (error) {
   return res.status(500).json( 'algo deu errado');
  }
});

router.get('/routes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await pool.query`insert into Produtos values(${descricao},${id})`
    return res.status(201).json(ok)
  } 
  catch (error) {
    return res.status(500).json({ message: error });
  }
});

router.post('/server', async (req, res) => {
  try {
    const { data, nomeCliente, descricao } = req.body;
    await pool.query`update Produtos set data = ${data}, nome = ${nome} where id = ${id}`
    return res.status(201).json('atualizado')
  }
   catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router
