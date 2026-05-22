---
layout: src/layouts/PostCursadaLayout.astro
title: Semana 8

inicio: 2026-05-18

descripcion: Semana de PARCIAL PRESENCIAL para todas las comisiones. Entra todo lo visto.

horarios:
  - Comision: 1
    Dia: Viernes 22 de Mayo
    Modalidad: PRESENCIAL
    Hora: 8.00hs
    Aula: MA-113 / MA-107 / MA-108
    Edificio: MALVINAS ARGENTINAS

  - Comision: 2
    Dia: Martes 19 de Mayo
    Modalidad: PRESENCIAL
    Hora: 18.00hs
    Aula: MA-113 / MA-111
    Edificio: MALVINAS ARGENTINAS

  - Comision: 3
    Dia: Miércoles 20 de Mayo
    Modalidad: PRESENCIAL
    Hora: 18.00hs
    Aula: TA-001 / MA-108
    Edificio: TRABAJO ARGENTINO

  - Comision: 4
    Dia: Viernes 22 de Mayo
    Hora: 18.00hs
    Modalidad: PRESENCIAL
    Aula: TA-001
    Edificio: TRABAJO ARGENTINO

  - Comision: 5
    Dia: Miércoles 20 de Mayo
    Modalidad: PRESENCIAL
    Hora: 18.00hs
    Aula: MA-113 / MA-108
    Edificio: MALVINAS ARGENTINAS

  - Comision: 6
    Dia: Viernes 22 de Mayo
    Hora: 18.00hs
    Modalidad: PRESENCIAL
    Aula: TA-002
    Edificio: TRABAJO ARGENTINO

  - Comision: 7
    Dia: Viernes 22 de Mayo
    Hora: 18.00hs
    Modalidad: PRESENCIAL
    Aula: MA-111
    Edificio: MALVINAS ARGENTINAS

  - Comision: Todas
    Dia: Lunes 18 de Mayo
    Modalidad: 📣 VIRTUAL (¡tutoría extendida de 4 horas!) 📣
    Hora: 16.00hs
    URL: https://meet.google.com/nqg-rprn-asn

  - Comision: Todas
    Dia: Jueves 21 de Mayo
    Modalidad: 📣 VIRTUAL (tutoría resolución de un parcial) 📣
    Hora: 16.00hs
    URL: https://meet.google.com/nqg-rprn-asn

  - Comision: Todas
    Dia: Sábado 23 de Mayo
    Modalidad: VIRTUAL
    Hora: 10.00hs
    URL: https://t.me/+GMlcEZyJtCo2OTUx

ejercicios:
  - name: PRIMER PARCIAL - COMISIÓN 2
    #Poner template correcta del parcial
    urlTemplate: https://github.com/obj1-unahur/parcial1Com2_2026C1
    destOrg: obj1-unahur-2026s1
    comentarios:
      - name: Primer parcial para comisión 2
    #Los parciales se van a generar privados en la orga del cuatri
    isPrivate: true
    #Poner en true / comentar / borrar atributo 'visible' para que se vea el ejercicio
    visible: false

  - name: PRIMER PARCIAL - COMISIÓN 3 y 5
    #Poner template correcta del parcial
    urlTemplate: https://github.com/obj1-unahur/parcial-1_Com-3-5_2026-C1
    destOrg: obj1-unahur-2026s1
    comentarios:
      - name: Primer parcial para comisión 2
    #Los parciales se van a generar privados en la orga del cuatri 2026
    isPrivate: true
    #Poner en true / comentar / borrar atributo 'visible' para que se vea el ejercicio
    visible: false
    #Atributo nuevo para requerir código de 6 digitos TOTP
    requireTOTP: true
    # totpSecret: "MI_SECRETO_BASE32"  # opcional, si no usás el default

  # #----------------------------------------------
  # # CONFIG PARA PARCIAL PARCIAL DE VIERNES TN
  # # PARA HABILITAR 22/05 A LAS 18.00 HS
  # - name: PRIMER PARCIAL - COMISIÓN 4
  #   #Poner template correcta del parcial
  #   urlTemplate: https://github.com/obj1-unahur/parcial1-vie-tn
  #   destOrg: obj1-unahur-2026s1
  #   prefix: parcial1Com4_2026C1
  #   comentarios:
  #     - name: Primer parcial para las comisiones 4, 6 y 7 del viernes turno noche
  #   #Los parciales se van a generar privados en la orga del cuatri
  #   isPrivate: true
  #   obligatorio: true
  #   type: 'individual'
  #   fechaDeEntrega: Viernes 22/05

  #   #Poner en true / comentar / borrar atributo 'visible' para que se vea el ejercicio
  #   visible: true

  # - name: PRIMER PARCIAL - COMISIÓN 6
  #   #Poner template correcta del parcial
  #   urlTemplate: https://github.com/obj1-unahur/parcial1-vie-tn
  #   destOrg: obj1-unahur-2026s1
  #   prefix: parcial1Com6_2026C1
  #   comentarios:
  #     - name: Primer parcial para las comisiones 4, 6 y 7 del viernes turno noche
  #   #Los parciales se van a generar privados en la orga del cuatri
  #   isPrivate: true
  #   obligatorio: true
  #   type: 'individual'
  #   fechaDeEntrega: Viernes 22/05

  #   #Poner en true / comentar / borrar atributo 'visible' para que se vea el ejercicio
  #   visible: true

  # - name: PRIMER PARCIAL - COMISIÓN 7
  #   #Poner template correcta del parcial
  #   urlTemplate: https://github.com/obj1-unahur/parcial1-vie-tn
  #   destOrg: obj1-unahur-2026s1
  #   prefix: parcial1Com7_2026C1
  #   comentarios:
  #     - name: Primer parcial para las comisiones 4, 6 y 7 del viernes turno noche
  #   #Los parciales se van a generar privados en la orga del cuatri
  #   isPrivate: true
  #   obligatorio: true
  #   type: 'individual'
  #   fechaDeEntrega: Viernes 22/05

  #   #Poner en true / comentar / borrar atributo 'visible' para que se vea el ejercicio
  #   visible: true
# #----------------------------------------------
---

- Semana de PARCIAL PRESENCIAL para todas las comisiones. Los temas que entran son hasta colecciones completo.

- Quienes tengan notebook con puerto y cable de red y wollok funcionando, les pedimos llevarla para rendir el parcial; consideren llevar también los adaptadores y accesorios que requieran para conectarse, teniendo en cuenta que la red WiFi puede ser inestable o no estar disponible.

- La modalidad será INDIVIDUAL y ABIERTO, lo que significa que podrán utilizar todos los apuntes que tengan tanto físicos como digitales. Consistirá en resolver un ejercicio similar a los que trabajamos en las últimas clases. El enunciado se publicará en el momento de inicio del examen. La forma de entrega será la realización del push al repositorio de github que se generará para cada estudiante al aceptar la asignación.

- **Importante**: Lleven anotado en físico o digital (ejemplo, en un documento de google o en un mail borrador) el token personal de github que necesitarán para realizar el push desde las PCs del laboratorio si la autenticación a través del navegador falla. Asegúrense que esté vigente ya que una vez cumplido el horario de fin del examen no podrán entregar el parcial.
