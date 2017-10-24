const graphql = require('graphql')

module.exports = {
  ApiStreamingVideoPlayer: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.StreamingController.AddServiceForPlayer',
    method: 'POST',
    url: '/api/Streaming/Video/Player',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientStreamingApiStreamingVideoPlayerBody',
            fields: {
              ServiceId: { type: graphql.GraphQLFloat },
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
  ApiStreamingVideoPlayer2: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.StreamingController.RemoveServiceFromPlayer',
    method: 'DELETE',
    url: '/api/Streaming/Video/Player',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientStreamingApiStreamingVideoPlayer2Body',
            fields: {
              ServiceId: { type: graphql.GraphQLFloat },
              NickName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientStreamingApiStreamingVideoPlayer2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiStreamingVideoTeamByentityName: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.StreamingController.AddServiceToTeam',
    method: 'POST',
    url: '/api/Streaming/Video/Team/{entityName}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientStreamingApiStreamingVideoTeamByentityNameBody',
            fields: {
              ServiceId: { type: graphql.GraphQLFloat },
              NickName: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientStreamingApiStreamingVideoTeamByentityNameUrlParams',
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
  },
  ApiStreamingVideoTeamByentityName2: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.StreamingController.RemoveServiceFromTeam',
    method: 'DELETE',
    url: '/api/Streaming/Video/Team/{entityName}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientStreamingApiStreamingVideoTeamByentityName2Body',
            fields: {
              ServiceId: { type: graphql.GraphQLFloat },
              NickName: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientStreamingApiStreamingVideoTeamByentityName2UrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientStreamingApiStreamingVideoTeamByentityName2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
