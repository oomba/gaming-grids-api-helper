const graphql = require('graphql')

module.exports = {
  ApiPlatformEndpointConfiguration: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.PlatformController.EndpointConfiguration',
    method: 'GET',
    url: '/api/Platform/EndpointConfiguration',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'gameServerPlatformApiPlatformEndpointConfigurationResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'gameServerPlatformApiPlatformEndpointConfigurationResponseResponse',
            fields: {
              ClientApiId: { type: graphql.GraphQLInt },
              ClientApiKey: { type: graphql.GraphQLString },
              ClientApiIssuedDateTime: { type: graphql.GraphQLString },
              HasServerPermission: { type: graphql.GraphQLBoolean },
              ClientApiKeyDescription: { type: graphql.GraphQLString },
              GameServerApiEndPoint: { type: graphql.GraphQLString },
              ClientApiEndPoint: { type: graphql.GraphQLString },
              FtpHost: { type: graphql.GraphQLString },
              FtpPath: { type: graphql.GraphQLString },
              FtpUserName: { type: graphql.GraphQLString },
              FtpPassword: { type: graphql.GraphQLString },
              SslAvailable: { type: graphql.GraphQLBoolean },
              PlaybackPath: { type: graphql.GraphQLString }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
