
interface IAuth {
    generateAccessToken:  () => Promise<string>
    generateRefreshToken: () => Promise<string>
}

export default class Auth implements IAuth {

    constructor() {}

    async login() {

    }

    async register() {

    }

    async refreshToken() {
        
    }

    async generateAccessToken() {
        return 'token'
    }

    async generateRefreshToken() {
        return ''
    }
}