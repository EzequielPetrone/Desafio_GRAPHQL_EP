# DESAFIO: GRAPHQL
## EZEQUIEL PETRONE

## Comentarios entregable actual:

- Respeté el esquema en capas que venía construyendo: Lo que hice fue modificar solamente las capas de Ruteo y sus Controladores. Las capas de Negocio y Persistencia quedaron intactas.

- Adapté los Controladores del formato REST a GRAPHQL, y toda la configuración fuerte (esquemas de GRAPHQL) me quedó en la capa de Ruteo. Y de esta forma el server sigue funcionando prácticamente igual.

- Para testear todo usé GRAPHIQL. No desarrollé un frontend.

- En la carpeta doc adjunté un .txt con las consultas desarrolladas y también algunas capturas de pantalla de cómo se me iba devolviendo la información.