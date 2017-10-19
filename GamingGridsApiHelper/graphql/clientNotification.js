const graphql = require('graphql')

module.exports = {
  ApiNotificationsBynotificationIdStatus: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.NotificationController.UpdateStatus',
    method: 'PUT',
    url: '/api/Notifications/{notificationId}/Status',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientNotificationApiNotificationsBynotificationIdStatusbody',
            fields: { StateName: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientNotificationApiNotificationsBynotificationIdStatusurlParams',
            fields: { notificationId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientNotificationApiNotificationsBynotificationIdStatusResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
