const app = require('./src/index');
const PORT = process.env.PORT || 3333;

app.listen(PORT, ()=>{
    console.log('Servidor Rodando!')
});