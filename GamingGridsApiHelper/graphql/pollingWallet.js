const graphql = require('graphql')

module.exports = {
  ApiWalletBalanceReal: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.WalletController.GetPlayerRealBalance',
    method: 'GET',
    url: 'http://t2w.polling.v2.dev6.gaminggrids.com/api/Wallet/Balance/Real',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'pollingWalletApiWalletBalanceRealResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletBalanceVirtual: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.WalletController.GetPlayerVirtualBalance',
    method: 'GET',
    url:
      'http://t2w.polling.v2.dev6.gaminggrids.com/api/Wallet/Balance/virtual',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'pollingWalletApiWalletBalanceVirtualResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
