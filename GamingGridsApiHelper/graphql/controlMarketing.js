const graphql = require('graphql')

module.exports = {
  ApiPlatformMarketingBanner: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.MarketingController.CreateBanner',
    method: 'POST',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Platform/Marketing/Banner',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlMarketingApiPlatformMarketingBannerBody',
            fields: {
              MarketingBannerTitle: { type: graphql.GraphQLString },
              MarketingBannerLinkUrl: { type: graphql.GraphQLString },
              MarketingBannerImageUrl: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlMarketingApiPlatformMarketingBannerResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlatformMarketingBannerBybannerId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.MarketingController.DeleteBanner',
    method: 'DELETE',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Platform/Marketing/Banner/{bannerId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlMarketingApiPlatformMarketingBannerBybannerIdUrlParams',
            fields: { bannerId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlMarketingApiPlatformMarketingBannerBybannerIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
