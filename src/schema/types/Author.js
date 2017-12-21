import {GraphQLObjectType, GraphQLString} from 'graphql'

export const Author = new GraphQLObjectType({
    name: "Author",
    description: "All details of an author on the website",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString }
    })
})