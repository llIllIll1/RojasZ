## Ajax en html

- *Concepto*: Ajax significa JavaScript sincrónico y XML. Ajax es una nueva técnica para crear aplicaciones web mejores, más rápidas y más interactivas con la ayuda de XML, HTML, CSS y Java Script.

1. Ajax usa XHTML para contenido, CSS para presentación, junto con Document Object Model y JavaScript para visualización de contenido dinámico.

2. Las aplicaciones web convencionales transmiten información hacia y desde el servidor mediante solicitudes sincrónicas. Significa que completa un formulario, presiona enviar y se lo dirige a una nueva página con nueva información del servidor.

3. Con AJAX, cuando presiona enviar, JavaScript realizará una solicitud al servidor, interpretará los resultados y actualizará la pantalla actual. En el sentido más puro, el usuario nunca sabría que se transmitió algo al servidor.

4. XML se usa comúnmente como formato para recibir datos del servidor, aunque se puede usar cualquier formato, incluido el texto sin formato.

5. AJAX es una tecnología de navegador web independiente del software del servidor web.

6. Un usuario puede continuar usando la aplicación mientras el programa cliente solicita información del servidor en segundo plano.

7. Interacción intuitiva y natural con el usuario. No es necesario hacer clic, el movimiento del mouse es un desencadenante de evento suficiente.

8. Basado en datos en lugar de basado en páginas.


- *Funcionamiento* : 
1. Se produce un evento en una página web (se carga la página, se hace clic en un botón)
2. JavaScript crea un objeto XMLHttpRequest
3. El objeto XMLHttpRequest envía una solicitud a un servidor web
4. El servidor procesa la solicitud
5. El servidor envía una respuesta a la página web.
6. La respuesta es leída por JavaScript
7. JavaScript realiza la acción adecuada (como la actualización de la página)