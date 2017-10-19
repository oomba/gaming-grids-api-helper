const graphql = require('graphql')

module.exports = {
  ApiChallengeBytournamentId: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.ChallengeController.CancelChallenge',
    method: 'DELETE',
    url: '/api/Challenge/{tournamentId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientChallengeApiChallengeBytournamentIdurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
    url: '/api/Challenge/{tournamentId}/Offer',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientChallengeApiChallengeBytournamentIdOfferbody',
            fields: { EntryFee: { type: graphql.GraphQLInt } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientChallengeApiChallengeBytournamentIdOfferurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              ChallengeOfferId: { type: graphql.GraphQLInt },
              EntryFee: { type: graphql.GraphQLInt },
              ServiceFee: { type: graphql.GraphQLInt },
              TotalFee: { type: graphql.GraphQLInt },
              TournamentId: { type: graphql.GraphQLInt },
              TournamentDescription: { type: graphql.GraphQLString },
              TournamentTitle: { type: graphql.GraphQLString },
              CreatorEntityId: { type: graphql.GraphQLInt },
              ChallengerEntityId: { type: graphql.GraphQLInt },
              OfferDateTime: { type: graphql.GraphQLString },
              CreatorStateId: { type: graphql.GraphQLInt },
              CreatorStateDateTime: { type: graphql.GraphQLString },
              ChallengerStateId: { type: graphql.GraphQLInt },
              ChallengerStateDateTime: { type: graphql.GraphQLString },
              HasPendingRegistration: { type: graphql.GraphQLBoolean },
              TournamentMatchId: { type: graphql.GraphQLInt },
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
    url: '/api/Challenge/{tournamentId}/My/Offer/{OfferId}/Accept',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientChallengeApiChallengeBytournamentIdMyOfferByOfferIdAccepturlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
              offerId: { type: graphql.GraphQLInt }
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
    url: '/api/Challenge/{tournamentId}/My/Offer/{OfferId}/Reject',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientChallengeApiChallengeBytournamentIdMyOfferByOfferIdRejecturlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
              offerId: { type: graphql.GraphQLInt }
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
    url: '/api/Challenge/{tournamentId}/My/Offer/Accepted/{OfferId}/Accept',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientChallengeApiChallengeBytournamentIdMyOfferAcceptedByOfferIdAccepturlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
              offerId: { type: graphql.GraphQLInt }
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
    url: '/api/Challenge/{tournamentId}/My/Offer/Accepted/{OfferId}/Reject',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientChallengeApiChallengeBytournamentIdMyOfferAcceptedByOfferIdRejecturlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
              offerId: { type: graphql.GraphQLInt }
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
