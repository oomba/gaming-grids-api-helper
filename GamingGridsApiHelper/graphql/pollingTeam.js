const graphql = require('graphql')

module.exports = {
  ApiTeamCaptainOnlineCount: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.TeamController.GetOnlineCaptainCount',
    method: 'GET',
    url: '/api/Team/Captain/Online/count',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'pollingTeamApiTeamCaptainOnlineCountResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
