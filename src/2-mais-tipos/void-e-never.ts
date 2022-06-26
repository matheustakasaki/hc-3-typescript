function a() {

}

function b() {

}

function principal(): void {
    console.log('executando')
    const valorA = a();
    const valrB = b();
}
principal()

// Never

function funcaoQueNaoRetorna():never{
    throw new Error('ola')
}
const e = funcaoQueNaoRetorna()