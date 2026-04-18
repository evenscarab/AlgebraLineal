import { CourseData } from './types';
import { clase01 } from './classes/01-vectores';
import { clase02 } from './classes/02-combinaciones';
import { clase03 } from './classes/03-angulos-rectas';
import { clase04 } from './classes/04-planos';
import { clase05_06 } from './classes/05-sistemas';
import { clase07 } from './classes/07-ecuaciones';
import { clase08 } from './classes/08-formas-escalonadas';
import { clase09 } from './classes/09-algoritmo-reduccion';
import { clase10 } from './classes/10-teorema-existencia';
import { clase11 } from './classes/11-conjunto-solucion';
import { clase12 } from './classes/12-independencia';
import { clase13 } from './classes/13-transformaciones';
import { clase14 } from './classes/14-transformaciones-matrices';

export const courseData: CourseData = {
  course: {
    title: "Álgebra Lineal",
    code: "MAT1203",
    subtitle: "Ayudantía 2026 Juan Cabrera"
  },
  classes: [
    clase01,
    clase02,
    clase03,
    clase04,
    clase05_06,
    clase07,
    clase08,
    clase09,
    clase10,
    clase11,
    clase12,
    clase13,
    clase14
  ].sort((a, b) => a.id - b.id)
};
