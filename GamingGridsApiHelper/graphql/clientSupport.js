const graphql = require('graphql')

module.exports = {
  ApiSupportContact: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.SupportController.ContactSupport',
    method: 'POST',
    url: '/api/Support/Contact',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientSupportApiSupportContactbody',
            fields: {
              EmailAddress: { type: graphql.GraphQLString },
              Subject: { type: graphql.GraphQLString },
              Message: { type: graphql.GraphQLString },
              Category: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientSupportApiSupportContactResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiSupportPlayerFeedbackReport: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.SupportController.SendFeedback',
    method: 'undefined',
    url: '/api/Support/Player/Feedback/Report',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientSupportApiSupportPlayerFeedbackReporturiParams',
            fields: {
              feedback: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'clientSupportApiSupportPlayerFeedbackReporturiParamsfeedbackResponse',
                  fields: {
                    EntityId: { type: graphql.GraphQLInt },
                    TournamentMatchId: { type: graphql.GraphQLInt },
                    GameShortCode: { type: graphql.GraphQLString },
                    FeedbackReportedById: { type: graphql.GraphQLInt },
                    FeedbackRating: { type: graphql.GraphQLInt },
                    FeedbackMessage: { type: graphql.GraphQLString },
                    InappropriateFlags: { type: graphql.GraphQLBoolean },
                    ReportToAdministrator: { type: graphql.GraphQLBoolean }
                  }
                })
              }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientSupportApiSupportPlayerFeedbackReportResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
