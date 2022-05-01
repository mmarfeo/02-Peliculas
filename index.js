const express = require('express');
const app = express();

app.set('view engine','ejs');

/* esto sirve para informale a node como vamos a capturar los datos del formulario */
app.use(express.urlencoded( {extended:false} ));
app.use(express.json()); /* vamos a trabajar con json */

app.use('/', require('./router'));

app.get('/', (req, res)=>{
    res.send('<h3> <a href="/index-film">peliculas</a> </h3><br><h3> <a href="/index-Genero">Generos</a> </h3><br><h3> <a href="/characteres">Personaje</a> </h3><br>')
})
app.listen(3000, ()=>{
    console.log('Server corriendo...')
});
