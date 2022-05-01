const conexion = require('../database/db');

exports.saveFilm = (req,res) =>{
    const titulo = req.body.titulo;
    const genero = req.body.genero;
    /* const fecha_creacion = req.body.fecha_creacion; */
    const calificacion = req.body.calificacion;
    conexion.query('INSERT INTO film SET ?', {titulo: titulo, genero:genero,calificacion:calificacion}, (error, results)=> {
        if(error){
            console.log(error);
        } else{
            res.redirect('/index-film');
        }
    });
};

exports.updateFilm = (req,res) => {
    const id = req.body.id;
    const genero = req.body.genero;
    const image = req.body.image;
    const titulo = req.body.titulo;
    const calificacion = req.body.calificacion;
    conexion.query('UPDATE film SET ? WHERE id = ?',[{genero:genero, image:image, titulo:titulo, calificacion:calificacion}, id], (error, results)=> {
        if(error){
            console.log(error);
        } else{
            res.redirect('/index-film');
        }
    });
};


/* Genero */
exports.saveGenero = (req,res) =>{
    const imagen = req.body.imagen;
    const genero = req.body.genero;
    /* const fecha_creacion = req.body.fecha_creacion; */
    conexion.query('INSERT INTO genero SET ?', {imagen: imagen, genero:genero}, (error, results)=> {
        if(error){
            console.log(error);
        } else{
            res.redirect('/index-Genero');
        }
    });
};

exports.updateGenero = (req,res) => {
    const id = req.body.id;
    const imagen = req.body.imagen;
    const genero = req.body.genero;
    conexion.query('UPDATE genero SET ? WHERE id = ?',[{imagen: imagen, genero:genero}, id], (error, results)=> {
        if(error){
            console.log(error);
        } else{
            res.redirect('/index-Genero');
        }
    });
};


/* Personajes */
exports.savePersonaje = (req,res) =>{
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const peso = req.body.peso;
    /* const fecha_creacion = req.body.fecha_creacion; */
    const calificacion = req.body.calificacion;
    conexion.query('INSERT INTO personajes SET ?', {nombre: nombre, edad:edad,peso:peso}, (error, results)=> {
        if(error){
            console.log(error);
        } else{
            res.redirect('/characteres');
        }
    });
};

exports.updatePersonaje = (req,res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const peso = req.body.peso;
    conexion.query('UPDATE personajes SET ? WHERE id = ?',[{nombre: nombre, edad:edad,peso:peso}, id], (error, results)=> {
        if(error){
            console.log(error);
        } else{
            res.redirect('/characteres');
        }
    });
};