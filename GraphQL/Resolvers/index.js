const blogResolvers = require('./blogs')
const userResolvers = require('./users')

module.exports = {
    Query: {
        ...blogResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation
    }
}