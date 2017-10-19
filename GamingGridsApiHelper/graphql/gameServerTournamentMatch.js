const graphql = require('graphql')

module.exports = {
  ApiTournamentMatchByTournamentMatchIdLiveScore: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.UpdateLiveScore',
    method: 'POST',
    url: '/api/Tournament/Match/{TournamentMatchId}/Live/Score',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdLiveScorebody',
            fields: {
              CurrentInGameScoreA: { type: graphql.GraphQLFloat },
              CurrentInGameScoreB: { type: graphql.GraphQLFloat }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdLiveScoreurlParams',
            fields: { TournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdLiveScoreResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchByTournamentMatchIdMessagePendingList: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.MessageQueueList',
    method: 'GET',
    url: '/api/Tournament/Match/{TournamentMatchId}/Message/Pending/List',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdMessagePendingListurlParams',
            fields: { TournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdMessagePendingListResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdMessagePendingListResponseResponse',
              fields: {
                MessageId: { type: graphql.GraphQLInt },
                TournamentMatchId: { type: graphql.GraphQLInt },
                MessageDirection: { type: graphql.GraphQLInt },
                Message: { type: graphql.GraphQLString },
                PendingServerProcessing: { type: graphql.GraphQLBoolean },
                MessageDateTime: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchByTournamentMatchIdMessageSend: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.SendMessage',
    method: 'POST',
    url: '/api/Tournament/Match/{TournamentMatchId}/Message/Send',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdMessageSendbody',
            fields: { Message: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdMessageSendurlParams',
            fields: { TournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdMessageSendResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchByTournamentMatchIdPlayerListActive: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.GetActivePlayers',
    method: 'GET',
    url: '/api/Tournament/Match/{TournamentMatchId}/Player/List/Active',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlayerListActiveurlParams',
            fields: { TournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlayerListActiveResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlayerListActiveResponseResponse',
              fields: {
                TournamentMatchId: { type: graphql.GraphQLInt },
                TournamentId: { type: graphql.GraphQLInt },
                EntityPlayerId: { type: graphql.GraphQLInt },
                IsTeamCaptain: { type: graphql.GraphQLBoolean },
                IsOnTeamA: { type: graphql.GraphQLBoolean },
                Nickname: { type: graphql.GraphQLString },
                VoteDidMyTeamWin: { type: graphql.GraphQLBoolean },
                IsReady: { type: graphql.GraphQLBoolean },
                WasRemoved: { type: graphql.GraphQLBoolean },
                HasPenalty: { type: graphql.GraphQLBoolean },
                IsActive: { type: graphql.GraphQLBoolean },
                GamePlayerIdentifier: { type: graphql.GraphQLString },
                SteamId32: { type: graphql.GraphQLString },
                SteamId64: { type: graphql.GraphQLString },
                Profile: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlayerListActiveResponseProfileResponse',
                    fields: {
                      Nickname: { type: graphql.GraphQLString },
                      LanModeEnabled: { type: graphql.GraphQLBoolean },
                      LanSeatLocation: { type: graphql.GraphQLString },
                      EntityName: { type: graphql.GraphQLString },
                      EntityIsTeam: { type: graphql.GraphQLBoolean },
                      DisplayName: { type: graphql.GraphQLString },
                      EntityImageUrl: { type: graphql.GraphQLString },
                      EntityImageUrlIsExternal: {
                        type: graphql.GraphQLBoolean
                      },
                      EntityBackgroundImageUrl: { type: graphql.GraphQLString },
                      EntityBackgroundImageUrlIsExternal: {
                        type: graphql.GraphQLBoolean
                      }
                    }
                  })
                },
                FirstName: { type: graphql.GraphQLString },
                LastName: { type: graphql.GraphQLString },
                AddressCountry: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlayerListActiveResponseAddressCountryResponse',
                    fields: {
                      AddressCountryId: { type: graphql.GraphQLInt },
                      AddressCountryCode: { type: graphql.GraphQLString },
                      AddressCountry3LetterCode: {
                        type: graphql.GraphQLString
                      },
                      AddressCountry: { type: graphql.GraphQLString },
                      AllowsRealMoney: { type: graphql.GraphQLBoolean },
                      FlagSmallImageUrl: { type: graphql.GraphQLString },
                      FlagLargeImageUrl: { type: graphql.GraphQLString },
                      ShowInList: { type: graphql.GraphQLBoolean },
                      OrderBy: { type: graphql.GraphQLInt }
                    }
                  })
                },
                StreamingServices: {
                  type: new graphql.GraphQLList(
                    new graphql.GraphQLObjectType({
                      name:
                        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlayerListActiveResponseStreamingServicesResponse',
                      fields: {
                        EntityId: { type: graphql.GraphQLInt },
                        StreamName: { type: graphql.GraphQLString },
                        StreamLink: { type: graphql.GraphQLString },
                        StreamCurrentlyActive: { type: graphql.GraphQLBoolean },
                        StreamActiveViewers: { type: graphql.GraphQLInt },
                        LastUpdatedDateTime: { type: graphql.GraphQLString },
                        StreamingServiceId: { type: graphql.GraphQLInt },
                        StreamingService: { type: graphql.GraphQLString },
                        SourceName: { type: graphql.GraphQLString }
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
  ApiTournamentMatchByTournamentMatchIdPlayerListActiveMinified: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.ActivePlayersMini',
    method: 'GET',
    url:
      '/api/Tournament/Match/{TournamentMatchId}/Player/List/Active/Minified',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlayerListActiveMinifiedurlParams',
            fields: { TournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlayerListActiveMinifiedResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlayerListActiveMinifiedResponseResponse',
              fields: {
                TournamentMatchId: { type: graphql.GraphQLInt },
                TournamentId: { type: graphql.GraphQLInt },
                EntityPlayerId: { type: graphql.GraphQLInt },
                IsTeamCaptain: { type: graphql.GraphQLBoolean },
                IsOnTeamA: { type: graphql.GraphQLBoolean },
                Nickname: { type: graphql.GraphQLString },
                VoteDidMyTeamWin: { type: graphql.GraphQLBoolean },
                IsReady: { type: graphql.GraphQLBoolean },
                WasRemoved: { type: graphql.GraphQLBoolean },
                HasPenalty: { type: graphql.GraphQLBoolean },
                IsActive: { type: graphql.GraphQLBoolean },
                GamePlayerIdentifier: { type: graphql.GraphQLString },
                SteamId32: { type: graphql.GraphQLString },
                SteamId64: { type: graphql.GraphQLString },
                AddressCountry: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchByTournamentMatchIdPlayerByentityName: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.RemovePlayer',
    method: 'DELETE',
    url: '/api/Tournament/Match/{TournamentMatchId}/Player/{entityName}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlayerByentityNamebody',
            fields: { HasPenalty: { type: graphql.GraphQLBoolean } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlayerByentityNameurlParams',
            fields: {
              entityName: { type: graphql.GraphQLString },
              TournamentMatchId: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlayerByentityNameResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchByTournamentMatchIdPlayerFeedbackReport: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.ReportFeedback',
    method: 'POST',
    url: '/api/Tournament/Match/{TournamentMatchId}/Player/Feedback/Report',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlayerFeedbackReportbody',
            fields: {
              EntityId: { type: graphql.GraphQLInt },
              TournamentMatchId: { type: graphql.GraphQLInt },
              GameShortCode: { type: graphql.GraphQLString },
              FeedbackReportedById: { type: graphql.GraphQLInt },
              FeedbackRating: { type: graphql.GraphQLInt },
              FeedbackMessage: { type: graphql.GraphQLString },
              InappropriateFlags: { type: graphql.GraphQLBoolean },
              ReportToAdministrator: { type: graphql.GraphQLBoolean }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlayerFeedbackReporturlParams',
            fields: { TournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlayerFeedbackReportResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchByTournamentMatchIdFinalize: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.Finalize',
    method: 'POST',
    url: '/api/Tournament/Match/{TournamentMatchId}/Finalize',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdFinalizebody',
            fields: {
              ParticipantAResults: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdFinalizebodyParticipantAResultsResponse',
                  fields: {
                    IsNoShow: { type: graphql.GraphQLBoolean },
                    DidForfeit: { type: graphql.GraphQLBoolean },
                    FinalScore: { type: graphql.GraphQLFloat }
                  }
                })
              },
              ParticipantBResults: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdFinalizebodyParticipantBResultsResponse',
                  fields: {
                    IsNoShow: { type: graphql.GraphQLBoolean },
                    DidForfeit: { type: graphql.GraphQLBoolean },
                    FinalScore: { type: graphql.GraphQLFloat }
                  }
                })
              },
              ServerSentPlayerSummaryStatistics: {
                type: graphql.GraphQLBoolean
              }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdFinalizeurlParams',
            fields: { TournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdFinalizeResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchByTournamentMatchIdAssistanceRequest: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.PostRequestAssistance',
    method: 'POST',
    url: '/api/Tournament/Match/{TournamentMatchId}/Assistance/Request',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdAssistanceRequestbody',
            fields: { EntityId: { type: graphql.GraphQLInt } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdAssistanceRequesturlParams',
            fields: { TournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdAssistanceRequestResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdAssistanceRequestResponseResponse',
            fields: {
              AssistanceRequestedById: { type: graphql.GraphQLInt },
              TournamentMatchAssistanceId: { type: graphql.GraphQLInt }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchByTournamentMatchIdSnapshotListByroundNumber: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.List',
    method: 'GET',
    url:
      '/api/Tournament/Match/{TournamentMatchId}/Snapshot/List/{roundNumber}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdSnapshotListByroundNumberurlParams',
            fields: {
              roundNumber: { type: graphql.GraphQLInt },
              TournamentMatchId: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdSnapshotListByroundNumberResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdSnapshotListByroundNumberResponseResponse',
            fields: {
              TournamentMatchId: { type: graphql.GraphQLInt },
              RoundNumber: { type: graphql.GraphQLInt },
              Snapshot: { type: graphql.GraphQLString },
              SnapshotDateTime: { type: graphql.GraphQLString }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchByTournamentMatchIdSnapshotList: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.List',
    method: 'GET',
    url: '/api/Tournament/Match/{TournamentMatchId}/Snapshot/List',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdSnapshotListurlParams',
            fields: { TournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdSnapshotListResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdSnapshotListResponseResponse',
              fields: {
                TournamentMatchId: { type: graphql.GraphQLInt },
                RoundNumber: { type: graphql.GraphQLInt },
                Snapshot: { type: graphql.GraphQLString },
                SnapshotDateTime: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchByTournamentMatchIdSnapshotCount: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.Count',
    method: 'GET',
    url: '/api/Tournament/Match/{TournamentMatchId}/Snapshot/Count',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdSnapshotCounturlParams',
            fields: { TournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdSnapshotCountResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchByTournamentMatchIdSnapshotCreate: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.Create',
    method: 'POST',
    url: '/api/Tournament/Match/{TournamentMatchId}/Snapshot/Create',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdSnapshotCreatebody',
            fields: {
              RoundNumber: { type: graphql.GraphQLInt },
              Snapshot: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdSnapshotCreateurlParams',
            fields: { TournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdSnapshotCreateResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchByTournamentMatchIdPlayback: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.SendUrl',
    method: 'POST',
    url: '/api/Tournament/Match/{TournamentMatchId}/Playback',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlaybackbody',
            fields: { PlaybackUrl: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlaybackurlParams',
            fields: { TournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdPlaybackResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchByTournamentMatchIdWorldOfTanksCallback: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.WargamingMatchCallback',
    method: 'POST',
    url: '/api/Tournament/Match/{TournamentMatchId}/WorldOfTanksCallback',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdWorldOfTanksCallbackurlParams',
            fields: { TournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchByTournamentMatchIdWorldOfTanksCallbackResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchLeagueOfLegendsCallback: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.TournamentMatchController.LeagueOfLegendsCallback',
    method: 'POST',
    url: '/api/Tournament/Match/LeagueOfLegendsCallback',
    args: {},
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerTournamentMatchApiTournamentMatchLeagueOfLegendsCallbackResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
