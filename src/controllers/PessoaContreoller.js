const database = require('./../models')

class PessoasController {
    static async pegaTodasAsPessoas(req, res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }
    static async pegaUmPessoa(req, res){
        const {id} = req.params;
        try{
            const umaPessoa = await database.Pessoas.findOne({
                where: {id: Number(id)}
            })
            if(umaPessoa === null){
                return res.status(404).json({
                    error: true,
                    status: 404,
                    message: 'Não foi possível encontrar usuário, ou foi deletado'
                })    
            }
            return res.status(200).json(umaPessoa)
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }
    static async criaPessoa(req, res){
        const novaPessoa = req.body;
        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            return res.status(200).json({
                status: 'Adiconado com sucesso.',
                NovaPessoa: novaPessoaCriada
            })
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }
    static async atualizaPessoa(req, res){
        const {id} = req.params
        const novasInfos = req.body;
        try{
            const umaPessoa = await database.Pessoas.findOne({
                where: {id: Number(id)}
            })
            await database.Pessoas.update(novasInfos, {
                where: {id: umaPessoa.id}
            })
            res.status(200).json({
                atualizado: true,
                status: 200,
                message: 'Atualizado com sucesso.'
            })
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }
    static async deletaUmaPessoa(req, res){
        const {id} = req.params;
        try{
            await database.Pessoas.destroy({
                where: {id: id},
            });
            res.status(200).json({
                delete: true,
                status: 200,
                message: 'Deletado com sucesso.'
            })
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }
}

module.exports = PessoasController;