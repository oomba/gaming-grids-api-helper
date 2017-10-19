const graphql = require('graphql')

module.exports = {
  ApiRaffleProcess: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.RaffleController.ProcessTodayRaffle',
    method: 'GET',
    url: '/api/Raffle/process',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlRaffleApiRaffleProcessResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiRaffleWinners: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.RaffleController.GetWinnerList',
    method: 'GET',
    url: '/api/Raffle/winners',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlRaffleApiRaffleWinnersResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlRaffleApiRaffleWinnersResponseResponse',
              fields: {
                RaffleWinnerId: { type: graphql.GraphQLInt },
                RaffleDate: { type: graphql.GraphQLString },
                RaffleTicket: { type: graphql.GraphQLString },
                RaffleWinnerEntityId: { type: graphql.GraphQLInt },
                RaffleWinnerProfile: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlRaffleApiRaffleWinnersResponseRaffleWinnerProfileResponse',
                    fields: {
                      EntityId: { type: graphql.GraphQLInt },
                      AddressCountryId: { type: graphql.GraphQLInt },
                      GamingServerRegionId: { type: graphql.GraphQLInt },
                      IsActive: { type: graphql.GraphQLBoolean },
                      CreatedDateTime: { type: graphql.GraphQLString },
                      MatchPlayStatisticsId: { type: graphql.GraphQLInt },
                      EntityName: { type: graphql.GraphQLString },
                      EntityIsTeam: { type: graphql.GraphQLBoolean },
                      DisplayName: { type: graphql.GraphQLString },
                      EntityImageUrl: { type: graphql.GraphQLString },
                      EntityImageUrlIsExternal: {
                        type: graphql.GraphQLBoolean
                      },
                      EntityBackgroundImageUrl: { type: graphql.GraphQLString },
                      EntityBackgroundImageUrlIsExternal: {
                        type: graphql.GraphQLBoolean
                      }
                    }
                  })
                },
                RafflePrizeId: { type: graphql.GraphQLInt },
                RafflePrize: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlRaffleApiRaffleWinnersResponseRafflePrizeResponse',
                    fields: {
                      RafflePrizeId: { type: graphql.GraphQLInt },
                      RafflePrizeDate: { type: graphql.GraphQLString },
                      RafflePrizeTitle: { type: graphql.GraphQLString },
                      RafflePrizeDescription: { type: graphql.GraphQLString },
                      RafflePrizeUrl: { type: graphql.GraphQLString },
                      RafflePrizeImage: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'controlRaffleApiRaffleWinnersResponseRafflePrizeRafflePrizeImageResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      }
                    }
                  })
                },
                PrizeIsClaimed: { type: graphql.GraphQLBoolean },
                PrizeClaimedDateTime: { type: graphql.GraphQLString },
                PrizeIsAwarded: { type: graphql.GraphQLBoolean },
                PrizeAwardedById: { type: graphql.GraphQLInt },
                PrizeAwardedByProfile: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlRaffleApiRaffleWinnersResponsePrizeAwardedByProfileResponse',
                    fields: {
                      EntityId: { type: graphql.GraphQLInt },
                      AddressCountryId: { type: graphql.GraphQLInt },
                      GamingServerRegionId: { type: graphql.GraphQLInt },
                      IsActive: { type: graphql.GraphQLBoolean },
                      CreatedDateTime: { type: graphql.GraphQLString },
                      MatchPlayStatisticsId: { type: graphql.GraphQLInt },
                      EntityName: { type: graphql.GraphQLString },
                      EntityIsTeam: { type: graphql.GraphQLBoolean },
                      DisplayName: { type: graphql.GraphQLString },
                      EntityImageUrl: { type: graphql.GraphQLString },
                      EntityImageUrlIsExternal: {
                        type: graphql.GraphQLBoolean
                      },
                      EntityBackgroundImageUrl: { type: graphql.GraphQLString },
                      EntityBackgroundImageUrlIsExternal: {
                        type: graphql.GraphQLBoolean
                      }
                    }
                  })
                },
                PrizeAwardedDateTime: { type: graphql.GraphQLString },
                PrizeHasExpired: { type: graphql.GraphQLBoolean }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiRafflePrizes: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.RaffleController.GetRafflePrizes',
    method: 'GET',
    url: '/api/Raffle/prizes',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlRaffleApiRafflePrizesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlRaffleApiRafflePrizesResponseResponse',
              fields: {
                RafflePrizeId: { type: graphql.GraphQLInt },
                RafflePrizeDate: { type: graphql.GraphQLString },
                RafflePrizeTitle: { type: graphql.GraphQLString },
                RafflePrizeDescription: { type: graphql.GraphQLString },
                RafflePrizeUrl: { type: graphql.GraphQLString },
                RafflePrizeImage: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'controlRaffleApiRafflePrizesResponseRafflePrizeImageResponse',
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
  ApiRaffleWinnerBywinnerIdAwarded: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.RaffleController.AwardRafflePrize',
    method: 'POST',
    url: '/api/Raffle/winner/{winnerId}/awarded',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlRaffleApiRaffleWinnerBywinnerIdAwardedurlParams',
            fields: { winnerId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlRaffleApiRaffleWinnerBywinnerIdAwardedResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiRafflePrize: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.RaffleController.CreateRafflePrize',
    method: 'POST',
    url: '/api/Raffle/prize',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlRaffleApiRafflePrizebody',
            fields: {
              RafflePrizeDate: { type: graphql.GraphQLString },
              RafflePrizeTitle: { type: graphql.GraphQLString },
              RafflePrizeDescription: { type: graphql.GraphQLString },
              RafflePrizeUrl: { type: graphql.GraphQLString },
              RafflePrizeImageUrl: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlRaffleApiRafflePrizeResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiRafflePrizeByprizeId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.RaffleController.DeleteRafflePrize',
    method: 'DELETE',
    url: '/api/Raffle/prize/{prizeId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlRaffleApiRafflePrizeByprizeIdurlParams',
            fields: { prizeId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlRaffleApiRafflePrizeByprizeIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
