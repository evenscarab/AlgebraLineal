import { ClassData } from '../types';

export const clase04: ClassData = {
  id: 4,
  title: 'Planos',
  description: 'Representación de planos en $\\mathbb{R}^3$ y tablas resumen de formas de representación lineal en múltiples dimensiones.',
  
  content: String.raw`
### Forma Normal de un Plano en $\mathbb{R}^3$

Al extender el concepto de recta en $\mathbb{R}^2$ a $\mathbb{R}^3$, la ecuación lineal $ax + by + cz = d$ no define una recta, sino un **plano**. Un plano en $\mathbb{R}^3$ queda determinado al especificar un punto $\mathbf{p}$ sobre él y un vector normal $\mathbf{n} \neq \mathbf{0}$. La relación geométrica fundamental es que todo vector $\mathbf{x} - \mathbf{p}$ (desde $\mathbf{p}$ hasta un punto $\mathbf{x}$ en el plano) es ortogonal a $\mathbf{n}$. La **forma normal** de la ecuación de un plano $\mathcal{P}$ en $\mathbb{R}^3$ es:  

$$
\mathbf{n} \cdot (\mathbf{x} - \mathbf{p}) = 0 \quad \text{o equivalentemente} \quad \mathbf{n} \cdot \mathbf{x} = \mathbf{n} \cdot \mathbf{p},
$$

donde $\mathbf{p}$ es un punto específico sobre $\mathcal{P}$ y $\mathbf{n} = \begin{bmatrix} a & b & c \end{bmatrix}$ es un vector normal al plano. En componentes, esto corresponde a la **forma general** $ax + by + cz = d$.

### Forma Vectorial y Paramétrica de un Plano en $\mathbb{R}^3$

Un plano en $\mathbb{R}^3$ puede describirse mediante un punto $\mathbf{p}$ y dos vectores directores no paralelos $\mathbf{u}$ y $\mathbf{v}$, que definen las direcciones del plano. La **forma vectorial** de la ecuación del plano es:  

$$
\mathbf{x} = \mathbf{p} + s\mathbf{u} + t\mathbf{v}, \quad s, t \in \mathbb{R},
$$

donde $\mathbf{u}$ y $\mathbf{v}$ son vectores no colineales o paralelos. En componentes, esto genera las **ecuaciones paramétricas**:  

$$
\begin{cases}
x = p_1 + su_1 + tv_1, \\
y = p_2 + su_2 + tv_2, \\
z = p_3 + su_3 + tv_3,
\end{cases}
$$

que cubren todos los puntos del plano al variar $s$ y $t$.  

<br/>

<div class="text-center text-sm font-semibold mb-3 tracking-widest uppercase text-ink-3">Tabla 1: Ecuaciones de rectas en ℝ²</div>

| Normal | General | Vectorial | Paramétrica |
| :--- | :--- | :--- | :--- |
| $\mathbf{n} \cdot (\mathbf{x} - \mathbf{p}) = 0$ | $ax + by = c$ | $\mathbf{x} = \mathbf{p} + t\mathbf{d}$ | $\begin{cases} x = p_1 + td_1 \\ y = p_2 + td_2 \end{cases}$ |

<br/>

<div class="text-center text-sm font-semibold mb-3 tracking-widest uppercase text-ink-3">Tabla 2: Rectas y planos en ℝ³</div>

| Tipo | Forma normal | Forma general | Vectorial | Paramétrica |
| :--- | :--- | :--- | :--- | :--- |
| **Recta** | $\begin{cases} \mathbf{n}_1\cdot\mathbf{x} = \mathbf{n}_1\cdot\mathbf{p}_1 \\ \mathbf{n}_2\cdot\mathbf{x} = \mathbf{n}_2\cdot\mathbf{p}_2 \end{cases}$ | $\begin{cases} a_1x + b_1y + c_1z = d_1 \\ a_2x + b_2y + c_2z = d_2 \end{cases}$ | $\mathbf{x} = \mathbf{p} + t\mathbf{d}$ | $\begin{cases} x = p_1 + td_1 \\ y = p_2 + td_2 \\ z = p_3 + td_3 \end{cases}$ |
| **Plano** | $\mathbf{n} \cdot (\mathbf{x} - \mathbf{p}) = 0$ | $ax + by + cz = d$ | $\mathbf{x} = \mathbf{p} + s\mathbf{u} + t\mathbf{v}$ | $\begin{cases} x = p_1 + su_1 + tv_1 \\ y = p_2 + su_2 + tv_2 \\ z = p_3 + su_3 + tv_3 \end{cases}$ |

  `,

  quiz: [],
  exercises: []
};
