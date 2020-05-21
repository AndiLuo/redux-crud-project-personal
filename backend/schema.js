// const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLLIST} = require('graphql')
// const axios = require('axios')
// //pin
// const Pin = new GraphQLObjectType({
//     name: 'Pin',
//     fields: () => ({
//         title: {type: GraphQLString},
//         author: {type: GraphQLString},
//         image: {type: GraphQLString},
//         description: {type: GraphQLString},
//         height: {type: GraphQLInt},
//         width: {type: GraphQLInt}
//     })
// })

// const RootQuery = new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//         launches: {
//             type: new GraphQLLIST(Pin),
//             resolve(parents, args){
//                 return axios.get('/api/pins')
//                 .then
//             }
//         }
//     }
// })