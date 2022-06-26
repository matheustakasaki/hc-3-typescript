enum Permissoes {
    admin = 'Admin',
    editor = 'Editor',
    common = 'Common'
}

const user = {
    nivel: Permissoes.admin
}

console.log(user)