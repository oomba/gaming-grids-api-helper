const graphql = require('graphql')

module.exports = {
  ApiPowerRankingProfile: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PowerRankingController.CreatePowerRankingProfile',
    method: 'POST',
    url: 'http://t2w.control.v2.dev6.gaminggrids.com/api/PowerRanking/Profile',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPowerRankingApiPowerRankingProfileBody',
            fields: {
              PowerRankingProfile: { type: graphql.GraphQLString },
              JoiningTournamentPoints: { type: graphql.GraphQLFloat },
              JoiningTournamentSizeMultiplier: { type: graphql.GraphQLBoolean },
              PointsForWin: { type: graphql.GraphQLFloat },
              PointsForLoss: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPowerRankingApiPowerRankingProfileResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPowerRankingProfileBypowerRankingProfileId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PowerRankingController.UpdatePowerRankingProfile',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/PowerRanking/Profile/{powerRankingProfileId}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlPowerRankingApiPowerRankingProfileBypowerRankingProfileIdBody',
            fields: {
              PowerRankingProfile: { type: graphql.GraphQLString },
              JoiningTournamentPoints: { type: graphql.GraphQLFloat },
              JoiningTournamentSizeMultiplier: { type: graphql.GraphQLBoolean },
              PointsForWin: { type: graphql.GraphQLFloat },
              PointsForLoss: { type: graphql.GraphQLFloat }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlPowerRankingApiPowerRankingProfileBypowerRankingProfileIdUrlParams',
            fields: { powerRankingProfileId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlPowerRankingApiPowerRankingProfileBypowerRankingProfileIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'controlPowerRankingApiPowerRankingProfileBypowerRankingProfileIdResponseResponse',
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
  ApiPowerRankingProfileBypowerRankingProfileId2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PowerRankingController.DeletePowerRankingProfile',
    method: 'DELETE',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/PowerRanking/Profile/{powerRankingProfileId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlPowerRankingApiPowerRankingProfileBypowerRankingProfileId2UrlParams',
            fields: { powerRankingProfileId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlPowerRankingApiPowerRankingProfileBypowerRankingProfileId2Response',
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
    url: 'http://t2w.control.v2.dev6.gaminggrids.com/api/PowerRanking/Division',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPowerRankingApiPowerRankingDivisionBody',
            fields: {
              PowerRankingDivision: { type: graphql.GraphQLString },
              TopPoints: { type: graphql.GraphQLFloat },
              BottomPoints: { type: graphql.GraphQLFloat },
              PowerRankingImageLogoUrl: { type: graphql.GraphQLString },
              PowerRankingLevels: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'controlPowerRankingApiPowerRankingDivisionBodyPowerRankingLevelsResponse',
                    fields: {
                      PowerRankingLevelNumber: { type: graphql.GraphQLFloat },
                      TopPoints: { type: graphql.GraphQLFloat },
                      BottomPoints: { type: graphql.GraphQLFloat }
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
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPowerRankingDivisionBypowerRankingDivisionId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PowerRankingController.UpdatePowerRankingDivision',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/PowerRanking/Division/{powerRankingDivisionId}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlPowerRankingApiPowerRankingDivisionBypowerRankingDivisionIdBody',
            fields: {
              PowerRankingDivision: { type: graphql.GraphQLString },
              TopPoints: { type: graphql.GraphQLFloat },
              BottomPoints: { type: graphql.GraphQLFloat },
              PowerRankingImageLogoUrl: { type: graphql.GraphQLString },
              PowerRankingLevels: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'controlPowerRankingApiPowerRankingDivisionBypowerRankingDivisionIdBodyPowerRankingLevelsResponse',
                    fields: {
                      PowerRankingLevelNumber: { type: graphql.GraphQLFloat },
                      TopPoints: { type: graphql.GraphQLFloat },
                      BottomPoints: { type: graphql.GraphQLFloat }
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
              'controlPowerRankingApiPowerRankingDivisionBypowerRankingDivisionIdUrlParams',
            fields: { powerRankingDivisionId: { type: graphql.GraphQLFloat } }
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
              PowerRankingDivisionId: { type: graphql.GraphQLFloat },
              PowerRankingDivision: { type: graphql.GraphQLString },
              TopPoints: { type: graphql.GraphQLFloat },
              BottomPoints: { type: graphql.GraphQLFloat },
              NumberOfLevels: { type: graphql.GraphQLFloat },
              PowerRankingLevels: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'controlPowerRankingApiPowerRankingDivisionBypowerRankingDivisionIdResponsePowerRankingLevelsResponse',
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
