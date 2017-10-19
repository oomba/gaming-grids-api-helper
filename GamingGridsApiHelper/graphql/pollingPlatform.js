const graphql = require('graphql')

module.exports = {
  ApiPlatformMaintenanceStatus: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.PlatformController.MaintenanceStatus',
    method: 'GET',
    url: '/api/Platform/Maintenance/Status',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'pollingPlatformApiPlatformMaintenanceStatusuriParams',
            fields: { lastUpdatedDateTime: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'pollingPlatformApiPlatformMaintenanceStatusResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'pollingPlatformApiPlatformMaintenanceStatusResponseResponse',
            fields: {
              MaintenanceMode: { type: graphql.GraphQLBoolean },
              AdministratorOnlyAccess: { type: graphql.GraphQLBoolean },
              StatusNoticeText: { type: graphql.GraphQLString },
              LastUpdatedByAdministratorId: { type: graphql.GraphQLInt },
              LastUpdatedDateTime: { type: graphql.GraphQLString }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
