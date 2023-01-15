# Encriptador/Desencriptador
Esta app, como el nombre lo indica, sirve para encriptar y desencriptar texto. Se realizó como desafío/challenge en el programa de Oracle Next Education + Alura Latam.

## Desafío

### Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. Por ejemplo:
  - "gato" => "gaitober"
  - "gaitober" => "gato"
- La página debe tener campos para 
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre las dos opciones.
- El resultado debe ser mostrado en la pantalla.

#### Requisito extra:
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del `ctrl+C` o de la opción "copiar" del menú de las aplicaciones.

### Claves de encriptación/desencriptación:
- La letra "e" es convertida para "enter"
- La letra "i" es convertida para "imes"
- La letra "a" es convertida para "ai"
- La letra "o" es convertida para "ober"
- La letra "u" es convertida para "ufat"

## Uso
Su uso es muy sencillo, se debe ingresar el texto que se desea encriptar o desencriptar y presionar el botón correspondiente a la acción. Luego se mostrará en el segundo espacio el resultado de la operación; este podrá ser copiado al portapapeles del dispositivo por si fuera necesario.

## Comentarios
- Se integró la libería [SweetAlert2](https://sweetalert2.github.io/) para mostrar pop-ups estilizados.
- A pesar de que uno de los requisitos era que no se podían usar mayúsculas o caracteres especiales, como las tildes, decidí agregar esas cualidades y además también se capitalizan la primer palabra del texto y la primer palabra de cada oración.

## Deploy
- La aplicación se encuentra activa en el siguiente enlace: [link al sitio](https://encryptador-aluone.netlify.app/)
- Momentáneamente también se desplegó en Github Pages con el propósito de cumplir con requisitos de entrga.

## Contacto
- [Perfil de LinkedIn](https://www.linkedin.com/in/santiagofonzo/)

