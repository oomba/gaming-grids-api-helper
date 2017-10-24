const graphql = require('graphql')

module.exports = {
  ApiTeamCaptainOnlineCount: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.TeamController.GetOnlineCaptainCount',
    method: 'GET',
    url:
      'http://t2w.polling.v2.dev6.gaminggrids.com/api/Team/Captain/Online/count',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'pollingTeamApiTeamCaptainOnlineCountResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
