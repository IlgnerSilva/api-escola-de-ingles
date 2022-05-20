const {Router} = require('express');
const router = Router();
const PessoasController = require('./../controllers/PessoaContreoller');

router.get('/', PessoasController.pegaTodasAsPessoas);
router.get('/:id', PessoasController.pegaUmPessoa);
router.post('/add-nova-pessoa', PessoasController.criaPessoa);
router.put('/atualiza-pessoa/:id', PessoasController.atualizaPessoa)
router.delete('/deleta-pessoa/:id', PessoasController.deletaUmaPessoa)

module.exports = app => app.use('/pessoas', router);