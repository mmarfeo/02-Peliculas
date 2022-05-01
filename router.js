/* En este modulo definimos todas las rutas */

const express = require('express');
const router = express.Router();

const conexion = require('./database/db')

/* router.get('/pelicula',(req,res)=>{
    res.send('PELICULA');
}) */

/* router.get('/'){
    res.render('inicio.html');
} */

/* Film */

router.get('/index-film',(req,res)=>{
    
    conexion.query('SELECT * FROM film', (error, results) =>{
        if(error){
            throw error;
        }else{
            res.render('index-film', {results: results}); /* Los resultados obtenidos por la consulta en la fila 14, se envia al index */
        }
    })
})

/* Aca creamos la ruta para generar registros */
router.get('/create-film',(req,res) =>{
    res.render('create-film'); /* aca hacemos referencia a la plantilla create dentro de views */
})

/* Aca creamos la ruta para editar las peliculas */
router.get('/edit-film/:id',(req,res) =>{
    const id = req.params.id;
    conexion.query('SELECT * FROM film WHERE Id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit-film.ejs',{film: results[0]}); /* aca hacemos referencia a la plantilla edit dentro de views */
        }
    });
});

router.get('/delete-film/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM film WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/index-film');         
        }
    })
});


/* Genero */
router.get('/index-Genero',(req,res)=>{
    
    conexion.query('SELECT * FROM genero', (error, results) =>{
        if(error){
            throw error;
        }else{
            res.render('index-Genero', {results: results}); /* Los resultados obtenidos por la consulta en la fila 14, se envia al index */
        }
    })
})

/* Aca creamos la ruta para generar registros */
router.get('/create-Genero',(req,res) =>{
    res.render('create-Genero'); /* aca hacemos referencia a la plantilla create dentro de views */
})

/* Aca creamos la ruta para editar las peliculas */
router.get('/edit-Genero/:id',(req,res) =>{
    const id = req.params.id;
    conexion.query('SELECT * FROM genero WHERE Id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit-Genero.ejs',{Genero: results[0]}); /* aca hacemos referencia a la plantilla edit dentro de views */
        }
    });
});

router.get('/delete-Genero/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM genero WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/index-Genero');         
        }
    })
});


/* Personajes */
router.get('/characteres',(req,res)=>{
    
    conexion.query('SELECT * FROM personajes', (error, results) =>{
        if(error){
            throw error;
        }else{
            res.render('characteres', {results: results}); /* Los resultados obtenidos por la consulta en la fila 14, se envia al index */
        }
    })
})

/* Aca creamos la ruta para generar registros */
router.get('/create-Personaje',(req,res) =>{
    res.render('create-Personaje'); /* aca hacemos referencia a la plantilla create dentro de views */
})

/* Aca creamos la ruta para editar las peliculas */
router.get('/edit-Personaje/:id',(req,res) =>{
    const id = req.params.id;
    conexion.query('SELECT * FROM personajes WHERE Id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit-Personaje.ejs',{Personaje: results[0]}); /* aca hacemos referencia a la plantilla edit dentro de views */
        }
    });
});

router.get('/delete-Personaje/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM personajes WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/index-Personaje');         
        }
    })
});


const crud = require('./controllers/crud');
const res = require('express/lib/response');
router.post('/save-film',crud.saveFilm);
router.post('/update-film', crud.updateFilm);

router.post('/save-genero',crud.saveGenero);
router.post('/update-genero', crud.updateGenero);

router.post('/save-Personaje',crud.savePersonaje);
router.post('/update-Personaje', crud.updatePersonaje);

module.exports = router;