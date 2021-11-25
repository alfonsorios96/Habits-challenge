
## 3.- Base de datos no relacional

> En MongoDB 4+ genere las siguientes colecciones con la herramienta de su agrado.

* País
  * Nombre del País – Cadena de texto
  * Código ISO del País – Cadena de texto
  * Código Numérico del País – Numero
  * Fecha de Registro – Fecha
  * Fecha de Actualización - Fecha
* Usuarios
  * Nombre – Cadena de texto
  * Edad – Numero
  * Activo – Booleano
  * País – OID:Ref->Pais
  * Usuario – Cadena de texto
  * Contraseña – Cadena de texto
* Puntaje de Usuarios
  * Usuario - OID:Ref->Usuario
  * Puntos Obtenidos – Numero
  * Fecha en que se obtuvo – Fecha
  * Activo – Booleano

A continuación:

1. Ingrese los registros que se encuentran en el siguiente Excel en las colecciones
   creadas anteriormente
   https://docs.google.com/spreadsheets/d/1m5QCdq0FVMb3fskIcMJ1LM6HeWf0cw021PqnuBLhYUo/edit
2. Realice los siguientes aggregates
   * El total de puntos activos de los usuarios que se encuentran en México de
   entre el 10 y el 25 de noviembre ordenado de forma descendente
   * El top 2 de los usuarios con mayor puntaje menores de 50 años que estén
   activos
   * El promedio de puntos por semana de cada usuario, ordenado de menor
   a mayor, sin contar los puntajes 0

3. Realice el export de la base de datos con ayuda de MongoDump, y colóquelo
   en una carpeta que deberá subir a GitHub
