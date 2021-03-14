const axios = require('axios')
const mongoose = require('mongoose')
const {
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLSchema
} = require("graphql");

//Connect to mongoDB
mongoose.connect("mongodb://localhost:27017/cardDB")

//model to connect to mongoDB
const pinModel = mongoose.model("pin", {
    title: String,
    author: String,
    image: String,
    description: String,
    height: Number,
    width: Number
})

//Pin graphQL object model to query mongoDB pins
const Pin = new GraphQLObjectType({
    name: 'Pin',
    fields: () => ({
        title: {type: GraphQLString},
        author: {type: GraphQLString},
        image: {type: GraphQLString},
        description: {type: GraphQLString},
        height: {type: GraphQLInt},
        width: {type: GraphQLInt}
    })
})

//Create pin query to find pin objects in mongoDB
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        pin: {
            type: GraphQLList(Pin),
            resolve:(root, args, context) =>{
                return pinModel.find().exec();
            }
        }
        }
    })

//Export root query
module.exports = new GraphQLSchema({
    query: RootQuery
})