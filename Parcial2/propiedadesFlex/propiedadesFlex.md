## FlexBox

- *Concepto*:  La herramienta Flexbox (de Flexible Box) fue creada para hacer estas tareas más sencillas y funcionales: los secundarios de un elemento con Flexbox se pueden posicionar en cualquier dirección y pueden tener dimensiones flexibles para adaptarse.
- *Elementos*:
Flexbox es un módulo completo y no una propiedad única; algunos de ellos deben declararse en el contenedor (el elemento principal, que llamamos de flex container), mientras que otros deben declararse en los elementos secundarios (el flex ítems)


- Propiedad + accion + valores de la propiedad para el padre e hijos
- Padre(Contenedor)

| Propiedad | Funcion | Valores | 
|---------- |------------- |--------- 
| display   | Esta propiedad define un flex container; inline o block dependiendo de los valores pasados. Coloca todos los elementos secundarios directos en un contexto Flex.           | flex,inline-flex,ms-flexbox 
| flex-direction   | Establece la dirección del eje principal y por tanto la dirección de los elementos flex.         | row(fila)
| flex-wrap        | Por estándar, los flex ítems todos intentarán encajarse en una sola línea. Con esta propiedad puedes modificar este comportamiento y permitir que los ítems pasen a la siguiente línea según sea necesario.           | nowrap. 
| flex-flow        | La propiedad flex-flow es una propiedad shorthand (una misma declaración incluye varios valores relacionados con más de una propiedad) que incluye flex-direction y flex-wrap. Determina cuáles serán los ejes principal y transversal del contenedor. El valor estándar es row nowrap. flex-direction y flex-wrap.           | row nowrap 
| align-items        | Define como se colocan los elementos dentro de una caja flexible flexbox relativamente al eje transversal.           | stretch
| justify-content     | Define como se colocan los elementos dentro de una caja flexible ( flexbox ) relativamente al eje principal, cuando los elementos no ocupan toda la caja.         | flex-start 
| align-content     | Alinea los elementos del contenedor flex cuando los elementos no utilizan todo el espacio disponible en el eje transversal.          | stretch 


- Hijo(Elementos)

| Propiedad | Funcion | Valores | 
|---------- |------------- |--------- 
| align-self      | Reposiciona elementos individuales relativamente al eje transversal. Generalmente se trata de elementos posicionados con align-items.           | auto, flex-start, flex-end, center, baseline, stretch 
| flex-grow        | Define cuánto puede crecer un elemento flex, si fuera necesario.           | El valor por defecto es 0. 
| flex-shrink        | Define cuánto puede disminuir ( contraerse ) un elemento flex, si fuera necesario           | El valor por defecto es 1. 
| flex-basis        | Especifica el valor inicial del tamaño principal de un elemento flex           | El valor por defecto es auto. 
| flex        | Esta es la propiedad shorthand para flex-grow, flex-shrink y flex-basis, combinadas. El segundo y tercer parámetros (flex-shrink y flex-basis) son opcionales.           | El valor por defecto es 0 1 auto. 
| order     | Se utiliza para cambiar el orden en el que aparecen los elementos individuales, Por estándar los flex ítems, se organizan en la pantalla en orden de código. Pero la propiedad order controla el orden en que aparecen en el contenedor.| 	número, initial, inherit

