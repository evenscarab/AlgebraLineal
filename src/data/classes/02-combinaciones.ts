import { ClassData } from '../types';

export const clase02: ClassData = {
  id: 2,
  title: 'Combinaciones lineales, Generado y Producto Punto',
  description: 'Estudio de combinaciones lineales, el conjunto generado (Gen), el producto escalar, el cálculo de la norma (longitud) y la noción de distancia entre vectores en $\\mathbb{R}^n$.',
  
  content: String.raw`
### Combinaciones lineales y generadores (Gen)
Un vector $\mathbf{v}$ es una **combinación lineal** de los vectores $\mathbf{v_1}, \mathbf{v_2}, \ldots, \mathbf{v_k}$ si existen escalares $c_1, c_2, \ldots, c_k$ tales que:

$$
\mathbf{v} = c_1\mathbf{v_1} + c_2\mathbf{v_2} + \cdots + c_k\mathbf{v_k}.
$$

El **Gen**$\{\mathbf{v_1}, \mathbf{v_2}, \ldots, \mathbf{v_k}\}$ es el conjunto de todas las combinaciones lineales posibles de esos vectores.

### Producto Punto (Producto Escalar)
El **producto punto** de dos vectores $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ es un escalar definido como:

$$
\mathbf{u} \cdot \mathbf{v} = u_1 v_1 + u_2 v_2 + \cdots + u_n v_n
$$

<div class="info-box thm mt-6">
  <div class="box-label">Propiedades del producto punto</div>

  Sean $\mathbf{u}$ y $\mathbf{v}$ vectores en $\mathbb{R}^n$ y sea $c$ un escalar. Entonces:
  * Conmutatividad: $\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}$
  * Distributividad: $\mathbf{u} \cdot (\mathbf{v} + \mathbf{w}) = \mathbf{u} \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{w}$
  * Asociatividad escalar: $(c\mathbf{u}) \cdot \mathbf{v} = c(\mathbf{u} \cdot \mathbf{v})$
  * $\mathbf{u} \cdot \mathbf{u} \geq 0$, y $\mathbf{u} \cdot \mathbf{u} = 0 \Leftrightarrow \mathbf{u} = \mathbf{0}$

</div>

### Norma (Longitud de un vector)
La **norma** de $\mathbf{v} \in \mathbb{R}^n$ es el escalar no negativo definido por:

$$
\|\mathbf{v}\| = \sqrt{\mathbf{v} \cdot \mathbf{v}} = \sqrt{v_1^2 + v_2^2 + \cdots + v_n^2}
$$

<div class="info-box thm mt-6">
  <div class="box-label">Propiedades de la norma</div>

  Sea $\mathbf{v}$ un vector en $\mathbb{R}^n$ y sea $c$ un escalar. Entonces:
  * $\|\mathbf{v}\| = 0 \Leftrightarrow \mathbf{v} = \mathbf{0}$
  * $\|c\mathbf{v}\| = |c| \cdot \|\mathbf{v}\|$

</div>

### Vectores Unitarios
Son vectores con norma (longitud) 1. Se obtienen normalizando:

$$
\mathbf{u} = \frac{\mathbf{v}}{\|\mathbf{v}\|}
$$

Los **vectores estándar** o **vectores canónicos** $\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$ en $\mathbb{R}^n$ son unitarios. Ejemplo en $\mathbb{R}^3$:

$$
\mathbf{e}_1 = \begin{bmatrix}1 \\ 0 \\ 0\end{bmatrix},\quad \mathbf{e}_2 = \begin{bmatrix}0 \\ 1 \\ 0\end{bmatrix},\quad \mathbf{e}_3 = \begin{bmatrix}0 \\ 0 \\ 1\end{bmatrix}
$$

### Distancia entre vectores
La distancia entre $\mathbf{u}$ y $\mathbf{v}$ es:

$$
d(\mathbf{u}, \mathbf{v}) = \|\mathbf{u} - \mathbf{v}\|
$$
  `,

  quiz: [],
  exercises: []
};
