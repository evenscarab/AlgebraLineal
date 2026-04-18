import { ClassData } from '../types';

export const clase13: ClassData = {
  id: 13,
  title: 'Transformaciones Lineales',
  description: 'Introducción a transformaciones matriciales y lineales, su relación con la multiplicación matricial y propiedades fundamentales.',
  
  content: String.raw`
La ecuación matricial $A\mathbf{x} = \mathbf{b}$ y la ecuación vectorial $x_1\mathbf{a}_1 + \dots + x_n\mathbf{a}_n = \mathbf{b}$ son equivalentes en términos de notación. Sin embargo, la perspectiva cambia cuando se interpreta $A$ como una **transformación** que actúa sobre $\mathbf{x}$ para producir $\mathbf{b}$. Este enfoque dinámico permite analizar cómo $A$ modifica $\mathbf{x}$, incluso en contextos como gráficos computacionales o procesamiento de señales.

<div class="w-full flex justify-center py-6">
  <img src="/image-1.svg" class="max-w-[500px] w-full" alt="Multiplicación matricial" />
</div>

Una **transformación** de $T: \mathbb{R}^n \to \mathbb{R}^m$ asigna a cada vector $\mathbf{x} \in \mathbb{R}^n$ un vector $T(\mathbf{x}) \in \mathbb{R}^m$, donde:
* $\mathbb{R}^n$ es el **dominio** (vectores de entrada)
* $\mathbb{R}^m$ es el **codominio** (vectores de salida)
* El **rango** es el conjunto de todas las imágenes $T(\mathbf{x})$

<div class="w-full flex justify-center py-6">
  <img src="/image-1-1.svg" class="max-w-[500px] w-full" alt="Diagrama de transformación lineal" />
</div>

### Transformación Matricial
Una **transformación matricial** es un tipo específico de transformación lineal definida mediante multiplicación matricial. Para una matriz $A$ de tamaño $m \times n$, la transformación $T: \mathbb{R}^n \to \mathbb{R}^m$ se define como:

$$
T(\mathbf{x}) = A\mathbf{x}
$$

#### Características clave:
* **Dominio**: $\mathbb{R}^n$ (determinado por el número de columnas de $A$)
* **Codominio**: $\mathbb{R}^m$ (determinado por el número de filas de $A$)
* **Rango**: Conjunto de todas las combinaciones lineales de las columnas de $A$, ya que $T(\mathbf{x}) = A\mathbf{x}$ genera una combinación lineal de dichas columnas.

#### Problemas fundamentales:
* **Existencia**: Dado un vector $\mathbf{b}$, ¿existe algún $\mathbf{x}$ tal que $T(\mathbf{x}) = \mathbf{b}$?
* **Unicidad**: Si existe tal $\mathbf{x}$, ¿es única?

### Transformación Lineal

Una **transformación lineal** $T: \mathbb{R}^n \rightarrow \mathbb{R}^m$ es un mapeo que satisface dos propiedades fundamentales:

<div class="info-box thm mt-6">
  <div class="box-label">Propiedades de las Transformaciones</div>

  1. **Preservación de la suma:** 
  
  $$
  T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v}) \quad \forall \mathbf{u}, \mathbf{v} \in \mathbb{R}^n
  $$
  
  2. **Preservación del producto por escalar:**
  
  $$
  T(c\mathbf{u}) = cT(\mathbf{u}) \quad \forall c \in \mathbb{R}, \mathbf{u} \in \mathbb{R}^n
  $$

</div>

Estas propiedades implican que:

$$
T(c_1\mathbf{v}_1 + \cdots + c_p\mathbf{v}_p) = c_1T(\mathbf{v}_1) + \cdots + c_pT(\mathbf{v}_p)
$$

#### Relación con transformaciones matriciales
* Toda transformación matricial $T(\mathbf{x}) = A\mathbf{x}$ es lineal
* Existen transformaciones lineales que no son matriciales (no se estudiarán)
  `,

  quiz: [],
  exercises: []
};
