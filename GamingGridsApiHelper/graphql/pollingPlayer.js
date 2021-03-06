const graphql = require('graphql')

module.exports = {
  ApiPlayerMuut: {
    fullName: 'GamingGrids.Api.Polling.v2.Controllers.PlayerController.Muut',
    method: 'GET',
    url: 'http://t2w.polling.v2.dev6.gaminggrids.com/api/Player/Muut',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'pollingPlayerApiPlayerMuutResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'pollingPlayerApiPlayerMuutResponseResponse',
            fields: {
              Timestamp: { type: graphql.GraphQLFloat },
              Message: { type: graphql.GraphQLString },
              Signature: { type: graphql.GraphQLString }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyPermissionsAdmin: {
    fullName: 'GamingGrids.Api.Polling.v2.Controllers.PlayerController.IsAdmin',
    method: 'GET',
    url:
      'http://t2w.polling.v2.dev6.gaminggrids.com/api/Player/My/Permissions/Admin',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'pollingPlayerApiPlayerMyPermissionsAdminResponse',
      fields: {
        Response: { type: graphql.GraphQLBoolean },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyTournamentsMatchLastId: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.PlayerController.LastMatchId',
    method: 'GET',
    url:
      'http://t2w.polling.v2.dev6.gaminggrids.com/api/Player/My/Tournaments/Match/LastId',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'pollingPlayerApiPlayerMyTournamentsMatchLastIdResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyTournamentsMatchActive: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.PlayerController.MyActiveMatch',
    method: 'GET',
    url:
      'http://t2w.polling.v2.dev6.gaminggrids.com/api/Player/My/Tournaments/Match/Active',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'pollingPlayerApiPlayerMyTournamentsMatchActiveResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'pollingPlayerApiPlayerMyTournamentsMatchActiveResponseResponse',
            fields: {
              TournamentMatchId: { type: graphql.GraphQLFloat },
              GameName: { type: graphql.GraphQLString },
              GameImageLargeUrl: { type: graphql.GraphQLString },
              TournamentMatchIsTeam: { type: graphql.GraphQLBoolean },
              ParticipantAEntityName: { type: graphql.GraphQLString },
              ParticipantANickname: { type: graphql.GraphQLString },
              ParticipantBEntityName: { type: graphql.GraphQLString },
              ParticipantBNickname: { type: graphql.GraphQLString },
              ScheduledStartDateTime: { type: graphql.GraphQLString },
              CurrentServerDateTime: { type: graphql.GraphQLString }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyTournamentsCheckinNeeded: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.PlayerController.MyTournamentNeedsCheckin',
    method: 'GET',
    url:
      'http://t2w.polling.v2.dev6.gaminggrids.com/api/Player/My/Tournaments/checkin/needed',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'pollingPlayerApiPlayerMyTournamentsCheckinNeededResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'pollingPlayerApiPlayerMyTournamentsCheckinNeededResponseResponse',
            fields: {
              TournamentId: { type: graphql.GraphQLFloat },
              TournamentName: { type: graphql.GraphQLString },
              GameImageLargeUrl: { type: graphql.GraphQLString },
              ScheduledStartDateTime: { type: graphql.GraphQLString }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
