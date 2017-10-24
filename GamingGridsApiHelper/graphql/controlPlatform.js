const graphql = require('graphql')

module.exports = {
  ApiPlatformMaintenance: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlatformController.UpdateMaintenanceMode',
    method: 'PUT',
    url: '/api/Platform/Maintenance',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlatformApiPlatformMaintenanceBody',
            fields: {
              MaintenanceMode: { type: graphql.GraphQLBoolean },
              AdministratorOnlyAccess: { type: graphql.GraphQLBoolean },
              StatusNoticeText: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformApiPlatformMaintenanceResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlatformAdministrator: {
    fullName: 'GamingGrids.Api.Control.v2.Controllers.PlatformController.List',
    method: 'GET',
    url: '/api/Platform/Administrator',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformApiPlatformAdministratorResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlPlatformApiPlatformAdministratorResponseResponse',
              fields: {
                EntityAdministratorId: { type: graphql.GraphQLFloat },
                FirstName: { type: graphql.GraphQLString },
                LastName: { type: graphql.GraphQLString },
                CompanyName: { type: graphql.GraphQLString },
                EntityId: { type: graphql.GraphQLFloat },
                AddressCountryId: { type: graphql.GraphQLFloat },
                GamingServerRegionId: { type: graphql.GraphQLFloat },
                IsActive: { type: graphql.GraphQLBoolean },
                CreatedDateTime: { type: graphql.GraphQLString },
                MatchPlayStatisticsId: { type: graphql.GraphQLFloat },
                EntityName: { type: graphql.GraphQLString },
                EntityIsTeam: { type: graphql.GraphQLBoolean },
                DisplayName: { type: graphql.GraphQLString },
                EntityImageUrl: { type: graphql.GraphQLString },
                EntityImageUrlIsExternal: { type: graphql.GraphQLBoolean },
                EntityBackgroundImageUrl: { type: graphql.GraphQLString },
                EntityBackgroundImageUrlIsExternal: {
                  type: graphql.GraphQLBoolean
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
  ApiPlatformAdministrator2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlatformController.CreateAdministrator',
    method: 'POST',
    url: '/api/Platform/Administrator',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlatformApiPlatformAdministrator2Body',
            fields: {
              EntityName: { type: graphql.GraphQLString },
              EmailAddress: { type: graphql.GraphQLString },
              Company: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformApiPlatformAdministrator2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlatformAdministratorByentityName: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlatformController.DeleteAdministrator',
    method: 'DELETE',
    url: '/api/Platform/Administrator/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlPlatformApiPlatformAdministratorByentityNameUrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformApiPlatformAdministratorByentityNameResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlatformMetrics: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlatformController.Snapshots',
    method: 'GET',
    url: '/api/Platform/Metrics',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlatformApiPlatformMetricsUriParams',
            fields: {
              startDate: { type: graphql.GraphQLString },
              endDate: { type: graphql.GraphQLString },
              granularity: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformApiPlatformMetricsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlPlatformApiPlatformMetricsResponseResponse',
              fields: {
                PlatformMetricSnapshotId: { type: graphql.GraphQLFloat },
                SnapshotDateTime: { type: graphql.GraphQLString },
                UserCount: { type: graphql.GraphQLFloat },
                UserUniqueLoginCount: { type: graphql.GraphQLFloat },
                PremiumUserCount: { type: graphql.GraphQLFloat },
                VerifiedIdUserCount: { type: graphql.GraphQLFloat },
                ActiveTeamCount: { type: graphql.GraphQLFloat },
                DisbandedTeamCount: { type: graphql.GraphQLFloat },
                FivePlayersOrMoreTeamCount: { type: graphql.GraphQLFloat },
                PendingBetaWhitelistCount: { type: graphql.GraphQLFloat },
                BetaNotificationCount: { type: graphql.GraphQLFloat },
                DeveloperCount: { type: graphql.GraphQLFloat },
                ApprovedDeveloperApiCount: { type: graphql.GraphQLFloat },
                PendingDeveloperApiCount: { type: graphql.GraphQLFloat },
                DeveloperCollaboratorCount: { type: graphql.GraphQLFloat },
                PublishedGameTitleCount: { type: graphql.GraphQLFloat },
                UnpublishedGameTitleCount: { type: graphql.GraphQLFloat },
                TotalGamingServerCount: { type: graphql.GraphQLFloat },
                OnlineGamingServerCount: { type: graphql.GraphQLFloat },
                OfflineGamingServerCount: { type: graphql.GraphQLFloat },
                LiveTournamentCount: { type: graphql.GraphQLFloat },
                CompletedTournamentCount: { type: graphql.GraphQLFloat },
                UpcomingTournamentCount: { type: graphql.GraphQLFloat },
                TotalFeedbackRating5: { type: graphql.GraphQLFloat },
                TotalFeedbackRating4: { type: graphql.GraphQLFloat },
                TotalFeedbackRating3: { type: graphql.GraphQLFloat },
                TotalFeedbackRating2: { type: graphql.GraphQLFloat },
                TotalFeedbackRating1: { type: graphql.GraphQLFloat },
                TournamentMatchCount: { type: graphql.GraphQLFloat },
                DisputedTournamentMatchCount: { type: graphql.GraphQLFloat },
                ForfeitTournamentMatchCount: { type: graphql.GraphQLFloat },
                EntityStreamingServiceCount: { type: graphql.GraphQLFloat },
                LiveEntityStreamingServiceCount: { type: graphql.GraphQLFloat }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlatformConfiguration: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlatformController.GetConfiguration',
    method: 'GET',
    url: '/api/Platform/Configuration',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformApiPlatformConfigurationResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlPlatformApiPlatformConfigurationResponseResponse',
              fields: {
                Item: { type: graphql.GraphQLString },
                Keys: {
                  type: new graphql.GraphQLList(
                    new graphql.GraphQLObjectType({
                      name:
                        'controlPlatformApiPlatformConfigurationResponseKeysResponse',
                      fields: {
                        Count: { type: graphql.GraphQLFloat },
                        IsReadOnly: { type: graphql.GraphQLBoolean }
                      }
                    })
                  )
                },
                Values: {
                  type: new graphql.GraphQLList(
                    new graphql.GraphQLObjectType({
                      name:
                        'controlPlatformApiPlatformConfigurationResponseValuesResponse',
                      fields: {
                        Count: { type: graphql.GraphQLFloat },
                        IsReadOnly: { type: graphql.GraphQLBoolean }
                      }
                    })
                  )
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
  ApiPlatformConfigurationRaffleAvailable: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlatformController.GetConfigRaffleAvailable',
    method: 'GET',
    url: '/api/Platform/Configuration/RaffleAvailable',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformApiPlatformConfigurationRaffleAvailableResponse',
      fields: {
        Response: { type: graphql.GraphQLBoolean },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlatformConfiguration2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlatformController.SaveConfiguration',
    method: 'PUT',
    url: '/api/Platform/Configuration',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlatformApiPlatformConfiguration2Body',
            fields: {
              Item: { type: graphql.GraphQLString },
              Keys: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'controlPlatformApiPlatformConfiguration2BodyKeysResponse',
                    fields: {
                      Count: { type: graphql.GraphQLFloat },
                      IsReadOnly: { type: graphql.GraphQLBoolean }
                    }
                  })
                )
              },
              Values: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'controlPlatformApiPlatformConfiguration2BodyValuesResponse',
                    fields: {
                      Count: { type: graphql.GraphQLFloat },
                      IsReadOnly: { type: graphql.GraphQLBoolean }
                    }
                  })
                )
              }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformApiPlatformConfiguration2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlatformFeatureTournamentPolicyList: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlatformController.GetFeatureTournamentPolicyList',
    method: 'GET',
    url: '/api/Platform/Feature/Tournament/PolicyList',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformApiPlatformFeatureTournamentPolicyListResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlPlatformApiPlatformFeatureTournamentPolicyListResponseResponse',
              fields: {
                TournamentManagementPolicyId: { type: graphql.GraphQLFloat },
                TournamentManagementPolicyName: { type: graphql.GraphQLString },
                IsDefault: { type: graphql.GraphQLBoolean },
                TournamentManagementPolicyDescription: {
                  type: graphql.GraphQLString
                },
                GroupPurchasePrice: { type: graphql.GraphQLFloat },
                GroupRenewalTimespan: { type: graphql.GraphQLFloat },
                AllowPurchaseOfGroup: { type: graphql.GraphQLBoolean },
                AllowTournamentCreation: { type: graphql.GraphQLBoolean },
                LimitTournamentCreation: { type: graphql.GraphQLBoolean },
                MaxConcurrentTournaments: { type: graphql.GraphQLFloat },
                MaxTournamentsPerTimespan: { type: graphql.GraphQLFloat },
                MaxTournamentsTimespanSeconds: { type: graphql.GraphQLFloat },
                MaxParticipantsPerTournament: { type: graphql.GraphQLFloat },
                AllowPublicTournament: { type: graphql.GraphQLBoolean },
                AllowFormatSingleElimination: { type: graphql.GraphQLBoolean },
                AllowFormatDoubleElimination: { type: graphql.GraphQLBoolean },
                AllowFormatQualifiers: { type: graphql.GraphQLBoolean },
                AllowConsolationPrizes: { type: graphql.GraphQLBoolean },
                AdvanceCreationTimeLimit: { type: graphql.GraphQLFloat },
                AllowGlobalRegion: { type: graphql.GraphQLBoolean },
                AssignNewServerLimit: { type: graphql.GraphQLFloat },
                AllowBrandedSponsorship: { type: graphql.GraphQLBoolean },
                AllowAccessAnalytics: { type: graphql.GraphQLBoolean },
                MaximumTournamentAdmins: { type: graphql.GraphQLFloat },
                AllowCountryRestrictions: { type: graphql.GraphQLBoolean },
                AllowStandByList: { type: graphql.GraphQLBoolean },
                AllowRepeatAndCycle: { type: graphql.GraphQLBoolean },
                AllowLanMode: { type: graphql.GraphQLBoolean },
                AllowManualMode: { type: graphql.GraphQLBoolean },
                AuthorizedGameTitlesList: { type: graphql.GraphQLString },
                AuthorizedGameTitles: { type: graphql.GraphQLFloat },
                AuthorizedGamePlatformsList: { type: graphql.GraphQLString },
                AuthorizedGamePlatofrms: { type: graphql.GraphQLFloat }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlatformFeatureTournamentPolicyList2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlatformController.UpdateFeatureTournamentPolicy',
    method: 'PUT',
    url: '/api/Platform/Feature/Tournament/PolicyList',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlatformApiPlatformFeatureTournamentPolicyList2Body',
            fields: {
              TournamentManagementPolicyId: { type: graphql.GraphQLFloat },
              TournamentManagementPolicyName: { type: graphql.GraphQLString },
              IsDefault: { type: graphql.GraphQLBoolean },
              TournamentManagementPolicyDescription: {
                type: graphql.GraphQLString
              },
              GroupPurchasePrice: { type: graphql.GraphQLFloat },
              GroupRenewalTimespan: { type: graphql.GraphQLFloat },
              AllowPurchaseOfGroup: { type: graphql.GraphQLBoolean },
              AllowTournamentCreation: { type: graphql.GraphQLBoolean },
              LimitTournamentCreation: { type: graphql.GraphQLBoolean },
              MaxConcurrentTournaments: { type: graphql.GraphQLFloat },
              MaxTournamentsPerTimespan: { type: graphql.GraphQLFloat },
              MaxTournamentsTimespanSeconds: { type: graphql.GraphQLFloat },
              MaxParticipantsPerTournament: { type: graphql.GraphQLFloat },
              AllowPublicTournament: { type: graphql.GraphQLBoolean },
              AllowFormatSingleElimination: { type: graphql.GraphQLBoolean },
              AllowFormatDoubleElimination: { type: graphql.GraphQLBoolean },
              AllowFormatQualifiers: { type: graphql.GraphQLBoolean },
              AllowConsolationPrizes: { type: graphql.GraphQLBoolean },
              AdvanceCreationTimeLimit: { type: graphql.GraphQLFloat },
              AllowGlobalRegion: { type: graphql.GraphQLBoolean },
              AssignNewServerLimit: { type: graphql.GraphQLFloat },
              AllowBrandedSponsorship: { type: graphql.GraphQLBoolean },
              AllowAccessAnalytics: { type: graphql.GraphQLBoolean },
              MaximumTournamentAdmins: { type: graphql.GraphQLFloat },
              AllowCountryRestrictions: { type: graphql.GraphQLBoolean },
              AllowStandByList: { type: graphql.GraphQLBoolean },
              AllowRepeatAndCycle: { type: graphql.GraphQLBoolean },
              AllowLanMode: { type: graphql.GraphQLBoolean },
              AllowManualMode: { type: graphql.GraphQLBoolean },
              AuthorizedGameTitlesList: { type: graphql.GraphQLString },
              AuthorizedGameTitles: { type: graphql.GraphQLFloat },
              AuthorizedGamePlatformsList: { type: graphql.GraphQLString },
              AuthorizedGamePlatofrms: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformApiPlatformFeatureTournamentPolicyList2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlatformFeatureTournamentPolicyBypolicyIdAssignedList: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlatformController.GetFeatureTournamentPolicyAssignedList',
    method: 'GET',
    url: '/api/Platform/Feature/Tournament/Policy/{policyId}/AssignedList',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlPlatformApiPlatformFeatureTournamentPolicyBypolicyIdAssignedListUrlParams',
            fields: { policyId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlPlatformApiPlatformFeatureTournamentPolicyBypolicyIdAssignedListResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlPlatformApiPlatformFeatureTournamentPolicyBypolicyIdAssignedListResponseResponse',
              fields: {
                EntityId: { type: graphql.GraphQLFloat },
                AddressCountryId: { type: graphql.GraphQLFloat },
                GamingServerRegionId: { type: graphql.GraphQLFloat },
                IsActive: { type: graphql.GraphQLBoolean },
                CreatedDateTime: { type: graphql.GraphQLString },
                MatchPlayStatisticsId: { type: graphql.GraphQLFloat },
                EntityName: { type: graphql.GraphQLString },
                EntityIsTeam: { type: graphql.GraphQLBoolean },
                DisplayName: { type: graphql.GraphQLString },
                EntityImageUrl: { type: graphql.GraphQLString },
                EntityImageUrlIsExternal: { type: graphql.GraphQLBoolean },
                EntityBackgroundImageUrl: { type: graphql.GraphQLString },
                EntityBackgroundImageUrlIsExternal: {
                  type: graphql.GraphQLBoolean
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
  ApiPlatformLogging: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlatformController.GetLogging',
    method: 'GET',
    url: '/api/Platform/Logging',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlatformApiPlatformLoggingUriParams',
            fields: {
              errorOnly: { type: graphql.GraphQLBoolean },
              source: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformApiPlatformLoggingResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlPlatformApiPlatformLoggingResponseResponse',
              fields: {
                IsError: { type: graphql.GraphQLBoolean },
                SourceName: { type: graphql.GraphQLString },
                StackTrace: { type: graphql.GraphQLString },
                Message: { type: graphql.GraphQLString },
                MessageDateTime: { type: graphql.GraphQLString }
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
