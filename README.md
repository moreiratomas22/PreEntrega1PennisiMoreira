Bienvenidos a la Tienda oficial de TUFONO STORE

Aqui encontrarar una amplia cartera de Celulares, todos los últimos modelos de las marcas más conocidas del mundo.

En esta App podrás encontrarte principalmente con el listado completo de todos los equipos. Uno puede navegar las distintas categorías
de teléfonos desde la barra de navegación de la web, y se mostrarán únicamente los de su preferencia. Se trae cada categoría desde FireStore. Siempre puede volver al listado completo presionando en el logo de la empresa, también ubicado en la barra de navegación.

Cuando seleccionamos el boton "Ver mas detalles" de algún item, podemos acceder a las características del equipo, su disponibilidad en stock, su precio, y una botonera para poder agregar unidades a mi Carro de Compras. El contador no permite agregar más artículos de l os que hay en stock.
Una vez agregado los items al carro, nos aparecen dos opciones: Seguir comprando, que nos lleva al catálogo completo de equipos, o ir a ver mi Carro de Compras.
Se puede acceder al Carro de Compras tanto como después de agregar items, o presionando en el ícono situado en la barra de navegación a la derecha. El ícono del carro va actualizando la cantidad de items que el pedido tiene.
Una vez en tu carrito, verás la descripción de tu pedido: Los productos, los precios de cada producto, un subtotal por cada artículo


<!-- // Reversion del README -->

Uno se encuentra en una primera instancia con el listado de TODOS los equipos que tenemos. Se los puede filtrar desde la barra de navegación por categoria, traidas directamente desde FireStore. Asimismo, en la barra podemos encontrar el Logo de la empresa (el cual te devuelve siempre que uno desee al brand principal), y el ícono del carro de compras. Dicho ícono, no sólo te direcciona a tu propio carrito, sino que muestra EN VIVO la cantidad de productos que uno ha ido agregando a su compra.
<!-- AGREGAR ALGUNA ESPECIFICACION DE LAS RUTAS? DE COMO SE RENDERIZA EL COMPONENTE  Y NO TODA LA WEB-->
Con respecto a las RUTAS, se muestran en el buscador por categoria, item, por seccion (cart, pucharse)
<!-- FIN -->
Mas abajo, dentro de la página principal y a lo largo de cada FILTRADA de categorias, nos encontramos con un INPUT, el cual nos pide que ingresemos el número de ID de mi compra, para poder ver su estado, descripcion y fecha de cuándo se la realizó.
<!-- SE EXPLICA QUE EL NUMERO DE TICKET ES EL QUE MISMO FIRESTORE NOS PROPORCIONA? -->
Si uno presiona en el botón de "Ver mas detalles", accede a las propiedades de cada item; su nombre, descripción, cantidad en stock, precio, y una botonera para agregar la cantidad que uno desee de ese artículo a su carro, se puede incrementar como decrementar (hecha la función que no permite agregar más que el stock disponible). Una vez que el usuario decide agregar el artículo a su carro, aparece un mensaje confirmandole cuántos productos se han agregado, y nos brinda dos opciones: visualizar ese carro, o seguir comprando. Si uno decide seguir comprando, vuelve inmediatamente al listado de TODOS los articulos; si decide visualizar el carro, lo lleva a su carro de compras.
<!-- CREO QUE ESTA BIEN EXPLICADA LA EXPERIENCIA DE COMRPA POR ARTICULO -->
Una vez posicionados en el carro de compras, si no se han agregado productos, hay un mensaje que informa que no hay ningun producto agregado, y ofrece un boton para volver al inicio. Si los productos, ya estuviesen agregados, nos muestra en una tabla, todos los articulos que tengo dentro de mi carrito, con su nombre, su precio, el subtotal de cada producto y un precio total de toda la compra. Por cada artículo agregado, existe un boton de color rojo para eliminarlo de mi carro. Tambien como existe un botón mas general que permite limpiar por completo el carrito de compras.
Para finalizar la compra, hay que completar un formulario. No se habilita el boton de "Finalizar compra" hasta no haber completado todos los campos, incluso hasta haber confirmado correctamente el mail del usuario exactamente igual. Si está todo OK, se muestra una alerta de un tilde verde con un mesaje que indica el número de ID de la compra, y que se ha registrado correctamente. En caso contrario, si no se encuentra todo OK, sale una alerta con una cruz roja diciendo que no se ha podido finalizar la compra, que falta stock en 1 o más productos de su carro. Esto se produce si, por ejemplo, el usuario deja cosas en su carro, y tal vez al otro dia intenta comprar los artículos agregados al carro el dia anterior, pero ese mismo ya no está en stock.
Una vez finalizada la compra, el carrito se vuelve a vaciar para poder dar lugar a efectuar otra compra, y al volver a estar vacío, nos vuelve a ofrecer la opción de "Volver al Inicio".
<!-- EXPLICO LA FUNCIONALIDAD DE LOS BOTONES? QUE SON DOS COMPONENTES QUE FUI REUTILIZANDO Y ADAPTANDOLOS A CADA SECCION DONDE ESTAN? -->
