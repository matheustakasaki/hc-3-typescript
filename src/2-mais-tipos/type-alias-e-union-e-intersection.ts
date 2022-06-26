
// Type Alias
type User = {
    name: string;
    lastName: string;
    dateOfBirth: string;
    age?: number;
}

const gabriel: User = {
    name: 'Gabriel',
    lastName: 'Ramos',
    age: 25,
    dateOfBirth: '21/01/1996'
}

// Union Types
type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: LogLevel) {
    console.log(`[${level}] - ${message}`)
}

logMessage('Uma mensagem', 'info');


// Intersection types: &
type About = {
    bio: string;
    interests: string[]
}

type Profile = User & About

const userWithProfile: Profile = {
    name: 'gabriel',
    lastName: 'santos',
    dateOfBirth: '29/01/1996',
    bio: 'Olá meu nome é Gabriel',
    interests: ['cachorros', 'música']
}


type ComposedProfile = User & {
    log: LogLevel;
}