const graphql = require('graphql')

module.exports = {
  ApiCacheBuildAll: {
    fullName: 'GamingGrids.Api.Control.v2.Controllers.CacheController.BuildAll',
    method: 'GET',
    url: '/api/Cache/Build/All',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlCacheApiCacheBuildAllResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
