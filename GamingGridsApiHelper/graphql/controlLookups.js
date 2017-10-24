const graphql = require('graphql')

module.exports = {
  ApiLookupsRosterRoles: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.LookupsController.GetRosterRoles',
    method: 'GET',
    url: 'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/RosterRoles',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsRosterRolesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlLookupsApiLookupsRosterRolesResponseResponse',
              fields: {
                RosterRoleId: { type: graphql.GraphQLFloat },
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
    url: 'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/SiteCurrency',
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/DefaultXperiencePoints',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsDefaultXperiencePointsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'controlLookupsApiLookupsDefaultXperiencePointsResponseResponse',
            fields: {
              PointsToJoinTournament: { type: graphql.GraphQLFloat },
              PointsToWinTournamentRound: { type: graphql.GraphQLFloat },
              PointsToTournamentPlace1: { type: graphql.GraphQLFloat },
              PointsToTournamentPlace2: { type: graphql.GraphQLFloat },
              PointsToTournamentPlace3: { type: graphql.GraphQLFloat }
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/XperiencePoints',
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/LolValidationPrefix',
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/RegistrationRegionRestrictionTypeList',
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
                RegistrationRestrictionTypeId: { type: graphql.GraphQLFloat },
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/RegistrationCountryRestrictionTypeList',
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
                RegistrationRestrictionTypeId: { type: graphql.GraphQLFloat },
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/FileStorageTypeList',
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
                FileStorageTypeId: { type: graphql.GraphQLFloat },
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/EmailSubjectList',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsEmailSubjectListResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlLookupsApiLookupsEmailSubjectListResponseResponse',
              fields: {
                EmailSubjectId: { type: graphql.GraphQLFloat },
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
    url: 'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/CountryList',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsCountryListResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlLookupsApiLookupsCountryListResponseResponse',
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/StateList/{countryId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlLookupsApiLookupsStateListBycountryIdUrlParams',
            fields: { countryId: { type: graphql.GraphQLFloat } }
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
                AddressStateProvenceId: { type: graphql.GraphQLFloat },
                AddressCountryId: { type: graphql.GraphQLFloat },
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/QualifierTieBreakerTypes',
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
                QualifierTieBreakerTypeId: { type: graphql.GraphQLFloat },
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/TournamentPrizeFundingTypes',
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
                TournamentPrizeFundingTypeId: { type: graphql.GraphQLFloat },
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/TournamentSeedingTypes',
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
                TournamentSeedingTypeId: { type: graphql.GraphQLFloat },
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/TournamentPairingTypes',
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
                TournamentPairingTypeId: { type: graphql.GraphQLFloat },
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/StreamingServices',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsStreamingServicesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlLookupsApiLookupsStreamingServicesResponseResponse',
              fields: {
                StreamingServiceId: { type: graphql.GraphQLFloat },
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/TournamentTypes',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlLookupsApiLookupsTournamentTypesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlLookupsApiLookupsTournamentTypesResponseResponse',
              fields: {
                TournamentTypeId: { type: graphql.GraphQLFloat },
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/GamingServerRegions',
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
                GamingServerRegionId: { type: graphql.GraphQLFloat },
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Lookups/gameValidationTypes',
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
                  type: graphql.GraphQLFloat
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
