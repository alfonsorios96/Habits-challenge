
## Ejercicio 1: Lógica general

> Describa brevemente como resolvería el siguiente problema en un programa de
computadora. (Únicamente la descripción de qué es lo que haría usted, no lo
programe). Sea lo más especifico posible.
En una tienda de productos de limpieza se venden detergentes líquidos por ML, y se
tienen botellas de 100ML, 250ML, 350ML, 500ML. Hay cierta existencia de cada una de
las botellas.

| Capacidad | Cantidad |
| ------ | ------ |
| 100 ML | 7 |
| 250 ML | 15 |
| 350 ML | 5 |
| 500 ML | 3 |


1. ¿Qué haría usted para que cuando un cliente compre algún producto se utilicen
   la menor cantidad de botellas, y se desperdicie la menor cantidad de espacio en
   las mismas.?
> Como primera prioridad, buscaría las botellas que en su volumen se aproximen lo más cercano al volumen vendido, posteriormente iría descontando la cantidad de botellas de la capacidad ocupada. Iteraría con el sobrante, si éste último fuera negativo, terminaría la ejecución.
2. Plasme la descripción de su algoritmo.
```
Dado un arreglo de objetos, con las propiedades; capacidad (en mililitros) y cantidad inicial para cada uno.

1. Restar la capacidad en mililitros vendidos a cada uno de los elementos del arreglo cuya cantidad sea mayor que cero, generando un nuevo arreglo con la misma cantidad de elementos, pero con el resultado de la resta. 

2. Restar UNO en la cantidad de la capacidad asociada al valor más pequeño de los valores absolutos de esas restas. Si hubiesen dos o más valores absolutos iguales, tomar el asociado a la mayor capacidad entre estos.

3. Si hubiera por lo menos un elemento del arreglo de las restas mayor que cero, entonces repetir el paso 1 tomando el menor número absoluto de las restas para considerarlo como cantidad de compra para la siguiente iteración. De lo contrario, finalizar el programa recontando las cantidades de botellas de cada capacidad usadas en las iteraciones. 

Considerar que el menor valor absoluto de todos los negativos será la capacidad en mililitros que le sobre a la última botella empleada.
```
3. Ejemplifique cómo distribuiría el liquido en los contenedores de la tabla de arriba
   con las siguientes compras ficticias, siguiendo su propuesta.

| Cliente | Compra en ML | Cantidad de botellas | 
| ------ | ------ | ------ |
| Juan [EJEMPLO] | 700 | 1 de 500 ML y 1 de 250 ML; restan 2 de 500 ML y 14 de 250 ML |
| Paco | 450 | 1 de 500 ML; restan 1 de 500 ML |
| Hugo | 185 | 1 de 250 ML; restan 13 de 250 ML |
| Luis | 940 | 1 de 500 ML, 1 de 350 ML, y 1 de 100 ML; restan 0 de 500 ML, 4 de 350 ML, y 6 de 100 ML|


