import express from "express";
import {
  getAlumnos,
  getAlumnoByNumcuenta,
  createAlumno,
  updateAlumno,
  deleteAlumno,
} from "../4I-Examen-API/alumnoCon.js";

const router = express.Router();

router.get("/", getAlumnos);
router.get("/:numcuenta", getAlumnoByNumcuenta);
router.post("/", createAlumno);
router.put("/:numcuenta", updateAlumno);
router.delete("/:numcuenta", deleteAlumno);

export default router;
