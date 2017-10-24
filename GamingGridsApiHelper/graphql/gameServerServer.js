const graphql = require('graphql')

module.exports = {
  ApiServerHeartbeat: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.ServerController.SendHeartbeat',
    method: 'POST',
    url: 'http://t2w.gameserver.v1.dev6.gaminggrids.com/api/Server/Heartbeat',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'gameServerServerApiServerHeartbeatBody',
            fields: {
              IpAddress: { type: graphql.GraphQLString },
              GamePort: { type: graphql.GraphQLString },
              StreamingPort: { type: graphql.GraphQLString },
              ServerTypeCode: { type: graphql.GraphQLString },
              GamingModeCode: { type: graphql.GraphQLString },
              PlatformShortCode: { type: graphql.GraphQLString },
              GameShortCode: { type: graphql.GraphQLString },
              HostingProviderCode: { type: graphql.GraphQLString },
              GameModVersion: { type: graphql.GraphQLFloat },
              GameServerVersion: { type: graphql.GraphQLString },
              IsServerOutdated: { type: graphql.GraphQLBoolean },
              LanTag: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'gameServerServerApiServerHeartbeatResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiServerGameByGameShortCodePlatformByPlatformShortCodeVersionUpdate: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.ServerController.UpdateGameVersion',
    method: 'POST',
    url:
      'http://t2w.gameserver.v1.dev6.gaminggrids.com/api/Server/game/{GameShortCode}/Platform/{PlatformShortCode}/version/update',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerServerApiServerGameByGameShortCodePlatformByPlatformShortCodeVersionUpdateBody',
            fields: { Version: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerServerApiServerGameByGameShortCodePlatformByPlatformShortCodeVersionUpdateUrlParams',
            fields: {
              GameShortCode: { type: graphql.GraphQLString },
              PlatformShortCode: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerServerApiServerGameByGameShortCodePlatformByPlatformShortCodeVersionUpdateResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiServerHeartbeatStatusByipAddressBygamePort: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.ServerController.HeartbeatStatus',
    method: 'GET',
    url:
      'http://t2w.gameserver.v1.dev6.gaminggrids.com/api/Server/Heartbeat/Status/{ipAddress}/{gamePort}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerServerApiServerHeartbeatStatusByipAddressBygamePortUrlParams',
            fields: {
              ipAddress: { type: graphql.GraphQLString },
              gamePort: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'gameServerServerApiServerHeartbeatStatusByipAddressBygamePortResponse',
      fields: {
        GamingServerId: { type: graphql.GraphQLFloat },
        GameName: { type: graphql.GraphQLString },
        GamingServerAddedDateTime: { type: graphql.GraphQLString },
        GamingServerTypeName: { type: graphql.GraphQLString },
        IsOnline: { type: graphql.GraphQLBoolean },
        GamingServerCityName: { type: graphql.GraphQLString },
        AddressCountry: {
          type: new graphql.GraphQLObjectType({
            name:
              'gameServerServerApiServerHeartbeatStatusByipAddressBygamePortAddressCountryResponse',
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
        GamingServerRegionName: { type: graphql.GraphQLString },
        IpAddress: { type: graphql.GraphQLString },
        GamePort: { type: graphql.GraphQLString },
        LastHeartbeatDateTime: { type: graphql.GraphQLString },
        IsInUsed: { type: graphql.GraphQLBoolean }
      }
    })
  },
  ApiServerByGamingServerIdMatchActive: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.ServerController.AssignedMatch',
    method: 'GET',
    url:
      'http://t2w.gameserver.v1.dev6.gaminggrids.com/api/Server/{GamingServerId}/Match/Active',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerServerApiServerByGamingServerIdMatchActiveUrlParams',
            fields: { GamingServerId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'gameServerServerApiServerByGamingServerIdMatchActiveResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'gameServerServerApiServerByGamingServerIdMatchActiveResponseResponse',
            fields: {
              TournamentMatchStateId: { type: graphql.GraphQLFloat },
              TournamentMatchId: { type: graphql.GraphQLFloat },
              TournamentId: { type: graphql.GraphQLFloat },
              GamePlatformFranchiseTitleId: { type: graphql.GraphQLFloat },
              IsTeamTournament: { type: graphql.GraphQLBoolean },
              MatchIsLive: { type: graphql.GraphQLBoolean },
              MatchLiveDateTime: { type: graphql.GraphQLString },
              MatchIsComplete: { type: graphql.GraphQLBoolean },
              MatchCompleteDateTime: { type: graphql.GraphQLString },
              MatchIsFinalized: { type: graphql.GraphQLBoolean },
              MatchFinalizedDateTime: { type: graphql.GraphQLString },
              EnableMatchLobby: { type: graphql.GraphQLBoolean },
              AllowCheckin: { type: graphql.GraphQLBoolean },
              AllowCheckinDateTime: { type: graphql.GraphQLString },
              ScheduledStartDateTime: { type: graphql.GraphQLString },
              ScheduledForfeitDateTime: { type: graphql.GraphQLString },
              EntityOwnerId: { type: graphql.GraphQLFloat },
              EntityOwnerProfile: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'gameServerServerApiServerByGamingServerIdMatchActiveResponseEntityOwnerProfileResponse',
                  fields: {
                    Nickname: { type: graphql.GraphQLString },
                    LanModeEnabled: { type: graphql.GraphQLBoolean },
                    LanSeatLocation: { type: graphql.GraphQLString },
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
              },
              EntityParticipantA: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'gameServerServerApiServerByGamingServerIdMatchActiveResponseEntityParticipantAResponse',
                  fields: {
                    Id: { type: graphql.GraphQLFloat },
                    IsBye: { type: graphql.GraphQLBoolean },
                    NoShow: { type: graphql.GraphQLBoolean },
                    Forfeit: { type: graphql.GraphQLBoolean },
                    Score: { type: graphql.GraphQLFloat },
                    LiveScore: { type: graphql.GraphQLFloat },
                    TeamSideId: { type: graphql.GraphQLFloat },
                    TeamSideName: { type: graphql.GraphQLString },
                    CountryCode: { type: graphql.GraphQLString },
                    Region: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'gameServerServerApiServerByGamingServerIdMatchActiveResponseEntityParticipantARegionResponse',
                        fields: {
                          GamingServerRegionId: { type: graphql.GraphQLFloat },
                          GamingServerRegionName: {
                            type: graphql.GraphQLString
                          }
                        }
                      })
                    },
                    Profile: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'gameServerServerApiServerByGamingServerIdMatchActiveResponseEntityParticipantAProfileResponse',
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
                          EntityBackgroundImageUrl: {
                            type: graphql.GraphQLString
                          },
                          EntityBackgroundImageUrlIsExternal: {
                            type: graphql.GraphQLBoolean
                          }
                        }
                      })
                    },
                    HearthstoneDecks: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'gameServerServerApiServerByGamingServerIdMatchActiveResponseEntityParticipantAHearthstoneDecksResponse',
                          fields: {
                            PlayerNumber: { type: graphql.GraphQLFloat },
                            IsStartingDeck: { type: graphql.GraphQLBoolean },
                            HearthstoneDeckExcluded: {
                              type: graphql.GraphQLBoolean
                            },
                            GameTitleModeHearthstoneDeckId: {
                              type: graphql.GraphQLFloat
                            },
                            GameTitleModeId: { type: graphql.GraphQLFloat },
                            HearthstoneDeck: { type: graphql.GraphQLString },
                            HearthstoneDeckImage: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'gameServerServerApiServerByGamingServerIdMatchActiveResponseEntityParticipantAHearthstoneDecksHearthstoneDeckImageResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            IsActive: { type: graphql.GraphQLBoolean }
                          }
                        })
                      )
                    }
                  }
                })
              },
              EntityParticipantB: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'gameServerServerApiServerByGamingServerIdMatchActiveResponseEntityParticipantBResponse',
                  fields: {
                    Id: { type: graphql.GraphQLFloat },
                    IsBye: { type: graphql.GraphQLBoolean },
                    NoShow: { type: graphql.GraphQLBoolean },
                    Forfeit: { type: graphql.GraphQLBoolean },
                    Score: { type: graphql.GraphQLFloat },
                    LiveScore: { type: graphql.GraphQLFloat },
                    TeamSideId: { type: graphql.GraphQLFloat },
                    TeamSideName: { type: graphql.GraphQLString },
                    CountryCode: { type: graphql.GraphQLString },
                    Region: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'gameServerServerApiServerByGamingServerIdMatchActiveResponseEntityParticipantBRegionResponse',
                        fields: {
                          GamingServerRegionId: { type: graphql.GraphQLFloat },
                          GamingServerRegionName: {
                            type: graphql.GraphQLString
                          }
                        }
                      })
                    },
                    Profile: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'gameServerServerApiServerByGamingServerIdMatchActiveResponseEntityParticipantBProfileResponse',
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
                          EntityBackgroundImageUrl: {
                            type: graphql.GraphQLString
                          },
                          EntityBackgroundImageUrlIsExternal: {
                            type: graphql.GraphQLBoolean
                          }
                        }
                      })
                    },
                    HearthstoneDecks: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'gameServerServerApiServerByGamingServerIdMatchActiveResponseEntityParticipantBHearthstoneDecksResponse',
                          fields: {
                            PlayerNumber: { type: graphql.GraphQLFloat },
                            IsStartingDeck: { type: graphql.GraphQLBoolean },
                            HearthstoneDeckExcluded: {
                              type: graphql.GraphQLBoolean
                            },
                            GameTitleModeHearthstoneDeckId: {
                              type: graphql.GraphQLFloat
                            },
                            GameTitleModeId: { type: graphql.GraphQLFloat },
                            HearthstoneDeck: { type: graphql.GraphQLString },
                            HearthstoneDeckImage: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'gameServerServerApiServerByGamingServerIdMatchActiveResponseEntityParticipantBHearthstoneDecksHearthstoneDeckImageResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            IsActive: { type: graphql.GraphQLBoolean }
                          }
                        })
                      )
                    }
                  }
                })
              },
              RoundNumber: { type: graphql.GraphQLFloat },
              RoundLevelTypeId: { type: graphql.GraphQLFloat },
              MatchNumber: { type: graphql.GraphQLFloat },
              NumberOfMaps: { type: graphql.GraphQLFloat },
              MapNumber: { type: graphql.GraphQLFloat },
              CurrentGameTitleModeMapId: { type: graphql.GraphQLFloat },
              MapFileName: { type: graphql.GraphQLString },
              MapDisplayName: { type: graphql.GraphQLString },
              GamingServerRegionId: { type: graphql.GraphQLFloat },
              GamingServerRegionName: { type: graphql.GraphQLString },
              IsBracket: { type: graphql.GraphQLBoolean },
              AllowRescheduling: { type: graphql.GraphQLBoolean },
              WillBroadcast: { type: graphql.GraphQLBoolean },
              BroadcastUrl: { type: graphql.GraphQLString },
              AutomaticGoLiveOnSchedule: { type: graphql.GraphQLBoolean },
              MinutesAfterStartToForfeit: { type: graphql.GraphQLFloat },
              MinutesBeforeStartToAllowCheckin: { type: graphql.GraphQLFloat },
              ServerSendPlayerSummaryStatistics: {
                type: graphql.GraphQLBoolean
              },
              GamingServerId: { type: graphql.GraphQLFloat },
              EntityPlayerControllerId: { type: graphql.GraphQLFloat },
              AllTeamAPlayersReady: { type: graphql.GraphQLBoolean },
              TeamAIsReady: { type: graphql.GraphQLBoolean },
              AllTeamBPlayersReady: { type: graphql.GraphQLBoolean },
              TeamBIsReady: { type: graphql.GraphQLBoolean },
              ScoreManuallyReportedDateTime: { type: graphql.GraphQLString },
              ScoreManuallyReported: { type: graphql.GraphQLBoolean },
              ScoreManuallyReportedByPlayerId: { type: graphql.GraphQLFloat },
              ScoreManuallyReportedByTeamA: { type: graphql.GraphQLBoolean },
              ScoreManuallyApplyToEntireRound: { type: graphql.GraphQLBoolean },
              MapsPlayed: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'gameServerServerApiServerByGamingServerIdMatchActiveResponseMapsPlayedResponse',
                    fields: {
                      TournamentMatchId: { type: graphql.GraphQLFloat },
                      MapNumber: { type: graphql.GraphQLFloat },
                      GameTitleModeMapId: { type: graphql.GraphQLFloat },
                      MapStartDateTime: { type: graphql.GraphQLString },
                      MapEndDateTime: { type: graphql.GraphQLString },
                      EntityParticipantAScore: { type: graphql.GraphQLFloat },
                      EntityParticipantBScore: { type: graphql.GraphQLFloat },
                      Map: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'gameServerServerApiServerByGamingServerIdMatchActiveResponseMapsPlayedMapResponse',
                          fields: {
                            GameTitleModeMapId: { type: graphql.GraphQLFloat },
                            GameTitleModeId: { type: graphql.GraphQLFloat },
                            MapFileName: { type: graphql.GraphQLString },
                            MapDisplayName: { type: graphql.GraphQLString },
                            IsActive: { type: graphql.GraphQLBoolean }
                          }
                        })
                      }
                    }
                  })
                )
              },
              Dispute: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'gameServerServerApiServerByGamingServerIdMatchActiveResponseDisputeResponse',
                  fields: {
                    TournamentMatchDisputeId: { type: graphql.GraphQLFloat },
                    TournamentMatchId: { type: graphql.GraphQLFloat },
                    DisputeState: { type: graphql.GraphQLFloat },
                    InitiatedByPlayerId: { type: graphql.GraphQLFloat },
                    InitiatedByPlayerProfile: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'gameServerServerApiServerByGamingServerIdMatchActiveResponseDisputeInitiatedByPlayerProfileResponse',
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
                          EntityBackgroundImageUrl: {
                            type: graphql.GraphQLString
                          },
                          EntityBackgroundImageUrlIsExternal: {
                            type: graphql.GraphQLBoolean
                          }
                        }
                      })
                    },
                    InitiatorOnTeamA: { type: graphql.GraphQLBoolean },
                    TeamAScore: { type: graphql.GraphQLFloat },
                    TeamBScore: { type: graphql.GraphQLFloat },
                    ImageUrl: { type: graphql.GraphQLString },
                    DisputeDateTime: { type: graphql.GraphQLString },
                    EntityAdministratorId: { type: graphql.GraphQLFloat },
                    ResolutionDateTime: { type: graphql.GraphQLString },
                    ResolutionTeamAScore: { type: graphql.GraphQLFloat },
                    ResolutionTeamBScore: { type: graphql.GraphQLFloat }
                  }
                })
              },
              MyMatch: { type: graphql.GraphQLBoolean },
              NewServerRequested: { type: graphql.GraphQLBoolean },
              NewServerRequestedEntityId: { type: graphql.GraphQLFloat },
              NewServerRequestedByTeamA: { type: graphql.GraphQLBoolean },
              NewServerRequestedCount: { type: graphql.GraphQLFloat },
              NeedsAssistance: { type: graphql.GraphQLBoolean },
              AllowedSpectators: { type: graphql.GraphQLString },
              StreamingServiceId: { type: graphql.GraphQLFloat },
              ManualMode: { type: graphql.GraphQLBoolean },
              ManualServerConnectionInfo: { type: graphql.GraphQLString },
              StreamingService: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'gameServerServerApiServerByGamingServerIdMatchActiveResponseStreamingServiceResponse',
                  fields: {
                    StreamingServiceId: { type: graphql.GraphQLFloat },
                    StreamingService: { type: graphql.GraphQLString },
                    SourceName: { type: graphql.GraphQLString }
                  }
                })
              },
              AssistanceRequests: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'gameServerServerApiServerByGamingServerIdMatchActiveResponseAssistanceRequestsResponse',
                    fields: {
                      TournamentMatchAssistanceId: {
                        type: graphql.GraphQLFloat
                      },
                      TournamentMatchId: { type: graphql.GraphQLFloat },
                      AssistanceRequestedById: { type: graphql.GraphQLFloat },
                      AssistanceRequestedDateTime: {
                        type: graphql.GraphQLString
                      },
                      ResolvedById: { type: graphql.GraphQLFloat },
                      ResolutionDateTime: { type: graphql.GraphQLString },
                      ResolutionComments: { type: graphql.GraphQLString }
                    }
                  })
                )
              },
              LastUpdatedDateTime: { type: graphql.GraphQLString },
              ServerConfigurationFileName: { type: graphql.GraphQLString },
              MatchAdministratorId: { type: graphql.GraphQLFloat },
              ActionLog: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'gameServerServerApiServerByGamingServerIdMatchActiveResponseActionLogResponse',
                    fields: {
                      TournamentMatchActionLogId: {
                        type: graphql.GraphQLFloat
                      },
                      EntityId: { type: graphql.GraphQLFloat },
                      EntityProfile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'gameServerServerApiServerByGamingServerIdMatchActiveResponseActionLogEntityProfileResponse',
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
                            EntityBackgroundImageUrl: {
                              type: graphql.GraphQLString
                            },
                            EntityBackgroundImageUrlIsExternal: {
                              type: graphql.GraphQLBoolean
                            }
                          }
                        })
                      },
                      TournamentMatchId: { type: graphql.GraphQLFloat },
                      ActionLogTypeId: { type: graphql.GraphQLFloat },
                      ActionLogType: { type: graphql.GraphQLString },
                      AdministratorComment: { type: graphql.GraphQLString },
                      ActionLogDateTime: { type: graphql.GraphQLString }
                    }
                  })
                )
              },
              Playback: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'gameServerServerApiServerByGamingServerIdMatchActiveResponsePlaybackResponse',
                    fields: {
                      TournamentMatchPlaybackId: { type: graphql.GraphQLFloat },
                      TournamentMatchId: { type: graphql.GraphQLFloat },
                      TournamentMatchPlayback: { type: graphql.GraphQLString },
                      TournamentMatchPlaybackDateTime: {
                        type: graphql.GraphQLString
                      }
                    }
                  })
                )
              },
              QualifierGroupNumber: { type: graphql.GraphQLFloat },
              IsQualifier: { type: graphql.GraphQLBoolean },
              HasTieBreaker: { type: graphql.GraphQLBoolean },
              TieBreakerCount: { type: graphql.GraphQLFloat },
              ScoringImage: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'gameServerServerApiServerByGamingServerIdMatchActiveResponseScoringImageResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiServerIsOnlineByipAddressBygamePort: {
    fullName:
      'GamingGrids.Api.GameServer.v1.Controllers.ServerController.IsServerOnline',
    method: 'GET',
    url:
      'http://t2w.gameserver.v1.dev6.gaminggrids.com/api/Server/IsOnline/{ipAddress}/{gamePort}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'gameServerServerApiServerIsOnlineByipAddressBygamePortUrlParams',
            fields: {
              ipAddress: { type: graphql.GraphQLString },
              gamePort: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: graphql.GraphQLBoolean
  }
}
