const graphql = require('graphql')

module.exports = {
  ApiChallengeBytournamentId: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.ChallengeController.CancelChallenge',
    method: 'DELETE',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Challenge/{tournamentId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientChallengeApiChallengeBytournamentIdUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientChallengeApiChallengeBytournamentIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiChallengeBytournamentIdOffer: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.ChallengeController.CreateOffer',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Challenge/{tournamentId}/Offer',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientChallengeApiChallengeBytournamentIdOfferBody',
            fields: { EntryFee: { type: graphql.GraphQLFloat } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientChallengeApiChallengeBytournamentIdOfferUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientChallengeApiChallengeBytournamentIdOfferResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientChallengeApiChallengeBytournamentIdOfferResponseResponse',
            fields: {
              ChallengeOfferId: { type: graphql.GraphQLFloat },
              EntryFee: { type: graphql.GraphQLFloat },
              ServiceFee: { type: graphql.GraphQLFloat },
              TotalFee: { type: graphql.GraphQLFloat },
              TournamentId: { type: graphql.GraphQLFloat },
              TournamentDescription: { type: graphql.GraphQLString },
              TournamentTitle: { type: graphql.GraphQLString },
              CreatorEntityId: { type: graphql.GraphQLFloat },
              ChallengerEntityId: { type: graphql.GraphQLFloat },
              OfferDateTime: { type: graphql.GraphQLString },
              CreatorStateId: { type: graphql.GraphQLFloat },
              CreatorStateDateTime: { type: graphql.GraphQLString },
              ChallengerStateId: { type: graphql.GraphQLFloat },
              ChallengerStateDateTime: { type: graphql.GraphQLString },
              HasPendingRegistration: { type: graphql.GraphQLBoolean },
              TournamentMatchId: { type: graphql.GraphQLFloat },
              ChallengeComplete: { type: graphql.GraphQLBoolean },
              ChallengeCompleteDateTime: { type: graphql.GraphQLString },
              ChallengerNeedsRegistration: { type: graphql.GraphQLBoolean },
              CreatorNeedsRegistration: { type: graphql.GraphQLBoolean },
              ChallengeCancelled: { type: graphql.GraphQLBoolean }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiChallengeBytournamentIdMyOfferByOfferIdAccept: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.ChallengeController.AcceptOffer',
    method: 'PUT',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Challenge/{tournamentId}/My/Offer/{OfferId}/Accept',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientChallengeApiChallengeBytournamentIdMyOfferByOfferIdAcceptUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              offerId: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientChallengeApiChallengeBytournamentIdMyOfferByOfferIdAcceptResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiChallengeBytournamentIdMyOfferByOfferIdReject: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.ChallengeController.RejectOffer',
    method: 'PUT',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Challenge/{tournamentId}/My/Offer/{OfferId}/Reject',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientChallengeApiChallengeBytournamentIdMyOfferByOfferIdRejectUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              offerId: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientChallengeApiChallengeBytournamentIdMyOfferByOfferIdRejectResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiChallengeBytournamentIdMyOfferAcceptedByOfferIdAccept: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.ChallengeController.AcceptAcceptedOffer',
    method: 'PUT',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Challenge/{tournamentId}/My/Offer/Accepted/{OfferId}/Accept',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientChallengeApiChallengeBytournamentIdMyOfferAcceptedByOfferIdAcceptUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              offerId: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientChallengeApiChallengeBytournamentIdMyOfferAcceptedByOfferIdAcceptResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiChallengeBytournamentIdMyOfferAcceptedByOfferIdReject: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.ChallengeController.RejectAcceptedOffer',
    method: 'PUT',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Challenge/{tournamentId}/My/Offer/Accepted/{OfferId}/Reject',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientChallengeApiChallengeBytournamentIdMyOfferAcceptedByOfferIdRejectUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              offerId: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientChallengeApiChallengeBytournamentIdMyOfferAcceptedByOfferIdRejectResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
