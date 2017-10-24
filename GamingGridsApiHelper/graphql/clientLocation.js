const graphql = require('graphql')

module.exports = {
  ApiLocationBylocationId: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.LocationController.GetLocation',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Location/{locationId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientLocationApiLocationBylocationIdUrlParams',
            fields: { locationId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientLocationApiLocationBylocationIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientLocationApiLocationBylocationIdResponseResponse',
            fields: {
              LocationId: { type: graphql.GraphQLFloat },
              StateProvence: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientLocationApiLocationBylocationIdResponseStateProvenceResponse',
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
                    'clientLocationApiLocationBylocationIdResponseCountryResponse',
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
                    'clientLocationApiLocationBylocationIdResponseRegionResponse',
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
  ApiLocationSearch: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.LocationController.GetLocationsBySearch',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Location/Search',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientLocationApiLocationSearchUriParams',
            fields: {
              search: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'clientLocationApiLocationSearchUriParamssearchResponse',
                  fields: {
                    StateProvenceId: { type: graphql.GraphQLFloat },
                    CountryId: { type: graphql.GraphQLFloat },
                    RegionId: { type: graphql.GraphQLFloat }
                  }
                })
              }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientLocationApiLocationSearchResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientLocationApiLocationSearchResponseResponse',
              fields: {
                LocationId: { type: graphql.GraphQLFloat },
                StateProvence: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientLocationApiLocationSearchResponseStateProvenceResponse',
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
                      'clientLocationApiLocationSearchResponseCountryResponse',
                    fields: {
                      AddressCountryId: { type: graphql.GraphQLFloat },
                      AddressCountryCode: { type: graphql.GraphQLString },
                      AddressCountry3LetterCode: {
                        type: graphql.GraphQLString
                      },
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
                      'clientLocationApiLocationSearchResponseRegionResponse',
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
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLocationByRegion: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.LocationController.GetLocationsByRegion',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Location/byRegion',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientLocationApiLocationByRegionResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientLocationApiLocationByRegionResponseResponse',
              fields: {
                LocationId: { type: graphql.GraphQLFloat },
                StateProvence: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientLocationApiLocationByRegionResponseStateProvenceResponse',
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
                      'clientLocationApiLocationByRegionResponseCountryResponse',
                    fields: {
                      AddressCountryId: { type: graphql.GraphQLFloat },
                      AddressCountryCode: { type: graphql.GraphQLString },
                      AddressCountry3LetterCode: {
                        type: graphql.GraphQLString
                      },
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
                      'clientLocationApiLocationByRegionResponseRegionResponse',
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
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
