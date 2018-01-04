import { GraphQLString, GraphQLNonNull, GraphQLInt } from "graphql"
import { Post, PostInputType } from "../types/Post"
import { fakeDatabase } from "../FakeDatabase";
import { CommentInputType } from "../types/Comment";

export default {
    addComment: {
        type: Comment,
        description: "Creates a new comment for a blog post",
        args: {
            comment: { type: CommentInputType }
        },
        resolve: function(parent, {comment}) {
            return fakeDatabase.addNewComment(comment)
        }
    }
}