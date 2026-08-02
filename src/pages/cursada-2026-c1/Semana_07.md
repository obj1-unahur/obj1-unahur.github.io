---
layout: src/layouts/PostCursadaLayout.astro
title: Semana 7

inicio: 2026-05-11

descripcion: Esta semana aprenderemos a resolver problemas más complejos con colecciones.

atencion: El día martes 12/5 no habrá clases para que tod@s podamos asistir a la marcha por el cumplimiento de la ley de financiamiento universitario. Más info acá abajo ↓

importante: Las clases de comisión 3 y comisión 5 de este miércoles 13 se unificarán en una sola, que será en MODALIDAD VIRTUAL. Esto es una excepción ya que no habrán aulas disponibles. El horario es el mismo de siempre, 18 hs, y la plataforma la misma de los sábados, telegram.

horarios:
  - Comision: 1
    Dia: Viernes 15 de Mayo
    Modalidad: PRESENCIAL
    Hora: 8.00hs
    Aula: LAB MA-113
    Edificio: MALVINAS ARGENTINAS (PA)

  - Comision: 2
    Dia: Martes 12 de Mayo
    Hora: 18.00hs
    Mensaje: Sin clase por la marcha (pueden unirse el miércoles)

  - Comision: 3
    Dia: Miércoles 13 de Mayo
    Modalidad: ⚠️ VIRTUAL ⚠️ (Excepción)
    Hora: 18.00hs
    URL: https://t.me/+GMlcEZyJtCo2OTUx

  - Comision: 4
    Dia: Viernes 15 de Mayo
    Hora: 18.00hs
    Modalidad: PRESENCIAL
    Aula: LAB TA-001
    Edificio: TRABAJO ARGENTINO

  - Comision: 5
    Dia: Miércoles 13 de Mayo
    Modalidad: ⚠️ VIRTUAL ⚠️ (Excepción)
    Hora: 18.00hs
    URL: https://t.me/+GMlcEZyJtCo2OTUx

  - Comision: 6
    Dia: Viernes 15 de Mayo
    Hora: 18.00hs
    Modalidad: PRESENCIAL
    Aula: LAB TA-002
    Edificio: TRABAJO ARGENTINO

  - Comision: 7
    Dia: Viernes 15 de Mayo
    Hora: 18.00hs
    Modalidad: PRESENCIAL
    Aula: LAB MA-111
    Edificio: MALVINAS ARGENTINAS (PA)

  - Comision: Todas
    Dia: Lunes 11 de Mayo
    Modalidad: 📣 VIRTUAL (tutoría) 📣
    Hora: 18.00hs
    URL: https://meet.google.com/nqg-rprn-asn

  - Comision: Todas
    Dia: Sábado 16 de Mayo
    Modalidad: VIRTUAL
    Hora: 10.00hs
    URL: https://t.me/+GMlcEZyJtCo2OTUx

videos:
  - nombre: Aceptar asignación grupal y CREAR equipo
    urlYoutube: https://www.youtube.com/watch?v=BRK0gQZ0NZM
  - nombre: Aceptar asignación grupal y UNIRSE a equipo ya creado
    urlYoutube: https://www.youtube.com/watch?v=AYfNUJESbZg

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
  - name: F1 2024 - GRUPAL
    urlTemplate: https://github.com/obj1-unahur/F1_2024
    destOrg: obj1-unahur-2026s1
    obligatorio: true
    type: 'group'
    fechaDeEntrega: Domingo 17/05
    comentarios:
      - name: TP Grupal número 1

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

- En otro orden de cosas, como sabrán, este martes está convocada una marcha federal para exigir el cumplimiento de la Ley de Financiamiento universitario. Pueden informarse más al respecto y sumarse en este <a href="https://discord.com/channels/656909199510601744/1487558648472272956/1502642395857162300" target="_blank">enlace</a>.
