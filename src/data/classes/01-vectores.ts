import { ClassData } from '../types';

export const clase01: ClassData = {
  id: 1,
  title: 'Vectores en ℝⁿ, suma y ponderación',
  description: 'Introducción a los vectores en $\\mathbb{R}^n$, conceptos de magnitud, igualdades, suma vectorial, ponderación por escalar y sus propiedades algebraicas fundamentales.',
  
  content: String.raw`
Un **vector** es un segmento de recta dirigido que corresponde a un desplazamiento desde un punto $A$ hasta otro punto $B$. El **vector** de $A$ a $B$ se denota mediante $\overrightarrow{AB} = B - A$. Se puede representar simplemente mediante una sola letra minúscula negrita como $\mathbf{v}$. Existen 2 notaciones:

$$
\mathbf{v} = \begin{bmatrix} 3 \\ 2 \end{bmatrix} \quad \text{(vector columna)}, \quad \mathbf{v} = [3, 2] \quad \text{(vector renglón)}.
$$

El conjunto de todos **los vectores con dos componentes se denota** $\mathbb{R}^2$. Un conjunto de todos los vectores de $n$ componentes se denota $\mathbb{R}^n$.

Dos vectores son **iguales** si y solo si sus componentes correspondientes coinciden. Formalmente, para $\mathbf{u} = [u_1, u_2, \ldots, u_n]$ y $\mathbf{v} = [v_1, v_2, \ldots, v_n]$:

$$
\mathbf{u} = \mathbf{v} \quad \Leftrightarrow \quad u_1 = v_1,\ u_2 = v_2,\ \ldots,\ u_n = v_n.
$$

### Suma de vectores
La suma de vectores se realiza componente a componente. Si $\mathbf{u} = [u_1, u_2]$ y $\mathbf{v} = [v_1, v_2]$ en $\mathbb{R}^2$, entonces:

$$
\mathbf{u} + \mathbf{v} = [u_1 + v_1,\ u_2 + v_2].
$$

### Multiplicación por escalar
La multiplicación de un vector por un escalar (un número real) se realiza multiplicando cada componente del vector por dicho escalar. Si $\mathbf{v} = [v_1, v_2]$ en $\mathbb{R}^2$ y $c$ es un escalar, entonces:

$$
c\mathbf{v} = [c \cdot v_1,\ c \cdot v_2].
$$

La multiplicación por escalar **escala** el vector:
* Si $c > 1$, el vector se alarga.
* Si $0 < c < 1$, el vector se acorta.
* Si $c < 0$, el vector cambia de dirección.

<div class="info-box thm mt-6">
  <div class="box-label">Propiedades algebraicas de los vectores</div>

  Para vectores $\mathbf{u}, \mathbf{v}, \mathbf{w} \in \mathbb{R}^n$ y escalares $c, d \in \mathbb{R}$:
  1. **Conmutatividad:** $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$.
  2. **Asociatividad:** $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$.
  3. **Elemento neutro:** $\mathbf{u} + \mathbf{0} = \mathbf{u}$ (donde $\mathbf{0} = [0, 0, \ldots, 0]$).
  4. **Inverso aditivo:** $\mathbf{u} + (-\mathbf{u}) = \mathbf{0}$.
  5. **Distributividad:** $c(\mathbf{u} + \mathbf{v}) = c\mathbf{u} + c\mathbf{v}$.
  6. **Multiplicación por escalar:** $(c + d)\mathbf{u} = c\mathbf{u} + d\mathbf{u}$.

</div>
  `,

  quiz: [],
  exercises: []
};
