const graphql = require('graphql')

module.exports = {
  ApiInfusionsoftAuthorize: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.InfusionsoftController.GetAuthorizationCode',
    method: 'GET',
    url: '/api/Infusionsoft/authorize',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlInfusionsoftApiInfusionsoftAuthorizeuriParams',
            fields: {
              model: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'controlInfusionsoftApiInfusionsoftAuthorizeuriParamsmodelResponse',
                  fields: {
                    scope: { type: graphql.GraphQLString },
                    code: { type: graphql.GraphQLString }
                  }
                })
              }
            }
          })
        )
      }
    },
    response: graphql.GraphQLString
  }
}
