let isActive: boolean;

// ...

function mapearStatusDeUsuario(status: boolean): string {
    if (status) {
        return `usuario está ativo`
    } else {
        return `usuario não está ativo`
    }
}

mapearStatusDeUsuario(true)