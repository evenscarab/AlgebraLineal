import { ClassData } from '../types';

export const clase12: ClassData = {
  id: 12,
  title: 'Independencia Lineal',
  description: 'Definición de conjuntos linealmente independientes, relación con sistemas homogéneos y teoremas principales.',
  
  // Convertimos toda tu clase de LaTeX a Markdown fluido + HTML 
  content: String.raw`
### Definición

Se dice que un conjunto de vectores $\{\mathbf{v}_1, \ldots, \mathbf{v}_p\}$ en $\mathbb{R}^p$ es **linealmente independiente** si la ecuación vectorial:

$$
x_1\mathbf{v}_1 + x_2\mathbf{v}_2 + \cdots + x_p\mathbf{v}_p = \mathbf{0}
$$

solo tiene la solución trivial $x_1 = x_2 = \cdots = x_p = 0$.

El conjunto $\{\mathbf{v}_1, \ldots, \mathbf{v}_p\}$ es **linealmente dependiente** si existen escalares $c_1, \ldots, c_p$, no todos cero, tales que:

$$
c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_p\mathbf{v}_p = \mathbf{0}
$$

#### Relación con Sistemas Homogéneos
La independencia lineal puede analizarse mediante el sistema homogéneo asociado:

$$
A\mathbf{x} = \mathbf{0}
$$

donde $A = [\mathbf{v}_1 \; \mathbf{v}_2 \; \cdots \; \mathbf{v}_p]$.

* Si el sistema tiene **solución única** (la trivial), los vectores son LI (linealmente independientes).
* Si existen **variables libres**, hay infinitas soluciones y los vectores son LD (linealmente dependientes).

### Determinación mediante Reducción por Filas
1. Forme la matriz $A$ con los vectores como columnas.
2. Reduzca $A$ a su forma escalonada reducida.
3. Si cada columna tiene pivote: **LI**.
4. Si hay columnas sin pivote: **LD**.

<div class="info-box thm mt-6">
  <div class="box-label">Teorema 1</div>

  Un conjunto de vectores $\{\mathbf{v}_1, \ldots, \mathbf{v}_p\}$ es **linealmente dependiente (LD)** *si y solo si* al menos un vector del conjunto es combinación lineal de los demás.

</div>

Para dos vectores $\{\mathbf{v}_1, \mathbf{v}_2\}$ en $\mathbb{R}^n$, se cumple que son **linealmente dependientes** si al menos uno es un múltiplo escalar del otro.

<div class="info-box thm mt-6">
  <div class="box-label">Teorema 2</div>

  Si un conjunto contiene más vectores que entradas en cada vector, entonces el conjunto es linealmente dependiente. Es decir, cualquier conjunto $\{\mathbf{v}_1, \ldots, \mathbf{v}_p\}$ en $\mathbb{R}^n$ es linealmente dependiente si $p > n$.

</div>

> **Nota:** Si un conjunto de vectores $\{\mathbf{v}_1, \ldots, \mathbf{v}_p\} \subset \mathbb{R}^n$ incluye al vector cero ($\mathbf{0}$), el conjunto es automáticamente linealmente dependiente. Esto se debe a que existe una combinación lineal no trivial que satisface la ecuación.

### Aplicación a Sistemas de Ecuaciones
En sistemas no homogéneos $A\mathbf{x} = \mathbf{b}$:
* Si las columnas de $A$ son LI $\rightarrow$ solución única (si existe).
* Si son LD $\rightarrow$ infinitas soluciones o inconsistente.

### Interpretación Geométrica
* **En $\mathbb{R}^2$:** Dos vectores LD están en la misma recta.
* **En $\mathbb{R}^3$:** Tres vectores LD están en el mismo plano.
  `,

  quiz: [],
  exercises: []
};
