## Eventos JS

- *Concepto*: Event Bubbling es el término que las personas deben encontrar al desarrollar una aplicación web o una página web utilizando . Básicamente, el Event Bubbling es una técnica en la que se llama a los controladores de eventos cuando un elemento está anidado en otro elemento y debe ser del mismo evento. Es similar a la encapsulación.
Cualquier objeto de una web son cajas rectangulares, claramente las cajas no son visibles a simple vista

- *¿Qué es la captura de eventos?*: 
En esta fase, se llama a los oyentes capturadores cuyo valor se ha registrado como 'verdadero'. Está escrito como: el.addEventListener('click', listener, true)
Aquí, el valor de escucha se ha registrado como 'verdadero', por lo que se captura este evento. Si no había ningún valor, el valor predeterminado era falso y el evento no se capturaría. Entonces, en esta fase, ese evento cuyo valor es verdadero solo se abre camino desde la ventana y es llamado y capturado.
Luego, en la fase de destino del evento, se llama a todos los oyentes registrados independientemente de que el estado de su bandera sea verdadero o falso.

La secuencia de activación del flujo de eventos estándar de dom es: Atrapa primero y luego burbujea, Es decir, cuando se activa el evento dom, el evento se capturará primero y el evento se propagará a través de la propagación del evento después de que se capture el origen del evento.Los diferentes navegadores tienen diferentes implementaciones de esto. IE10 y los siguientes no admiten eventos de captura.Entonces hay una etapa de captura de eventos menos, IE11, Chrome, Firefox, Safari y otros navegadores. Entonces exista al mismo tiempo.

Cuando se trata de la captura y propagación de eventos, debo mencionar dos métodos para el enlace de eventos, addEventListener y attachEvent. Por supuesto, hay otros métodos de enlace de eventos que no se presentan aquí.

- AddEventListener(event, listener, useCapture)　　

Definición de parámetros: Evento --- (nombre del evento, como clic, sin encendido), oyente --- función de monitoreo de eventos,useCapture---Ya sea para utilizar la captura de eventos para la captura de eventos,

El valor predeterminado es falso, es decir, se adopta el método de propagación de eventos.

AddEventListener es compatible con IE11, Chrome, Firefox, Safari y otros navegadores.

- attachEvent(event,listener)　　

Definición de parámetros: Evento --- (nombre del evento, como onclick, con on), escucha --- función de escucha del evento.

AttachEvent se utiliza principalmente en los navegadores IE, y solo es compatible con IE10 y versiones anteriores. IE11 ha abandonado este método (Microsoft sigue siendo bastante interesante y se está acercando lentamente al estándar).
