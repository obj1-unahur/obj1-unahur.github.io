---
layout: src/layouts/PostCursadaLayout.astro
title: Semana 7

inicio: 2026-09-20

descripcion: Esta semana aprenderemos a resolver problemas más complejos con colecciones.

horarios:
  - Comision: 1
    Dia: Viernes 8 de Mayo
    Modalidad: PRESENCIAL
    Hora: 8.00hs
    Aula: LAB MA-113
    Edificio: MALVINAS ARGENTINAS (PA)

  - Comision: 2
    Dia: Martes 5 de Mayo
    Modalidad: PRESENCIAL
    Hora: 18.00hs
    Aula: LAB LP-207
    Edificio: La Patria

  - Comision: 3
    Dia: Miércoles 6 de Mayo
    Modalidad: PRESENCIAL
    Hora: 18.00hs
    Aula: LAB LP-206
    Edificio: La Patria

  - Comision: 4
    Dia: Viernes 8 de Mayo
    Hora: 18.00hs
    Modalidad: PRESENCIAL
    Aula: LAB TA-001
    Edificio: TRABAJO ARGENTINO

  - Comision: 5
    Dia: Miércoles 6 de Mayo
    Modalidad: PRESENCIAL
    Hora: 18.00hs
    Aula: LAB LP-207
    Edificio: La Patria

  - Comision: 6
    Dia: Viernes 8 de Mayo
    Hora: 18.00hs
    Modalidad: PRESENCIAL
    Aula: LAB TA-002
    Edificio: TRABAJO ARGENTINO

  - Comision: 7
    Dia: Viernes 8 de Mayo
    Hora: 18.00hs
    Modalidad: PRESENCIAL
    Aula: LAB MA-111
    Edificio: MALVINAS ARGENTINAS (PA)

  - Comision: Todas
    Dia: Lunes 4 de Mayo
    Modalidad: 📣 ESPECIAL TUTORÍA 1 VIRTUAL ‼️
    Hora: 18.00hs
    URL: https://meet.google.com/nqg-rprn-asn

  - Comision: Todas
    Dia: Sábado 9 de Mayo
    Modalidad: VIRTUAL
    Hora: 10.00hs
    URL: https://t.me/+GMlcEZyJtCo2OTUx


# --- Nuevo formato para describir los ejercicios acá (2026s1) ---
# Campos obligatorios: name, urlTemplate (reemplaza "classroom").
# Campos opcionales que se infieren automáticamente desde urlTemplate:
#   repoUrl, defaultBranch (= "main"), prefix (último segmento de urlTemplate),
#   destOrg (org de urlTemplate), type (= "individual"), isPrivate (= false).
# Si el ejercicio es obligatorio → isPrivate pasa a true (salvo que se indique lo contrario).
# Para TPs grupales, usar type: group. La consigna se muestra desde /blob/defaultBranch/README.md.

#Comparativa

# ─── ANTES ───────────────────────────────   │  ─── AHORA ──────────────────────────────
# ejercicios:                                 │  ejercicios:
#   - name: "Mi TP Obligatorio"               │    - name: "Mi TP Obligatorio"
#     classroom: https://github.com/org/repo  │      urlTemplate: https://github.com/org/repo
#     repoUrl: 'org/repo'                     │      destOrg: mi-org-2026s1   # opcional
#     defaultBranch: 'main'                   │      obligatorio: true
#     destOrg: mi-org-2026s1                  │      fechaDeEntrega: 1/1/2026
#     prefix: mi-ejercicio                    │      comentarios:
#     isPrivate: true                         │        - name: "Entregar haciendo push"
#     type: individual                        │
#     fechaDeEntrega: 1/1/2026                │
#     obligatorio: true                       │
#     comentarios:                            │
#       - name: "Entregar haciendo push"      │
#
# Se infiere: repoUrl, prefix, type, isPrivate (true si es obligatorio), defaultBranch.

ejercicios:
  - name: Nombre del ejercicio
    urlTemplate: https://github.com/org/repo
ejercicios:
  - name: El Alambique Viajero
    urlTemplate: https://github.com/obj1-unahur/alambiqueViajeroParte2
    destOrg: obj1-unahur-2026s1
    comentarios:
      - name: Enunciado de la parte 2 del ejercicio que agrega colecciones. Ya trae la solución de parte 1.

  - name: Camión de Transporte
    urlTemplate: https://github.com/obj1-unahur/camionDeTransporte
    destOrg: obj1-unahur-2026s1
    comentarios:
      - name: Para practicar en casa y en clase con colecciones y polimorfismo.
---

- Esta semana aprenderemos a resolver problemas más complejos con colecciones.

- Volvemos a recomendar la utilización del apunte que mencionamos la semana pasada sobre closures y colecciones que está disponible en la sección Material de esta página en este link:
  <a href="https://objetos1wollokunq.gitlab.io/material/guia-colecciones-basicas.pdf" target="_blank">Closures y Colecciones</a>
