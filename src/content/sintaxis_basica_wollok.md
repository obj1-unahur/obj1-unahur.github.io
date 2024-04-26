---
sintaxisBasica: 
    - titulo: Objeto con un atributo y dos métodos
      codigo: "object pepita {
            \n\tvar energia = 0
            \n\tmethod volar(kilometros) {
                \n\t\tenergia += kilometros
                \n\t\t}
            \n\tmethod puedeVolar() {
            \n\t\treturn energia > 0
            \n\t}
        \n}"

    - titulo: Comentario
      codigo: "// un comentario

        /* un comentario 
        \nmultilínea */"

    - titulo: Strings
      codigo: "\"una Cadena\"

            'una Cadena'"

    - titulo: Booleanos
      codigo: "true false"

    - titulo: Conjunto
      codigo: "#{}

            #{1, 2}"

    - titulo: Lista
      codigo: "[]

            [1, 1, 2]"

    - titulo: Bloques sin parámetros
      codigo: "{algo}"

    - titulo: Bloques / Exp. lambda (De un parámetro)
      codigo: "{x => algo con x}"

    - titulo: Bloques / Exp. lambda (Más de  un parámetro)
      codigo: "{x, y => algo con x e y}"

operadoresLogicosYMatematicos: 
    - titulo: Equivalencia
      codigo:  ==
    
    - titulo: Identidad
      codigo: ===

    - titulo: Equivalencia
      codigo: "!="

    - titulo: Comparación de orden
      codigo: "> >= < <="

    - titulo: Disyunción, 'O' lógico 
      codigo: "|| or"

    - titulo: Conjunción, 'Y' lógico
      codigo: "&& and"

    - titulo: Negación 
      codigo: "!unBool  
      \nunBool.negate()  
      \nnot unBool"

    - titulo: Operadores aritméticos
      codigo: "+ - * /"

    - titulo: División entera
      codigo: dividendo.div(divisor)

    - titulo: Resto
      codigo: dividendo % divisor

    - titulo: Valor absoluto
      codigo: unNro.abs()

    - titulo: Exponenciación
      codigo: base ** exponente

    - titulo: Raíz cuadrada
      codigo: unNro.squareRoot()

    - titulo: Máximo entre dos números
      codigo: unNro.max(otroNro)

    - titulo: Mínimo entre dos números
      codigo: unNro.min(otroNro)

    - titulo: Verificar si un número está entre otros dos
      codigo: unNro.between(uno, otro)

    - titulo: Par
      codigo: unNro.even()

    - titulo: Impar
      codigo: unNro.odd()

opSimplesCollList:
    - titulo: Longitud 
      codigo: coleccion.size()
      
    - titulo: Si está vacía
      codigo: coleccion.isEmpty()

    - titulo: Concatenación 
      codigo: coleccion + otraColeccion

    - titulo: Unión
      codigo: set.union(coleccion)

    - titulo: Intersección
      codigo: set.intersection( coleccion) 

    - titulo: Acceso por índice
      codigo: lista.get(indice)

    - titulo: Pertenencia
      codigo: coleccion.contains(elem)

    - titulo: Máximo 
      codigo: coleccionOrdenable.max()

    - titulo: Minimo
      codigo: coleccionOrdenable.min()

    - titulo: Aplanar
      codigo: coleccionDeColecciones.flatten()

    - titulo: Primeros n elementos
      codigo: lista.take(n)

    - titulo: Primer elemento
      codigo: "lista.head() \nlista.first()"

    - titulo: Último elemento
      codigo: lista.last()

    - titulo: Sin repetidos
      codigo: coleccion.asSet()

opAvanCollList:
    - titulo: Sumatoria según transformación
      codigo: coleccion.sum(bloqueNumericoDe1)

    - titulo: Filtrar
      codigo: coleccion.filter(bloqueBoolDe1)

    - titulo: Transformar
      codigo: coleccion.map(bloqueDe1)

    - titulo: Todos cumplen
      codigo: coleccion.all(bloqueBoolDe1)

    - titulo: Alguno cumple
      codigo: coleccion.any(bloqueBoolDe1)

    - titulo: Transformar y aplanar
      codigo: coleccion.flatMap(bloqueDe1)

    - titulo: Reducir/plegar a izquierda
      codigo: coleccion.fold(valInicial, blqDe2)

    - titulo: Primer elemento que cumple condición
      codigo: "coleccion.find(bloqueBoolDe1) 
               \ncoleccion.findOrElse({bool}, {})"

    - titulo: Cantidad de elementos que cumplen condición
      codigo: coleccion.count(bloqueBoolDe1)

    - titulo: Obtener colección ordenada
      codigo: coleccion.sortedBy(bloqueBoolDe2)

    - titulo: Máximo según criterio
      codigo: coleccion.max(bloqueOrdenableDe1)

    - titulo: Mínimo según criterio
      codigo: coleccion.min(bloqueOrdenableDe1)

mensajeDeColl:
    - titulo: Agregar un elemento.
      codigo: coleccion.add(objeto)

    - titulo: Agregar todos los elementos de la otra colección.
      codigo: coleccion.addAll(otraColeccion)

    - titulo: Evaluar el bloque para cada elemento.
      codigo: coleccion.forEach({})

    - titulo: Eliminar un objeto.
      codigo: coleccion.remove(objeto)

    - titulo: Eliminar todos los elementos.
      codigo: coleccion.clear()

    - titulo: Deja ordenada la lista según un criterio.
      codigo: lista.sortBy(bloqueBoolDe2)
    
comandosBasicGit:
    - titulo: Clonar repositorio
      codigo: git clone [URL del repo original]
      descripcion: Nos permite crear una copia local del repositorio original (situado
        en GitHub).

    - titulo: Agregar archivos al área de preparación (staging area)
      codigo: git add * .
      descripcion: Con este comando agregamos todos los archivos que deben estar
        en el 'staging area', es decir, nos va a permitir "preparar"
        aquellos archivos que modificamos para que los podamos
        'enviar' a través del commit.

    - titulo: Hacer commit de los cambios
      codigo: git commit -m 'mensaje'
      descripcion: Nos permite "actualizar" nuestro repositorio local con aquellos
        cambios que hayamos realizado. En la parte de 'mensaje'
        debemos aclarar de manera descriptiva aquello que hayamos
        modificado, por ejemplo 'git commit -m 'Modifiqué los errores que
        tenía en la resolución de mi ejercicio''

    - titulo: Subir cambios al repositorio remoto
      codigo: git push origin [rama]
      descripcion: Esto nos posibilita actualizar el repositorio original que tenemos
        en GitHub con aquellos cambios que hicimos en nuestro
        repositorio local. En '[rama]' debemos especificar si se trata de
        main o master, por ejemplo 'git push origin master'


    - titulo: Obtener cambios del repositorio remoto
      codigo: git pull
      descripcion: Nos permite bajar de GitHub todos los cambios que recibió
        nuestro proyecto. Nos servirá cuando trabajemos en grupo y otra
        persona realice cambios en el mismo. De esta manera tendremos la
        versión más reciente del proyecto de manera local.

    - titulo: Configurar nombre de usuario global
      codigo: git config --global user.name
      descripcion: Ponemos nuestro usuario luego de 'user.name' y cargamos nuestro usuario en nuestra PC PERSONAL.

    - titulo: Configurar correo electrónico global
      codigo: git config --global user.email
      descripcion: Ponemos nuestro mail luego de 'user.email' y cargamos nuestro mail en nuestra PC PERSONAL.

---
