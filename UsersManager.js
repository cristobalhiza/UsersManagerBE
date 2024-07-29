const crypto=require('crypto')


class UsersManager {
  
    static usuarios = [];

  static getUsuarios = () => {
    return this.usuarios;
  };

  static addUsuario(nombre, email, password) {
    if (!nombre || !email || !password) {
      console.log("Complete los datos");
      return;
    }
    if (
      typeof nombre !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      console.log("Los datos deben ser de tipo string");
      return;
    }

    if (!nombre.trim() || !email.trim() || !password.trim()) {
      console.log(`Complete los datos`);
      return;
    }

    let regExMail =
      /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regExMail.test(email)) {
      console.log("Mail Invalido");
      return;
    }

    let existe=UsersManager.usuarios.find(usuario=>usuario.email===email)
    if(existe){
        console.log(`Ya existen usuarios con ${mail}`)
    }

    let id = 1;
    if (UsersManager.usuarios.length > 0) {
      id = math.max(...UsersManager.usuarios.map((d) => d.id)) + 1;
    }

    password=crypto.createHmac('sha512', 'coder123').update(password).digest('hex')

    let nuevoUsuario = {
      id,
      nombre,
      email,
      password,
    };

    UsersManager.usuarios.push(nuevoUsuario);
    console.log("Usuario Creado");
  } //adduser

    static login(email, password){
        password=String(password)
        password=crypto.createHmac('sha512', 'coder123').update(password).digest('hex')
        let usuario=UsersManager.usuarios.find(usuario=>usuario.email===email && usuario.password===password)
        if(!usuario){
            console.log("Usuario o contraseña incorrectos")
            return
        }
        console.log(`Login correcto, bienvenido ${usuario.nombre}!`)
    }
}

console.log(UsersManager.getUsuarios());

UsersManager.addUsuario(100, "juan@mail.com", "123");
UsersManager.addUsuario(" ", "juan@mail.com", "123");
UsersManager.addUsuario(100, "juan@mail.com");
UsersManager.addUsuario("juan", "juantest.com", "123");
UsersManager.addUsuario("juan", "juan@mail.com", "123");

UsersManager.login("carlos@test.com", "123")
UsersManager.login("martina@mail.com", "9999sdsdsd")
UsersManager.login("juan@mail.com", "123")