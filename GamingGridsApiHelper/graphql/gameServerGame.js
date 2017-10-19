const graphql = require('graphql')

module.exports = {
  ApiGameByGameShortCodePlatformByPlatformShortCodePlayerByplayerIdentifierUpdateNickname: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.GameController.UpdateNickname',
    method: 'POST',
    url:
      '/api/Game/{GameShortCode}/Platform/{PlatformShortCode}/Player/{playerIdentifier}/UpdateNickname',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerGameApiGameByGameShortCodePlatformByPlatformShortCodePlayerByplayerIdentifierUpdateNicknamebody',
            fields: { Nickname: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerGameApiGameByGameShortCodePlatformByPlatformShortCodePlayerByplayerIdentifierUpdateNicknameurlParams',
            fields: {
              playerIdentifier: { type: graphql.GraphQLString },
              GameShortCode: { type: graphql.GraphQLString },
              PlatformShortCode: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerGameApiGameByGameShortCodePlatformByPlatformShortCodePlayerByplayerIdentifierUpdateNicknameResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameByGameShortCodePlatformByPlatformShortCodePlayerConfirmPlayer: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.GameController.ConfirmPlayer',
    method: 'POST',
    url:
      '/api/Game/{GameShortCode}/Platform/{PlatformShortCode}/Player/ConfirmPlayer',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerGameApiGameByGameShortCodePlatformByPlatformShortCodePlayerConfirmPlayerbody',
            fields: {
              EntityPlayerId: { type: graphql.GraphQLInt },
              EntityPlayerEmailAddress: { type: graphql.GraphQLString },
              EntityPlayerName: { type: graphql.GraphQLString },
              PlayerNickname: { type: graphql.GraphQLString },
              PlayerIdentifier: { type: graphql.GraphQLString },
              ThirdPartyApiRegion: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerGameApiGameByGameShortCodePlatformByPlatformShortCodePlayerConfirmPlayerurlParams',
            fields: {
              GameShortCode: { type: graphql.GraphQLString },
              PlatformShortCode: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerGameApiGameByGameShortCodePlatformByPlatformShortCodePlayerConfirmPlayerResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
