---
layout: src/layouts/PostCursadaLayout.astro
title: Semana 1

inicio: 2026-03-21

descripcion: ¡Hola! ¡Te damos la bienvenida a la primer semana de cursada de Programación con Objetos 1!

atencion: Esta semana no habrá clases los días martes 31/3 por PARO y viernes 3/4 por el FERIADO, pero les vamos a dejar algunas actividades para que vayan conociendo la materia.

#Sobre el formato

#'Comision' puede ser número, string, repetir o no la palabra, etc. El componente lo normaliza para que se aproveche el buscador
#Sugerido: 'Comision: 1', 'Comision: comision 1', etc

#En 'Modalidad', 'Aula' y 'Edificio' se sugiere no repetir palabra (el componente renderiza lo que va detrás de los :)
#No sugerido: 'Modalidad: Modalidad presencial'
#Sugerido: 'Modalidad: PRESENCIAL'

#'Hora' puede estar casi en cualquier formato (número, string, con ., con :, etc), el componente la normaliza para que funcione el ordenamiento de la tabla
#Sugerido: 'Hora: 8', 'Hora: 8.00hs', etc

horarios:
  - Comision: 1
    Dia: Viernes 3 de Abril
    Hora: 8.00hs
    Mensaje: NO HAY CLASES POR FERIADO

  - Comision: 2
    Dia: Martes 31 de Marzo
    Hora: 18.00hs
    Mensaje: NO HAY CLASES POR PARO

  - Comision: 3
    Dia: Miércoles 1 de Abril
    Modalidad: PRESENCIAL
    Hora: 18.00hs
    Aula: LAB LP-206
    Edificio: La Patria

  - Comision: 4
    Dia: Viernes 3 de Abril
    Hora: 18.00hs
    Mensaje: NO HAY CLASES POR FERIADO

  - Comision: 5
    Dia: Miércoles 1 de Abril
    Modalidad: PRESENCIAL
    Hora: 18.00hs
    Aula: LAB LP-207
    Edificio: La Patria

  - Comision: 6
    Dia: Viernes 3 de Abril
    Hora: 18.00hs
    Mensaje: NO HAY CLASES POR FERIADO

  - Comision: 7
    Dia: Viernes 3 de Abril
    Hora: 18.00hs
    Mensaje: NO HAY CLASES POR FERIADO

  - Comision: Todas
    Dia: Sábado 4 de Abril
    Modalidad: VIRTUAL
    Hora: 10.00hs
    URL: https://us06web.zoom.us/j/89430035564

videos:
  - nombre: Instalación Wollok en Windows
    urlYoutube: https://www.youtube.com/watch?v=kPxbjL7WUHc
  - nombre: Instalación Wollok en Linux
    urlYoutube: https://www.youtube.com/watch?v=DCG-syufqhU
  - nombre: Como aceptar asignaciones (ejercicios) de github classroom (LA PRIMERA VEZ DEBERÁN SELECCIONAR SU APELLIDO Y NOMBRE DE LA LISTA)
    urlYoutube: https://www.youtube.com/watch?v=pKIhUX51nkw

ejercicios:
  - name: Presentación Personal
    classroom: https://classroom.github.com/a/QcD0Y0ox
    repoUrl: 'obj1-unahur-2026s1/obj1-unahur-2026s1-presentacion-personal-PresentacionPersonal' # Acá va la URL del repo sin el "https://github.com/"
    ejemploUrl: https://github.com/obj1-unahur-2023s1/presentacion-personal-BrankoMuruaga.git
    defaultBranch: 'main' # Acá va la rama default del repo
    comentarios:
      - name: Ejercicio para practicar con github. Les dejamos un ejermplo, aunque esperamos que nos sorprendan con algo bien personal y creativo!
---

- ¡Hola!
- ¡Te damos la bienvenida a la primer semana de cursada de Programación con Objetos 1!
- Todos los días lunes se publicará en este espacio las actividades de la semana, días y horarios de cursada, videos de apoyo a la teoría y tutoriales, los ejercicios a realizar y los temas que vamos a estar viendo. También servirá de cartelera de avisos con las novedades importantes.
- Es muy importante que te suscribas al canal de Discord de la materia, las instrucciones están en la sección **[Inicio](/)** de esta página.
- En esta semana veremos las herramientas que se utilizarán en la cursada, comenzando por GIT como el manejador de las versiones del código que iremos produciendo. Github será la plataforma elegida por esta cátedra para almacenar el código fuente y los ejercicios a realizar. Es requisito también para esta cursada (si no tienen usuario ya generado) registrarse y obtener un usuario de github, el línk es el siguiente: <a href="https://github.com" target="_blank" > github </a>

- Deberán instalarse GIT. El manejo que necesitan para esta materia es el básico, y está explicado en varias guías que están en la sección <a href="/material#ComandosBasicos" target="_blank">**Utilidad**▼ Material> ComandosGit</a>

- El lenguaje que usaremos se llama Wollok. Wollok es un lenguaje de programación para ser utilizado en el dictado de materias iniciales de programación orientada a objetos. Es un proyecto open source desarrollado por Fundación Uqbar, un grupo de docentes de distintas universidades nacionales de Argentina, para ser usado en sus clases. Incluye la propuesta Wollok Game, que propone ir adquiriendo los conceptos del paradigma orientado a objetos junto con el diseño de un juego didáctico, que en las clases siguientes les iremos contando.
