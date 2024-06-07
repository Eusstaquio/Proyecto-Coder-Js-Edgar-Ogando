Configuración del Proyecto

Paso a Paso Resumido
Estructura de Archivos:

proyecto/scss/estilos.scss
proyecto/css/estilos.css
proyecto/index.html
proyecto/package.json
Instala Sass (si no lo has hecho):

bash
Copy code
npm install -g sass
Añade Scripts a package.json:

json
Copy code
{
  "scripts": {
    "build-css": "sass scss/estilos.scss css/estilos.css",
    "watch-css": "sass --watch scss/estilos.scss:css/estilos.css"
  }
}
Compila SCSS a CSS:

bash
Copy code
npm run build-css
Observa cambios automáticamente:

bash
Copy code
npm run watch-css
Incluye CSS en tu HTML:

html
Copy code
<!-- <link rel="stylesheet" href="css/estilos.css"> -->
Consejo Extra
Si estás utilizando un framework o un entorno de desarrollo más avanzado (como React, Angular, Vue.js, etc.), la integración de SCSS puede variar un poco. La mayoría de estos frameworks tienen soporte incorporado o plugins para manejar SCSS.