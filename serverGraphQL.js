import { graphql, buildSchema } from 'graphql'

export const schema = buildSchema(`
    type Query {
        hello: String
        number: Int
        rollDice(numDice: Int!, numSides: Int = 6): [Int]
    }
`);

export const rootValue = {
    hello: () => 'Hello world!',
    number: () => 123,
    rollDice(args) {
        const output = []
        for (let i = 0; i < args.numDice; i++) {
            output.push(1 + Math.floor(Math.random() * (args.numSides || 6)))
        }
        return output
    }
}
