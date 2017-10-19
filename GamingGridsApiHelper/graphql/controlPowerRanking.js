const graphql = require('graphql')

module.exports = {
  ApiPowerRankingProfile: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PowerRankingController.CreatePowerRankingProfile',
    method: 'POST',
    url: '/api/PowerRanking/Profile',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPowerRankingApiPowerRankingProfilebody',
            fields: {
              PowerRankingProfile: { type: graphql.GraphQLString },
              JoiningTournamentPoints: { type: graphql.GraphQLInt },
              JoiningTournamentSizeMultiplier: { type: graphql.GraphQLBoolean },
              PointsForWin: { type: graphql.GraphQLInt },
              PointsForLoss: { type: graphql.GraphQLInt }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPowerRankingApiPowerRankingProfileResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPowerRankingProfileBypowerRankingProfileId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PowerRankingController.DeletePowerRankingProfile',
    method: 'DELETE',
    url: '/api/PowerRanking/Profile/{powerRankingProfileId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlPowerRankingApiPowerRankingProfileBypowerRankingProfileIdurlParams',
            fields: { powerRankingProfileId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlPowerRankingApiPowerRankingProfileBypowerRankingProfileIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPowerRankingDivision: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PowerRankingController.CreatePowerRankingDivision',
    method: 'POST',
    url: '/api/PowerRanking/Division',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPowerRankingApiPowerRankingDivisionbody',
            fields: {
              PowerRankingDivision: { type: graphql.GraphQLString },
              TopPoints: { type: graphql.GraphQLInt },
              BottomPoints: { type: graphql.GraphQLInt },
              PowerRankingImageLogoUrl: { type: graphql.GraphQLString },
              PowerRankingLevels: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'controlPowerRankingApiPowerRankingDivisionbodyPowerRankingLevelsResponse',
                    fields: {
                      PowerRankingLevelNumber: { type: graphql.GraphQLInt },
                      TopPoints: { type: graphql.GraphQLInt },
                      BottomPoints: { type: graphql.GraphQLInt }
                    }
                  })
                )
              }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPowerRankingApiPowerRankingDivisionResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPowerRankingDivisionBypowerRankingDivisionId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PowerRankingController.UpdatePowerRankingDivision',
    method: 'PUT',
    url: '/api/PowerRanking/Division/{powerRankingDivisionId}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlPowerRankingApiPowerRankingDivisionBypowerRankingDivisionIdbody',
            fields: {
              PowerRankingDivision: { type: graphql.GraphQLString },
              TopPoints: { type: graphql.GraphQLInt },
              BottomPoints: { type: graphql.GraphQLInt },
              PowerRankingImageLogoUrl: { type: graphql.GraphQLString },
              PowerRankingLevels: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'controlPowerRankingApiPowerRankingDivisionBypowerRankingDivisionIdbodyPowerRankingLevelsResponse',
                    fields: {
                      PowerRankingLevelNumber: { type: graphql.GraphQLInt },
                      TopPoints: { type: graphql.GraphQLInt },
                      BottomPoints: { type: graphql.GraphQLInt }
                    }
                  })
                )
              }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlPowerRankingApiPowerRankingDivisionBypowerRankingDivisionIdurlParams',
            fields: { powerRankingDivisionId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlPowerRankingApiPowerRankingDivisionBypowerRankingDivisionIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'controlPowerRankingApiPowerRankingDivisionBypowerRankingDivisionIdResponseResponse',
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
                      'controlPowerRankingApiPowerRankingDivisionBypowerRankingDivisionIdResponsePowerRankingLevelsResponse',
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
                    'controlPowerRankingApiPowerRankingDivisionBypowerRankingDivisionIdResponsePowerRankingImageLogoResponse',
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
