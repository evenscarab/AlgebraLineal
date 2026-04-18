import { ClassData } from '../types';

export const clase10: ClassData = {
  id: 10,
  title: 'Teorema de Existencia y Unicidad',
  description: 'Teorema matricial de consistencia de un sistema lineal, número de pivotes y soluciones paramétricas.',
  
  content: String.raw`
### Descripciones Paramétricas
El conjunto solución de un sistema consistente con variables libres se expresa como:

$$
\mathbf{x} = \mathbf{p} + t_1\mathbf{v}_1 + \cdots + t_k\mathbf{v}_k \quad (t_i \in \mathbb{R})
$$

donde $\mathbf{p}$ es una solución particular y $\mathbf{v}_i$ son soluciones del sistema homogéneo.

<div class="info-box thm mt-6">
  <div class="box-label">Teorema de Existencia y Unicidad</div>

  Un sistema lineal es **consistente** si y solo si la columna más a la derecha de la matriz aumentada **no es una columna pivote**. Equivalentemente:
  
  * No existen filas del tipo $[0 \; \cdots \; 0 \; | \; b]$ con $b \neq 0$.
  * Si es consistente:
    * **i.** Solución única: Sin variables libres.
    * **ii.** Infinitas soluciones: Al menos una variable libre.

</div>
  `,

  quiz: [],
  exercises: []
};
