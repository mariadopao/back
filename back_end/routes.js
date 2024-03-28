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
    const chamado = await getChamadoById(id);
    res.json(chamado);
  } 
  catch (error) {
    return res.status(500).json({ message: error });
  }
});

router.post('/server', async (req, res) => {
  try {
    const { data, nomeCliente, descricao } = req.body;
    await createChamado(data, nomeCliente, descricao);
    return res.status(201).json({ message:'Chamado criado com sucesso!' });
  }
   catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router