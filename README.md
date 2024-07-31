```markdown
# UsersManager

UsersManager es una clase para la gestión de usuarios, incluyendo funcionalidades para agregar usuarios y autenticarlos. Este proyecto utiliza el módulo `crypto` de Node.js para la creación de hashes seguros de contraseñas.

## Requisitos

- Node.js (versión 12 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/users-manager.git
   cd users-manager
   ```

2. Instala las dependencias (aunque en este caso no hay dependencias adicionales a instalar):

   ```bash
   npm install
   ```

## Uso

### Agregar Usuario

Para agregar un usuario, utiliza el método `addUsuario(nombre, email, password)`. Este método realiza varias validaciones, como verificar que los datos no estén vacíos, que sean de tipo string y que el email tenga un formato válido.

```javascript
const UsersManager = require('./path/to/users-manager');

// Agregar un nuevo usuario
UsersManager.addUsuario("Juan", "juan@mail.com", "12345");
```

### Iniciar Sesión

Para iniciar sesión, utiliza el método `login(email, password)`. Este método compara el email y la contraseña proporcionados con los datos almacenados en la lista de usuarios.

```javascript
// Iniciar sesión con un usuario
UsersManager.login("juan@mail.com", "12345");
```

### Obtener Usuarios

Para obtener la lista de usuarios registrados, utiliza el método `getUsuarios()`.

```javascript
// Obtener la lista de usuarios
console.log(UsersManager.getUsuarios());
```

## Ejemplo Completo

```javascript
const UsersManager = require('./path/to/users-manager');

console.log(UsersManager.getUsuarios());

UsersManager.addUsuario("Juan", "juan@mail.com", "12345");
UsersManager.addUsuario("Luciana", "luciana@test.com", "password123");
UsersManager.addUsuario("Martina", "martina@test.com", "mysecret");

console.log(UsersManager.getUsuarios());

UsersManager.login("juan@mail.com", "12345");   // Login correcto
UsersManager.login("luciana@test.com", "wrongpassword"); // Usuario o contraseña incorrectos
UsersManager.login("martina@test.com", "mysecret"); // Login correcto
```

## Consideraciones de Seguridad

- **Hashing de Contraseñas**: Utilizamos `crypto.createHmac` para hashear las contraseñas antes de almacenarlas.
- **Clave Secreta**: La clave utilizada para el HMAC debe mantenerse en secreto y segura.

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -am 'Agregar nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

## Contacto

Si tienes preguntas o sugerencias, no dudes en contactar a [cristobalhiza](mailto:cristobalhiza@gmail.com).

```
