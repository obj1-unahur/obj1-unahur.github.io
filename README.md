# Iniciar

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## Estructura del Markdown de cada semana

| Key       | Definition |Opcional?|
| :-------------| :------ |:---|
| `layout`      | Ruta del layout `src/layouts/PostCursadaLayout.astro`|`No`|
| `title`       | El titulo de la semana. Ej: `Semana 1`  |`No`|
| `inicio`      | Fecha de publicacion del archivo `AAAA-MM-DD`     |`No`|
| `descripcion` | La descripcion de la card de la semana |`No`|
| `atencion` | Cartel de atencion (color rojo) |`Si`|
| `importante` | Cartel de mensaje importante (color azul) |`Si`|
| `videos`      | Los videos de la semana |`Si`|
| `videos:-nombre`| El titulo del video |`Si hay video, No`|
| `videos:urlYoutube`| La URL del video |`Si hay video, No`|
| `ejercicios`| Los ejercicios de la semana |`Si`|
| `ejercicios:-name`| El titulo del ejercicio |`Si hay ejercicio, No`|
| `ejercicios:classroom`| El link a Github|`Si hay ejercicio, No`|
| `ejercicios:repoUrl`| la URL del repo sin el "https://github.com/"|`Si hay ejercicio, No`|
| `ejercicios:defaultBranch`| La rama default del repo|`Si hay ejercicio, No`|
| `ejercicios:fechaDeEntrega`| La fecha limite para entregar el ejercicio|`Si`|
| `ejercicios:comentarios`| Una lista de comentarios para el ejercicio|`Si`|
| `ejercicios:comentarios:-name`| Un comentario del ejercicio|`Si hay comentario de ejercicio, No`|
| `ejercicios:obligatorio`| Si el ejericio es obligatorio o no|`Si`|
| `horarios`| Los horarios de la cursada |`No`|
| `horarios:-Comision`| El nombre de la comision. Ej: `Comisión 1 T.Noche`|`No`|
| `horarios:Dia`| El dia de la cursada. Ej: `Martes 26 de Marzo`|`No`|
| `horarios:Hora`| El horario de la cursada. Ej: `18.00hs`|`No`|
| `horarios:Modalidad`| La modalidad de la cursada. Ej: `Presencial`, `Virtual`|`Si hay clases, No`|
| `horarios:Aula`|`(Si es presencial)` El aula asignada. Ej: `Aula TA-209`|`Si es presencial, No`|
| `horarios:Edificio`|`(Si es presencial)` El edificio en donde se encuentra el aula. Ej: `Edificio Trabajo Argentino, 2do piso`|`Si es presencial, No`|
| `horarios:URL`|`(Si es virtual)` La URL de la reunion.|`Si es virtual, No`|
| `horarios:Mensaje`|`(Si es no hay clases)` Cartel para poner un mensaje en lugar de un Aula/link.|`Si no hay clases, No`|
| `Cuerpo del Markdown` | Explicacion de la semana |`Si`|


### Ejemplo de archivo

Es importante prestar atencion a la identacion de los elementos y a cual lleva el guion (-), ya que solo el primero debe llevarlo para formar la Card
```
---
    layout: src/layouts/PostCursadaLayout.astro

    title: Semana 1

    inicio: 2024-01-01

    atencion: Un cartel de atencion

    importante: Un mensaje importante

    descripcion: ¡Te damos la bienvenida a la primer semana de cursada de Programación con Objetos 1! <-- Descripcion SOLO de la card

    videos:
      - nombre: Qué es un objeto, qué es un mensaje
        urlYoutube: https://www.youtube.com/watch?v=zZe0AaSKdyo

    ejercicios:
      - name: Primer ejercicio
        classroom: https://classroom.github.com/a/6KRUMHj_
        comentarios:
          - name: Un comentario para el ejercicio

      - name: Otro ejercicio
        classroom: https://classroom.github.com/a/6HGDRGD
        comentarios:
          - name: Otro comentario para el ejercicio
          - name: Un segundo comentario para el otro ejercicio
    
    horarios:
      - Comision: Comisión 1 T.Noche
        Dia: Martes 26 de Marzo
        Modalidad: PRESENCIAL
        Hora: 18.00hs
        Aula: Aula TA-209
        Edificio: Edificio Trabajo Argentino, 2do piso

      - Comision: Comisión 2 T.Mañana
        Dia: Sábado 30 de Marzo
        Modalidad: VIRTUAL
        Hora: 10.00hs
        URL: https://us06web.zoom.us/j/88953425033

      - Comision: Comisión 2 T.Mañana
        Dia: Miércoles 27 de Marzo
        Hora: 10.00hs
        Mensaje: NO HAY CLASES POR FERIADO
---

* Hola! ¡Te damos la bienvenida a la primer semana de cursada de Programación con Objetos 1!

* Todos los días lunes se publicará en este espacio el material de la semana en curso, donde encontrarás los videos de apoyo a la teoría, videos de clases virtuales, los ejercicios a realizar y los temas que vamos a estar viendo.
* * 
* En esta semana comenzaremos a conocer los objetos y mensajes en el paradigma de objetos. A continuación encontrarás videos que nos intruducen en el tema.

* Es muy importante que te suscribas al canal de Discord de la materia, las instrucciones están en la sección Inicio de esta página.

```

---

#### Como agregar parrafos

Para separar los parrafos en el cuerpo del Markdown se tiene que usar el astrisco (*) para iniciar un nuevo parrafo. Si se usan dos asteriscos esto sera interpretado como un salto de linea mas largo que los saltos entre parrafos (**)

#### Como se puede apreciar existen tres tipos de horarios:

1) Si la clase es Presencial
```
horarios:
      - Comision: Comisión 1 T.Noche
        Dia: Martes 26 de Marzo
        Modalidad: PRESENCIAL
        Hora: 18.00hs
        Aula: Aula TA-209
        Edificio: Edificio Trabajo Argentino, 2do piso
```
2) Si la clase es Virtual
```
horarios:
      - Comision: Comisión 2 T.Mañana
        Dia: Sábado 30 de Marzo
        Modalidad: VIRTUAL
        Hora: 10.00hs
        URL: https://us06web.zoom.us/j/88953425033
```
3) Si no hay clases, ya sea por feriado o por otro motivo
```
horarios:
      - Comision: Comisión 2 T.Mañana
        Dia: Miércoles 27 de Marzo
        Hora: 10.00hs
        Mensaje: NO HAY CLASES POR FERIADO
```

#### Se pueden poner varios juntos, pero todos bajo una misma etiqueta `horarios`

---

#### Los carteles `Atencion` e `Importante` son completamente opcionales
```
atencion: Un cartel de atencion

importante: Un mensaje importante
```
N importa la posicion en donde se pongan en el Markdown, estos siempre aparecen debajo del titulo de la Semana

---

#### Tanto `videos` como los `ejercicios` son opcionales tambien

```
videos:
    - nombre: Qué es un objeto, qué es un mensaje
      urlYoutube: https://www.youtube.com/watch?v=zZe0AaSKdyo

ejercicios:
    - name: Primer ejercicio
      classroom: https://classroom.github.com/a/6KRUMHj_
      comentarios:
        - name: Un comentario para el ejercicio
```
Los comentarios en los ejercicios tambien son opcionales. Puede haber un ejercicio con uno o mas de un comentario, o sin ninguno

Si no hay ejercicios se le avisa al alumno con un cartel por defecto para evital la confucion de creer que hay algun error en la carga de la pagina
