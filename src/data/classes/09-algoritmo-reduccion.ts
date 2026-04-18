import { ClassData } from '../types';

export const clase09: ClassData = {
  id: 9,
  title: 'Algoritmo de Reducción por Filas',
  description: 'Pasos exactos para aplicar el método de reducción por Gauss y encontrar la forma paramétrica de cualquier sistema.',
  
  content: String.raw`
### Reducción por Gauss (Eliminación Gaussiana)
Método sistemático para transformar una matriz en su **forma escalonada** mediante operaciones elementales de fila:

1. **Paso 1:** Escribir la matriz aumentada del sistema.
2. **Paso 2:** Reducir a **forma escalonada**:
   * Identificar columnas pivote y crear ceros bajo pivotes.
   * Verificar consistencia (si hay fila $[0\;\cdots\;0\;|\;b\neq 0]$, sistema inconsistente).
3. **Paso 3:** Reducir a **forma escalonada reducida** (eliminación hacia arriba).
4. **Paso 4:** Expresar variables básicas en términos de variables libres.
5. **Paso 5:** Escribir solución general en forma paramétrica.
  `,

  quiz: [],
  exercises: []
};
