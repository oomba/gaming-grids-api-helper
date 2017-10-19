const graphql = require('graphql')

module.exports = {
  ApiChallengeCancelledByid: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.ChallengeController.GetIsCancelled',
    method: 'GET',
    url: '/api/Challenge/cancelled/{id}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'pollingChallengeApiChallengeCancelledByidurlParams',
            fields: { id: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'pollingChallengeApiChallengeCancelledByidResponse',
      fields: {
        Response: { type: graphql.GraphQLBoolean },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiChallengeMyOffer: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.ChallengeController.GetMyNextOffer',
    method: 'GET',
    url: '/api/Challenge/My/Offer',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'pollingChallengeApiChallengeMyOfferResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'pollingChallengeApiChallengeMyOfferResponseResponse',
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
  ApiChallengeMyOfferAccepted: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.ChallengeController.GetMyNextAcceptedOffer',
    method: 'GET',
    url: '/api/Challenge/My/Offer/Accepted',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'pollingChallengeApiChallengeMyOfferAcceptedResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'pollingChallengeApiChallengeMyOfferAcceptedResponseResponse',
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
  }
}
