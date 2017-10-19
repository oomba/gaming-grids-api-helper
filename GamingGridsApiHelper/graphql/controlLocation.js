const graphql = require('graphql')

module.exports = {
  ApiLocation: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LocationController.CreateLocation',
    method: 'POST',
    url: '/api/Location',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlLocationApiLocationbody',
            fields: {
              Location: { type: graphql.GraphQLString },
              StreetAddress: { type: graphql.GraphQLString },
              City: { type: graphql.GraphQLString },
              AddressStateProvenceId: { type: graphql.GraphQLInt },
              AddressCountryId: { type: graphql.GraphQLInt },
              PostalCode: { type: graphql.GraphQLString },
              GamingServerRegionId: { type: graphql.GraphQLInt },
              PhoneNumber: { type: graphql.GraphQLString },
              EmailAddress: { type: graphql.GraphQLString },
              Hours: { type: graphql.GraphQLString },
              Description: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlLocationApiLocationResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlLocationApiLocationResponseResponse',
            fields: {
              LocationId: { type: graphql.GraphQLInt },
              StateProvence: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlLocationApiLocationResponseStateProvenceResponse',
                  fields: {
                    AddressStateProvenceId: { type: graphql.GraphQLInt },
                    AddressCountryId: { type: graphql.GraphQLInt },
                    AddressStateProvenceCode: { type: graphql.GraphQLString },
                    AddressStateProvence: { type: graphql.GraphQLString },
                    AllowsRealMoney: { type: graphql.GraphQLBoolean }
                  }
                })
              },
              Country: {
                type: new graphql.GraphQLObjectType({
                  name: 'controlLocationApiLocationResponseCountryResponse',
                  fields: {
                    AddressCountryId: { type: graphql.GraphQLInt },
                    AddressCountryCode: { type: graphql.GraphQLString },
                    AddressCountry3LetterCode: { type: graphql.GraphQLString },
                    AddressCountry: { type: graphql.GraphQLString },
                    AllowsRealMoney: { type: graphql.GraphQLBoolean },
                    FlagSmallImageUrl: { type: graphql.GraphQLString },
                    FlagLargeImageUrl: { type: graphql.GraphQLString },
                    ShowInList: { type: graphql.GraphQLBoolean },
                    OrderBy: { type: graphql.GraphQLInt }
                  }
                })
              },
              Region: {
                type: new graphql.GraphQLObjectType({
                  name: 'controlLocationApiLocationResponseRegionResponse',
                  fields: {
                    GamingServerRegionId: { type: graphql.GraphQLInt },
                    GamingServerRegionName: { type: graphql.GraphQLString }
                  }
                })
              },
              IsActive: { type: graphql.GraphQLBoolean },
              Location: { type: graphql.GraphQLString },
              StreetAddress: { type: graphql.GraphQLString },
              City: { type: graphql.GraphQLString },
              AddressStateProvenceId: { type: graphql.GraphQLInt },
              AddressCountryId: { type: graphql.GraphQLInt },
              PostalCode: { type: graphql.GraphQLString },
              GamingServerRegionId: { type: graphql.GraphQLInt },
              PhoneNumber: { type: graphql.GraphQLString },
              EmailAddress: { type: graphql.GraphQLString },
              Hours: { type: graphql.GraphQLString },
              Description: { type: graphql.GraphQLString }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLocationBylocationId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LocationController.DeleteLocation',
    method: 'POST',
    url: '/api/Location/{locationId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlLocationApiLocationBylocationIdurlParams',
            fields: { locationId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlLocationApiLocationBylocationIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
