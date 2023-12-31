import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    payload: { id: number }
    user: {
      name: string
      avatar_url: string
      sub: string
    }
  }
}
