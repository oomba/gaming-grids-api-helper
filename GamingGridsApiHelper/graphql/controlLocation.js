const graphql = require('graphql')

module.exports = {
  ApiLocation: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LocationController.CreateLocation',
    method: 'POST',
    url: 'http://t2w.control.v2.dev6.gaminggrids.com/api/Location',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlLocationApiLocationBody',
            fields: {
              Location: { type: graphql.GraphQLString },
              StreetAddress: { type: graphql.GraphQLString },
              City: { type: graphql.GraphQLString },
              AddressStateProvenceId: { type: graphql.GraphQLFloat },
              AddressCountryId: { type: graphql.GraphQLFloat },
              PostalCode: { type: graphql.GraphQLString },
              GamingServerRegionId: { type: graphql.GraphQLFloat },
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
              LocationId: { type: graphql.GraphQLFloat },
              StateProvence: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlLocationApiLocationResponseStateProvenceResponse',
                  fields: {
                    AddressStateProvenceId: { type: graphql.GraphQLFloat },
                    AddressCountryId: { type: graphql.GraphQLFloat },
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
                    AddressCountryId: { type: graphql.GraphQLFloat },
                    AddressCountryCode: { type: graphql.GraphQLString },
                    AddressCountry3LetterCode: { type: graphql.GraphQLString },
                    AddressCountry: { type: graphql.GraphQLString },
                    AllowsRealMoney: { type: graphql.GraphQLBoolean },
                    FlagSmallImageUrl: { type: graphql.GraphQLString },
                    FlagLargeImageUrl: { type: graphql.GraphQLString },
                    ShowInList: { type: graphql.GraphQLBoolean },
                    OrderBy: { type: graphql.GraphQLFloat }
                  }
                })
              },
              Region: {
                type: new graphql.GraphQLObjectType({
                  name: 'controlLocationApiLocationResponseRegionResponse',
                  fields: {
                    GamingServerRegionId: { type: graphql.GraphQLFloat },
                    GamingServerRegionName: { type: graphql.GraphQLString }
                  }
                })
              },
              IsActive: { type: graphql.GraphQLBoolean },
              Location: { type: graphql.GraphQLString },
              StreetAddress: { type: graphql.GraphQLString },
              City: { type: graphql.GraphQLString },
              AddressStateProvenceId: { type: graphql.GraphQLFloat },
              AddressCountryId: { type: graphql.GraphQLFloat },
              PostalCode: { type: graphql.GraphQLString },
              GamingServerRegionId: { type: graphql.GraphQLFloat },
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
      'GamingGrids.Api.Control.v2.Controllers.LocationController.UpdateLocation',
    method: 'PUT',
    url: 'http://t2w.control.v2.dev6.gaminggrids.com/api/Location/{locationId}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlLocationApiLocationBylocationIdBody',
            fields: {
              Location: { type: graphql.GraphQLString },
              StreetAddress: { type: graphql.GraphQLString },
              City: { type: graphql.GraphQLString },
              AddressStateProvenceId: { type: graphql.GraphQLFloat },
              AddressCountryId: { type: graphql.GraphQLFloat },
              PostalCode: { type: graphql.GraphQLString },
              GamingServerRegionId: { type: graphql.GraphQLFloat },
              PhoneNumber: { type: graphql.GraphQLString },
              EmailAddress: { type: graphql.GraphQLString },
              Hours: { type: graphql.GraphQLString },
              Description: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlLocationApiLocationBylocationIdUrlParams',
            fields: { locationId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlLocationApiLocationBylocationIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlLocationApiLocationBylocationIdResponseResponse',
            fields: {
              LocationId: { type: graphql.GraphQLFloat },
              StateProvence: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlLocationApiLocationBylocationIdResponseStateProvenceResponse',
                  fields: {
                    AddressStateProvenceId: { type: graphql.GraphQLFloat },
                    AddressCountryId: { type: graphql.GraphQLFloat },
                    AddressStateProvenceCode: { type: graphql.GraphQLString },
                    AddressStateProvence: { type: graphql.GraphQLString },
                    AllowsRealMoney: { type: graphql.GraphQLBoolean }
                  }
                })
              },
              Country: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlLocationApiLocationBylocationIdResponseCountryResponse',
                  fields: {
                    AddressCountryId: { type: graphql.GraphQLFloat },
                    AddressCountryCode: { type: graphql.GraphQLString },
                    AddressCountry3LetterCode: { type: graphql.GraphQLString },
                    AddressCountry: { type: graphql.GraphQLString },
                    AllowsRealMoney: { type: graphql.GraphQLBoolean },
                    FlagSmallImageUrl: { type: graphql.GraphQLString },
                    FlagLargeImageUrl: { type: graphql.GraphQLString },
                    ShowInList: { type: graphql.GraphQLBoolean },
                    OrderBy: { type: graphql.GraphQLFloat }
                  }
                })
              },
              Region: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlLocationApiLocationBylocationIdResponseRegionResponse',
                  fields: {
                    GamingServerRegionId: { type: graphql.GraphQLFloat },
                    GamingServerRegionName: { type: graphql.GraphQLString }
                  }
                })
              },
              IsActive: { type: graphql.GraphQLBoolean },
              Location: { type: graphql.GraphQLString },
              StreetAddress: { type: graphql.GraphQLString },
              City: { type: graphql.GraphQLString },
              AddressStateProvenceId: { type: graphql.GraphQLFloat },
              AddressCountryId: { type: graphql.GraphQLFloat },
              PostalCode: { type: graphql.GraphQLString },
              GamingServerRegionId: { type: graphql.GraphQLFloat },
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
  ApiLocationBylocationId2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LocationController.DeleteLocation',
    method: 'POST',
    url: 'http://t2w.control.v2.dev6.gaminggrids.com/api/Location/{locationId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlLocationApiLocationBylocationId2UrlParams',
            fields: { locationId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlLocationApiLocationBylocationId2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
