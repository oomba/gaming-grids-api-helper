const graphql = require('graphql')

module.exports = {
  ApiTournamentSeries: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentSeriesController.CreateSeries',
    method: 'POST',
    url: '/api/Tournament/Series',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlTournamentSeriesApiTournamentSeriesBody',
            fields: {
              TournamentSeriesName: { type: graphql.GraphQLString },
              GamePlatformFranchiseTitleId: { type: graphql.GraphQLFloat },
              TournamentSubscriptionTypeId: { type: graphql.GraphQLFloat },
              RegistrationOpenDateTIme: { type: graphql.GraphQLString },
              TournamentStartDateTime: { type: graphql.GraphQLString },
              TournamentSerieseDoesCycle: { type: graphql.GraphQLBoolean }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentSeriesApiTournamentSeriesResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentSeriesByseriesId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentSeriesController.UpdateSeries',
    method: 'PUT',
    url: '/api/Tournament/Series/{seriesId}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlTournamentSeriesApiTournamentSeriesByseriesIdBody',
            fields: {
              TournamentSeriesName: { type: graphql.GraphQLString },
              GamePlatformFranchiseTitleId: { type: graphql.GraphQLFloat },
              TournamentSubscriptionTypeId: { type: graphql.GraphQLFloat },
              RegistrationOpenDateTIme: { type: graphql.GraphQLString },
              TournamentStartDateTime: { type: graphql.GraphQLString },
              TournamentSerieseDoesCycle: { type: graphql.GraphQLBoolean }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentSeriesApiTournamentSeriesByseriesIdUrlParams',
            fields: { seriesId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentSeriesApiTournamentSeriesByseriesIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentSeriesByseriesIdStateBystateId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentSeriesController.UpdateSeriesState',
    method: 'PUT',
    url: '/api/Tournament/Series/{seriesId}/state/{stateId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentSeriesApiTournamentSeriesByseriesIdStateBystateIdUrlParams',
            fields: {
              seriesId: { type: graphql.GraphQLFloat },
              stateId: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentSeriesApiTournamentSeriesByseriesIdStateBystateIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
