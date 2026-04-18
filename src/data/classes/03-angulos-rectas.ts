import { ClassData } from '../types';

export const clase03: ClassData = {
  id: 3,
  title: 'Ángulo entre vectores y Rectas',
  description: 'Cálculo de ángulos, ortogonalidad de vectores, y la representación de rectas usando vector normal y vector director.',
  
  content: String.raw`
### Ángulo entre vectores
Para $\mathbf{u}, \mathbf{v} \neq \mathbf{0}$:

$$
\cos \theta = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \|\mathbf{v}\|}, \quad 0 \leq \theta \leq 180^\circ
$$

### Vectores Ortogonales
Dos vectores son **ortogonales**, es decir que son perpendiculares, si su producto punto es cero:

$$
\mathbf{u} \cdot \mathbf{v} = 0
$$

### Vector Normal y Forma Normal de una Recta
Un **vector normal** es un vector perpendicular a una recta. En $\mathbb{R}^2$, si la ecuación general de una recta es $ax + by = c$, el vector $\mathbf{n} = \begin{bmatrix} a \\ b \end{bmatrix}$ es normal a ella. La **forma normal** de la ecuación de una recta $\ell$ en $\mathbb{R}^2$ es:

$$
\mathbf{n} \cdot (\mathbf{x} - \mathbf{p}) = 0 \quad \text{o} \quad \mathbf{n} \cdot \mathbf{x} = \mathbf{n} \cdot \mathbf{p},
$$

donde $\mathbf{p}$ es un punto sobre $\ell$ y $\mathbf{n} \neq \mathbf{0}$ es un vector normal a $\ell$.

### Vector Director y Forma Vectorial y Paramétrica de una Recta
El **vector director** $\mathbf{d}$ define la dirección de la recta y es paralelo a ella. Para cualquier punto $\mathbf{x}$ en la recta, el vector $\mathbf{x} - \mathbf{p}$ es múltiplo escalar de $\mathbf{d}$, es decir, $\mathbf{x} - \mathbf{p} = t\mathbf{d}$ con $t \in \mathbb{R}$. Esta relación permite expresar la **forma vectorial** de la ecuación de una recta $\ell$ en $\mathbb{R}^2$ o $\mathbb{R}^3$ es:

$$
\mathbf{x} = \mathbf{p} + t\mathbf{d},
$$

donde $\mathbf{p}$ es un punto sobre $\ell$ y $\mathbf{d} \neq \mathbf{0}$ es un vector director para $\ell$. La forma **paramétrica** sería:

$$
\begin{cases}
x = p_1 + td_1, \\
y = p_2 + td_2,
\end{cases}
$$ 

<div class="info-box def mt-6">
  <div class="box-label">Comentario</div>

  Las ecuaciones vectorial y paramétrica de una recta no son únicas. Cualquier punto $\mathbf{p}$ en la recta puede elegirse como referencia, y todo vector director $\mathbf{d}$ es un múltiplo escalar de cualquier otro, preservando la misma recta geométrica.

</div>
  `,

  quiz: [],
  exercises: []
};
