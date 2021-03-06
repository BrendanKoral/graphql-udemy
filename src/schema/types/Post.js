import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLInputObjectType, GraphQLNonNull} from 'graphql'
import { Comment } from "./Comment"
import { Author } from "./Author"
import { fakeDatabase } from "../FakeDatabase"

export const Post = new GraphQLObjectType({
    name: "Post",
    description: "All details of a post",
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        
        author: {
            type: Author,
            resolve: (post) => {
                return fakeDatabase.getAuthor(post.author)
            }
        },

        comments: {
            type: new GraphQLList(Comment),
            resolve: (post) => {
                return fakeDatabase.getCommentsForPost(post.id)
            }
        }
    })
})

export const PostInputType = new GraphQLInputObjectType({
    name: 'PostInput',
    fields: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: new GraphQLNonNull(GraphQLString) }
    }
})