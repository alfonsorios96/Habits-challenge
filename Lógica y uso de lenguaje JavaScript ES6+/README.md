## 2.- Lógica y uso de lenguaje JavaScript ES6+

> En JavaScript Vanilla o TypeScript realice una calculadora de operaciones básicas que
resuelva las operaciones dada una cadena.
Por ejemplo: Si el usuario introduce 4-7+8+9/2*3 el programa deberá mostrar como
resultado 18.5

1. Documente el proceso de solución (descripción), algoritmo (los pasos que
   realiza el programa) en un archivo readme.md
2. Realice el programa
3. Documente las pruebas unitarias realizadas al programa, utilizando la
   herramienta de su agrado.

Recuerde:

• Deberá realizar las 4 operaciones básicas en la misma cadena suma +, resta -,
Multiplicación *, División /
• La longitud maxima a ingresar de la cadena serán 20 caracteres.
• Se deberán respetar la prioridad de los operadores.
• Punto extra si se utilizan paréntesis para agrupamiento y multiplicación
• Punto Extra si se realiza potencia o raíz cuadrada
• Queda prohibido utilizar la función EVAL o equivalentes, o en su defecto incluir
alguna librería que realice todo el proceso. (Recuerde que la finalidad de esto es
evaluar la lógica de programación)

## Solución

En orden de comprobar el programa; instale dependencias, y posteriormente ejecute ``npm test``

### Descripción de la solución

Resolver de manera recursiva las operaciones de más alto nivel primero (multiplicaciones y divisiones) remplazando sus valores en el lugar de las operaciones. Una vez resueltas, hacer lo mismo para sumas y restas. Devolver el valor final.

### Algoritmo

1. Identificar la posición del primer operador con prioridad jerárquica (multiplicación y división primero, suma y resta después).
2. Identificar los dos números que se van a operar con el símbolo del paso 1.
3. Operar los números identificados, reemplazar dicho resultado en la cadena original y repetir el paso 1.
   1. Si la operación fuese una resta, y el resultado fuera negativo, pasar dicho valor al final de la cadena.
4. Retornar el número final.
