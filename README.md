# 🛒 PokemonStore

**PokemonStore** es una aplicación web desarrollada con React que permite a los usuarios explorar, seleccionar y comprar Pokémon dentro de una tienda virtual.

## 📌 Características
- 📋 Listado de Pokémon disponibles en la tienda.
- 🔍 Búsqueda y filtrado de Pokémon.
- 🛒 Carrito de compras interactivo.
- 👤 Autenticación de usuarios (Login/Logout).
- ⚙️ Configuración de usuario.

## 🛠 Tecnologías utilizadas
- **Frontend:** React
- **Estilos:** CSS
- **Estado y lógica:** Hooks y Context API

## 📂 Estructura del Proyecto

/PokemonStore
│── /src
│   │── /components      # Componentes reutilizables
│   │   │── ApiFetch.js
│   │   │── Cart.js
│   │   │── Footer.js
│   │   │── Header.js
│   │   │── Layout.js
│   │   │── Login.js
│   │   │── PokemonCard.js
│   │   │── Profile.js
│   │── /hook            # Hooks personalizados
│   │   │── UserProfile.js
│   │   │── useFetch.js
│   │── /pages           # Páginas de la aplicación
│   │   │── About.js
│   │   │── Home.js
│   │   │── NavBar.js
│   │   │── NotFound.js
│   │── /providers       # Contextos de la aplicación
│   │   │── CartProvider.js
│   │   │── UserProvider.js
│   │── App.js           # Componente principal
│   │── index.js         # Punto de entrada de React
│── package.json         # Dependencias y configuración
│── README.md            # Documentación


## 🚀 Instalación y Ejecución
1. Clona el repositorio:
   ```sh
   git clone https://github.com/usuario/PokemonStore.git
   ```
2. Instala las dependencias:
   ```sh
   cd PokemonStore
   npm install
   ```
3. Ejecuta la aplicación en modo desarrollo:
   ```sh
   npm start
   ```

## 📜 Funcionamiento
1. Los usuarios pueden navegar por la tienda y ver la lista de Pokémon disponibles.
2. Se pueden agregar Pokémon al carrito y realizar una simulación de compra.
3. Los usuarios autenticados pueden gestionar su perfil.

📷 Capturas de Pantalla
![image](https://github.com/user-attachments/assets/2a00af16-3ddf-4c7c-9170-761d169ead57)
![image](https://github.com/user-attachments/assets/b7972ced-18ed-4dd4-8ca3-6d9bcd523436)
![image](https://github.com/user-attachments/assets/beb583c6-97d7-452b-bf12-e58527e63103)
![image](https://github.com/user-attachments/assets/544cfd73-4a36-4160-a4f4-111f1ff72433)
![image](https://github.com/user-attachments/assets/e32f11c8-150f-4a9a-a505-77233da5d965)
![image](https://github.com/user-attachments/assets/64e4542a-b8f2-4e06-a291-d750ec9dfbb3)




## 📄 Licencia
Este proyecto está bajo la licencia MIT.




