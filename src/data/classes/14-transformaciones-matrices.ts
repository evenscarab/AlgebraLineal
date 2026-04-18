import { ClassData } from '../types';

export const clase14: ClassData = {
  id: 14,
  title: 'Transformaciones Lineales y Matrices',
  description: 'Matriz estándar de una transformación lineal, propiedades de sobreyectividad e inyectividad y sus implicancias matriciales.',
  
  content: String.raw`
Sea $T: \mathbb{R}^n \to \mathbb{R}^m$ una transformación lineal. Entonces, existe una única matriz $A$ de dimensiones $m \times n$ tal que:

$$
T(\mathbf{x}) = A\mathbf{x} \quad \text{para todo } \mathbf{x} \in \mathbb{R}^n.
$$

La matriz $A$ se obtiene tomando como columnas las imágenes de los vectores de la base canónica:

$$
A = \begin{bmatrix} T(e_1) & T(e_2) & \cdots & T(e_n) \end{bmatrix}.
$$

### Propiedades de la Transformación Lineal

* **Sobre:**  
  Una transformación es **sobreyectiva** (o "sobre") cuando **cada vector del espacio destino puede obtenerse como imagen de algún vector del espacio de partida**.  
  En términos de matrices, esto ocurre cuando las columnas de la matriz $A$ **generan el espacio completo** de llegada. Es decir, cualquier vector $\mathbf{b}$ en $\mathbb{R}^m$ se puede escribir como combinación lineal de las columnas de $A$. Esto es lo mismo que decir que el sistema $A\mathbf{x} = \mathbf{b}$ siempre tiene solución, o que nunca es inconsistente.

<div class="w-full flex justify-center py-6">
  <img src="/sobre.svg" class="max-w-[450px] w-full" alt="Diagrama de transformación sobreyectiva" />
</div>

* **Uno a uno:**  
  Una transformación es **uno a uno** (o "inyectiva") cuando **no hay dos vectores distintos que se transformen en el mismo vector**.  
  En otras palabras, $T(\mathbf{x}_1) = T(\mathbf{x}_2)$ implica necesariamente que $\mathbf{x}_1 = \mathbf{x}_2$.
  Esto ocurre cuando las columnas de $A$ son **linealmente independientes**, es decir, ninguna se puede escribir como combinación lineal de las otras.  
  Esto equivale a que el sistema homogéneo $A\mathbf{x} = \mathbf{0}$ solo tenga la solución trivial $\mathbf{x} = \mathbf{0}$. También se puede decir que la matriz $A$ no tiene variables libres (o que sus columnas son independientes).

<div class="w-full flex justify-center py-6">
  <img src="/unoauno.svg" class="max-w-[450px] w-full" alt="Diagrama de transformación inyectiva" />
</div>

<div class="info-box thm mt-6">
  <div class="box-label">Teorema</div>

  Sea $T: \mathbb{R}^n \to \mathbb{R}^m$ una transformación lineal y sea $A$ su matriz estándar. Entonces:

  * $T$ es **sobreyectiva** si las columnas de $A$ generan $\mathbb{R}^m$, es decir, $A\mathbf{x} = \mathbf{b}$ tiene solución para todo $\mathbf{b} \in \mathbb{R}^m$.
  * $T$ es **uno a uno** si las columnas de $A$ son linealmente independientes, es decir, $A\mathbf{x} = \mathbf{0}$ solo tiene la solución trivial.

</div>
  `,

  quiz: [],
  exercises: [
    {
      title: 'Ejercicio Propuesto 35',
      statement: String.raw`
Sea $T: \mathbb{R}^n \to \mathbb{R}^m$ una transformación lineal.  
* Si $T$ mapea $\mathbb{R}^n$ **sobre** $\mathbb{R}^m$, ¿qué relación existe entre $m$ y $n$?
* Si $T$ es **uno a uno**, ¿qué se puede afirmar acerca de $m$ y $n$?
      `.trim(),
      solution: String.raw`
**Caso 1: $T$ es sobre (sobreyectiva)**  

Ser sobreyectiva significa que la ecuación $A\mathbf{x} = \mathbf{b}$ siempre tiene solución para cualquier $\mathbf{b} \in \mathbb{R}^m$. En otras palabras, las columnas de $A$ generan todo el espacio $\mathbb{R}^m$, lo que implica que el **rango de $A$** (el número de columnas linealmente independientes) debe ser $m$.  

Sin embargo, como la matriz $A$ es de tamaño $m \times n$, el máximo número de columnas independientes que puede tener es $n$, es decir, el rango de $A$ es a lo sumo $n$. Esto nos lleva a la condición:

$$
m \leq n
$$

Es decir, el número de ecuaciones $m$ (filas de $A$) no puede superar el número de incógnitas $n$, o de lo contrario habría más ecuaciones que variables, y el sistema podría ser inconsistente.  

**Caso 2: $T$ es uno a uno (inyectiva)**  

Ser inyectiva significa que la ecuación homogénea $A\mathbf{x} = \mathbf{0}$ solo tiene la solución trivial $\mathbf{x} = \mathbf{0}$. Esto ocurre cuando las columnas de $A$ son **linealmente independientes**, lo que implica que el rango de $A$ es $n$.  

Ahora bien, el rango de $A$ también está limitado por el número de filas $m$, ya que una matriz de $m \times n$ no puede tener más de $m$ columnas independientes. Por lo tanto, se debe cumplir:

$$
n \leq m
$$

Es decir, el número de incógnitas $n$ no puede superar el número de ecuaciones $m$, o de lo contrario habría más variables que restricciones y existirían soluciones no triviales en el sistema homogéneo.

**Conclusión Final:**  

* Si $T$ es sobreyectiva, entonces $m \leq n$.
* Si $T$ es inyectiva, entonces $n \leq m$.

Por lo tanto, si $T$ es simultáneamente sobreyectiva e inyectiva, se cumple que:

$$
m = n
$$

Esto significa que la matriz $A$ debe ser cuadrada.
      `.trim()
    }
  ]
};
