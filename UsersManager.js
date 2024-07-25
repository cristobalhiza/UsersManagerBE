class UsersManager {
    static usuarios=[]

    static getUsuarios= ()=> {
        return this.usuarios
    }

    static addUsuario(nombre, email, password){
        if(!nombre || !email || !password){
            console.log('Complete los datos')
            return
        }
        if(typeof nombre!=="string" || typeof email!=="string" || typeof password!=="string"){
            console.log('Los datos deben ser de tipo string')
            return
        }

        if(!nombre.trim() || !email.trim() || !password.trim()){
            console.log(`Complete los datos`)
            return 
        }

        let regExMail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regExMail.test(email)){
            console.log('Mail Invalido')
            return
        }
        this.usuarios.push({ nombre, email, password })
        console.log('Usuario Creado')
    }

}

console.log(UsersManager.getUsuarios())

UsersManager.addUsuario(100, "juan@mail.com", "123")
UsersManager.addUsuario(" ", "juan@mail.com", "123")
UsersManager.addUsuario(100, "juan@mail.com",)
UsersManager.addUsuario("juan", "juantest.com","123")
UsersManager.addUsuario("juan", "juan@mail.com", "123")