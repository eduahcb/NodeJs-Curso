const produto = require('../models/ProdutoModel');

exports.gellAll = async (req, res) => {

    try {
        
        const result = await produto.getAll();
        
        res.format({
            html: () => res.render('produto/produto', { lista: result}),
            json: () => res.status(200).json(result)
        });

    } catch (error) {

        console.log(error);
        
        res.format({
            html: () => res.render('produto/produto', { lista: result}),
            json: () => res.status(500).json(error)
        });
    }
}

exports.post = async (req, res) => {

    try {

        const dado = req.body;

        console.log(dado);

        req.check('titulo', 'campo obrigatório').isLength({ min: 1 });
        req.check('descricao', 'campo obrigatório').isLength({ min: 1 });
        req.check('preco', 'campo obrigatório').isLength({ min: 1 });

        const err = req.validationErrors();

        if (err) {
            
            res.format({
                html: () =>  res.render('produto/form', {erros : err, produto: dado}),
                json:  () => res.status(400).json(err)
            });
            return;
        }

        const result = await produto.post(dado);

        res.format({
            
            html : () => res.redirect('/produtos'),
            json: () => res.json(result)
        })

    } catch (error) {
        console.log(error);
        
        res.json(error);
    }
}