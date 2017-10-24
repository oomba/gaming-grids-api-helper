const graphql = require('graphql')

module.exports = {
  ApiFileUpload: {
    fullName: 'GamingGrids.Api.Control.v2.Controllers.FileController.Upload',
    method: 'POST',
    url: '/api/File/Upload',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlFileApiFileUploadResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlFileApiFileUploadResponseResponse',
              fields: {
                name: { type: graphql.GraphQLString },
                size: { type: graphql.GraphQLFloat },
                shortUrl: { type: graphql.GraphQLString },
                url: { type: graphql.GraphQLString },
                thumbnailUrl: { type: graphql.GraphQLString },
                deleteUrl: { type: graphql.GraphQLString },
                deleteType: { type: graphql.GraphQLString },
                error: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
