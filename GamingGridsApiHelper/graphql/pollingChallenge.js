const graphql = require('graphql')

module.exports = {
  ApiChallengeCancelledByid: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.ChallengeController.GetIsCancelled',
    method: 'GET',
    url:
      'http://t2w.polling.v2.dev6.gaminggrids.com/api/Challenge/cancelled/{id}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'pollingChallengeApiChallengeCancelledByidUrlParams',
            fields: { id: { type: graphql.GraphQLFloat } }
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
    url: 'http://t2w.polling.v2.dev6.gaminggrids.com/api/Challenge/My/Offer',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'pollingChallengeApiChallengeMyOfferResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'pollingChallengeApiChallengeMyOfferResponseResponse',
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
  ApiChallengeMyOfferAccepted: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.ChallengeController.GetMyNextAcceptedOffer',
    method: 'GET',
    url:
      'http://t2w.polling.v2.dev6.gaminggrids.com/api/Challenge/My/Offer/Accepted',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'pollingChallengeApiChallengeMyOfferAcceptedResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'pollingChallengeApiChallengeMyOfferAcceptedResponseResponse',
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
  }
}
