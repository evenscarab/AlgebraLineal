import { ClassData } from '../types';

export const clase07: ClassData = {
  id: 7,
  title: 'Ecuaciones Matricial y Vectorial',
  description: 'Estructura matemática de las ecuaciones vectoriales, el concepto de Conjunto Generado (Gen), su descripción geométrica y el mapeo a Ecuación Matricial.',
  
  content: String.raw`
### Ecuación Vectorial y Combinaciones Lineales
Una **ecuación vectorial** tiene la forma:

$$
x_1 \mathbf{v}_1 + x_2 \mathbf{v}_2 + \cdots + x_p \mathbf{v}_p = \mathbf{b}
$$

donde $\mathbf{v}_1, \ldots, \mathbf{v}_p$ son vectores en $\mathbb{R}^n$, $x_i$ son escalares, y $\mathbf{b}$ es un vector. Resolver esta ecuación equivale a encontrar escalares $x_1, \ldots, x_p$ que satisfagan la combinación lineal.

#### Conjunto Generado (Gen)
El conjunto de todas las combinaciones lineales de $\mathbf{v}_1, \ldots, \mathbf{v}_p$ se denota como Gen$\{\mathbf{v}_1, \ldots, \mathbf{v}_p\}$. Formalmente:

$$
\text{Gen}\{\mathbf{v}_1, \ldots, \mathbf{v}_p\} = \left\{ c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_p\mathbf{v}_p \mid c_i \in \mathbb{R} \right\}
$$

Un vector $\mathbf{b}$ pertenece a Gen$\{\mathbf{v}_1, \ldots, \mathbf{v}_p\}$ si la ecuación vectorial asociada tiene solución.

### Descripción Geométrica del Gen
* **Gen**$\{\mathbf{v}\}$: Si $\mathbf{v} \neq \mathbf{0}$, es la recta en $\mathbb{R}^n$ que pasa por el origen y $\mathbf{v}$.
* **Gen**$\{\mathbf{u}, \mathbf{v}\}$: Si $\mathbf{u}$ y $\mathbf{v}$ no son colineales, es el plano en $\mathbb{R}^3$ que contiene a $\mathbf{u}$, $\mathbf{v}$ y al origen.

### Ecuación Matricial $A\mathbf{x} = \mathbf{b}$
Dada una matriz $A$ de $m \times n$ con columnas $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_n$, y un vector $\mathbf{x} = \begin{bmatrix} x_1 \\ \vdots \\ x_n \end{bmatrix}$, 
la ecuación matricial se define como:

$$
A\mathbf{x} = 
\begin{bmatrix}
\mathbf{a}_1 & \mathbf{a}_2 & \cdots & \mathbf{a}_n
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2 \\
\vdots \\
x_n
\end{bmatrix}
= x_1\mathbf{a}_1 + x_2\mathbf{a}_2 + \cdots + x_n\mathbf{a}_n
$$

Esta ecuación es equivalente al sistema lineal cuya matriz aumentada es $[A \quad \mathbf{b}]$.

<div class="info-box thm mt-6">
  <div class="box-label">Teorema</div>

  Sea $A$ una matriz de $m \times n$. Los siguientes enunciados son lógicamente equivalentes. Es decir, para una $A$ particular, todos los enunciados son verdaderos o todos son falsos:

  1. Para cada $\mathbf{b} \in \mathbb{R}^m$, la ecuación $A\mathbf{x} = \mathbf{b}$ tiene solución.
  2. Todo $\mathbf{b} \in \mathbb{R}^m$ es combinación lineal de las columnas de $A$.
  3. Las columnas de $A$ generan $\mathbb{R}^m$.
  4. $A$ tiene una **posición pivote** en cada fila.

</div>

<div class="info-box thm mt-6">
  <div class="box-label">Propiedades del Producto Matriz-Vector</div>

  Para $A \in \mathbb{R}^{m \times n}$, $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$, y $c \in \mathbb{R}$:
  1. $A(\mathbf{u} + \mathbf{v}) = A\mathbf{u} + A\mathbf{v}$
  2. $A(c\mathbf{u}) = c(A\mathbf{u})$

</div>
  `,

  quiz: [],
  exercises: []
};
