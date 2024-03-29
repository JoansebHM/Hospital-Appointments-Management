const conexion = require('../database/db');

exports.save = (req, res) => {
    const Nombre = req.body.Nombre;
    const Correo = req.body.Correo;
    const Celular = req.body.Celular;
    const Edad = req.body.Edad;
    const Genero = req.body.Genero;
    conexion.query('INSERT INTO usuario SET ?', {
        Nombre: Nombre,
        Correo: Correo,
        Celular: Celular,
        Edad: Edad,
        Genero: Genero
     }, (err) => {
        if (err){
            throw err
        }
        res.redirect('/usuario')
     })
}

exports.update = (req, res)=>{
    const IdUsuario = req.body.IdUsuario
    const Nombre = req.body.Nombre;
    const Correo = req.body.Correo;
    const Celular = req.body.Celular;
    const Edad = req.body.Edad;
    const Genero = req.body.Genero;
    conexion.query('UPDATE usuario SET ? WHERE IdUsuario = ?', [{
        Nombre: Nombre,
        Correo: Correo,
        Celular: Celular,
        Edad: Edad,
        Genero: Genero},
        IdUsuario
    ], (err)=>{
        if (err){
            throw err
        }
        res.redirect('/usuario')
    })
}

exports.save_doctor = (req, res) => {
    const NombreUs = req.body.NombreUs;
    const ApellidoUs = req.body.ApellidoUs;
    const CorreoUs = req.body.CorreoUs;
    const Especialidad = req.body.Especialidad;
    conexion.query('INSERT INTO doctores SET ?', {
        NombreUs: NombreUs,
        ApellidoUs: ApellidoUs,
        CorreoUs: CorreoUs,
        Especialidad: Especialidad}, (err) => {
        if (err){
            throw err
        }
        res.redirect('/doctores')
     })
}

exports.update_doctor = (req, res) => {
    const IdDoctor = req.body.IdDoctor;
    const NombreUs = req.body.NombreUs;
    const ApellidoUs = req.body.ApellidoUs;
    const CorreoUs = req.body.CorreoUs;
    const Especialidad = req.body.Especialidad;
    conexion.query('UPDATE doctores SET ? WHERE IdDoctor = ?', [{
        NombreUs: NombreUs,
        ApellidoUs: ApellidoUs,
        CorreoUs: CorreoUs,
        Especialidad: Especialidad,
     }, IdDoctor], (err) => {
        if (err){
            throw err
        }
        res.redirect('/doctores')
     })
}


// exports.save_cita = (req, res) => {
//     const IdDoctor = req.body.IdDoctor;
//     const IdUsuario = req.body.IdUsuario;
    
//     if(IdDoctor && IdUsuario){
//         const FechaCita = req.body.FechaCita;
//         const Lugar = req.body.Lugar;
//         conexion.query('INSERT INTO citas SET ?', {
//             IdDoctor: IdDoctor,
//             IdUsuario: IdUsuario,
//             FechaCita: FechaCita,
//             Lugar: Lugar}, (err) => {
//             if (err){
//                 throw err
//             }
//             res.redirect('/citas')
//          })
//     } else {
//         res.redirect('/citas')
//     }
// }


// exports.update_cita = (req, res) => {
//     const IdCitas = req.body.IdCitas;
//     const ApellidoUs = req.body.ApellidoUs;
//     const CorreoUs = req.body.CorreoUs;
//     const Especialidad = req.body.Especialidad;
//     conexion.query('UPDATE citas SET ? WHERE IdCitas = ?', [{
//         NombreUs: NombreUs,
//         ApellidoUs: ApellidoUs,
//         CorreoUs: CorreoUs,
//         Especialidad: Especialidad,
//      }, IdCitas], (err) => {
//         if (err){
//             throw err
//         }
//         res.redirect('/doctores')
//      })
// }