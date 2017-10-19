const graphql = require('graphql')

module.exports = {
  ApiLookupsRosterRoles: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.GetRosterRoles',
    method: 'GET',
    url: '/api/Lookups/RosterRoles',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsRosterRolesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlLookupsApiLookupsRosterRolesResponseResponse',
              fields: {
                RosterRoleId: { type: graphql.GraphQLInt },
                RosterRoleName: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsSiteCurrency: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.GetSiteCurrency',
    method: 'GET',
    url: '/api/Lookups/SiteCurrency',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsSiteCurrencyResponse',
      fields: {
        Response: { type: graphql.GraphQLString },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsDefaultXperiencePoints: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.GetDefaultXperiencePoints',
    method: 'GET',
    url: '/api/Lookups/DefaultXperiencePoints',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsDefaultXperiencePointsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'controlLookupsApiLookupsDefaultXperiencePointsResponseResponse',
            fields: {
              PointsToJoinTournament: { type: graphql.GraphQLInt },
              PointsToWinTournamentRound: { type: graphql.GraphQLInt },
              PointsToTournamentPlace1: { type: graphql.GraphQLInt },
              PointsToTournamentPlace2: { type: graphql.GraphQLInt },
              PointsToTournamentPlace3: { type: graphql.GraphQLInt }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsXperiencePoints: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.GetXperiencePoints',
    method: 'GET',
    url: '/api/Lookups/XperiencePoints',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsXperiencePointsResponse',
      fields: {
        Response: { type: graphql.GraphQLBoolean },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsLolValidationPrefix: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.GetLolValidationPrefix',
    method: 'GET',
    url: '/api/Lookups/LolValidationPrefix',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsLolValidationPrefixResponse',
      fields: {
        Response: { type: graphql.GraphQLString },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsRegistrationRegionRestrictionTypeList: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.RegistrationRegionRestrictionTypeList',
    method: 'GET',
    url: '/api/Lookups/RegistrationRegionRestrictionTypeList',
    args: {},
    response: new graphql.GraphQLObjectType({
      name:
        'controlLookupsApiLookupsRegistrationRegionRestrictionTypeListResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsApiLookupsRegistrationRegionRestrictionTypeListResponseResponse',
              fields: {
                RegistrationRestrictionTypeId: { type: graphql.GraphQLInt },
                RegistrationRestrictionType: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsRegistrationCountryRestrictionTypeList: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.RegistrationCountryRestrictionTypeList',
    method: 'GET',
    url: '/api/Lookups/RegistrationCountryRestrictionTypeList',
    args: {},
    response: new graphql.GraphQLObjectType({
      name:
        'controlLookupsApiLookupsRegistrationCountryRestrictionTypeListResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsApiLookupsRegistrationCountryRestrictionTypeListResponseResponse',
              fields: {
                RegistrationRestrictionTypeId: { type: graphql.GraphQLInt },
                RegistrationRestrictionType: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsFileStorageTypeList: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.FileStorageTypeList',
    method: 'GET',
    url: '/api/Lookups/FileStorageTypeList',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsFileStorageTypeListResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsApiLookupsFileStorageTypeListResponseResponse',
              fields: {
                FileStorageTypeId: { type: graphql.GraphQLInt },
                FileStorageType: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsEmailSubjectList: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.EmailSubjectist',
    method: 'GET',
    url: '/api/Lookups/EmailSubjectList',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsEmailSubjectListResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlLookupsApiLookupsEmailSubjectListResponseResponse',
              fields: {
                EmailSubjectId: { type: graphql.GraphQLInt },
                EmailSubject: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsCountryList: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.CountryList',
    method: 'GET',
    url: '/api/Lookups/CountryList',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsCountryListResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlLookupsApiLookupsCountryListResponseResponse',
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
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsStateListBycountryId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.StateList',
    method: 'GET',
    url: '/api/Lookups/StateList/{countryId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlLookupsApiLookupsStateListBycountryIdurlParams',
            fields: { countryId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsStateListBycountryIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsApiLookupsStateListBycountryIdResponseResponse',
              fields: {
                AddressStateProvenceId: { type: graphql.GraphQLInt },
                AddressCountryId: { type: graphql.GraphQLInt },
                AddressStateProvenceCode: { type: graphql.GraphQLString },
                AddressStateProvence: { type: graphql.GraphQLString },
                AllowsRealMoney: { type: graphql.GraphQLBoolean }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsQualifierTieBreakerTypes: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.QualifierTieBreakerTypes',
    method: 'GET',
    url: '/api/Lookups/QualifierTieBreakerTypes',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsQualifierTieBreakerTypesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsApiLookupsQualifierTieBreakerTypesResponseResponse',
              fields: {
                QualifierTieBreakerTypeId: { type: graphql.GraphQLInt },
                QualifierTieBreakerType: { type: graphql.GraphQLString },
                QualifierTieBreakerTypeDescription: {
                  type: graphql.GraphQLString
                }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsTournamentPrizeFundingTypes: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.TournamentPrizeFundingTypes',
    method: 'GET',
    url: '/api/Lookups/TournamentPrizeFundingTypes',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsTournamentPrizeFundingTypesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsApiLookupsTournamentPrizeFundingTypesResponseResponse',
              fields: {
                TournamentPrizeFundingTypeId: { type: graphql.GraphQLInt },
                TournamentPrizeFundingType: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsTournamentSeedingTypes: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.TournamentSeedingTypes',
    method: 'GET',
    url: '/api/Lookups/TournamentSeedingTypes',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsTournamentSeedingTypesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsApiLookupsTournamentSeedingTypesResponseResponse',
              fields: {
                TournamentSeedingTypeId: { type: graphql.GraphQLInt },
                TournamentSeedingTypeName: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsTournamentPairingTypes: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.TournamentPairingTypes',
    method: 'GET',
    url: '/api/Lookups/TournamentPairingTypes',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsTournamentPairingTypesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsApiLookupsTournamentPairingTypesResponseResponse',
              fields: {
                TournamentPairingTypeId: { type: graphql.GraphQLInt },
                TournamentPairingTypeName: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsStreamingServices: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.StreamingServices',
    method: 'GET',
    url: '/api/Lookups/StreamingServices',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsStreamingServicesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlLookupsApiLookupsStreamingServicesResponseResponse',
              fields: {
                StreamingServiceId: { type: graphql.GraphQLInt },
                StreamingService: { type: graphql.GraphQLString },
                SourceName: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsTournamentTypes: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.TournamentTypes',
    method: 'GET',
    url: '/api/Lookups/TournamentTypes',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsTournamentTypesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlLookupsApiLookupsTournamentTypesResponseResponse',
              fields: {
                TournamentTypeId: { type: graphql.GraphQLInt },
                TournamentTypeName: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsGamingServerRegions: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.GamingServerRegions',
    method: 'GET',
    url: '/api/Lookups/GamingServerRegions',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsGamingServerRegionsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsApiLookupsGamingServerRegionsResponseResponse',
              fields: {
                GamingServerRegionId: { type: graphql.GraphQLInt },
                GamingServerRegionName: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiLookupsGameValidationTypes: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.GameTitleValidationMethodTypes',
    method: 'GET',
    url: '/api/Lookups/gameValidationTypes',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsGameValidationTypesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlLookupsApiLookupsGameValidationTypesResponseResponse',
              fields: {
                GamePlatformFranchiseTitleValidationMethodTypeId: {
                  type: graphql.GraphQLInt
                },
                GamePlatformFranchiseTitleValidationMethodType: {
                  type: graphql.GraphQLString
                }
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
