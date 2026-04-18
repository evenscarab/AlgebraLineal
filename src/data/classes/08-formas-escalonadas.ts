import { ClassData } from '../types';

export const clase08: ClassData = {
  id: 8,
  title: 'Formas Escalonadas',
  description: 'Definiciones de variables libres y básicas en un sistema de ecuaciones y las condiciones de la forma escalonada de una matriz.',
  
  content: String.raw`
### Conceptos Básicos
* **Fila/Columna no nula**: Contiene al menos un elemento diferente de cero.
* **Entrada principal**: Primer elemento no nulo (más a la izquierda) en una fila no nula.

### Formas Escalonadas
* **Forma escalonada**:
  1. Todas las filas no nulas están arriba de las filas cero.
  2. Cada entrada principal está en una columna a la derecha de la entrada principal de la fila superior.
  3. Todas las entradas debajo de una entrada principal son cero.

* **Forma escalonada reducida**:
  1. Cumple las propiedades de la forma escalonada.
  2. Todas las entradas principales son 1.
  3. Cada 1 principal es la única entrada no nula en su columna.

### Posiciones Pivote
* **Posición pivote**: Ubicación en $A$ que corresponde a un 1 principal en su forma escalonada reducida.
* **Columna pivote**: Columna de $A$ que contiene una posición pivote.
  `,

  quiz: [],
  exercises: []
};
