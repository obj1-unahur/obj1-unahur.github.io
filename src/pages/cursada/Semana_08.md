---
layout: src/layouts/PostCursadaLayout.astro
title: Semana 8

inicio: 2026-10-28

descripcion: Esta semana vamos a profundizar en el uso de Clases y empezaremos a trabajar con el concepto de Herencia, que nos va a permitir la definición de nuevas clases basadas en clases existentes, estableciendo jerarquías de Superclase y Subclase. Vamos a poder agregar nuevas variables y métodos, y también redefinir otros ya existentes.

atencion: El día miércoles 30/9 no habrá clases por el paro convocado como parte de la lucha para reclamar por el debido cumplimiento de la Ley de financiamiento universitario, sancionada e incumplida hace ya 342 días (11 meses).

horarios:
  - Comision: 3
    Dia: Lunes 28 de septiembre
    Hora: 18.00hs
    Modalidad: PRESENCIAL
    Aula: LAB LP-207
    Edificio: La Patria

  - Comision: 2
    Dia: Martes 29 de septiembre
    Hora: 14.00hs
    Modalidad: PRESENCIAL
    Aula: LAB MA-113
    Edificio: Malvinas argentinas

  - Comision: 4
    Dia: Martes 29 de septiembre
    Hora: 18.00hs
    Modalidad: PRESENCIAL
    Aula: LAB MA-111
    Edificio: Malvinas argentinas

  - Comision: 5
    Dia: Martes 29 de septiembre
    Hora: 18.00hs
    Modalidad: PRESENCIAL
    Aula: LAB MA-108
    Edificio: Malvinas argentinas

  - Comision: 1
    Dia: Miércoles 30 de septiembre
    Hora: 8.00hs
    Mensaje: NO HAY CLASES POR PARO

  - Comision: 6
    Dia: Miércoles 30 de septiembre
    Hora: 18.00hs
    Mensaje: NO HAY CLASES POR PARO

  - Comision: Todas
    Dia: Jueves 1 de octubre
    Hora: 16.00hs
    Modalidad: TUTORÍA PRESENCIAL (2 hs) 🫂🙌
    Aula: LAB MA-110
    Edificio: Malvinas argentinas

  - Comision: Todas
    Dia: Sábado 3 de octubre
    Modalidad: CLASE VIRTUAL
    Hora: 10.00hs
    URL: https://meet.google.com/sia-cweg-zen

  - Comision: Todas
    Dia: Sábado 3 de octubre
    Modalidad: TUTORÍA VIRTUAL (2 hs) 🫂🙌
    Hora: 15.00hs
    URL: https://meet.google.com/sia-cweg-zen

videos:
  - nombre: Aceptar asignación grupal y CREAR equipo (para TP Game)
    urlYoutube: https://www.youtube.com/watch?v=BRK0gQZ0NZM
  - nombre: Aceptar asignación grupal y UNIRSE a equipo ya creado (para TP Game)
    urlYoutube: https://www.youtube.com/watch?v=AYfNUJESbZg

ejercicios:
  - name: TP grupal integrador Wollok Game
    urlTemplate: https://github.com/obj1-unahur/tp-final-wollok-game
    destOrg: obj1-unahur-2026s2
    type: group
    obligatorio: true
    fechaDeEntrega: Semanas 26/10 - 16/11 - 23/11 (ver cronograma)
    comentarios:
      - name: Cada grupo debe aceptar esta tarea, que simplemente creará el repositorio remoto en el que trabajarán. Solo incluye las pautas y un README que deberán completar con los datos del grupo y su juego. Todo lo demás debe ser creación de ustedes.

#
#  - name: ?? - TP 4 CLASES Y HERENCIA - Individual obligatorio
#    urlTemplate: #https://github.com/obj1-unahur-2026s2/colecciones-avengers
#    destOrg: obj1-unahur-2026s2
#    obligatorio: true
#    fechaDeEntrega: Viernes 9/10/26
#    comentarios:
#      - name: Cuarto trabajo práctico individual de entrega obligatoria. Hay tiempo de hacer push # a GitHub con su solución hasta la fecha límite indicada (inclusive).

  - name: Naves espaciales
    urlTemplate: https://github.com/obj1-unahur-2026s2/herencia-NavesEspaciales
    destOrg: obj1-unahur-2026s2
    comentarios:
      - name: Ejercicio con clases y herencia para practicar en clase.

  - name: Plagas
    urlTemplate: https://github.com/obj1-unahur-2026s2/herencia-Plagas
    destOrg: obj1-unahur-2026s2
    comentarios:
      - name: Ejercicio con clases y herencia para practicar en casa.

  - name: Golosinas
    urlTemplate: https://github.com/obj1-unahur-2026s2/incremental-Golosinas
    destOrg: obj1-unahur-2026s2
    comentarios:
      - name: Ejercicio incremental para realizar en etapas y practicar objeto/mensaje, polimorfismo, colecciones e implementar luego clases y herencia para practicar en casa. Resolverlo para hacer puesta en común el sábado en la clase virtual.
---

- <iframe src="https://sudhurok.github.io/reloj-ley-universitaria/reloj-contador.html" width="100%" frameborder="0" scrolling="no" style="border-radius: 15px; border: none; height: 30rem"></iframe>

- Esta semana vamos a profundizar en el uso de Clases y empezaremos a trabajar con el concepto de Herencia, que nos va a permitir la definición de nuevas clases basadas en clases existentes, estableciendo jerarquías de Superclase y Subclase. Vamos a poder agregar nuevos atributos y métodos, y también redefinir otros ya existentes.

- También veremos el concepto de lookup method como mecanismo por el cual se determina, cuando se envía un mensaje, qué método se debe ejecutar.

- Les dejamos a mano el enlace a la <a href="https://www.wollok.org/documentation/classes/" target="_blank">documentación de Wollok sobre Clases</a> para que lean con atención.

- También les facilitamos el enlace a la presentación que resume los temas de esta semana: <a href="https://docs.google.com/presentation/d/1mvE-ML4E756U_meOayhIlWhq0i2mG2OYKMrHDEQjbG0/edit?usp=sharing" target="_blank">Presentación Semana 8</a>

<br />

---

<br />

- #### Trabajo práctico grupal integrador Wollok Game: Pautas

- Por otro lado, llegó el momento de comenzar con el famoso TP Game. Como saben, se trata de un trabajo práctico integrador (o sea, se espera que demuestren todo lo visto y aprendido en la cursada) grupal, evaluable y promediable, ya que representa la segunda nota de la materia (la primera, claro, es el parcial). Tengan en cuenta lo que se menciona al respecto en el <a href="/contrato-pedagogico" target="_blank">Contrato pedagógico</a> sobre la forma de evaluación: 3 instancias donde se espera un progreso gradual que finaliza con la correspondiente defensa oral.

- Respecto de lo que se espera del proyecto, lean con atención el siguiente documento de <a href="https://docs.google.com/document/d/1eUFp9Ckqhu1itXPSh4to3vsvFETI7uC7hsyoV7YpKvA/edit?usp=sharing" target="_blank">pautas generales y requisitos mínimos para el TP Wollok Game</a>.

- Atención a los videos que dejamos acá abajo para la aceptación de la tarea y generación del repositorio remoto, ya que hay algunas pequeñas diferencias en el proceso por tratarse de un repositorio donde trabajarán grupalmente.
