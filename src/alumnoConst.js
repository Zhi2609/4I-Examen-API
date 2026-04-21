import alumnos from "../4I-Examen-API/alumnoDatos.js";

export const getAlumnos = (req, res) => {
  res.json(alumnos);
};

export const getAlumnoByNumcuenta = (req, res) => {
  const { numcuenta } = req.params;
  const alumno = alumnos.find((a) => a.numcuenta === numcuenta);

  if (alumno) {
    res.json(alumno);
  } else {
    res.status(404).json({ error: "Alumno no encontrado" });
  }
};

export const createAlumno = (req, res) => {
  const { numcuenta, nombre, semestre } = req.body;

  if (!numcuenta || !nombre || !semestre) {
    return res
      .status(400)
      .json({ error: "Faltan datos (numcuenta, nombre, semestre)" });
  }

  const nuevoAlumno = { numcuenta, nombre, semestre };
  alumnos.push(nuevoAlumno);

  res
    .status(201)
    .json({ mensaje: "Alumno creado exitosamente", alumno: nuevoAlumno });
};

export const updateAlumno = (req, res) => {
  const { numcuenta } = req.params;
  const { nombre, semestre } = req.body;

  const index = alumnos.findIndex((a) => a.numcuenta === numcuenta);

  if (index !== -1) {
    alumnos[index] = {
      numcuenta: numcuenta,
      nombre: nombre || alumnos[index].nombre,
      semestre: semestre || alumnos[index].semestre,
    };
    if (req.body.numcuenta) alumnos[index].numcuenta = req.body.numcuenta;

    res.json({ mensaje: "Alumno actualizado", alumno: alumnos[index] });
  } else {
    res.status(404).json({ error: "Alumno no encontrado" });
  }
};

export const deleteAlumno = (req, res) => {
  const { numcuenta } = req.params;
  const index = alumnos.findIndex((a) => a.numcuenta === numcuenta);

  if (index !== -1) {
    const alumnoEliminado = alumnos.splice(index, 1);
    res.json({ mensaje: "Alumno eliminado", alumno: alumnoEliminado[0] });
  } else {
    res.status(404).json({ error: "Alumno no encontrado" });
  }
};
