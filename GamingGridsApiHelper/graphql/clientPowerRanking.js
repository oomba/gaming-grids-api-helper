const graphql = require('graphql')

module.exports = {
  ApiPowerRankingProfiles: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PowerRankingController.GetPowerRankingProfiles',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/PowerRanking/Profiles',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPowerRankingApiPowerRankingProfilesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientPowerRankingApiPowerRankingProfilesResponseResponse',
              fields: {
                PowerRankingProfileId: { type: graphql.GraphQLFloat },
                PowerRankingProfile: { type: graphql.GraphQLString },
                JoiningTournamentPoints: { type: graphql.GraphQLFloat },
                JoiningTournamentSizeMultiplier: {
                  type: graphql.GraphQLBoolean
                },
                PointsForWin: { type: graphql.GraphQLFloat },
                PointsForLoss: { type: graphql.GraphQLFloat },
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
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/PowerRanking/Profile/{powerankingProfileId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientPowerRankingApiPowerRankingProfileBypowerankingProfileIdUrlParams',
            fields: { powerankingProfileId: { type: graphql.GraphQLFloat } }
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
              PowerRankingProfileId: { type: graphql.GraphQLFloat },
              PowerRankingProfile: { type: graphql.GraphQLString },
              JoiningTournamentPoints: { type: graphql.GraphQLFloat },
              JoiningTournamentSizeMultiplier: { type: graphql.GraphQLBoolean },
              PointsForWin: { type: graphql.GraphQLFloat },
              PointsForLoss: { type: graphql.GraphQLFloat },
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
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/PowerRanking/Divisions',
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
                PowerRankingDivisionId: { type: graphql.GraphQLFloat },
                PowerRankingDivision: { type: graphql.GraphQLString },
                TopPoints: { type: graphql.GraphQLFloat },
                BottomPoints: { type: graphql.GraphQLFloat },
                NumberOfLevels: { type: graphql.GraphQLFloat },
                PowerRankingLevels: {
                  type: new graphql.GraphQLList(
                    new graphql.GraphQLObjectType({
                      name:
                        'clientPowerRankingApiPowerRankingDivisionsResponsePowerRankingLevelsResponse',
                      fields: {
                        PowerRankingLevelNumber: { type: graphql.GraphQLFloat },
                        TopPoints: { type: graphql.GraphQLFloat },
                        BottomPoints: { type: graphql.GraphQLFloat }
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
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/PowerRanking/Division/{poweRankingDivisionId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientPowerRankingApiPowerRankingDivisionBypoweRankingDivisionIdUrlParams',
            fields: { poweRankingDivisionId: { type: graphql.GraphQLFloat } }
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
              PowerRankingDivisionId: { type: graphql.GraphQLFloat },
              PowerRankingDivision: { type: graphql.GraphQLString },
              TopPoints: { type: graphql.GraphQLFloat },
              BottomPoints: { type: graphql.GraphQLFloat },
              NumberOfLevels: { type: graphql.GraphQLFloat },
              PowerRankingLevels: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPowerRankingApiPowerRankingDivisionBypoweRankingDivisionIdResponsePowerRankingLevelsResponse',
                    fields: {
                      PowerRankingLevelNumber: { type: graphql.GraphQLFloat },
                      TopPoints: { type: graphql.GraphQLFloat },
                      BottomPoints: { type: graphql.GraphQLFloat }
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
