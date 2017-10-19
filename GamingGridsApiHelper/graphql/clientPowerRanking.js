const graphql = require('graphql')

module.exports = {
  ApiPowerRankingProfiles: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PowerRankingController.GetPowerRankingProfiles',
    method: 'GET',
    url: '/api/PowerRanking/Profiles',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPowerRankingApiPowerRankingProfilesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientPowerRankingApiPowerRankingProfilesResponseResponse',
              fields: {
                PowerRankingProfileId: { type: graphql.GraphQLInt },
                PowerRankingProfile: { type: graphql.GraphQLString },
                JoiningTournamentPoints: { type: graphql.GraphQLInt },
                JoiningTournamentSizeMultiplier: {
                  type: graphql.GraphQLBoolean
                },
                PointsForWin: { type: graphql.GraphQLInt },
                PointsForLoss: { type: graphql.GraphQLInt },
                IsActive: { type: graphql.GraphQLBoolean }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPowerRankingProfileBypowerankingProfileId: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PowerRankingController.GetPowerRankingProfile',
    method: 'GET',
    url: '/api/PowerRanking/Profile/{powerankingProfileId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientPowerRankingApiPowerRankingProfileBypowerankingProfileIdurlParams',
            fields: { powerankingProfileId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientPowerRankingApiPowerRankingProfileBypowerankingProfileIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientPowerRankingApiPowerRankingProfileBypowerankingProfileIdResponseResponse',
            fields: {
              PowerRankingProfileId: { type: graphql.GraphQLInt },
              PowerRankingProfile: { type: graphql.GraphQLString },
              JoiningTournamentPoints: { type: graphql.GraphQLInt },
              JoiningTournamentSizeMultiplier: { type: graphql.GraphQLBoolean },
              PointsForWin: { type: graphql.GraphQLInt },
              PointsForLoss: { type: graphql.GraphQLInt },
              IsActive: { type: graphql.GraphQLBoolean }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPowerRankingDivisions: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PowerRankingController.GetPowerRankingDivisions',
    method: 'GET',
    url: '/api/PowerRanking/Divisions',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPowerRankingApiPowerRankingDivisionsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientPowerRankingApiPowerRankingDivisionsResponseResponse',
              fields: {
                PowerRankingDivisionId: { type: graphql.GraphQLInt },
                PowerRankingDivision: { type: graphql.GraphQLString },
                TopPoints: { type: graphql.GraphQLInt },
                BottomPoints: { type: graphql.GraphQLInt },
                NumberOfLevels: { type: graphql.GraphQLInt },
                PowerRankingLevels: {
                  type: new graphql.GraphQLList(
                    new graphql.GraphQLObjectType({
                      name:
                        'clientPowerRankingApiPowerRankingDivisionsResponsePowerRankingLevelsResponse',
                      fields: {
                        PowerRankingLevelNumber: { type: graphql.GraphQLInt },
                        TopPoints: { type: graphql.GraphQLInt },
                        BottomPoints: { type: graphql.GraphQLInt }
                      }
                    })
                  )
                },
                PowerRankingImageLogo: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPowerRankingApiPowerRankingDivisionsResponsePowerRankingImageLogoResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPowerRankingDivisionBypoweRankingDivisionId: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PowerRankingController.GetPowerRankingDivision',
    method: 'GET',
    url: '/api/PowerRanking/Division/{poweRankingDivisionId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientPowerRankingApiPowerRankingDivisionBypoweRankingDivisionIdurlParams',
            fields: { poweRankingDivisionId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientPowerRankingApiPowerRankingDivisionBypoweRankingDivisionIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientPowerRankingApiPowerRankingDivisionBypoweRankingDivisionIdResponseResponse',
            fields: {
              PowerRankingDivisionId: { type: graphql.GraphQLInt },
              PowerRankingDivision: { type: graphql.GraphQLString },
              TopPoints: { type: graphql.GraphQLInt },
              BottomPoints: { type: graphql.GraphQLInt },
              NumberOfLevels: { type: graphql.GraphQLInt },
              PowerRankingLevels: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPowerRankingApiPowerRankingDivisionBypoweRankingDivisionIdResponsePowerRankingLevelsResponse',
                    fields: {
                      PowerRankingLevelNumber: { type: graphql.GraphQLInt },
                      TopPoints: { type: graphql.GraphQLInt },
                      BottomPoints: { type: graphql.GraphQLInt }
                    }
                  })
                )
              },
              PowerRankingImageLogo: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPowerRankingApiPowerRankingDivisionBypoweRankingDivisionIdResponsePowerRankingImageLogoResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
