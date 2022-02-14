class JwtService {
    private jwt;
    private secret;
    constructor(jwt: any, secret: string) {
        this.jwt = jwt;
        this.secret = secret;
    }

    async decodeToken(token: string) {
        return await this.jwt.verify(token, this.secret);
    }

    async generateToken(data: any) {
        return await this.jwt.sign(data, this.secret);
    }
}

export default JwtService;