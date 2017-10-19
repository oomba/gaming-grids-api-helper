const graphql = require('graphql')

module.exports = {
  ApiStreamingVideoPlayer: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.StreamingController.RemoveServiceFromPlayer',
    method: 'DELETE',
    url: '/api/Streaming/Video/Player',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientStreamingApiStreamingVideoPlayerbody',
            fields: {
              ServiceId: { type: graphql.GraphQLInt },
              NickName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientStreamingApiStreamingVideoPlayerResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiStreamingVideoTeamByentityName: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.StreamingController.RemoveServiceFromTeam',
    method: 'DELETE',
    url: '/api/Streaming/Video/Team/{entityName}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientStreamingApiStreamingVideoTeamByentityNamebody',
            fields: {
              ServiceId: { type: graphql.GraphQLInt },
              NickName: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientStreamingApiStreamingVideoTeamByentityNameurlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientStreamingApiStreamingVideoTeamByentityNameResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
