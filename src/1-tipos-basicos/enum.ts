enum Permissoes {
    admin = 'Admin',
    editor = 'Editor',
    common = 'Common'
}

enum Colors {
    red = '#ff0000',
    black = '#000000'
}

const user = {
    perfil: Colors.black,
    nivel: Permissoes.admin
}

console.log(user)