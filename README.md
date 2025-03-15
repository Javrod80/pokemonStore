# pokemonStore

Para entrar a la tienda de pokemon hay que loguearse con el usuario  y la contraseña .

He hecho un "falso" login para entrar en la tienda. Dentro de la tienda en la barra de navegación tienes una página de Perfil donde se podrá cerrar sesión. En la página Pokemons están los pokemons que se pueden agregar al carrito, he usado la llamada a la API para que se descarguen todos los pokemons (1134). En Apifetch.js mediante una función random le asigno precio a los pokemons y los guardo en el localStorage para que cada vez que se entre o se vuelva a la página se mantengan los precios asignados y no cambien.
En la página pokemons se puede buscar por nombre y agregar al carrito el pokemon elegido. 
Uso Hooks personalizados que están en la carpeta hooks, useFetch.js para mostrar detalles del pokemon y Useprofile.js para el usuario actual y manejar el cierre de sesión.
Uso el contexto para el carrito con Cartprovider.js donde se guarda el carrito en localStorage y también se maneja el añadir al carrito , la cantidad del mismo pokemon, eliminar.
Uso el contexto en UserProvider.js que gestiona el estado del usuario incluyendo el proceso de autentificación.
El componente Layout.js es para poder usar una barra de navegación que este fija sin depender de en que página se esté. Pero que no aparezca hasta que se esté logueado.
También he cambiado el favicon.ico.



