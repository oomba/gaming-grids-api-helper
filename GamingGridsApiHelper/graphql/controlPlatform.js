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
            name: 'controlPlatformApiPlatformMaintenancebody',
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
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlatformController.CreateAdministrator',
    method: 'POST',
    url: '/api/Platform/Administrator',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlatformApiPlatformAdministratorbody',
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
      name: 'controlPlatformApiPlatformAdministratorResponse',
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
              'controlPlatformApiPlatformAdministratorByentityNameurlParams',
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
            name: 'controlPlatformApiPlatformMetricsuriParams',
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
                PlatformMetricSnapshotId: { type: graphql.GraphQLInt },
                SnapshotDateTime: { type: graphql.GraphQLString },
                UserCount: { type: graphql.GraphQLInt },
                UserUniqueLoginCount: { type: graphql.GraphQLInt },
                PremiumUserCount: { type: graphql.GraphQLInt },
                VerifiedIdUserCount: { type: graphql.GraphQLInt },
                ActiveTeamCount: { type: graphql.GraphQLInt },
                DisbandedTeamCount: { type: graphql.GraphQLInt },
                FivePlayersOrMoreTeamCount: { type: graphql.GraphQLInt },
                PendingBetaWhitelistCount: { type: graphql.GraphQLInt },
                BetaNotificationCount: { type: graphql.GraphQLInt },
                DeveloperCount: { type: graphql.GraphQLInt },
                ApprovedDeveloperApiCount: { type: graphql.GraphQLInt },
                PendingDeveloperApiCount: { type: graphql.GraphQLInt },
                DeveloperCollaboratorCount: { type: graphql.GraphQLInt },
                PublishedGameTitleCount: { type: graphql.GraphQLInt },
                UnpublishedGameTitleCount: { type: graphql.GraphQLInt },
                TotalGamingServerCount: { type: graphql.GraphQLInt },
                OnlineGamingServerCount: { type: graphql.GraphQLInt },
                OfflineGamingServerCount: { type: graphql.GraphQLInt },
                LiveTournamentCount: { type: graphql.GraphQLInt },
                CompletedTournamentCount: { type: graphql.GraphQLInt },
                UpcomingTournamentCount: { type: graphql.GraphQLInt },
                TotalFeedbackRating5: { type: graphql.GraphQLInt },
                TotalFeedbackRating4: { type: graphql.GraphQLInt },
                TotalFeedbackRating3: { type: graphql.GraphQLInt },
                TotalFeedbackRating2: { type: graphql.GraphQLInt },
                TotalFeedbackRating1: { type: graphql.GraphQLInt },
                TournamentMatchCount: { type: graphql.GraphQLInt },
                DisputedTournamentMatchCount: { type: graphql.GraphQLInt },
                ForfeitTournamentMatchCount: { type: graphql.GraphQLInt },
                EntityStreamingServiceCount: { type: graphql.GraphQLInt },
                LiveEntityStreamingServiceCount: { type: graphql.GraphQLInt }
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
      'GamingGrids.Api.Control.v2.Controllers.PlatformController.SaveConfiguration',
    method: 'PUT',
    url: '/api/Platform/Configuration',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlatformApiPlatformConfigurationbody',
            fields: {
              Item: { type: graphql.GraphQLString },
              Keys: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'controlPlatformApiPlatformConfigurationbodyKeysResponse',
                    fields: {
                      Count: { type: graphql.GraphQLInt },
                      IsReadOnly: { type: graphql.GraphQLBoolean }
                    }
                  })
                )
              },
              Values: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'controlPlatformApiPlatformConfigurationbodyValuesResponse',
                    fields: {
                      Count: { type: graphql.GraphQLInt },
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
      name: 'controlPlatformApiPlatformConfigurationResponse',
      fields: {
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
  ApiPlatformFeatureTournamentPolicyList: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlatformController.UpdateFeatureTournamentPolicy',
    method: 'PUT',
    url: '/api/Platform/Feature/Tournament/PolicyList',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlatformApiPlatformFeatureTournamentPolicyListbody',
            fields: {
              TournamentManagementPolicyId: { type: graphql.GraphQLInt },
              TournamentManagementPolicyName: { type: graphql.GraphQLString },
              IsDefault: { type: graphql.GraphQLBoolean },
              TournamentManagementPolicyDescription: {
                type: graphql.GraphQLString
              },
              GroupPurchasePrice: { type: graphql.GraphQLInt },
              GroupRenewalTimespan: { type: graphql.GraphQLInt },
              AllowPurchaseOfGroup: { type: graphql.GraphQLBoolean },
              AllowTournamentCreation: { type: graphql.GraphQLBoolean },
              LimitTournamentCreation: { type: graphql.GraphQLBoolean },
              MaxConcurrentTournaments: { type: graphql.GraphQLInt },
              MaxTournamentsPerTimespan: { type: graphql.GraphQLInt },
              MaxTournamentsTimespanSeconds: { type: graphql.GraphQLInt },
              MaxParticipantsPerTournament: { type: graphql.GraphQLInt },
              AllowPublicTournament: { type: graphql.GraphQLBoolean },
              AllowFormatSingleElimination: { type: graphql.GraphQLBoolean },
              AllowFormatDoubleElimination: { type: graphql.GraphQLBoolean },
              AllowFormatQualifiers: { type: graphql.GraphQLBoolean },
              AllowConsolationPrizes: { type: graphql.GraphQLBoolean },
              AdvanceCreationTimeLimit: { type: graphql.GraphQLInt },
              AllowGlobalRegion: { type: graphql.GraphQLBoolean },
              AssignNewServerLimit: { type: graphql.GraphQLInt },
              AllowBrandedSponsorship: { type: graphql.GraphQLBoolean },
              AllowAccessAnalytics: { type: graphql.GraphQLBoolean },
              MaximumTournamentAdmins: { type: graphql.GraphQLInt },
              AllowCountryRestrictions: { type: graphql.GraphQLBoolean },
              AllowStandByList: { type: graphql.GraphQLBoolean },
              AllowRepeatAndCycle: { type: graphql.GraphQLBoolean },
              AllowLanMode: { type: graphql.GraphQLBoolean },
              AllowManualMode: { type: graphql.GraphQLBoolean },
              AuthorizedGameTitlesList: { type: graphql.GraphQLString },
              AuthorizedGameTitles: { type: graphql.GraphQLInt },
              AuthorizedGamePlatformsList: { type: graphql.GraphQLString },
              AuthorizedGamePlatofrms: { type: graphql.GraphQLInt }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPlatformApiPlatformFeatureTournamentPolicyListResponse',
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
              'controlPlatformApiPlatformFeatureTournamentPolicyBypolicyIdAssignedListurlParams',
            fields: { policyId: { type: graphql.GraphQLInt } }
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
                EntityId: { type: graphql.GraphQLInt },
                AddressCountryId: { type: graphql.GraphQLInt },
                GamingServerRegionId: { type: graphql.GraphQLInt },
                IsActive: { type: graphql.GraphQLBoolean },
                CreatedDateTime: { type: graphql.GraphQLString },
                MatchPlayStatisticsId: { type: graphql.GraphQLInt },
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
            name: 'controlPlatformApiPlatformLogginguriParams',
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
