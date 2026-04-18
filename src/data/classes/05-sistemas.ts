import { ClassData } from '../types';

export const clase05_06: ClassData = {
  id: 5,
  displayId: '5 y 6',
  title: 'Sistemas de ecuaciones lineales',
  description: 'Conceptos fundamentales de ecuaciones lineales, sistemas equivalentes, posibles conjuntos de soluciones, representación de matrices y operaciones de fila.',
  
  content: String.raw`
Una **ecuación lineal** en variables $x_1, \ldots, x_n$ tiene la forma:

$$
a_1x_1 + a_2x_2 + \cdots + a_nx_n = b
$$

donde los coeficientes $a_i$ y $b$ son números reales o complejos. Un **sistema lineal** es una colección de ecuaciones lineales con las mismas variables. Una **solución** del sistema es una lista de valores $(s_1, \ldots, s_n)$ que satisfacen todas las ecuaciones, y el conjunto solución es el conjunto de todas las posibles soluciones. Los **sistemas equivalentes** tienen el mismo conjunto solución.

* En $\mathbb{R}^2$: Cada ecuación representa una recta.
  * **Una solución**: Rectas que se intersectan.
  * **Sin solución**: Rectas paralelas.
  * **Infinitas soluciones**: Rectas coincidentes.
* En $\mathbb{R}^3$: Ecuaciones representan planos. La solución puede ser un punto, recta, plano, o inexistente.

<div class="info-box thm mt-6">
  <div class="box-label">Posibles casos</div>

  Un sistema de ecuaciones lineales tiene:
  1. ninguna solución, o
  2. exactamente una solución, o
  3. infinitas soluciones.

</div>

### Representación matricial
Dado el sistema:

$$
\begin{cases}
\begin{aligned}
x_1 - 2x_2 + x_3 &= 0 \\
2x_2 - 8x_3 &= 8 \\
-4x_1 + 5x_2 + 9x_3 &= -9
\end{aligned}
\end{cases}
$$

Se definen dos matrices clave:

* **Matriz de coeficientes** (alineación de variables):

$$
\begin{bmatrix}
\phantom{-}1 & -2 & \phantom{-}1 \\
\phantom{-}0 & \phantom{-}2 & -8 \\
-4 & \phantom{-}5 & \phantom{-}9
\end{bmatrix}
$$

* **Matriz aumentada** (coeficientes + términos constantes):

$$
\begin{bmatrix}
\phantom{-}1 & -2 & \phantom{-}1 & \phantom{-}0 \\
\phantom{-}0 & \phantom{-}2 & -8 & \phantom{-}8 \\
-4 & \phantom{-}5 & \phantom{-}9 & -9
\end{bmatrix}
$$

**Tamaño de matriz**: $m \times n$ (filas $\times$ columnas).

### Solución de un sistema lineal

La estrategia básica es reemplazar un sistema por otro equivalente (es decir, uno con el mismo conjunto solución) y que sea más fácil resolver.

<div class="info-box thm mt-6">
  <div class="box-label">Operaciones Elementales de Fila</div>

  Un sistema de ecuaciones lineales tiene:
  * **Remplazo**: Sumar a una fila un múltiplo de otra.
  * **Intercambio**: Cambiar dos filas.
  * **Escalamiento**: Multiplicar una fila por una constante no nula.

</div>

### Existencia y Unicidad

Hay que hacerse **dos preguntas fundamentales acerca de un sistema lineal**:

1. ¿El sistema es consistente, es decir, al menos existe una solución?
2. Si existe una solución, ¿solo hay una, es decir, la solución es única?
  `,

  quiz: [],
  exercises: []
};
