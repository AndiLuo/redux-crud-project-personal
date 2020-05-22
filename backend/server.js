const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const mongoose = require('mongoose')
const ExpressGraphQL = require("express-graphql");

const app = express();

app.use(
    '/graphql/pins',
    graphqlHTTP({
        schema,
        graphiql: true
    })
)

app.listen(8080, () => {
    console.log(`GraphQL server listening http://localhost:8080/graphql/pins`);
});