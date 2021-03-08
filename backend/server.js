const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const mongoose = require('mongoose')
const ExpressGraphQL = require("express-graphql");

const PORT = process.env.PORT || 8080
const app = express();

app.use(
    '/graphql/pins',
    graphqlHTTP({
        schema,
        graphiql: true
    })
)

app.listen(PORT, () => {
    console.log(`GraphQL server listening http://localhost:8080/graphql/pins`);
});