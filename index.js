import express from 'express';
import { graphqlHTTP } from 'express-graphql'
import { rootValue, schema } from './serverGraphQL.js'

export const app = express()


app.use(express.json())
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}))

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on port ${process.env.PORT || 8080}`);
})
