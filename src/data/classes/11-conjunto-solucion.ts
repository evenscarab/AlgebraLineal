import { ClassData } from '../types';

export const clase11: ClassData = {
  id: 11,
  title: 'Conjunto Solución',
  description: 'Análisis de los sistemas lineales homogéneos y no homogéneos y su descripción e interpretación en formato paramétrico vectorial.',
  
  content: String.raw`
### Sistemas Lineales Homogéneos
Un sistema lineal se llama **homogéneo** si puede escribirse como:

$$
A\mathbf{x} = \mathbf{0}
$$

donde $A$ es una matriz $m \times n$ y $\mathbf{0}$ es el vector cero en $\mathbb{R}^m$. 
Este sistema siempre tiene la **solución trivial** $\mathbf{x} = \mathbf{0}$. La pregunta clave es si existen **soluciones no triviales** (vectores $\mathbf{x} \neq \mathbf{0}$ que satisfacen la ecuación).

<div class="info-box thm mt-6">
  <div class="box-label">Existencia de soluciones no triviales</div>

  La ecuación homogénea $A\mathbf{x} = \mathbf{0}$ tiene soluciones no triviales si y solo si existe al menos una **variable libre** en el sistema. Esto ocurre cuando el número de columnas de $A$ es mayor que el número de pivotes.

</div>

#### Estructura del Conjunto Solución
El conjunto solución de $A\mathbf{x} = \mathbf{0}$ puede expresarse explícitamente como:

$$
\text{Gen}\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_p\}
$$

donde $\mathbf{v}_i$ son vectores asociados a las variables libres. Su geometría depende del número de variables libres:
* **0 variables libres**: Solo la solución trivial ($\text{Gen}\{\mathbf{0}\}$).
* **1 variable libre**: Recta que pasa por el origen.
* **2 o más variables libres**: Plano/hiperplano que pasa por el origen.

### Forma Vectorial Paramétrica
La solución de un sistema homogéneo $A\mathbf{x} = \mathbf{0}$ se puede expresar explícitamente como una combinación lineal de vectores, lo que se conoce como **forma vectorial paramétrica**. Esta representación describe geométricamente el conjunto solución:

* **Recta**: Si hay **1 variable libre**, el conjunto solución es una recta que pasa por el origen:

$$
\mathbf{x} = t\mathbf{v} \quad (t \in \mathbb{R})
$$

* **Plano**: Si hay **2 variables libres**, el conjunto solución es un plano que pasa por el origen:

$$
\mathbf{x} = s\mathbf{u} + t\mathbf{v} \quad (s, t \in \mathbb{R})
$$

* **Si hay más de dos variables libres**, el conjunto solución se expresa:

$$
\mathbf{x} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_k\mathbf{v}_k
$$

donde $c_i$ son parámetros libres (escalares) y $\mathbf{v}_i$ son vectores fijos que generan el espacio solución.

### Soluciones de Sistemas No Homogéneos

Sea $A\mathbf{x} = \mathbf{b}$ un sistema consistente con solución particular $\mathbf{p}$. El conjunto solución de $A\mathbf{x} = \mathbf{b}$ es:

$$
\mathbf{x} = \mathbf{p} + \mathbf{v}_h \quad \text{donde } \mathbf{v}_h \text{ es solución de } A\mathbf{x} = \mathbf{0}.
$$

Esto significa que el conjunto solución se obtiene **trasladando** el espacio solución homogéneo ($A\mathbf{x} = \mathbf{0}$) mediante el vector $\mathbf{p}$.

#### Pasos para Escribir el Conjunto Solución

1. **Reducción**: Lleve la matriz aumentada $[A\;|\;\mathbf{b}]$ a su forma escalonada reducida.
2. **Identificación**: Exprese variables básicas en términos de variables libres.
3. **Vectorización**: Escriba la solución general $\mathbf{x}$ como:

$$
\mathbf{x} = \mathbf{p} + t_1\mathbf{v}_1 + \cdots + t_k\mathbf{v}_k \quad (t_i \in \mathbb{R}),
$$

donde $\mathbf{p}$ es una solución particular y $\mathbf{v}_i$ son soluciones de $A\mathbf{x} = \mathbf{0}$.
  `,

  quiz: [],
  exercises: []
};
