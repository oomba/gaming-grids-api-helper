const graphql = require('graphql')

module.exports = {
  ApiRaffleMyPrizes: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.RaffleController.GetMyPrizes',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Raffle/my/prizes',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientRaffleApiRaffleMyPrizesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientRaffleApiRaffleMyPrizesResponseResponse',
              fields: {
                RaffleWinnerId: { type: graphql.GraphQLFloat },
                RaffleDate: { type: graphql.GraphQLString },
                RaffleTicket: { type: graphql.GraphQLString },
                RaffleWinnerEntityId: { type: graphql.GraphQLFloat },
                RaffleWinnerProfile: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientRaffleApiRaffleMyPrizesResponseRaffleWinnerProfileResponse',
                    fields: {
                      EntityId: { type: graphql.GraphQLFloat },
                      AddressCountryId: { type: graphql.GraphQLFloat },
                      GamingServerRegionId: { type: graphql.GraphQLFloat },
                      IsActive: { type: graphql.GraphQLBoolean },
                      CreatedDateTime: { type: graphql.GraphQLString },
                      MatchPlayStatisticsId: { type: graphql.GraphQLFloat },
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
                RafflePrizeId: { type: graphql.GraphQLFloat },
                RafflePrize: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientRaffleApiRaffleMyPrizesResponseRafflePrizeResponse',
                    fields: {
                      RafflePrizeId: { type: graphql.GraphQLFloat },
                      RafflePrizeDate: { type: graphql.GraphQLString },
                      RafflePrizeTitle: { type: graphql.GraphQLString },
                      RafflePrizeDescription: { type: graphql.GraphQLString },
                      RafflePrizeUrl: { type: graphql.GraphQLString },
                      RafflePrizeImage: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientRaffleApiRaffleMyPrizesResponseRafflePrizeRafflePrizeImageResponse',
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
                PrizeAwardedById: { type: graphql.GraphQLFloat },
                PrizeAwardedByProfile: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientRaffleApiRaffleMyPrizesResponsePrizeAwardedByProfileResponse',
                    fields: {
                      EntityId: { type: graphql.GraphQLFloat },
                      AddressCountryId: { type: graphql.GraphQLFloat },
                      GamingServerRegionId: { type: graphql.GraphQLFloat },
                      IsActive: { type: graphql.GraphQLBoolean },
                      CreatedDateTime: { type: graphql.GraphQLString },
                      MatchPlayStatisticsId: { type: graphql.GraphQLFloat },
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
  ApiRaffleTicketDailyReceived: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.RaffleController.GetTodaysTicketReceived',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Raffle/ticket/daily/received',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientRaffleApiRaffleTicketDailyReceivedResponse',
      fields: {
        Response: { type: graphql.GraphQLBoolean },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiRaffleTicketDaily: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.RaffleController.GetTodaysTicket',
    method: 'POST',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Raffle/ticket/daily',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientRaffleApiRaffleTicketDailyResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiRaffleWinners: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.RaffleController.GetWinnerList',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Raffle/winners',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientRaffleApiRaffleWinnersResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientRaffleApiRaffleWinnersResponseResponse',
              fields: {
                RaffleWinnerId: { type: graphql.GraphQLFloat },
                RaffleDate: { type: graphql.GraphQLString },
                RaffleTicket: { type: graphql.GraphQLString },
                RaffleWinnerEntityId: { type: graphql.GraphQLFloat },
                RaffleWinnerProfile: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientRaffleApiRaffleWinnersResponseRaffleWinnerProfileResponse',
                    fields: {
                      EntityId: { type: graphql.GraphQLFloat },
                      AddressCountryId: { type: graphql.GraphQLFloat },
                      GamingServerRegionId: { type: graphql.GraphQLFloat },
                      IsActive: { type: graphql.GraphQLBoolean },
                      CreatedDateTime: { type: graphql.GraphQLString },
                      MatchPlayStatisticsId: { type: graphql.GraphQLFloat },
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
                RafflePrizeId: { type: graphql.GraphQLFloat },
                RafflePrize: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientRaffleApiRaffleWinnersResponseRafflePrizeResponse',
                    fields: {
                      RafflePrizeId: { type: graphql.GraphQLFloat },
                      RafflePrizeDate: { type: graphql.GraphQLString },
                      RafflePrizeTitle: { type: graphql.GraphQLString },
                      RafflePrizeDescription: { type: graphql.GraphQLString },
                      RafflePrizeUrl: { type: graphql.GraphQLString },
                      RafflePrizeImage: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientRaffleApiRaffleWinnersResponseRafflePrizeRafflePrizeImageResponse',
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
                PrizeAwardedById: { type: graphql.GraphQLFloat },
                PrizeAwardedByProfile: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientRaffleApiRaffleWinnersResponsePrizeAwardedByProfileResponse',
                    fields: {
                      EntityId: { type: graphql.GraphQLFloat },
                      AddressCountryId: { type: graphql.GraphQLFloat },
                      GamingServerRegionId: { type: graphql.GraphQLFloat },
                      IsActive: { type: graphql.GraphQLBoolean },
                      CreatedDateTime: { type: graphql.GraphQLString },
                      MatchPlayStatisticsId: { type: graphql.GraphQLFloat },
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
  ApiRaffleWinnerBywinnerIdClaimed: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.RaffleController.ClaimPrize',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Raffle/winner/{winnerId}/claimed',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientRaffleApiRaffleWinnerBywinnerIdClaimedUrlParams',
            fields: { winnerId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientRaffleApiRaffleWinnerBywinnerIdClaimedResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiRafflePrize: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.RaffleController.GetCurrentRafflePrize',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Raffle/prize',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientRaffleApiRafflePrizeResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientRaffleApiRafflePrizeResponseResponse',
            fields: {
              RafflePrizeId: { type: graphql.GraphQLFloat },
              RafflePrizeDate: { type: graphql.GraphQLString },
              RafflePrizeTitle: { type: graphql.GraphQLString },
              RafflePrizeDescription: { type: graphql.GraphQLString },
              RafflePrizeUrl: { type: graphql.GraphQLString },
              RafflePrizeImage: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientRaffleApiRafflePrizeResponseRafflePrizeImageResponse',
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
