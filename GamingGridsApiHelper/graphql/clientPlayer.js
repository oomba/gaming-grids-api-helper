const graphql = require('graphql')

module.exports = {
  ApiPlayerMyProfileSteam: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.GetMySteamLogin',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/my/Profile/Steam',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyProfileSteamResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientPlayerApiPlayerMyProfileSteamResponseResponse',
            fields: {
              SteamAccountId: { type: graphql.GraphQLFloat },
              TournamentId: { type: graphql.GraphQLFloat },
              EntityPlayerId: { type: graphql.GraphQLFloat },
              SteamUserName: { type: graphql.GraphQLString },
              SteamPassword: { type: graphql.GraphQLString },
              SteamId32: { type: graphql.GraphQLString },
              SteamId64: { type: graphql.GraphQLString }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyProfileSkrill: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.ValidateSkrill',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/my/Profile/Skrill',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyProfileSkrillResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyProfileSkrill2: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.GetIsSkrillValidated',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/my/Profile/Skrill',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyProfileSkrill2Response',
      fields: {
        Response: { type: graphql.GraphQLBoolean },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyProfileCash: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.GetPlayerCanUseCash',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/my/Profile/Cash',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyProfileCashResponse',
      fields: {
        Response: { type: graphql.GraphQLBoolean },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyProfileLanMode: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.UpdateMyLanMode',
    method: 'PUT',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/my/Profile/LanMode',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientPlayerApiPlayerMyProfileLanModeBody',
            fields: {
              LanModeEnabled: { type: graphql.GraphQLBoolean },
              LanSeatLocation: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyProfileLanModeResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyGames: {
    fullName: 'GamingGrids.Api.Client.v2.Controllers.PlayerController.MyGames',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/My/Games',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyGamesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientPlayerApiPlayerMyGamesResponseResponse',
              fields: {
                IsValid: { type: graphql.GraphQLBoolean },
                Platforms: {
                  type: new graphql.GraphQLList(
                    new graphql.GraphQLObjectType({
                      name:
                        'clientPlayerApiPlayerMyGamesResponsePlatformsResponse',
                      fields: {
                        MyGame: { type: graphql.GraphQLBoolean },
                        IsConfirmed: { type: graphql.GraphQLBoolean },
                        Nickname: { type: graphql.GraphQLString },
                        IsDisconnected: { type: graphql.GraphQLBoolean },
                        PowerRankingScore: { type: graphql.GraphQLFloat },
                        PowerRankingLevelNumber: { type: graphql.GraphQLFloat },
                        PowerRankingDivision: {
                          type: new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerMyGamesResponsePlatformsPowerRankingDivisionResponse',
                            fields: {
                              PowerRankingDivisionId: {
                                type: graphql.GraphQLFloat
                              },
                              PowerRankingDivision: {
                                type: graphql.GraphQLString
                              },
                              TopPoints: { type: graphql.GraphQLFloat },
                              BottomPoints: { type: graphql.GraphQLFloat },
                              NumberOfLevels: { type: graphql.GraphQLFloat },
                              PowerRankingLevels: {
                                type: new graphql.GraphQLList(
                                  new graphql.GraphQLObjectType({
                                    name:
                                      'clientPlayerApiPlayerMyGamesResponsePlatformsPowerRankingDivisionPowerRankingLevelsResponse',
                                    fields: {
                                      PowerRankingLevelNumber: {
                                        type: graphql.GraphQLFloat
                                      },
                                      TopPoints: { type: graphql.GraphQLFloat },
                                      BottomPoints: {
                                        type: graphql.GraphQLFloat
                                      }
                                    }
                                  })
                                )
                              },
                              PowerRankingImageLogo: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyGamesResponsePlatformsPowerRankingDivisionPowerRankingImageLogoResponse',
                                  fields: {
                                    UrlPath: { type: graphql.GraphQLString },
                                    RelativePath: {
                                      type: graphql.GraphQLString
                                    }
                                  }
                                })
                              }
                            }
                          })
                        },
                        Matches: {
                          type: new graphql.GraphQLList(
                            new graphql.GraphQLObjectType({
                              name:
                                'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesResponse',
                              fields: {
                                TournamentTitle: {
                                  type: graphql.GraphQLString
                                },
                                TournamentTypeName: {
                                  type: graphql.GraphQLString
                                },
                                GameShortCode: { type: graphql.GraphQLString },
                                ImageLogo: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesImageLogoResponse',
                                    fields: {
                                      UrlPath: { type: graphql.GraphQLString },
                                      RelativePath: {
                                        type: graphql.GraphQLString
                                      }
                                    }
                                  })
                                },
                                GameName: { type: graphql.GraphQLString },
                                TeamSize: { type: graphql.GraphQLFloat },
                                TournamentMatchStateId: {
                                  type: graphql.GraphQLFloat
                                },
                                TournamentMatchId: {
                                  type: graphql.GraphQLFloat
                                },
                                TournamentId: { type: graphql.GraphQLFloat },
                                GamePlatformFranchiseTitleId: {
                                  type: graphql.GraphQLFloat
                                },
                                IsTeamTournament: {
                                  type: graphql.GraphQLBoolean
                                },
                                MatchIsLive: { type: graphql.GraphQLBoolean },
                                MatchLiveDateTime: {
                                  type: graphql.GraphQLString
                                },
                                MatchIsComplete: {
                                  type: graphql.GraphQLBoolean
                                },
                                MatchCompleteDateTime: {
                                  type: graphql.GraphQLString
                                },
                                MatchIsFinalized: {
                                  type: graphql.GraphQLBoolean
                                },
                                MatchFinalizedDateTime: {
                                  type: graphql.GraphQLString
                                },
                                EnableMatchLobby: {
                                  type: graphql.GraphQLBoolean
                                },
                                AllowCheckin: { type: graphql.GraphQLBoolean },
                                AllowCheckinDateTime: {
                                  type: graphql.GraphQLString
                                },
                                ScheduledStartDateTime: {
                                  type: graphql.GraphQLString
                                },
                                ScheduledForfeitDateTime: {
                                  type: graphql.GraphQLString
                                },
                                EntityOwnerId: { type: graphql.GraphQLFloat },
                                EntityOwnerProfile: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesEntityOwnerProfileResponse',
                                    fields: {
                                      Nickname: { type: graphql.GraphQLString },
                                      LanModeEnabled: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      LanSeatLocation: {
                                        type: graphql.GraphQLString
                                      },
                                      EntityName: {
                                        type: graphql.GraphQLString
                                      },
                                      EntityIsTeam: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      DisplayName: {
                                        type: graphql.GraphQLString
                                      },
                                      EntityImageUrl: {
                                        type: graphql.GraphQLString
                                      },
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
                                EntityParticipantA: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesEntityParticipantAResponse',
                                    fields: {
                                      Id: { type: graphql.GraphQLFloat },
                                      IsBye: { type: graphql.GraphQLBoolean },
                                      NoShow: { type: graphql.GraphQLBoolean },
                                      Forfeit: { type: graphql.GraphQLBoolean },
                                      Score: { type: graphql.GraphQLFloat },
                                      LiveScore: { type: graphql.GraphQLFloat },
                                      TeamSideId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      TeamSideName: {
                                        type: graphql.GraphQLString
                                      },
                                      CountryCode: {
                                        type: graphql.GraphQLString
                                      },
                                      Region: {
                                        type: new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesEntityParticipantARegionResponse',
                                          fields: {
                                            GamingServerRegionId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            GamingServerRegionName: {
                                              type: graphql.GraphQLString
                                            }
                                          }
                                        })
                                      },
                                      Profile: {
                                        type: new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesEntityParticipantAProfileResponse',
                                          fields: {
                                            Nickname: {
                                              type: graphql.GraphQLString
                                            },
                                            LanModeEnabled: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            LanSeatLocation: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityName: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityIsTeam: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            DisplayName: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityImageUrl: {
                                              type: graphql.GraphQLString
                                            },
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
                                              'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesEntityParticipantAHearthstoneDecksResponse',
                                            fields: {
                                              PlayerNumber: {
                                                type: graphql.GraphQLFloat
                                              },
                                              IsStartingDeck: {
                                                type: graphql.GraphQLBoolean
                                              },
                                              HearthstoneDeckExcluded: {
                                                type: graphql.GraphQLBoolean
                                              },
                                              GameTitleModeHearthstoneDeckId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              GameTitleModeId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              HearthstoneDeck: {
                                                type: graphql.GraphQLString
                                              },
                                              HearthstoneDeckImage: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesEntityParticipantAHearthstoneDecksHearthstoneDeckImageResponse',
                                                    fields: {
                                                      UrlPath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      RelativePath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              IsActive: {
                                                type: graphql.GraphQLBoolean
                                              }
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
                                      'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesEntityParticipantBResponse',
                                    fields: {
                                      Id: { type: graphql.GraphQLFloat },
                                      IsBye: { type: graphql.GraphQLBoolean },
                                      NoShow: { type: graphql.GraphQLBoolean },
                                      Forfeit: { type: graphql.GraphQLBoolean },
                                      Score: { type: graphql.GraphQLFloat },
                                      LiveScore: { type: graphql.GraphQLFloat },
                                      TeamSideId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      TeamSideName: {
                                        type: graphql.GraphQLString
                                      },
                                      CountryCode: {
                                        type: graphql.GraphQLString
                                      },
                                      Region: {
                                        type: new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesEntityParticipantBRegionResponse',
                                          fields: {
                                            GamingServerRegionId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            GamingServerRegionName: {
                                              type: graphql.GraphQLString
                                            }
                                          }
                                        })
                                      },
                                      Profile: {
                                        type: new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesEntityParticipantBProfileResponse',
                                          fields: {
                                            Nickname: {
                                              type: graphql.GraphQLString
                                            },
                                            LanModeEnabled: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            LanSeatLocation: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityName: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityIsTeam: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            DisplayName: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityImageUrl: {
                                              type: graphql.GraphQLString
                                            },
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
                                              'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesEntityParticipantBHearthstoneDecksResponse',
                                            fields: {
                                              PlayerNumber: {
                                                type: graphql.GraphQLFloat
                                              },
                                              IsStartingDeck: {
                                                type: graphql.GraphQLBoolean
                                              },
                                              HearthstoneDeckExcluded: {
                                                type: graphql.GraphQLBoolean
                                              },
                                              GameTitleModeHearthstoneDeckId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              GameTitleModeId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              HearthstoneDeck: {
                                                type: graphql.GraphQLString
                                              },
                                              HearthstoneDeckImage: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesEntityParticipantBHearthstoneDecksHearthstoneDeckImageResponse',
                                                    fields: {
                                                      UrlPath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      RelativePath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              IsActive: {
                                                type: graphql.GraphQLBoolean
                                              }
                                            }
                                          })
                                        )
                                      }
                                    }
                                  })
                                },
                                RoundNumber: { type: graphql.GraphQLFloat },
                                RoundLevelTypeId: {
                                  type: graphql.GraphQLFloat
                                },
                                MatchNumber: { type: graphql.GraphQLFloat },
                                NumberOfMaps: { type: graphql.GraphQLFloat },
                                MapNumber: { type: graphql.GraphQLFloat },
                                CurrentGameTitleModeMapId: {
                                  type: graphql.GraphQLFloat
                                },
                                MapFileName: { type: graphql.GraphQLString },
                                MapDisplayName: { type: graphql.GraphQLString },
                                GamingServerRegionId: {
                                  type: graphql.GraphQLFloat
                                },
                                GamingServerRegionName: {
                                  type: graphql.GraphQLString
                                },
                                IsBracket: { type: graphql.GraphQLBoolean },
                                AllowRescheduling: {
                                  type: graphql.GraphQLBoolean
                                },
                                WillBroadcast: { type: graphql.GraphQLBoolean },
                                BroadcastUrl: { type: graphql.GraphQLString },
                                AutomaticGoLiveOnSchedule: {
                                  type: graphql.GraphQLBoolean
                                },
                                MinutesAfterStartToForfeit: {
                                  type: graphql.GraphQLFloat
                                },
                                MinutesBeforeStartToAllowCheckin: {
                                  type: graphql.GraphQLFloat
                                },
                                ServerSendPlayerSummaryStatistics: {
                                  type: graphql.GraphQLBoolean
                                },
                                GamingServerId: { type: graphql.GraphQLFloat },
                                EntityPlayerControllerId: {
                                  type: graphql.GraphQLFloat
                                },
                                AllTeamAPlayersReady: {
                                  type: graphql.GraphQLBoolean
                                },
                                TeamAIsReady: { type: graphql.GraphQLBoolean },
                                AllTeamBPlayersReady: {
                                  type: graphql.GraphQLBoolean
                                },
                                TeamBIsReady: { type: graphql.GraphQLBoolean },
                                ScoreManuallyReportedDateTime: {
                                  type: graphql.GraphQLString
                                },
                                ScoreManuallyReported: {
                                  type: graphql.GraphQLBoolean
                                },
                                ScoreManuallyReportedByPlayerId: {
                                  type: graphql.GraphQLFloat
                                },
                                ScoreManuallyReportedByTeamA: {
                                  type: graphql.GraphQLBoolean
                                },
                                ScoreManuallyApplyToEntireRound: {
                                  type: graphql.GraphQLBoolean
                                },
                                MapsPlayed: {
                                  type: new graphql.GraphQLList(
                                    new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesMapsPlayedResponse',
                                      fields: {
                                        TournamentMatchId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        MapNumber: {
                                          type: graphql.GraphQLFloat
                                        },
                                        GameTitleModeMapId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        MapStartDateTime: {
                                          type: graphql.GraphQLString
                                        },
                                        MapEndDateTime: {
                                          type: graphql.GraphQLString
                                        },
                                        EntityParticipantAScore: {
                                          type: graphql.GraphQLFloat
                                        },
                                        EntityParticipantBScore: {
                                          type: graphql.GraphQLFloat
                                        },
                                        Map: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesMapsPlayedMapResponse',
                                            fields: {
                                              GameTitleModeMapId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              GameTitleModeId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              MapFileName: {
                                                type: graphql.GraphQLString
                                              },
                                              MapDisplayName: {
                                                type: graphql.GraphQLString
                                              },
                                              IsActive: {
                                                type: graphql.GraphQLBoolean
                                              }
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
                                      'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesDisputeResponse',
                                    fields: {
                                      TournamentMatchDisputeId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      TournamentMatchId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      DisputeState: {
                                        type: graphql.GraphQLFloat
                                      },
                                      InitiatedByPlayerId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      InitiatedByPlayerProfile: {
                                        type: new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesDisputeInitiatedByPlayerProfileResponse',
                                          fields: {
                                            Nickname: {
                                              type: graphql.GraphQLString
                                            },
                                            LanModeEnabled: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            LanSeatLocation: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityName: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityIsTeam: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            DisplayName: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityImageUrl: {
                                              type: graphql.GraphQLString
                                            },
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
                                      InitiatorOnTeamA: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      TeamAScore: {
                                        type: graphql.GraphQLFloat
                                      },
                                      TeamBScore: {
                                        type: graphql.GraphQLFloat
                                      },
                                      ImageUrl: { type: graphql.GraphQLString },
                                      DisputeDateTime: {
                                        type: graphql.GraphQLString
                                      },
                                      EntityAdministratorId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      ResolutionDateTime: {
                                        type: graphql.GraphQLString
                                      },
                                      ResolutionTeamAScore: {
                                        type: graphql.GraphQLFloat
                                      },
                                      ResolutionTeamBScore: {
                                        type: graphql.GraphQLFloat
                                      }
                                    }
                                  })
                                },
                                MyMatch: { type: graphql.GraphQLBoolean },
                                NewServerRequested: {
                                  type: graphql.GraphQLBoolean
                                },
                                NewServerRequestedEntityId: {
                                  type: graphql.GraphQLFloat
                                },
                                NewServerRequestedByTeamA: {
                                  type: graphql.GraphQLBoolean
                                },
                                NewServerRequestedCount: {
                                  type: graphql.GraphQLFloat
                                },
                                NeedsAssistance: {
                                  type: graphql.GraphQLBoolean
                                },
                                AllowedSpectators: {
                                  type: graphql.GraphQLString
                                },
                                StreamingServiceId: {
                                  type: graphql.GraphQLFloat
                                },
                                ManualMode: { type: graphql.GraphQLBoolean },
                                ManualServerConnectionInfo: {
                                  type: graphql.GraphQLString
                                },
                                StreamingService: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesStreamingServiceResponse',
                                    fields: {
                                      StreamingServiceId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      StreamingService: {
                                        type: graphql.GraphQLString
                                      },
                                      SourceName: {
                                        type: graphql.GraphQLString
                                      }
                                    }
                                  })
                                },
                                AssistanceRequests: {
                                  type: new graphql.GraphQLList(
                                    new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesAssistanceRequestsResponse',
                                      fields: {
                                        TournamentMatchAssistanceId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        TournamentMatchId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        AssistanceRequestedById: {
                                          type: graphql.GraphQLFloat
                                        },
                                        AssistanceRequestedDateTime: {
                                          type: graphql.GraphQLString
                                        },
                                        ResolvedById: {
                                          type: graphql.GraphQLFloat
                                        },
                                        ResolutionDateTime: {
                                          type: graphql.GraphQLString
                                        },
                                        ResolutionComments: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  )
                                },
                                LastUpdatedDateTime: {
                                  type: graphql.GraphQLString
                                },
                                ServerConfigurationFileName: {
                                  type: graphql.GraphQLString
                                },
                                MatchAdministratorId: {
                                  type: graphql.GraphQLFloat
                                },
                                ActionLog: {
                                  type: new graphql.GraphQLList(
                                    new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesActionLogResponse',
                                      fields: {
                                        TournamentMatchActionLogId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        EntityId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        EntityProfile: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesActionLogEntityProfileResponse',
                                            fields: {
                                              Nickname: {
                                                type: graphql.GraphQLString
                                              },
                                              LanModeEnabled: {
                                                type: graphql.GraphQLBoolean
                                              },
                                              LanSeatLocation: {
                                                type: graphql.GraphQLString
                                              },
                                              EntityName: {
                                                type: graphql.GraphQLString
                                              },
                                              EntityIsTeam: {
                                                type: graphql.GraphQLBoolean
                                              },
                                              DisplayName: {
                                                type: graphql.GraphQLString
                                              },
                                              EntityImageUrl: {
                                                type: graphql.GraphQLString
                                              },
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
                                        TournamentMatchId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        ActionLogTypeId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        ActionLogType: {
                                          type: graphql.GraphQLString
                                        },
                                        AdministratorComment: {
                                          type: graphql.GraphQLString
                                        },
                                        ActionLogDateTime: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  )
                                },
                                Playback: {
                                  type: new graphql.GraphQLList(
                                    new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesPlaybackResponse',
                                      fields: {
                                        TournamentMatchPlaybackId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        TournamentMatchId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        TournamentMatchPlayback: {
                                          type: graphql.GraphQLString
                                        },
                                        TournamentMatchPlaybackDateTime: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  )
                                },
                                QualifierGroupNumber: {
                                  type: graphql.GraphQLFloat
                                },
                                IsQualifier: { type: graphql.GraphQLBoolean },
                                HasTieBreaker: { type: graphql.GraphQLBoolean },
                                TieBreakerCount: { type: graphql.GraphQLFloat },
                                ScoringImage: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'clientPlayerApiPlayerMyGamesResponsePlatformsMatchesScoringImageResponse',
                                    fields: {
                                      UrlPath: { type: graphql.GraphQLString },
                                      RelativePath: {
                                        type: graphql.GraphQLString
                                      }
                                    }
                                  })
                                }
                              }
                            })
                          )
                        },
                        Statistics: {
                          type: new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerMyGamesResponsePlatformsStatisticsResponse',
                            fields: {
                              MatchPlayStatisticsId: {
                                type: graphql.GraphQLFloat
                              },
                              EntityId: { type: graphql.GraphQLFloat },
                              MatchesPlayedCount: {
                                type: graphql.GraphQLFloat
                              },
                              WonCount: { type: graphql.GraphQLFloat },
                              LostCount: { type: graphql.GraphQLFloat },
                              TieCount: { type: graphql.GraphQLFloat },
                              ForfeitedWonCount: { type: graphql.GraphQLFloat },
                              ForfeitedLostCount: {
                                type: graphql.GraphQLFloat
                              },
                              NoShowCount: { type: graphql.GraphQLFloat },
                              TotalWinnings: { type: graphql.GraphQLFloat },
                              TotalScore: { type: graphql.GraphQLFloat },
                              TotalTimePlayedInSeconds: {
                                type: graphql.GraphQLFloat
                              },
                              WinStreak: { type: graphql.GraphQLFloat },
                              LossStreak: { type: graphql.GraphQLFloat }
                            }
                          })
                        },
                        GamePlatformId: { type: graphql.GraphQLFloat },
                        GamePlatformCode: { type: graphql.GraphQLString },
                        GamePlatform: { type: graphql.GraphQLString },
                        ImageSmall: {
                          type: new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerMyGamesResponsePlatformsImageSmallResponse',
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
                },
                GameTitleId: { type: graphql.GraphQLFloat },
                GameName: { type: graphql.GraphQLString },
                GameShortCode: { type: graphql.GraphQLString },
                GameDescription: { type: graphql.GraphQLString },
                GameWebsite: { type: graphql.GraphQLString },
                ImageLarge: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerMyGamesResponseImageLargeResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                ImageSmall: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerMyGamesResponseImageSmallResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                ImageBackground: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerMyGamesResponseImageBackgroundResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                MaximumPlayersAllowed: { type: graphql.GraphQLFloat },
                MinimumMinutesBetweenTournamentRounds: {
                  type: graphql.GraphQLFloat
                },
                Franchise: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerMyGamesResponseFranchiseResponse',
                    fields: {
                      GameFranchiseId: { type: graphql.GraphQLFloat },
                      GameFranchise: { type: graphql.GraphQLString },
                      ImageLarge: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyGamesResponseFranchiseImageLargeResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyGamesResponseFranchiseImageSmallResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyGamesResponseFranchiseImageBackgroundResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      IsActive: { type: graphql.GraphQLBoolean }
                    }
                  })
                },
                Developer: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerMyGamesResponseDeveloperResponse',
                    fields: {
                      GameDeveloperId: { type: graphql.GraphQLFloat },
                      GameDeveloper: { type: graphql.GraphQLString },
                      Website: { type: graphql.GraphQLString },
                      IsActive: { type: graphql.GraphQLBoolean }
                    }
                  })
                },
                HasTeamSides: { type: graphql.GraphQLBoolean },
                IsHearthstone: { type: graphql.GraphQLBoolean },
                HearthstoneManageDecks: { type: graphql.GraphQLBoolean },
                IsActive: { type: graphql.GraphQLBoolean }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyTopGame: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.MyTopGame',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/My/TopGame',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyTopGameResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientPlayerApiPlayerMyTopGameResponseResponse',
            fields: {
              IsValid: { type: graphql.GraphQLBoolean },
              Platforms: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerMyTopGameResponsePlatformsResponse',
                    fields: {
                      MyGame: { type: graphql.GraphQLBoolean },
                      IsConfirmed: { type: graphql.GraphQLBoolean },
                      Nickname: { type: graphql.GraphQLString },
                      IsDisconnected: { type: graphql.GraphQLBoolean },
                      PowerRankingScore: { type: graphql.GraphQLFloat },
                      PowerRankingLevelNumber: { type: graphql.GraphQLFloat },
                      PowerRankingDivision: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyTopGameResponsePlatformsPowerRankingDivisionResponse',
                          fields: {
                            PowerRankingDivisionId: {
                              type: graphql.GraphQLFloat
                            },
                            PowerRankingDivision: {
                              type: graphql.GraphQLString
                            },
                            TopPoints: { type: graphql.GraphQLFloat },
                            BottomPoints: { type: graphql.GraphQLFloat },
                            NumberOfLevels: { type: graphql.GraphQLFloat },
                            PowerRankingLevels: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyTopGameResponsePlatformsPowerRankingDivisionPowerRankingLevelsResponse',
                                  fields: {
                                    PowerRankingLevelNumber: {
                                      type: graphql.GraphQLFloat
                                    },
                                    TopPoints: { type: graphql.GraphQLFloat },
                                    BottomPoints: { type: graphql.GraphQLFloat }
                                  }
                                })
                              )
                            },
                            PowerRankingImageLogo: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerMyTopGameResponsePlatformsPowerRankingDivisionPowerRankingImageLogoResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            }
                          }
                        })
                      },
                      Matches: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesResponse',
                            fields: {
                              TournamentTitle: { type: graphql.GraphQLString },
                              TournamentTypeName: {
                                type: graphql.GraphQLString
                              },
                              GameShortCode: { type: graphql.GraphQLString },
                              ImageLogo: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesImageLogoResponse',
                                  fields: {
                                    UrlPath: { type: graphql.GraphQLString },
                                    RelativePath: {
                                      type: graphql.GraphQLString
                                    }
                                  }
                                })
                              },
                              GameName: { type: graphql.GraphQLString },
                              TeamSize: { type: graphql.GraphQLFloat },
                              TournamentMatchStateId: {
                                type: graphql.GraphQLFloat
                              },
                              TournamentMatchId: { type: graphql.GraphQLFloat },
                              TournamentId: { type: graphql.GraphQLFloat },
                              GamePlatformFranchiseTitleId: {
                                type: graphql.GraphQLFloat
                              },
                              IsTeamTournament: {
                                type: graphql.GraphQLBoolean
                              },
                              MatchIsLive: { type: graphql.GraphQLBoolean },
                              MatchLiveDateTime: {
                                type: graphql.GraphQLString
                              },
                              MatchIsComplete: { type: graphql.GraphQLBoolean },
                              MatchCompleteDateTime: {
                                type: graphql.GraphQLString
                              },
                              MatchIsFinalized: {
                                type: graphql.GraphQLBoolean
                              },
                              MatchFinalizedDateTime: {
                                type: graphql.GraphQLString
                              },
                              EnableMatchLobby: {
                                type: graphql.GraphQLBoolean
                              },
                              AllowCheckin: { type: graphql.GraphQLBoolean },
                              AllowCheckinDateTime: {
                                type: graphql.GraphQLString
                              },
                              ScheduledStartDateTime: {
                                type: graphql.GraphQLString
                              },
                              ScheduledForfeitDateTime: {
                                type: graphql.GraphQLString
                              },
                              EntityOwnerId: { type: graphql.GraphQLFloat },
                              EntityOwnerProfile: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesEntityOwnerProfileResponse',
                                  fields: {
                                    Nickname: { type: graphql.GraphQLString },
                                    LanModeEnabled: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    LanSeatLocation: {
                                      type: graphql.GraphQLString
                                    },
                                    EntityName: { type: graphql.GraphQLString },
                                    EntityIsTeam: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    DisplayName: {
                                      type: graphql.GraphQLString
                                    },
                                    EntityImageUrl: {
                                      type: graphql.GraphQLString
                                    },
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
                              EntityParticipantA: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesEntityParticipantAResponse',
                                  fields: {
                                    Id: { type: graphql.GraphQLFloat },
                                    IsBye: { type: graphql.GraphQLBoolean },
                                    NoShow: { type: graphql.GraphQLBoolean },
                                    Forfeit: { type: graphql.GraphQLBoolean },
                                    Score: { type: graphql.GraphQLFloat },
                                    LiveScore: { type: graphql.GraphQLFloat },
                                    TeamSideId: { type: graphql.GraphQLFloat },
                                    TeamSideName: {
                                      type: graphql.GraphQLString
                                    },
                                    CountryCode: {
                                      type: graphql.GraphQLString
                                    },
                                    Region: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesEntityParticipantARegionResponse',
                                        fields: {
                                          GamingServerRegionId: {
                                            type: graphql.GraphQLFloat
                                          },
                                          GamingServerRegionName: {
                                            type: graphql.GraphQLString
                                          }
                                        }
                                      })
                                    },
                                    Profile: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesEntityParticipantAProfileResponse',
                                        fields: {
                                          Nickname: {
                                            type: graphql.GraphQLString
                                          },
                                          LanModeEnabled: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          LanSeatLocation: {
                                            type: graphql.GraphQLString
                                          },
                                          EntityName: {
                                            type: graphql.GraphQLString
                                          },
                                          EntityIsTeam: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          DisplayName: {
                                            type: graphql.GraphQLString
                                          },
                                          EntityImageUrl: {
                                            type: graphql.GraphQLString
                                          },
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
                                            'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesEntityParticipantAHearthstoneDecksResponse',
                                          fields: {
                                            PlayerNumber: {
                                              type: graphql.GraphQLFloat
                                            },
                                            IsStartingDeck: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            HearthstoneDeckExcluded: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            GameTitleModeHearthstoneDeckId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            GameTitleModeId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            HearthstoneDeck: {
                                              type: graphql.GraphQLString
                                            },
                                            HearthstoneDeckImage: {
                                              type: new graphql.GraphQLObjectType(
                                                {
                                                  name:
                                                    'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesEntityParticipantAHearthstoneDecksHearthstoneDeckImageResponse',
                                                  fields: {
                                                    UrlPath: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    RelativePath: {
                                                      type:
                                                        graphql.GraphQLString
                                                    }
                                                  }
                                                }
                                              )
                                            },
                                            IsActive: {
                                              type: graphql.GraphQLBoolean
                                            }
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
                                    'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesEntityParticipantBResponse',
                                  fields: {
                                    Id: { type: graphql.GraphQLFloat },
                                    IsBye: { type: graphql.GraphQLBoolean },
                                    NoShow: { type: graphql.GraphQLBoolean },
                                    Forfeit: { type: graphql.GraphQLBoolean },
                                    Score: { type: graphql.GraphQLFloat },
                                    LiveScore: { type: graphql.GraphQLFloat },
                                    TeamSideId: { type: graphql.GraphQLFloat },
                                    TeamSideName: {
                                      type: graphql.GraphQLString
                                    },
                                    CountryCode: {
                                      type: graphql.GraphQLString
                                    },
                                    Region: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesEntityParticipantBRegionResponse',
                                        fields: {
                                          GamingServerRegionId: {
                                            type: graphql.GraphQLFloat
                                          },
                                          GamingServerRegionName: {
                                            type: graphql.GraphQLString
                                          }
                                        }
                                      })
                                    },
                                    Profile: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesEntityParticipantBProfileResponse',
                                        fields: {
                                          Nickname: {
                                            type: graphql.GraphQLString
                                          },
                                          LanModeEnabled: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          LanSeatLocation: {
                                            type: graphql.GraphQLString
                                          },
                                          EntityName: {
                                            type: graphql.GraphQLString
                                          },
                                          EntityIsTeam: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          DisplayName: {
                                            type: graphql.GraphQLString
                                          },
                                          EntityImageUrl: {
                                            type: graphql.GraphQLString
                                          },
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
                                            'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesEntityParticipantBHearthstoneDecksResponse',
                                          fields: {
                                            PlayerNumber: {
                                              type: graphql.GraphQLFloat
                                            },
                                            IsStartingDeck: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            HearthstoneDeckExcluded: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            GameTitleModeHearthstoneDeckId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            GameTitleModeId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            HearthstoneDeck: {
                                              type: graphql.GraphQLString
                                            },
                                            HearthstoneDeckImage: {
                                              type: new graphql.GraphQLObjectType(
                                                {
                                                  name:
                                                    'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesEntityParticipantBHearthstoneDecksHearthstoneDeckImageResponse',
                                                  fields: {
                                                    UrlPath: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    RelativePath: {
                                                      type:
                                                        graphql.GraphQLString
                                                    }
                                                  }
                                                }
                                              )
                                            },
                                            IsActive: {
                                              type: graphql.GraphQLBoolean
                                            }
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
                              CurrentGameTitleModeMapId: {
                                type: graphql.GraphQLFloat
                              },
                              MapFileName: { type: graphql.GraphQLString },
                              MapDisplayName: { type: graphql.GraphQLString },
                              GamingServerRegionId: {
                                type: graphql.GraphQLFloat
                              },
                              GamingServerRegionName: {
                                type: graphql.GraphQLString
                              },
                              IsBracket: { type: graphql.GraphQLBoolean },
                              AllowRescheduling: {
                                type: graphql.GraphQLBoolean
                              },
                              WillBroadcast: { type: graphql.GraphQLBoolean },
                              BroadcastUrl: { type: graphql.GraphQLString },
                              AutomaticGoLiveOnSchedule: {
                                type: graphql.GraphQLBoolean
                              },
                              MinutesAfterStartToForfeit: {
                                type: graphql.GraphQLFloat
                              },
                              MinutesBeforeStartToAllowCheckin: {
                                type: graphql.GraphQLFloat
                              },
                              ServerSendPlayerSummaryStatistics: {
                                type: graphql.GraphQLBoolean
                              },
                              GamingServerId: { type: graphql.GraphQLFloat },
                              EntityPlayerControllerId: {
                                type: graphql.GraphQLFloat
                              },
                              AllTeamAPlayersReady: {
                                type: graphql.GraphQLBoolean
                              },
                              TeamAIsReady: { type: graphql.GraphQLBoolean },
                              AllTeamBPlayersReady: {
                                type: graphql.GraphQLBoolean
                              },
                              TeamBIsReady: { type: graphql.GraphQLBoolean },
                              ScoreManuallyReportedDateTime: {
                                type: graphql.GraphQLString
                              },
                              ScoreManuallyReported: {
                                type: graphql.GraphQLBoolean
                              },
                              ScoreManuallyReportedByPlayerId: {
                                type: graphql.GraphQLFloat
                              },
                              ScoreManuallyReportedByTeamA: {
                                type: graphql.GraphQLBoolean
                              },
                              ScoreManuallyApplyToEntireRound: {
                                type: graphql.GraphQLBoolean
                              },
                              MapsPlayed: {
                                type: new graphql.GraphQLList(
                                  new graphql.GraphQLObjectType({
                                    name:
                                      'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesMapsPlayedResponse',
                                    fields: {
                                      TournamentMatchId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      MapNumber: { type: graphql.GraphQLFloat },
                                      GameTitleModeMapId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      MapStartDateTime: {
                                        type: graphql.GraphQLString
                                      },
                                      MapEndDateTime: {
                                        type: graphql.GraphQLString
                                      },
                                      EntityParticipantAScore: {
                                        type: graphql.GraphQLFloat
                                      },
                                      EntityParticipantBScore: {
                                        type: graphql.GraphQLFloat
                                      },
                                      Map: {
                                        type: new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesMapsPlayedMapResponse',
                                          fields: {
                                            GameTitleModeMapId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            GameTitleModeId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            MapFileName: {
                                              type: graphql.GraphQLString
                                            },
                                            MapDisplayName: {
                                              type: graphql.GraphQLString
                                            },
                                            IsActive: {
                                              type: graphql.GraphQLBoolean
                                            }
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
                                    'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesDisputeResponse',
                                  fields: {
                                    TournamentMatchDisputeId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    TournamentMatchId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    DisputeState: {
                                      type: graphql.GraphQLFloat
                                    },
                                    InitiatedByPlayerId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    InitiatedByPlayerProfile: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesDisputeInitiatedByPlayerProfileResponse',
                                        fields: {
                                          Nickname: {
                                            type: graphql.GraphQLString
                                          },
                                          LanModeEnabled: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          LanSeatLocation: {
                                            type: graphql.GraphQLString
                                          },
                                          EntityName: {
                                            type: graphql.GraphQLString
                                          },
                                          EntityIsTeam: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          DisplayName: {
                                            type: graphql.GraphQLString
                                          },
                                          EntityImageUrl: {
                                            type: graphql.GraphQLString
                                          },
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
                                    InitiatorOnTeamA: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    TeamAScore: { type: graphql.GraphQLFloat },
                                    TeamBScore: { type: graphql.GraphQLFloat },
                                    ImageUrl: { type: graphql.GraphQLString },
                                    DisputeDateTime: {
                                      type: graphql.GraphQLString
                                    },
                                    EntityAdministratorId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    ResolutionDateTime: {
                                      type: graphql.GraphQLString
                                    },
                                    ResolutionTeamAScore: {
                                      type: graphql.GraphQLFloat
                                    },
                                    ResolutionTeamBScore: {
                                      type: graphql.GraphQLFloat
                                    }
                                  }
                                })
                              },
                              MyMatch: { type: graphql.GraphQLBoolean },
                              NewServerRequested: {
                                type: graphql.GraphQLBoolean
                              },
                              NewServerRequestedEntityId: {
                                type: graphql.GraphQLFloat
                              },
                              NewServerRequestedByTeamA: {
                                type: graphql.GraphQLBoolean
                              },
                              NewServerRequestedCount: {
                                type: graphql.GraphQLFloat
                              },
                              NeedsAssistance: { type: graphql.GraphQLBoolean },
                              AllowedSpectators: {
                                type: graphql.GraphQLString
                              },
                              StreamingServiceId: {
                                type: graphql.GraphQLFloat
                              },
                              ManualMode: { type: graphql.GraphQLBoolean },
                              ManualServerConnectionInfo: {
                                type: graphql.GraphQLString
                              },
                              StreamingService: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesStreamingServiceResponse',
                                  fields: {
                                    StreamingServiceId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    StreamingService: {
                                      type: graphql.GraphQLString
                                    },
                                    SourceName: { type: graphql.GraphQLString }
                                  }
                                })
                              },
                              AssistanceRequests: {
                                type: new graphql.GraphQLList(
                                  new graphql.GraphQLObjectType({
                                    name:
                                      'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesAssistanceRequestsResponse',
                                    fields: {
                                      TournamentMatchAssistanceId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      TournamentMatchId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      AssistanceRequestedById: {
                                        type: graphql.GraphQLFloat
                                      },
                                      AssistanceRequestedDateTime: {
                                        type: graphql.GraphQLString
                                      },
                                      ResolvedById: {
                                        type: graphql.GraphQLFloat
                                      },
                                      ResolutionDateTime: {
                                        type: graphql.GraphQLString
                                      },
                                      ResolutionComments: {
                                        type: graphql.GraphQLString
                                      }
                                    }
                                  })
                                )
                              },
                              LastUpdatedDateTime: {
                                type: graphql.GraphQLString
                              },
                              ServerConfigurationFileName: {
                                type: graphql.GraphQLString
                              },
                              MatchAdministratorId: {
                                type: graphql.GraphQLFloat
                              },
                              ActionLog: {
                                type: new graphql.GraphQLList(
                                  new graphql.GraphQLObjectType({
                                    name:
                                      'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesActionLogResponse',
                                    fields: {
                                      TournamentMatchActionLogId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      EntityId: { type: graphql.GraphQLFloat },
                                      EntityProfile: {
                                        type: new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesActionLogEntityProfileResponse',
                                          fields: {
                                            Nickname: {
                                              type: graphql.GraphQLString
                                            },
                                            LanModeEnabled: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            LanSeatLocation: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityName: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityIsTeam: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            DisplayName: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityImageUrl: {
                                              type: graphql.GraphQLString
                                            },
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
                                      TournamentMatchId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      ActionLogTypeId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      ActionLogType: {
                                        type: graphql.GraphQLString
                                      },
                                      AdministratorComment: {
                                        type: graphql.GraphQLString
                                      },
                                      ActionLogDateTime: {
                                        type: graphql.GraphQLString
                                      }
                                    }
                                  })
                                )
                              },
                              Playback: {
                                type: new graphql.GraphQLList(
                                  new graphql.GraphQLObjectType({
                                    name:
                                      'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesPlaybackResponse',
                                    fields: {
                                      TournamentMatchPlaybackId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      TournamentMatchId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      TournamentMatchPlayback: {
                                        type: graphql.GraphQLString
                                      },
                                      TournamentMatchPlaybackDateTime: {
                                        type: graphql.GraphQLString
                                      }
                                    }
                                  })
                                )
                              },
                              QualifierGroupNumber: {
                                type: graphql.GraphQLFloat
                              },
                              IsQualifier: { type: graphql.GraphQLBoolean },
                              HasTieBreaker: { type: graphql.GraphQLBoolean },
                              TieBreakerCount: { type: graphql.GraphQLFloat },
                              ScoringImage: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyTopGameResponsePlatformsMatchesScoringImageResponse',
                                  fields: {
                                    UrlPath: { type: graphql.GraphQLString },
                                    RelativePath: {
                                      type: graphql.GraphQLString
                                    }
                                  }
                                })
                              }
                            }
                          })
                        )
                      },
                      Statistics: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyTopGameResponsePlatformsStatisticsResponse',
                          fields: {
                            MatchPlayStatisticsId: {
                              type: graphql.GraphQLFloat
                            },
                            EntityId: { type: graphql.GraphQLFloat },
                            MatchesPlayedCount: { type: graphql.GraphQLFloat },
                            WonCount: { type: graphql.GraphQLFloat },
                            LostCount: { type: graphql.GraphQLFloat },
                            TieCount: { type: graphql.GraphQLFloat },
                            ForfeitedWonCount: { type: graphql.GraphQLFloat },
                            ForfeitedLostCount: { type: graphql.GraphQLFloat },
                            NoShowCount: { type: graphql.GraphQLFloat },
                            TotalWinnings: { type: graphql.GraphQLFloat },
                            TotalScore: { type: graphql.GraphQLFloat },
                            TotalTimePlayedInSeconds: {
                              type: graphql.GraphQLFloat
                            },
                            WinStreak: { type: graphql.GraphQLFloat },
                            LossStreak: { type: graphql.GraphQLFloat }
                          }
                        })
                      },
                      GamePlatformId: { type: graphql.GraphQLFloat },
                      GamePlatformCode: { type: graphql.GraphQLString },
                      GamePlatform: { type: graphql.GraphQLString },
                      ImageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyTopGameResponsePlatformsImageSmallResponse',
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
              },
              GameTitleId: { type: graphql.GraphQLFloat },
              GameName: { type: graphql.GraphQLString },
              GameShortCode: { type: graphql.GraphQLString },
              GameDescription: { type: graphql.GraphQLString },
              GameWebsite: { type: graphql.GraphQLString },
              ImageLarge: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerApiPlayerMyTopGameResponseImageLargeResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageSmall: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerApiPlayerMyTopGameResponseImageSmallResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageBackground: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerApiPlayerMyTopGameResponseImageBackgroundResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              MaximumPlayersAllowed: { type: graphql.GraphQLFloat },
              MinimumMinutesBetweenTournamentRounds: {
                type: graphql.GraphQLFloat
              },
              Franchise: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerApiPlayerMyTopGameResponseFranchiseResponse',
                  fields: {
                    GameFranchiseId: { type: graphql.GraphQLFloat },
                    GameFranchise: { type: graphql.GraphQLString },
                    ImageLarge: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientPlayerApiPlayerMyTopGameResponseFranchiseImageLargeResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientPlayerApiPlayerMyTopGameResponseFranchiseImageSmallResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientPlayerApiPlayerMyTopGameResponseFranchiseImageBackgroundResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    IsActive: { type: graphql.GraphQLBoolean }
                  }
                })
              },
              Developer: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerApiPlayerMyTopGameResponseDeveloperResponse',
                  fields: {
                    GameDeveloperId: { type: graphql.GraphQLFloat },
                    GameDeveloper: { type: graphql.GraphQLString },
                    Website: { type: graphql.GraphQLString },
                    IsActive: { type: graphql.GraphQLBoolean }
                  }
                })
              },
              HasTeamSides: { type: graphql.GraphQLBoolean },
              IsHearthstone: { type: graphql.GraphQLBoolean },
              HearthstoneManageDecks: { type: graphql.GraphQLBoolean },
              IsActive: { type: graphql.GraphQLBoolean }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyTeams: {
    fullName: 'GamingGrids.Api.Client.v2.Controllers.PlayerController.MyTeams',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/My/Teams',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientPlayerApiPlayerMyTeamsUriParams',
            fields: { myFriendsOnly: { type: graphql.GraphQLBoolean } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyTeamsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientPlayerApiPlayerMyTeamsResponseResponse',
              fields: {
                Statistics: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerMyTeamsResponseStatisticsResponse',
                    fields: {
                      MatchPlayStatisticsId: { type: graphql.GraphQLFloat },
                      EntityId: { type: graphql.GraphQLFloat },
                      MatchesPlayedCount: { type: graphql.GraphQLFloat },
                      WonCount: { type: graphql.GraphQLFloat },
                      LostCount: { type: graphql.GraphQLFloat },
                      TieCount: { type: graphql.GraphQLFloat },
                      ForfeitedWonCount: { type: graphql.GraphQLFloat },
                      ForfeitedLostCount: { type: graphql.GraphQLFloat },
                      NoShowCount: { type: graphql.GraphQLFloat },
                      TotalWinnings: { type: graphql.GraphQLFloat },
                      TotalScore: { type: graphql.GraphQLFloat },
                      TotalTimePlayedInSeconds: { type: graphql.GraphQLFloat },
                      WinStreak: { type: graphql.GraphQLFloat },
                      LossStreak: { type: graphql.GraphQLFloat }
                    }
                  })
                },
                IsFriendsTeam: { type: graphql.GraphQLBoolean },
                CanEditProfile: { type: graphql.GraphQLBoolean },
                EntityTeamId: { type: graphql.GraphQLFloat },
                TeamDescription: { type: graphql.GraphQLString },
                NumberOfPlayers: { type: graphql.GraphQLFloat },
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
  ApiPlayerMyMatches: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.MyMatches',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/My/Matches',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyMatchesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientPlayerApiPlayerMyMatchesResponseResponse',
              fields: {
                Tournament: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerMyMatchesResponseTournamentResponse',
                    fields: {
                      EstimatedPrizePool: { type: graphql.GraphQLFloat },
                      TournamentStateId: { type: graphql.GraphQLFloat },
                      IsTournamentSpecificAdministrator: {
                        type: graphql.GraphQLBoolean
                      },
                      IsPublished: { type: graphql.GraphQLBoolean },
                      GameName: { type: graphql.GraphQLString },
                      IsTournamentAdministrator: {
                        type: graphql.GraphQLBoolean
                      },
                      EntityOwnerId: { type: graphql.GraphQLFloat },
                      GameTitleRulesId: { type: graphql.GraphQLFloat },
                      IsApproved: { type: graphql.GraphQLBoolean },
                      IsRealCurrency: { type: graphql.GraphQLBoolean },
                      EntityApprovedById: { type: graphql.GraphQLFloat },
                      ResultIsFinalized: { type: graphql.GraphQLBoolean },
                      EntityResultFinalizedById: { type: graphql.GraphQLFloat },
                      TournamentPassword: { type: graphql.GraphQLString },
                      PrizePoolAmount: { type: graphql.GraphQLFloat },
                      TournamentPrizeFundingTypeId: {
                        type: graphql.GraphQLFloat
                      },
                      TournamentPrizeFundingTypeName: {
                        type: graphql.GraphQLString
                      },
                      DoesCycle: { type: graphql.GraphQLBoolean },
                      CycleLengthInMinutes: { type: graphql.GraphQLFloat },
                      CycleMinutesBeforeStart: { type: graphql.GraphQLFloat },
                      MaxCycleCount: { type: graphql.GraphQLFloat },
                      CycleCount: { type: graphql.GraphQLFloat },
                      HasCycled: { type: graphql.GraphQLBoolean },
                      CycledTournamentId: { type: graphql.GraphQLFloat },
                      CanOnlyRegisterFromRegionId: {
                        type: graphql.GraphQLFloat
                      },
                      CanOnlyRegisterFromRegionName: {
                        type: graphql.GraphQLString
                      },
                      GamingServerRegionName: { type: graphql.GraphQLString },
                      OpenPlayMinimumTimeToQualify: {
                        type: graphql.GraphQLFloat
                      },
                      RoundRobinIsComplete: { type: graphql.GraphQLBoolean },
                      TournamentSeedingTypeId: { type: graphql.GraphQLFloat },
                      TournamentPairingTypeId: { type: graphql.GraphQLFloat },
                      AutomaticGoLiveOnSchedule: {
                        type: graphql.GraphQLBoolean
                      },
                      MinutesAfterStartToForfeit: {
                        type: graphql.GraphQLFloat
                      },
                      MinutesBeforeStartToAllowCheckin: {
                        type: graphql.GraphQLFloat
                      },
                      Sponsors: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyMatchesResponseTournamentSponsorsResponse',
                          fields: {
                            TitleSponsor: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerMyMatchesResponseTournamentSponsorsTitleSponsorResponse',
                                fields: {
                                  SponsorName: { type: graphql.GraphQLString },
                                  SponsorImageUrl: {
                                    type: graphql.GraphQLString
                                  },
                                  SponsorImageRelativeUrl: {
                                    type: graphql.GraphQLString
                                  },
                                  SponsorLink: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            MainSponsors: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyMatchesResponseTournamentSponsorsMainSponsorsResponse',
                                  fields: {
                                    SponsorName: {
                                      type: graphql.GraphQLString
                                    },
                                    SponsorImageUrl: {
                                      type: graphql.GraphQLString
                                    },
                                    SponsorImageRelativeUrl: {
                                      type: graphql.GraphQLString
                                    },
                                    SponsorLink: { type: graphql.GraphQLString }
                                  }
                                })
                              )
                            },
                            Partners: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyMatchesResponseTournamentSponsorsPartnersResponse',
                                  fields: {
                                    SponsorName: {
                                      type: graphql.GraphQLString
                                    },
                                    SponsorImageUrl: {
                                      type: graphql.GraphQLString
                                    },
                                    SponsorImageRelativeUrl: {
                                      type: graphql.GraphQLString
                                    },
                                    SponsorLink: { type: graphql.GraphQLString }
                                  }
                                })
                              )
                            }
                          }
                        })
                      },
                      Announcements: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerMyMatchesResponseTournamentAnnouncementsResponse',
                            fields: {
                              TournamentAnnouncementId: {
                                type: graphql.GraphQLFloat
                              },
                              TournamentId: { type: graphql.GraphQLFloat },
                              TournamentAnnouncement: {
                                type: graphql.GraphQLString
                              },
                              CreatedDateTime: { type: graphql.GraphQLString },
                              CreatedById: { type: graphql.GraphQLFloat },
                              EntityName: { type: graphql.GraphQLString },
                              DisplayName: { type: graphql.GraphQLString }
                            }
                          })
                        )
                      },
                      CreatedDateTime: { type: graphql.GraphQLString },
                      GamePlatformFranchiseTitleStateId: {
                        type: graphql.GraphQLFloat
                      },
                      AllMatchesRunManualMode: { type: graphql.GraphQLBoolean },
                      ThirdPartyTournamentId: { type: graphql.GraphQLString },
                      ThirdPartyApiRegion: { type: graphql.GraphQLString },
                      ThirdPartyTournamentConfiguration: {
                        type: graphql.GraphQLString
                      },
                      ServerConfigurationFileName: {
                        type: graphql.GraphQLString
                      },
                      AllowPreCheckin: { type: graphql.GraphQLBoolean },
                      PreCheckinMinutesBeforeStart: {
                        type: graphql.GraphQLFloat
                      },
                      StandByParticipantCount: { type: graphql.GraphQLFloat },
                      IsPreCheckinAvailable: { type: graphql.GraphQLBoolean },
                      Qualifier: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyMatchesResponseTournamentQualifierResponse',
                          fields: {
                            TournamentId: { type: graphql.GraphQLFloat },
                            NumberOfGroups: { type: graphql.GraphQLFloat },
                            QualifierWinPoints: { type: graphql.GraphQLFloat },
                            QualifierLossPoints: { type: graphql.GraphQLFloat },
                            QualifierTiePoints: { type: graphql.GraphQLFloat },
                            QualifierScoreMultiplierPoints: {
                              type: graphql.GraphQLFloat
                            },
                            QualifierSortTypeId: { type: graphql.GraphQLFloat },
                            League: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerMyMatchesResponseTournamentQualifierLeagueResponse',
                                fields: {
                                  EndDateTime: { type: graphql.GraphQLString },
                                  GameTileModeMapId: {
                                    type: graphql.GraphQLFloat
                                  },
                                  MinimumNumberOfMatches: {
                                    type: graphql.GraphQLFloat
                                  },
                                  NumberOfPlays: { type: graphql.GraphQLFloat },
                                  AllowRegistrationAfterTournamentStart: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  GroupPlacementOnJoin: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  MaximumConcurrentMatches: {
                                    type: graphql.GraphQLFloat
                                  },
                                  BufferInMinutesBetweenMatches: {
                                    type: graphql.GraphQLFloat
                                  }
                                }
                              })
                            },
                            Groups: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyMatchesResponseTournamentQualifierGroupsResponse',
                                  fields: {
                                    TournamentId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    GroupNumber: { type: graphql.GraphQLFloat },
                                    GroupName: { type: graphql.GraphQLString },
                                    IsGuaranteedPlayoffs: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    NumberOfPlayersToAdvance: {
                                      type: graphql.GraphQLFloat
                                    },
                                    PlayRegularSeasonMatches: {
                                      type: graphql.GraphQLBoolean
                                    }
                                  }
                                })
                              )
                            },
                            TieBreakers: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyMatchesResponseTournamentQualifierTieBreakersResponse',
                                  fields: {
                                    TieBreakerLevelId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    TieBreakerTypeId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    TieBreakerName: {
                                      type: graphql.GraphQLString
                                    },
                                    TieBreakerDescription: {
                                      type: graphql.GraphQLString
                                    }
                                  }
                                })
                              )
                            }
                          }
                        })
                      },
                      TournamentManagementPolicyId: {
                        type: graphql.GraphQLFloat
                      },
                      PredefinedStreamedMatches: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerMyMatchesResponseTournamentPredefinedStreamedMatchesResponse',
                            fields: {
                              RoundRuleLevelId: { type: graphql.GraphQLFloat },
                              RoundNumber: { type: graphql.GraphQLFloat },
                              MatchNumber: { type: graphql.GraphQLFloat },
                              StreamingServiceId: {
                                type: graphql.GraphQLFloat
                              },
                              BroadcastUrl: { type: graphql.GraphQLString }
                            }
                          })
                        )
                      },
                      LanModeEnabled: { type: graphql.GraphQLBoolean },
                      EnableLanTagging: { type: graphql.GraphQLBoolean },
                      LanTag: { type: graphql.GraphQLString },
                      AllowedCountryIds: { type: graphql.GraphQLFloat },
                      AllowedCountryList: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerMyMatchesResponseTournamentAllowedCountryListResponse',
                            fields: {
                              AddressCountryId: { type: graphql.GraphQLFloat },
                              AddressCountryCode: {
                                type: graphql.GraphQLString
                              },
                              AddressCountry3LetterCode: {
                                type: graphql.GraphQLString
                              },
                              AddressCountry: { type: graphql.GraphQLString },
                              AllowsRealMoney: { type: graphql.GraphQLBoolean },
                              FlagSmallImageUrl: {
                                type: graphql.GraphQLString
                              },
                              FlagLargeImageUrl: {
                                type: graphql.GraphQLString
                              },
                              ShowInList: { type: graphql.GraphQLBoolean },
                              OrderBy: { type: graphql.GraphQLFloat }
                            }
                          })
                        )
                      },
                      PauseIfQualifierEndsInTie: {
                        type: graphql.GraphQLBoolean
                      },
                      IsPausedForTiedQualifierFinish: {
                        type: graphql.GraphQLBoolean
                      },
                      IsPausedForTiedQualifierFinishDateTime: {
                        type: graphql.GraphQLString
                      },
                      QualifierTiedFinishIsResolved: {
                        type: graphql.GraphQLBoolean
                      },
                      QualifierTiedFinishIsResolvedDateTime: {
                        type: graphql.GraphQLString
                      },
                      QualifierTiedFinishIsResolvedByAdministratorId: {
                        type: graphql.GraphQLFloat
                      },
                      QualifierTiedFinishIsResolvedByAdministratorProfile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyMatchesResponseTournamentQualifierTiedFinishIsResolvedByAdministratorProfileResponse',
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
                      RestrictPowerRankingStartDivisionId: {
                        type: graphql.GraphQLFloat
                      },
                      RestrictPowerRankingEndDivisionId: {
                        type: graphql.GraphQLFloat
                      },
                      Payouts: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyMatchesResponseTournamentPayoutsResponse',
                          fields: {
                            HasPayouts: { type: graphql.GraphQLBoolean },
                            IsFixedPayouts: { type: graphql.GraphQLBoolean },
                            PayoutCount: { type: graphql.GraphQLFloat },
                            FixedPayoutAmount: { type: graphql.GraphQLFloat },
                            Places: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyMatchesResponseTournamentPayoutsPlacesResponse',
                                  fields: {
                                    IsAwarded: { type: graphql.GraphQLBoolean },
                                    AwardedDateTime: {
                                      type: graphql.GraphQLString
                                    },
                                    AwardedAmount: {
                                      type: graphql.GraphQLFloat
                                    },
                                    NumberOfWinnersAwarded: {
                                      type: graphql.GraphQLFloat
                                    },
                                    Winners: {
                                      type: new graphql.GraphQLList(
                                        new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerMyMatchesResponseTournamentPayoutsPlacesWinnersResponse',
                                          fields: {
                                            EntityId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            EntityName: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityIsTeam: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            DisplayName: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityImageUrl: {
                                              type: graphql.GraphQLString
                                            }
                                          }
                                        })
                                      )
                                    },
                                    PlaceNumber: { type: graphql.GraphQLFloat },
                                    PayoutAmount: {
                                      type: graphql.GraphQLFloat
                                    },
                                    PayoutPercent: {
                                      type: graphql.GraphQLFloat
                                    },
                                    OtherPayout: {
                                      type: graphql.GraphQLString
                                    },
                                    XperiencePoints: {
                                      type: graphql.GraphQLFloat
                                    }
                                  }
                                })
                              )
                            }
                          }
                        })
                      },
                      ChallengeMinEntryFee: { type: graphql.GraphQLFloat },
                      ChallengeMaxEntryFee: { type: graphql.GraphQLFloat },
                      ChallengeOffers: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerMyMatchesResponseTournamentChallengeOffersResponse',
                            fields: {
                              ChallengeOfferId: { type: graphql.GraphQLFloat },
                              EntryFee: { type: graphql.GraphQLFloat },
                              ServiceFee: { type: graphql.GraphQLFloat },
                              TotalFee: { type: graphql.GraphQLFloat },
                              TournamentId: { type: graphql.GraphQLFloat },
                              TournamentDescription: {
                                type: graphql.GraphQLString
                              },
                              TournamentTitle: { type: graphql.GraphQLString },
                              CreatorEntityId: { type: graphql.GraphQLFloat },
                              ChallengerEntityId: {
                                type: graphql.GraphQLFloat
                              },
                              OfferDateTime: { type: graphql.GraphQLString },
                              CreatorStateId: { type: graphql.GraphQLFloat },
                              CreatorStateDateTime: {
                                type: graphql.GraphQLString
                              },
                              ChallengerStateId: { type: graphql.GraphQLFloat },
                              ChallengerStateDateTime: {
                                type: graphql.GraphQLString
                              },
                              HasPendingRegistration: {
                                type: graphql.GraphQLBoolean
                              },
                              TournamentMatchId: { type: graphql.GraphQLFloat },
                              ChallengeComplete: {
                                type: graphql.GraphQLBoolean
                              },
                              ChallengeCompleteDateTime: {
                                type: graphql.GraphQLString
                              },
                              ChallengerNeedsRegistration: {
                                type: graphql.GraphQLBoolean
                              },
                              CreatorNeedsRegistration: {
                                type: graphql.GraphQLBoolean
                              },
                              ChallengeCancelled: {
                                type: graphql.GraphQLBoolean
                              }
                            }
                          })
                        )
                      },
                      KeepAlive: { type: graphql.GraphQLString },
                      MatchCountdownMinutes: { type: graphql.GraphQLFloat },
                      LocationIds: { type: graphql.GraphQLFloat },
                      Locations: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerMyMatchesResponseTournamentLocationsResponse',
                            fields: {
                              LocationId: { type: graphql.GraphQLFloat },
                              StateProvence: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyMatchesResponseTournamentLocationsStateProvenceResponse',
                                  fields: {
                                    AddressStateProvenceId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    AddressCountryId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    AddressStateProvenceCode: {
                                      type: graphql.GraphQLString
                                    },
                                    AddressStateProvence: {
                                      type: graphql.GraphQLString
                                    },
                                    AllowsRealMoney: {
                                      type: graphql.GraphQLBoolean
                                    }
                                  }
                                })
                              },
                              Country: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyMatchesResponseTournamentLocationsCountryResponse',
                                  fields: {
                                    AddressCountryId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    AddressCountryCode: {
                                      type: graphql.GraphQLString
                                    },
                                    AddressCountry3LetterCode: {
                                      type: graphql.GraphQLString
                                    },
                                    AddressCountry: {
                                      type: graphql.GraphQLString
                                    },
                                    AllowsRealMoney: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    FlagSmallImageUrl: {
                                      type: graphql.GraphQLString
                                    },
                                    FlagLargeImageUrl: {
                                      type: graphql.GraphQLString
                                    },
                                    ShowInList: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    OrderBy: { type: graphql.GraphQLFloat }
                                  }
                                })
                              },
                              Region: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyMatchesResponseTournamentLocationsRegionResponse',
                                  fields: {
                                    GamingServerRegionId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    GamingServerRegionName: {
                                      type: graphql.GraphQLString
                                    }
                                  }
                                })
                              },
                              IsActive: { type: graphql.GraphQLBoolean },
                              Location: { type: graphql.GraphQLString },
                              StreetAddress: { type: graphql.GraphQLString },
                              City: { type: graphql.GraphQLString },
                              AddressStateProvenceId: {
                                type: graphql.GraphQLFloat
                              },
                              AddressCountryId: { type: graphql.GraphQLFloat },
                              PostalCode: { type: graphql.GraphQLString },
                              GamingServerRegionId: {
                                type: graphql.GraphQLFloat
                              },
                              PhoneNumber: { type: graphql.GraphQLString },
                              EmailAddress: { type: graphql.GraphQLString },
                              Hours: { type: graphql.GraphQLString },
                              Description: { type: graphql.GraphQLString }
                            }
                          })
                        )
                      },
                      TrophyGroup: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyMatchesResponseTournamentTrophyGroupResponse',
                          fields: {
                            TrophyGroupId: { type: graphql.GraphQLFloat },
                            TrophyGroup: { type: graphql.GraphQLString },
                            IsActive: { type: graphql.GraphQLBoolean }
                          }
                        })
                      },
                      TrophyGroupId: { type: graphql.GraphQLFloat },
                      XperiencePointsForJoining: { type: graphql.GraphQLFloat },
                      XperiencePointsPerRound: { type: graphql.GraphQLFloat },
                      BracketsBuilt: { type: graphql.GraphQLBoolean },
                      TotalEntryFeesAmount: { type: graphql.GraphQLFloat },
                      TotalPayoutAmount: { type: graphql.GraphQLFloat },
                      TotalRakeAmount: { type: graphql.GraphQLFloat },
                      DirectChallengeOppontentEntityId: {
                        type: graphql.GraphQLFloat
                      },
                      UseCommunitySteamAccounts: {
                        type: graphql.GraphQLBoolean
                      },
                      IsChallenge: { type: graphql.GraphQLBoolean },
                      TournamentIsComplete: { type: graphql.GraphQLBoolean },
                      TournamentIsLive: { type: graphql.GraphQLBoolean },
                      TournamentLiveDateTime: { type: graphql.GraphQLString },
                      TournamentId: { type: graphql.GraphQLFloat },
                      GameTitleModeId: { type: graphql.GraphQLFloat },
                      TournamentTitle: { type: graphql.GraphQLString },
                      TournamentDescription: { type: graphql.GraphQLString },
                      TournamentSeriesId: { type: graphql.GraphQLFloat },
                      GamePlatformFranchiseTitleId: {
                        type: graphql.GraphQLFloat
                      },
                      IsTeamTournament: { type: graphql.GraphQLBoolean },
                      MinimumNumberOfEntities: { type: graphql.GraphQLFloat },
                      MaximumNumberOfEntities: { type: graphql.GraphQLFloat },
                      TeamSize: { type: graphql.GraphQLFloat },
                      TournamentTypeId: { type: graphql.GraphQLFloat },
                      OriginalTournamentTypeId: { type: graphql.GraphQLFloat },
                      TournamentTypeName: { type: graphql.GraphQLString },
                      TournamentStartDateTime: { type: graphql.GraphQLString },
                      TournamentEndDateTime: { type: graphql.GraphQLString },
                      RegistrationCutoffDateTime: {
                        type: graphql.GraphQLString
                      },
                      IsPublic: { type: graphql.GraphQLBoolean },
                      IsFavorite: { type: graphql.GraphQLBoolean },
                      EnableMatchLobby: { type: graphql.GraphQLBoolean },
                      ImageLogo: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyMatchesResponseTournamentImageLogoResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyMatchesResponseTournamentImageBackgroundResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      JoinPasswordRequired: { type: graphql.GraphQLBoolean },
                      HasConsolationRound: { type: graphql.GraphQLBoolean },
                      CurrentNumberOfParticipants: {
                        type: graphql.GraphQLFloat
                      },
                      PowerRankingProfileId: { type: graphql.GraphQLFloat },
                      PlatformGame: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyMatchesResponseTournamentPlatformGameResponse',
                          fields: {
                            GamePlatformFranchiseTitleId: {
                              type: graphql.GraphQLFloat
                            },
                            Platform: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerMyMatchesResponseTournamentPlatformGamePlatformResponse',
                                fields: {
                                  GamePlatformId: {
                                    type: graphql.GraphQLFloat
                                  },
                                  GamePlatformCode: {
                                    type: graphql.GraphQLString
                                  },
                                  GamePlatform: { type: graphql.GraphQLString },
                                  ImageSmall: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyMatchesResponseTournamentPlatformGamePlatformImageSmallResponse',
                                      fields: {
                                        UrlPath: {
                                          type: graphql.GraphQLString
                                        },
                                        RelativePath: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  IsActive: { type: graphql.GraphQLBoolean }
                                }
                              })
                            },
                            Game: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerMyMatchesResponseTournamentPlatformGameGameResponse',
                                fields: {
                                  GameTitleId: { type: graphql.GraphQLFloat },
                                  GameName: { type: graphql.GraphQLString },
                                  GameShortCode: {
                                    type: graphql.GraphQLString
                                  },
                                  GameDescription: {
                                    type: graphql.GraphQLString
                                  },
                                  GameWebsite: { type: graphql.GraphQLString },
                                  ImageLarge: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyMatchesResponseTournamentPlatformGameGameImageLargeResponse',
                                      fields: {
                                        UrlPath: {
                                          type: graphql.GraphQLString
                                        },
                                        RelativePath: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  ImageSmall: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyMatchesResponseTournamentPlatformGameGameImageSmallResponse',
                                      fields: {
                                        UrlPath: {
                                          type: graphql.GraphQLString
                                        },
                                        RelativePath: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  ImageBackground: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyMatchesResponseTournamentPlatformGameGameImageBackgroundResponse',
                                      fields: {
                                        UrlPath: {
                                          type: graphql.GraphQLString
                                        },
                                        RelativePath: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  MaximumPlayersAllowed: {
                                    type: graphql.GraphQLFloat
                                  },
                                  MinimumMinutesBetweenTournamentRounds: {
                                    type: graphql.GraphQLFloat
                                  },
                                  Franchise: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyMatchesResponseTournamentPlatformGameGameFranchiseResponse',
                                      fields: {
                                        GameFranchiseId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        GameFranchise: {
                                          type: graphql.GraphQLString
                                        },
                                        ImageLarge: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerMyMatchesResponseTournamentPlatformGameGameFranchiseImageLargeResponse',
                                            fields: {
                                              UrlPath: {
                                                type: graphql.GraphQLString
                                              },
                                              RelativePath: {
                                                type: graphql.GraphQLString
                                              }
                                            }
                                          })
                                        },
                                        ImageSmall: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerMyMatchesResponseTournamentPlatformGameGameFranchiseImageSmallResponse',
                                            fields: {
                                              UrlPath: {
                                                type: graphql.GraphQLString
                                              },
                                              RelativePath: {
                                                type: graphql.GraphQLString
                                              }
                                            }
                                          })
                                        },
                                        ImageBackground: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerMyMatchesResponseTournamentPlatformGameGameFranchiseImageBackgroundResponse',
                                            fields: {
                                              UrlPath: {
                                                type: graphql.GraphQLString
                                              },
                                              RelativePath: {
                                                type: graphql.GraphQLString
                                              }
                                            }
                                          })
                                        },
                                        IsActive: {
                                          type: graphql.GraphQLBoolean
                                        }
                                      }
                                    })
                                  },
                                  Developer: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyMatchesResponseTournamentPlatformGameGameDeveloperResponse',
                                      fields: {
                                        GameDeveloperId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        GameDeveloper: {
                                          type: graphql.GraphQLString
                                        },
                                        Website: {
                                          type: graphql.GraphQLString
                                        },
                                        IsActive: {
                                          type: graphql.GraphQLBoolean
                                        }
                                      }
                                    })
                                  },
                                  HasTeamSides: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  IsHearthstone: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  HearthstoneManageDecks: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  IsActive: { type: graphql.GraphQLBoolean }
                                }
                              })
                            },
                            GamePlatformFranchiseTitleStateId: {
                              type: graphql.GraphQLFloat
                            },
                            GameAddedDateTime: { type: graphql.GraphQLString },
                            GameDownloadLink: { type: graphql.GraphQLString },
                            ChatPanelGuid: { type: graphql.GraphQLString },
                            ImageLarge: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerMyMatchesResponseTournamentPlatformGameImageLargeResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerMyMatchesResponseTournamentPlatformGameImageSmallResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerMyMatchesResponseTournamentPlatformGameImageBackgroundResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            TotalWinnings: { type: graphql.GraphQLFloat },
                            ThirdPartyApplicationId: {
                              type: graphql.GraphQLString
                            },
                            ThirdPartyApiKey: { type: graphql.GraphQLString },
                            GameReleaseVersion: { type: graphql.GraphQLString },
                            GameRevisedDateTime: {
                              type: graphql.GraphQLString
                            },
                            GameVersion: { type: graphql.GraphQLString },
                            GameVersionNeedsVerification: {
                              type: graphql.GraphQLBoolean
                            },
                            IssueGamesServerToMatch: {
                              type: graphql.GraphQLBoolean
                            },
                            TournamentCount: { type: graphql.GraphQLFloat },
                            ValidationMethodTypeId: {
                              type: graphql.GraphQLFloat
                            },
                            ExternalCallbackTemplateId: {
                              type: graphql.GraphQLFloat
                            },
                            InternalCallbackTemplateId: {
                              type: graphql.GraphQLFloat
                            },
                            GameServerModVersion: { type: graphql.GraphQLFloat }
                          }
                        })
                      },
                      GameTitleMode: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyMatchesResponseTournamentGameTitleModeResponse',
                          fields: {
                            GameTitleModeId: { type: graphql.GraphQLFloat },
                            GameTitleId: { type: graphql.GraphQLFloat },
                            GameTitleMode: { type: graphql.GraphQLString },
                            IsActive: { type: graphql.GraphQLBoolean }
                          }
                        })
                      },
                      LastUpdatedDateTime: { type: graphql.GraphQLString },
                      EntryFee: { type: graphql.GraphQLFloat },
                      ServiceFee: { type: graphql.GraphQLFloat },
                      TotalFee: { type: graphql.GraphQLFloat }
                    }
                  })
                },
                TournamentTitle: { type: graphql.GraphQLString },
                TournamentTypeName: { type: graphql.GraphQLString },
                GameShortCode: { type: graphql.GraphQLString },
                ImageLogo: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerMyMatchesResponseImageLogoResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                GameName: { type: graphql.GraphQLString },
                TeamSize: { type: graphql.GraphQLFloat },
                IsInLobby: { type: graphql.GraphQLBoolean },
                IsReady: { type: graphql.GraphQLBoolean },
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
                      'clientPlayerApiPlayerMyMatchesResponseEntityOwnerProfileResponse',
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
                EntityParticipantA: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerMyMatchesResponseEntityParticipantAResponse',
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
                            'clientPlayerApiPlayerMyMatchesResponseEntityParticipantARegionResponse',
                          fields: {
                            GamingServerRegionId: {
                              type: graphql.GraphQLFloat
                            },
                            GamingServerRegionName: {
                              type: graphql.GraphQLString
                            }
                          }
                        })
                      },
                      Profile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyMatchesResponseEntityParticipantAProfileResponse',
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
                              'clientPlayerApiPlayerMyMatchesResponseEntityParticipantAHearthstoneDecksResponse',
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
                                    'clientPlayerApiPlayerMyMatchesResponseEntityParticipantAHearthstoneDecksHearthstoneDeckImageResponse',
                                  fields: {
                                    UrlPath: { type: graphql.GraphQLString },
                                    RelativePath: {
                                      type: graphql.GraphQLString
                                    }
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
                      'clientPlayerApiPlayerMyMatchesResponseEntityParticipantBResponse',
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
                            'clientPlayerApiPlayerMyMatchesResponseEntityParticipantBRegionResponse',
                          fields: {
                            GamingServerRegionId: {
                              type: graphql.GraphQLFloat
                            },
                            GamingServerRegionName: {
                              type: graphql.GraphQLString
                            }
                          }
                        })
                      },
                      Profile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyMatchesResponseEntityParticipantBProfileResponse',
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
                              'clientPlayerApiPlayerMyMatchesResponseEntityParticipantBHearthstoneDecksResponse',
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
                                    'clientPlayerApiPlayerMyMatchesResponseEntityParticipantBHearthstoneDecksHearthstoneDeckImageResponse',
                                  fields: {
                                    UrlPath: { type: graphql.GraphQLString },
                                    RelativePath: {
                                      type: graphql.GraphQLString
                                    }
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
                MinutesBeforeStartToAllowCheckin: {
                  type: graphql.GraphQLFloat
                },
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
                ScoreManuallyApplyToEntireRound: {
                  type: graphql.GraphQLBoolean
                },
                MapsPlayed: {
                  type: new graphql.GraphQLList(
                    new graphql.GraphQLObjectType({
                      name:
                        'clientPlayerApiPlayerMyMatchesResponseMapsPlayedResponse',
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
                              'clientPlayerApiPlayerMyMatchesResponseMapsPlayedMapResponse',
                            fields: {
                              GameTitleModeMapId: {
                                type: graphql.GraphQLFloat
                              },
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
                      'clientPlayerApiPlayerMyMatchesResponseDisputeResponse',
                    fields: {
                      TournamentMatchDisputeId: { type: graphql.GraphQLFloat },
                      TournamentMatchId: { type: graphql.GraphQLFloat },
                      DisputeState: { type: graphql.GraphQLFloat },
                      InitiatedByPlayerId: { type: graphql.GraphQLFloat },
                      InitiatedByPlayerProfile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyMatchesResponseDisputeInitiatedByPlayerProfileResponse',
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
                      'clientPlayerApiPlayerMyMatchesResponseStreamingServiceResponse',
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
                        'clientPlayerApiPlayerMyMatchesResponseAssistanceRequestsResponse',
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
                        'clientPlayerApiPlayerMyMatchesResponseActionLogResponse',
                      fields: {
                        TournamentMatchActionLogId: {
                          type: graphql.GraphQLFloat
                        },
                        EntityId: { type: graphql.GraphQLFloat },
                        EntityProfile: {
                          type: new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerMyMatchesResponseActionLogEntityProfileResponse',
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
                        'clientPlayerApiPlayerMyMatchesResponsePlaybackResponse',
                      fields: {
                        TournamentMatchPlaybackId: {
                          type: graphql.GraphQLFloat
                        },
                        TournamentMatchId: { type: graphql.GraphQLFloat },
                        TournamentMatchPlayback: {
                          type: graphql.GraphQLString
                        },
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
                      'clientPlayerApiPlayerMyMatchesResponseScoringImageResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
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
  ApiPlayerMyTournamentBygameShortCodeTemplates: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.MyTournamentTemplates',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/My/Tournament/{gameShortCode}/Templates',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesUrlParams',
            fields: { gameShortCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseResponse',
              fields: {
                EntityPlayerId: { type: graphql.GraphQLFloat },
                TournamentTemplateName: { type: graphql.GraphQLString },
                TournamentProfile: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileResponse',
                    fields: {
                      EstimatedPrizePool: { type: graphql.GraphQLFloat },
                      TournamentStateId: { type: graphql.GraphQLFloat },
                      IsTournamentSpecificAdministrator: {
                        type: graphql.GraphQLBoolean
                      },
                      IsPublished: { type: graphql.GraphQLBoolean },
                      GameName: { type: graphql.GraphQLString },
                      IsTournamentAdministrator: {
                        type: graphql.GraphQLBoolean
                      },
                      EntityOwnerId: { type: graphql.GraphQLFloat },
                      GameTitleRulesId: { type: graphql.GraphQLFloat },
                      IsApproved: { type: graphql.GraphQLBoolean },
                      IsRealCurrency: { type: graphql.GraphQLBoolean },
                      EntityApprovedById: { type: graphql.GraphQLFloat },
                      ResultIsFinalized: { type: graphql.GraphQLBoolean },
                      EntityResultFinalizedById: { type: graphql.GraphQLFloat },
                      TournamentPassword: { type: graphql.GraphQLString },
                      PrizePoolAmount: { type: graphql.GraphQLFloat },
                      TournamentPrizeFundingTypeId: {
                        type: graphql.GraphQLFloat
                      },
                      TournamentPrizeFundingTypeName: {
                        type: graphql.GraphQLString
                      },
                      DoesCycle: { type: graphql.GraphQLBoolean },
                      CycleLengthInMinutes: { type: graphql.GraphQLFloat },
                      CycleMinutesBeforeStart: { type: graphql.GraphQLFloat },
                      MaxCycleCount: { type: graphql.GraphQLFloat },
                      CycleCount: { type: graphql.GraphQLFloat },
                      HasCycled: { type: graphql.GraphQLBoolean },
                      CycledTournamentId: { type: graphql.GraphQLFloat },
                      CanOnlyRegisterFromRegionId: {
                        type: graphql.GraphQLFloat
                      },
                      CanOnlyRegisterFromRegionName: {
                        type: graphql.GraphQLString
                      },
                      GamingServerRegionName: { type: graphql.GraphQLString },
                      OpenPlayMinimumTimeToQualify: {
                        type: graphql.GraphQLFloat
                      },
                      RoundRobinIsComplete: { type: graphql.GraphQLBoolean },
                      TournamentSeedingTypeId: { type: graphql.GraphQLFloat },
                      TournamentPairingTypeId: { type: graphql.GraphQLFloat },
                      AutomaticGoLiveOnSchedule: {
                        type: graphql.GraphQLBoolean
                      },
                      MinutesAfterStartToForfeit: {
                        type: graphql.GraphQLFloat
                      },
                      MinutesBeforeStartToAllowCheckin: {
                        type: graphql.GraphQLFloat
                      },
                      Sponsors: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileSponsorsResponse',
                          fields: {
                            TitleSponsor: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileSponsorsTitleSponsorResponse',
                                fields: {
                                  SponsorName: { type: graphql.GraphQLString },
                                  SponsorImageUrl: {
                                    type: graphql.GraphQLString
                                  },
                                  SponsorImageRelativeUrl: {
                                    type: graphql.GraphQLString
                                  },
                                  SponsorLink: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            MainSponsors: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileSponsorsMainSponsorsResponse',
                                  fields: {
                                    SponsorName: {
                                      type: graphql.GraphQLString
                                    },
                                    SponsorImageUrl: {
                                      type: graphql.GraphQLString
                                    },
                                    SponsorImageRelativeUrl: {
                                      type: graphql.GraphQLString
                                    },
                                    SponsorLink: { type: graphql.GraphQLString }
                                  }
                                })
                              )
                            },
                            Partners: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileSponsorsPartnersResponse',
                                  fields: {
                                    SponsorName: {
                                      type: graphql.GraphQLString
                                    },
                                    SponsorImageUrl: {
                                      type: graphql.GraphQLString
                                    },
                                    SponsorImageRelativeUrl: {
                                      type: graphql.GraphQLString
                                    },
                                    SponsorLink: { type: graphql.GraphQLString }
                                  }
                                })
                              )
                            }
                          }
                        })
                      },
                      Announcements: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileAnnouncementsResponse',
                            fields: {
                              TournamentAnnouncementId: {
                                type: graphql.GraphQLFloat
                              },
                              TournamentId: { type: graphql.GraphQLFloat },
                              TournamentAnnouncement: {
                                type: graphql.GraphQLString
                              },
                              CreatedDateTime: { type: graphql.GraphQLString },
                              CreatedById: { type: graphql.GraphQLFloat },
                              EntityName: { type: graphql.GraphQLString },
                              DisplayName: { type: graphql.GraphQLString }
                            }
                          })
                        )
                      },
                      CreatedDateTime: { type: graphql.GraphQLString },
                      GamePlatformFranchiseTitleStateId: {
                        type: graphql.GraphQLFloat
                      },
                      AllMatchesRunManualMode: { type: graphql.GraphQLBoolean },
                      ThirdPartyTournamentId: { type: graphql.GraphQLString },
                      ThirdPartyApiRegion: { type: graphql.GraphQLString },
                      ThirdPartyTournamentConfiguration: {
                        type: graphql.GraphQLString
                      },
                      ServerConfigurationFileName: {
                        type: graphql.GraphQLString
                      },
                      AllowPreCheckin: { type: graphql.GraphQLBoolean },
                      PreCheckinMinutesBeforeStart: {
                        type: graphql.GraphQLFloat
                      },
                      StandByParticipantCount: { type: graphql.GraphQLFloat },
                      IsPreCheckinAvailable: { type: graphql.GraphQLBoolean },
                      Qualifier: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileQualifierResponse',
                          fields: {
                            TournamentId: { type: graphql.GraphQLFloat },
                            NumberOfGroups: { type: graphql.GraphQLFloat },
                            QualifierWinPoints: { type: graphql.GraphQLFloat },
                            QualifierLossPoints: { type: graphql.GraphQLFloat },
                            QualifierTiePoints: { type: graphql.GraphQLFloat },
                            QualifierScoreMultiplierPoints: {
                              type: graphql.GraphQLFloat
                            },
                            QualifierSortTypeId: { type: graphql.GraphQLFloat },
                            League: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileQualifierLeagueResponse',
                                fields: {
                                  EndDateTime: { type: graphql.GraphQLString },
                                  GameTileModeMapId: {
                                    type: graphql.GraphQLFloat
                                  },
                                  MinimumNumberOfMatches: {
                                    type: graphql.GraphQLFloat
                                  },
                                  NumberOfPlays: { type: graphql.GraphQLFloat },
                                  AllowRegistrationAfterTournamentStart: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  GroupPlacementOnJoin: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  MaximumConcurrentMatches: {
                                    type: graphql.GraphQLFloat
                                  },
                                  BufferInMinutesBetweenMatches: {
                                    type: graphql.GraphQLFloat
                                  }
                                }
                              })
                            },
                            Groups: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileQualifierGroupsResponse',
                                  fields: {
                                    TournamentId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    GroupNumber: { type: graphql.GraphQLFloat },
                                    GroupName: { type: graphql.GraphQLString },
                                    IsGuaranteedPlayoffs: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    NumberOfPlayersToAdvance: {
                                      type: graphql.GraphQLFloat
                                    },
                                    PlayRegularSeasonMatches: {
                                      type: graphql.GraphQLBoolean
                                    }
                                  }
                                })
                              )
                            },
                            TieBreakers: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileQualifierTieBreakersResponse',
                                  fields: {
                                    TieBreakerLevelId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    TieBreakerTypeId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    TieBreakerName: {
                                      type: graphql.GraphQLString
                                    },
                                    TieBreakerDescription: {
                                      type: graphql.GraphQLString
                                    }
                                  }
                                })
                              )
                            }
                          }
                        })
                      },
                      TournamentManagementPolicyId: {
                        type: graphql.GraphQLFloat
                      },
                      PredefinedStreamedMatches: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePredefinedStreamedMatchesResponse',
                            fields: {
                              RoundRuleLevelId: { type: graphql.GraphQLFloat },
                              RoundNumber: { type: graphql.GraphQLFloat },
                              MatchNumber: { type: graphql.GraphQLFloat },
                              StreamingServiceId: {
                                type: graphql.GraphQLFloat
                              },
                              BroadcastUrl: { type: graphql.GraphQLString }
                            }
                          })
                        )
                      },
                      LanModeEnabled: { type: graphql.GraphQLBoolean },
                      EnableLanTagging: { type: graphql.GraphQLBoolean },
                      LanTag: { type: graphql.GraphQLString },
                      AllowedCountryIds: { type: graphql.GraphQLFloat },
                      AllowedCountryList: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileAllowedCountryListResponse',
                            fields: {
                              AddressCountryId: { type: graphql.GraphQLFloat },
                              AddressCountryCode: {
                                type: graphql.GraphQLString
                              },
                              AddressCountry3LetterCode: {
                                type: graphql.GraphQLString
                              },
                              AddressCountry: { type: graphql.GraphQLString },
                              AllowsRealMoney: { type: graphql.GraphQLBoolean },
                              FlagSmallImageUrl: {
                                type: graphql.GraphQLString
                              },
                              FlagLargeImageUrl: {
                                type: graphql.GraphQLString
                              },
                              ShowInList: { type: graphql.GraphQLBoolean },
                              OrderBy: { type: graphql.GraphQLFloat }
                            }
                          })
                        )
                      },
                      PauseIfQualifierEndsInTie: {
                        type: graphql.GraphQLBoolean
                      },
                      IsPausedForTiedQualifierFinish: {
                        type: graphql.GraphQLBoolean
                      },
                      IsPausedForTiedQualifierFinishDateTime: {
                        type: graphql.GraphQLString
                      },
                      QualifierTiedFinishIsResolved: {
                        type: graphql.GraphQLBoolean
                      },
                      QualifierTiedFinishIsResolvedDateTime: {
                        type: graphql.GraphQLString
                      },
                      QualifierTiedFinishIsResolvedByAdministratorId: {
                        type: graphql.GraphQLFloat
                      },
                      QualifierTiedFinishIsResolvedByAdministratorProfile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileQualifierTiedFinishIsResolvedByAdministratorProfileResponse',
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
                      RestrictPowerRankingStartDivisionId: {
                        type: graphql.GraphQLFloat
                      },
                      RestrictPowerRankingEndDivisionId: {
                        type: graphql.GraphQLFloat
                      },
                      Payouts: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePayoutsResponse',
                          fields: {
                            HasPayouts: { type: graphql.GraphQLBoolean },
                            IsFixedPayouts: { type: graphql.GraphQLBoolean },
                            PayoutCount: { type: graphql.GraphQLFloat },
                            FixedPayoutAmount: { type: graphql.GraphQLFloat },
                            Places: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePayoutsPlacesResponse',
                                  fields: {
                                    IsAwarded: { type: graphql.GraphQLBoolean },
                                    AwardedDateTime: {
                                      type: graphql.GraphQLString
                                    },
                                    AwardedAmount: {
                                      type: graphql.GraphQLFloat
                                    },
                                    NumberOfWinnersAwarded: {
                                      type: graphql.GraphQLFloat
                                    },
                                    Winners: {
                                      type: new graphql.GraphQLList(
                                        new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePayoutsPlacesWinnersResponse',
                                          fields: {
                                            EntityId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            EntityName: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityIsTeam: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            DisplayName: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityImageUrl: {
                                              type: graphql.GraphQLString
                                            }
                                          }
                                        })
                                      )
                                    },
                                    PlaceNumber: { type: graphql.GraphQLFloat },
                                    PayoutAmount: {
                                      type: graphql.GraphQLFloat
                                    },
                                    PayoutPercent: {
                                      type: graphql.GraphQLFloat
                                    },
                                    OtherPayout: {
                                      type: graphql.GraphQLString
                                    },
                                    XperiencePoints: {
                                      type: graphql.GraphQLFloat
                                    }
                                  }
                                })
                              )
                            }
                          }
                        })
                      },
                      ChallengeMinEntryFee: { type: graphql.GraphQLFloat },
                      ChallengeMaxEntryFee: { type: graphql.GraphQLFloat },
                      ChallengeOffers: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileChallengeOffersResponse',
                            fields: {
                              ChallengeOfferId: { type: graphql.GraphQLFloat },
                              EntryFee: { type: graphql.GraphQLFloat },
                              ServiceFee: { type: graphql.GraphQLFloat },
                              TotalFee: { type: graphql.GraphQLFloat },
                              TournamentId: { type: graphql.GraphQLFloat },
                              TournamentDescription: {
                                type: graphql.GraphQLString
                              },
                              TournamentTitle: { type: graphql.GraphQLString },
                              CreatorEntityId: { type: graphql.GraphQLFloat },
                              ChallengerEntityId: {
                                type: graphql.GraphQLFloat
                              },
                              OfferDateTime: { type: graphql.GraphQLString },
                              CreatorStateId: { type: graphql.GraphQLFloat },
                              CreatorStateDateTime: {
                                type: graphql.GraphQLString
                              },
                              ChallengerStateId: { type: graphql.GraphQLFloat },
                              ChallengerStateDateTime: {
                                type: graphql.GraphQLString
                              },
                              HasPendingRegistration: {
                                type: graphql.GraphQLBoolean
                              },
                              TournamentMatchId: { type: graphql.GraphQLFloat },
                              ChallengeComplete: {
                                type: graphql.GraphQLBoolean
                              },
                              ChallengeCompleteDateTime: {
                                type: graphql.GraphQLString
                              },
                              ChallengerNeedsRegistration: {
                                type: graphql.GraphQLBoolean
                              },
                              CreatorNeedsRegistration: {
                                type: graphql.GraphQLBoolean
                              },
                              ChallengeCancelled: {
                                type: graphql.GraphQLBoolean
                              }
                            }
                          })
                        )
                      },
                      KeepAlive: { type: graphql.GraphQLString },
                      MatchCountdownMinutes: { type: graphql.GraphQLFloat },
                      LocationIds: { type: graphql.GraphQLFloat },
                      Locations: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileLocationsResponse',
                            fields: {
                              LocationId: { type: graphql.GraphQLFloat },
                              StateProvence: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileLocationsStateProvenceResponse',
                                  fields: {
                                    AddressStateProvenceId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    AddressCountryId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    AddressStateProvenceCode: {
                                      type: graphql.GraphQLString
                                    },
                                    AddressStateProvence: {
                                      type: graphql.GraphQLString
                                    },
                                    AllowsRealMoney: {
                                      type: graphql.GraphQLBoolean
                                    }
                                  }
                                })
                              },
                              Country: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileLocationsCountryResponse',
                                  fields: {
                                    AddressCountryId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    AddressCountryCode: {
                                      type: graphql.GraphQLString
                                    },
                                    AddressCountry3LetterCode: {
                                      type: graphql.GraphQLString
                                    },
                                    AddressCountry: {
                                      type: graphql.GraphQLString
                                    },
                                    AllowsRealMoney: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    FlagSmallImageUrl: {
                                      type: graphql.GraphQLString
                                    },
                                    FlagLargeImageUrl: {
                                      type: graphql.GraphQLString
                                    },
                                    ShowInList: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    OrderBy: { type: graphql.GraphQLFloat }
                                  }
                                })
                              },
                              Region: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileLocationsRegionResponse',
                                  fields: {
                                    GamingServerRegionId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    GamingServerRegionName: {
                                      type: graphql.GraphQLString
                                    }
                                  }
                                })
                              },
                              IsActive: { type: graphql.GraphQLBoolean },
                              Location: { type: graphql.GraphQLString },
                              StreetAddress: { type: graphql.GraphQLString },
                              City: { type: graphql.GraphQLString },
                              AddressStateProvenceId: {
                                type: graphql.GraphQLFloat
                              },
                              AddressCountryId: { type: graphql.GraphQLFloat },
                              PostalCode: { type: graphql.GraphQLString },
                              GamingServerRegionId: {
                                type: graphql.GraphQLFloat
                              },
                              PhoneNumber: { type: graphql.GraphQLString },
                              EmailAddress: { type: graphql.GraphQLString },
                              Hours: { type: graphql.GraphQLString },
                              Description: { type: graphql.GraphQLString }
                            }
                          })
                        )
                      },
                      TrophyGroup: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileTrophyGroupResponse',
                          fields: {
                            TrophyGroupId: { type: graphql.GraphQLFloat },
                            TrophyGroup: { type: graphql.GraphQLString },
                            IsActive: { type: graphql.GraphQLBoolean }
                          }
                        })
                      },
                      TrophyGroupId: { type: graphql.GraphQLFloat },
                      XperiencePointsForJoining: { type: graphql.GraphQLFloat },
                      XperiencePointsPerRound: { type: graphql.GraphQLFloat },
                      BracketsBuilt: { type: graphql.GraphQLBoolean },
                      TotalEntryFeesAmount: { type: graphql.GraphQLFloat },
                      TotalPayoutAmount: { type: graphql.GraphQLFloat },
                      TotalRakeAmount: { type: graphql.GraphQLFloat },
                      DirectChallengeOppontentEntityId: {
                        type: graphql.GraphQLFloat
                      },
                      UseCommunitySteamAccounts: {
                        type: graphql.GraphQLBoolean
                      },
                      IsChallenge: { type: graphql.GraphQLBoolean },
                      TournamentIsComplete: { type: graphql.GraphQLBoolean },
                      TournamentIsLive: { type: graphql.GraphQLBoolean },
                      TournamentLiveDateTime: { type: graphql.GraphQLString },
                      TournamentId: { type: graphql.GraphQLFloat },
                      GameTitleModeId: { type: graphql.GraphQLFloat },
                      TournamentTitle: { type: graphql.GraphQLString },
                      TournamentDescription: { type: graphql.GraphQLString },
                      TournamentSeriesId: { type: graphql.GraphQLFloat },
                      GamePlatformFranchiseTitleId: {
                        type: graphql.GraphQLFloat
                      },
                      IsTeamTournament: { type: graphql.GraphQLBoolean },
                      MinimumNumberOfEntities: { type: graphql.GraphQLFloat },
                      MaximumNumberOfEntities: { type: graphql.GraphQLFloat },
                      TeamSize: { type: graphql.GraphQLFloat },
                      TournamentTypeId: { type: graphql.GraphQLFloat },
                      OriginalTournamentTypeId: { type: graphql.GraphQLFloat },
                      TournamentTypeName: { type: graphql.GraphQLString },
                      TournamentStartDateTime: { type: graphql.GraphQLString },
                      TournamentEndDateTime: { type: graphql.GraphQLString },
                      RegistrationCutoffDateTime: {
                        type: graphql.GraphQLString
                      },
                      IsPublic: { type: graphql.GraphQLBoolean },
                      IsFavorite: { type: graphql.GraphQLBoolean },
                      EnableMatchLobby: { type: graphql.GraphQLBoolean },
                      ImageLogo: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileImageLogoResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileImageBackgroundResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      JoinPasswordRequired: { type: graphql.GraphQLBoolean },
                      HasConsolationRound: { type: graphql.GraphQLBoolean },
                      CurrentNumberOfParticipants: {
                        type: graphql.GraphQLFloat
                      },
                      PowerRankingProfileId: { type: graphql.GraphQLFloat },
                      PlatformGame: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePlatformGameResponse',
                          fields: {
                            GamePlatformFranchiseTitleId: {
                              type: graphql.GraphQLFloat
                            },
                            Platform: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePlatformGamePlatformResponse',
                                fields: {
                                  GamePlatformId: {
                                    type: graphql.GraphQLFloat
                                  },
                                  GamePlatformCode: {
                                    type: graphql.GraphQLString
                                  },
                                  GamePlatform: { type: graphql.GraphQLString },
                                  ImageSmall: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePlatformGamePlatformImageSmallResponse',
                                      fields: {
                                        UrlPath: {
                                          type: graphql.GraphQLString
                                        },
                                        RelativePath: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  IsActive: { type: graphql.GraphQLBoolean }
                                }
                              })
                            },
                            Game: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePlatformGameGameResponse',
                                fields: {
                                  GameTitleId: { type: graphql.GraphQLFloat },
                                  GameName: { type: graphql.GraphQLString },
                                  GameShortCode: {
                                    type: graphql.GraphQLString
                                  },
                                  GameDescription: {
                                    type: graphql.GraphQLString
                                  },
                                  GameWebsite: { type: graphql.GraphQLString },
                                  ImageLarge: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePlatformGameGameImageLargeResponse',
                                      fields: {
                                        UrlPath: {
                                          type: graphql.GraphQLString
                                        },
                                        RelativePath: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  ImageSmall: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePlatformGameGameImageSmallResponse',
                                      fields: {
                                        UrlPath: {
                                          type: graphql.GraphQLString
                                        },
                                        RelativePath: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  ImageBackground: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePlatformGameGameImageBackgroundResponse',
                                      fields: {
                                        UrlPath: {
                                          type: graphql.GraphQLString
                                        },
                                        RelativePath: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  MaximumPlayersAllowed: {
                                    type: graphql.GraphQLFloat
                                  },
                                  MinimumMinutesBetweenTournamentRounds: {
                                    type: graphql.GraphQLFloat
                                  },
                                  Franchise: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePlatformGameGameFranchiseResponse',
                                      fields: {
                                        GameFranchiseId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        GameFranchise: {
                                          type: graphql.GraphQLString
                                        },
                                        ImageLarge: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePlatformGameGameFranchiseImageLargeResponse',
                                            fields: {
                                              UrlPath: {
                                                type: graphql.GraphQLString
                                              },
                                              RelativePath: {
                                                type: graphql.GraphQLString
                                              }
                                            }
                                          })
                                        },
                                        ImageSmall: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePlatformGameGameFranchiseImageSmallResponse',
                                            fields: {
                                              UrlPath: {
                                                type: graphql.GraphQLString
                                              },
                                              RelativePath: {
                                                type: graphql.GraphQLString
                                              }
                                            }
                                          })
                                        },
                                        ImageBackground: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePlatformGameGameFranchiseImageBackgroundResponse',
                                            fields: {
                                              UrlPath: {
                                                type: graphql.GraphQLString
                                              },
                                              RelativePath: {
                                                type: graphql.GraphQLString
                                              }
                                            }
                                          })
                                        },
                                        IsActive: {
                                          type: graphql.GraphQLBoolean
                                        }
                                      }
                                    })
                                  },
                                  Developer: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePlatformGameGameDeveloperResponse',
                                      fields: {
                                        GameDeveloperId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        GameDeveloper: {
                                          type: graphql.GraphQLString
                                        },
                                        Website: {
                                          type: graphql.GraphQLString
                                        },
                                        IsActive: {
                                          type: graphql.GraphQLBoolean
                                        }
                                      }
                                    })
                                  },
                                  HasTeamSides: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  IsHearthstone: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  HearthstoneManageDecks: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  IsActive: { type: graphql.GraphQLBoolean }
                                }
                              })
                            },
                            GamePlatformFranchiseTitleStateId: {
                              type: graphql.GraphQLFloat
                            },
                            GameAddedDateTime: { type: graphql.GraphQLString },
                            GameDownloadLink: { type: graphql.GraphQLString },
                            ChatPanelGuid: { type: graphql.GraphQLString },
                            ImageLarge: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePlatformGameImageLargeResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePlatformGameImageSmallResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfilePlatformGameImageBackgroundResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            TotalWinnings: { type: graphql.GraphQLFloat },
                            ThirdPartyApplicationId: {
                              type: graphql.GraphQLString
                            },
                            ThirdPartyApiKey: { type: graphql.GraphQLString },
                            GameReleaseVersion: { type: graphql.GraphQLString },
                            GameRevisedDateTime: {
                              type: graphql.GraphQLString
                            },
                            GameVersion: { type: graphql.GraphQLString },
                            GameVersionNeedsVerification: {
                              type: graphql.GraphQLBoolean
                            },
                            IssueGamesServerToMatch: {
                              type: graphql.GraphQLBoolean
                            },
                            TournamentCount: { type: graphql.GraphQLFloat },
                            ValidationMethodTypeId: {
                              type: graphql.GraphQLFloat
                            },
                            ExternalCallbackTemplateId: {
                              type: graphql.GraphQLFloat
                            },
                            InternalCallbackTemplateId: {
                              type: graphql.GraphQLFloat
                            },
                            GameServerModVersion: { type: graphql.GraphQLFloat }
                          }
                        })
                      },
                      GameTitleMode: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerMyTournamentBygameShortCodeTemplatesResponseTournamentProfileGameTitleModeResponse',
                          fields: {
                            GameTitleModeId: { type: graphql.GraphQLFloat },
                            GameTitleId: { type: graphql.GraphQLFloat },
                            GameTitleMode: { type: graphql.GraphQLString },
                            IsActive: { type: graphql.GraphQLBoolean }
                          }
                        })
                      },
                      LastUpdatedDateTime: { type: graphql.GraphQLString },
                      EntryFee: { type: graphql.GraphQLFloat },
                      ServiceFee: { type: graphql.GraphQLFloat },
                      TotalFee: { type: graphql.GraphQLFloat }
                    }
                  })
                },
                IsPublic: { type: graphql.GraphQLBoolean },
                GameTitleId: { type: graphql.GraphQLFloat },
                TournamentTemplateId: { type: graphql.GraphQLFloat }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyTournamentTemplate: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.MaintainTournamentTemplate',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/My/Tournament/Template',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientPlayerApiPlayerMyTournamentTemplateBody',
            fields: {
              TournamentTemplateName: { type: graphql.GraphQLString },
              TournamentId: { type: graphql.GraphQLFloat },
              IsPublic: { type: graphql.GraphQLBoolean }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyTournamentTemplateResponse',
      fields: {
        Response: { type: graphql.GraphQLBoolean },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyTournamentTemplateBytemplateId: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.DeleteTournamentTemplate',
    method: 'DELETE',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/My/Tournament/Template/{templateId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientPlayerApiPlayerMyTournamentTemplateBytemplateIdUrlParams',
            fields: { templateId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyTournamentTemplateBytemplateIdResponse',
      fields: {
        Response: { type: graphql.GraphQLBoolean },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerByentityName: {
    fullName: 'GamingGrids.Api.Client.v2.Controllers.PlayerController.Profile',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientPlayerApiPlayerByentityNameUrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerByentityNameResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientPlayerApiPlayerByentityNameResponseResponse',
            fields: {
              IsMyProfile: { type: graphql.GraphQLBoolean },
              Address: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerApiPlayerByentityNameResponseAddressResponse',
                  fields: {
                    EntityUserId: { type: graphql.GraphQLFloat },
                    Address: { type: graphql.GraphQLString },
                    City: { type: graphql.GraphQLString },
                    AddressStateProvenceId: { type: graphql.GraphQLFloat },
                    AddressStateProvenceName: { type: graphql.GraphQLString },
                    AddressStateProvenceCode: { type: graphql.GraphQLString },
                    PostalCode: { type: graphql.GraphQLString },
                    AddressCountryId: { type: graphql.GraphQLFloat },
                    Country: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientPlayerApiPlayerByentityNameResponseAddressCountryResponse',
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
                    }
                  }
                })
              },
              Games: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerByentityNameResponseGamesResponse',
                    fields: {
                      IsValid: { type: graphql.GraphQLBoolean },
                      Platforms: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerByentityNameResponseGamesPlatformsResponse',
                            fields: {
                              MyGame: { type: graphql.GraphQLBoolean },
                              IsConfirmed: { type: graphql.GraphQLBoolean },
                              Nickname: { type: graphql.GraphQLString },
                              IsDisconnected: { type: graphql.GraphQLBoolean },
                              PowerRankingScore: { type: graphql.GraphQLFloat },
                              PowerRankingLevelNumber: {
                                type: graphql.GraphQLFloat
                              },
                              PowerRankingDivision: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerByentityNameResponseGamesPlatformsPowerRankingDivisionResponse',
                                  fields: {
                                    PowerRankingDivisionId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    PowerRankingDivision: {
                                      type: graphql.GraphQLString
                                    },
                                    TopPoints: { type: graphql.GraphQLFloat },
                                    BottomPoints: {
                                      type: graphql.GraphQLFloat
                                    },
                                    NumberOfLevels: {
                                      type: graphql.GraphQLFloat
                                    },
                                    PowerRankingLevels: {
                                      type: new graphql.GraphQLList(
                                        new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerByentityNameResponseGamesPlatformsPowerRankingDivisionPowerRankingLevelsResponse',
                                          fields: {
                                            PowerRankingLevelNumber: {
                                              type: graphql.GraphQLFloat
                                            },
                                            TopPoints: {
                                              type: graphql.GraphQLFloat
                                            },
                                            BottomPoints: {
                                              type: graphql.GraphQLFloat
                                            }
                                          }
                                        })
                                      )
                                    },
                                    PowerRankingImageLogo: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerByentityNameResponseGamesPlatformsPowerRankingDivisionPowerRankingImageLogoResponse',
                                        fields: {
                                          UrlPath: {
                                            type: graphql.GraphQLString
                                          },
                                          RelativePath: {
                                            type: graphql.GraphQLString
                                          }
                                        }
                                      })
                                    }
                                  }
                                })
                              },
                              Matches: {
                                type: new graphql.GraphQLList(
                                  new graphql.GraphQLObjectType({
                                    name:
                                      'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesResponse',
                                    fields: {
                                      TournamentTitle: {
                                        type: graphql.GraphQLString
                                      },
                                      TournamentTypeName: {
                                        type: graphql.GraphQLString
                                      },
                                      GameShortCode: {
                                        type: graphql.GraphQLString
                                      },
                                      ImageLogo: {
                                        type: new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesImageLogoResponse',
                                          fields: {
                                            UrlPath: {
                                              type: graphql.GraphQLString
                                            },
                                            RelativePath: {
                                              type: graphql.GraphQLString
                                            }
                                          }
                                        })
                                      },
                                      GameName: { type: graphql.GraphQLString },
                                      TeamSize: { type: graphql.GraphQLFloat },
                                      TournamentMatchStateId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      TournamentMatchId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      TournamentId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      GamePlatformFranchiseTitleId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      IsTeamTournament: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      MatchIsLive: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      MatchLiveDateTime: {
                                        type: graphql.GraphQLString
                                      },
                                      MatchIsComplete: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      MatchCompleteDateTime: {
                                        type: graphql.GraphQLString
                                      },
                                      MatchIsFinalized: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      MatchFinalizedDateTime: {
                                        type: graphql.GraphQLString
                                      },
                                      EnableMatchLobby: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      AllowCheckin: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      AllowCheckinDateTime: {
                                        type: graphql.GraphQLString
                                      },
                                      ScheduledStartDateTime: {
                                        type: graphql.GraphQLString
                                      },
                                      ScheduledForfeitDateTime: {
                                        type: graphql.GraphQLString
                                      },
                                      EntityOwnerId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      EntityOwnerProfile: {
                                        type: new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesEntityOwnerProfileResponse',
                                          fields: {
                                            Nickname: {
                                              type: graphql.GraphQLString
                                            },
                                            LanModeEnabled: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            LanSeatLocation: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityName: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityIsTeam: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            DisplayName: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityImageUrl: {
                                              type: graphql.GraphQLString
                                            },
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
                                      EntityParticipantA: {
                                        type: new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesEntityParticipantAResponse',
                                          fields: {
                                            Id: { type: graphql.GraphQLFloat },
                                            IsBye: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            NoShow: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            Forfeit: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            Score: {
                                              type: graphql.GraphQLFloat
                                            },
                                            LiveScore: {
                                              type: graphql.GraphQLFloat
                                            },
                                            TeamSideId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            TeamSideName: {
                                              type: graphql.GraphQLString
                                            },
                                            CountryCode: {
                                              type: graphql.GraphQLString
                                            },
                                            Region: {
                                              type: new graphql.GraphQLObjectType(
                                                {
                                                  name:
                                                    'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesEntityParticipantARegionResponse',
                                                  fields: {
                                                    GamingServerRegionId: {
                                                      type: graphql.GraphQLFloat
                                                    },
                                                    GamingServerRegionName: {
                                                      type:
                                                        graphql.GraphQLString
                                                    }
                                                  }
                                                }
                                              )
                                            },
                                            Profile: {
                                              type: new graphql.GraphQLObjectType(
                                                {
                                                  name:
                                                    'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesEntityParticipantAProfileResponse',
                                                  fields: {
                                                    Nickname: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    LanModeEnabled: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    LanSeatLocation: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    EntityName: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    EntityIsTeam: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    DisplayName: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    EntityImageUrl: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    EntityImageUrlIsExternal: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    EntityBackgroundImageUrl: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    EntityBackgroundImageUrlIsExternal: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    }
                                                  }
                                                }
                                              )
                                            },
                                            HearthstoneDecks: {
                                              type: new graphql.GraphQLList(
                                                new graphql.GraphQLObjectType({
                                                  name:
                                                    'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesEntityParticipantAHearthstoneDecksResponse',
                                                  fields: {
                                                    PlayerNumber: {
                                                      type: graphql.GraphQLFloat
                                                    },
                                                    IsStartingDeck: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    HearthstoneDeckExcluded: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    GameTitleModeHearthstoneDeckId: {
                                                      type: graphql.GraphQLFloat
                                                    },
                                                    GameTitleModeId: {
                                                      type: graphql.GraphQLFloat
                                                    },
                                                    HearthstoneDeck: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    HearthstoneDeckImage: {
                                                      type: new graphql.GraphQLObjectType(
                                                        {
                                                          name:
                                                            'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesEntityParticipantAHearthstoneDecksHearthstoneDeckImageResponse',
                                                          fields: {
                                                            UrlPath: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            RelativePath: {
                                                              type:
                                                                graphql.GraphQLString
                                                            }
                                                          }
                                                        }
                                                      )
                                                    },
                                                    IsActive: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    }
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
                                            'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesEntityParticipantBResponse',
                                          fields: {
                                            Id: { type: graphql.GraphQLFloat },
                                            IsBye: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            NoShow: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            Forfeit: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            Score: {
                                              type: graphql.GraphQLFloat
                                            },
                                            LiveScore: {
                                              type: graphql.GraphQLFloat
                                            },
                                            TeamSideId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            TeamSideName: {
                                              type: graphql.GraphQLString
                                            },
                                            CountryCode: {
                                              type: graphql.GraphQLString
                                            },
                                            Region: {
                                              type: new graphql.GraphQLObjectType(
                                                {
                                                  name:
                                                    'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesEntityParticipantBRegionResponse',
                                                  fields: {
                                                    GamingServerRegionId: {
                                                      type: graphql.GraphQLFloat
                                                    },
                                                    GamingServerRegionName: {
                                                      type:
                                                        graphql.GraphQLString
                                                    }
                                                  }
                                                }
                                              )
                                            },
                                            Profile: {
                                              type: new graphql.GraphQLObjectType(
                                                {
                                                  name:
                                                    'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesEntityParticipantBProfileResponse',
                                                  fields: {
                                                    Nickname: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    LanModeEnabled: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    LanSeatLocation: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    EntityName: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    EntityIsTeam: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    DisplayName: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    EntityImageUrl: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    EntityImageUrlIsExternal: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    EntityBackgroundImageUrl: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    EntityBackgroundImageUrlIsExternal: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    }
                                                  }
                                                }
                                              )
                                            },
                                            HearthstoneDecks: {
                                              type: new graphql.GraphQLList(
                                                new graphql.GraphQLObjectType({
                                                  name:
                                                    'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesEntityParticipantBHearthstoneDecksResponse',
                                                  fields: {
                                                    PlayerNumber: {
                                                      type: graphql.GraphQLFloat
                                                    },
                                                    IsStartingDeck: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    HearthstoneDeckExcluded: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    GameTitleModeHearthstoneDeckId: {
                                                      type: graphql.GraphQLFloat
                                                    },
                                                    GameTitleModeId: {
                                                      type: graphql.GraphQLFloat
                                                    },
                                                    HearthstoneDeck: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    HearthstoneDeckImage: {
                                                      type: new graphql.GraphQLObjectType(
                                                        {
                                                          name:
                                                            'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesEntityParticipantBHearthstoneDecksHearthstoneDeckImageResponse',
                                                          fields: {
                                                            UrlPath: {
                                                              type:
                                                                graphql.GraphQLString
                                                            },
                                                            RelativePath: {
                                                              type:
                                                                graphql.GraphQLString
                                                            }
                                                          }
                                                        }
                                                      )
                                                    },
                                                    IsActive: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    }
                                                  }
                                                })
                                              )
                                            }
                                          }
                                        })
                                      },
                                      RoundNumber: {
                                        type: graphql.GraphQLFloat
                                      },
                                      RoundLevelTypeId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      MatchNumber: {
                                        type: graphql.GraphQLFloat
                                      },
                                      NumberOfMaps: {
                                        type: graphql.GraphQLFloat
                                      },
                                      MapNumber: { type: graphql.GraphQLFloat },
                                      CurrentGameTitleModeMapId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      MapFileName: {
                                        type: graphql.GraphQLString
                                      },
                                      MapDisplayName: {
                                        type: graphql.GraphQLString
                                      },
                                      GamingServerRegionId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      GamingServerRegionName: {
                                        type: graphql.GraphQLString
                                      },
                                      IsBracket: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      AllowRescheduling: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      WillBroadcast: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      BroadcastUrl: {
                                        type: graphql.GraphQLString
                                      },
                                      AutomaticGoLiveOnSchedule: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      MinutesAfterStartToForfeit: {
                                        type: graphql.GraphQLFloat
                                      },
                                      MinutesBeforeStartToAllowCheckin: {
                                        type: graphql.GraphQLFloat
                                      },
                                      ServerSendPlayerSummaryStatistics: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      GamingServerId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      EntityPlayerControllerId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      AllTeamAPlayersReady: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      TeamAIsReady: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      AllTeamBPlayersReady: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      TeamBIsReady: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      ScoreManuallyReportedDateTime: {
                                        type: graphql.GraphQLString
                                      },
                                      ScoreManuallyReported: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      ScoreManuallyReportedByPlayerId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      ScoreManuallyReportedByTeamA: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      ScoreManuallyApplyToEntireRound: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      MapsPlayed: {
                                        type: new graphql.GraphQLList(
                                          new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesMapsPlayedResponse',
                                            fields: {
                                              TournamentMatchId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              MapNumber: {
                                                type: graphql.GraphQLFloat
                                              },
                                              GameTitleModeMapId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              MapStartDateTime: {
                                                type: graphql.GraphQLString
                                              },
                                              MapEndDateTime: {
                                                type: graphql.GraphQLString
                                              },
                                              EntityParticipantAScore: {
                                                type: graphql.GraphQLFloat
                                              },
                                              EntityParticipantBScore: {
                                                type: graphql.GraphQLFloat
                                              },
                                              Map: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesMapsPlayedMapResponse',
                                                    fields: {
                                                      GameTitleModeMapId: {
                                                        type:
                                                          graphql.GraphQLFloat
                                                      },
                                                      GameTitleModeId: {
                                                        type:
                                                          graphql.GraphQLFloat
                                                      },
                                                      MapFileName: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      MapDisplayName: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      IsActive: {
                                                        type:
                                                          graphql.GraphQLBoolean
                                                      }
                                                    }
                                                  }
                                                )
                                              }
                                            }
                                          })
                                        )
                                      },
                                      Dispute: {
                                        type: new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesDisputeResponse',
                                          fields: {
                                            TournamentMatchDisputeId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            TournamentMatchId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            DisputeState: {
                                              type: graphql.GraphQLFloat
                                            },
                                            InitiatedByPlayerId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            InitiatedByPlayerProfile: {
                                              type: new graphql.GraphQLObjectType(
                                                {
                                                  name:
                                                    'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesDisputeInitiatedByPlayerProfileResponse',
                                                  fields: {
                                                    Nickname: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    LanModeEnabled: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    LanSeatLocation: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    EntityName: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    EntityIsTeam: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    DisplayName: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    EntityImageUrl: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    EntityImageUrlIsExternal: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    },
                                                    EntityBackgroundImageUrl: {
                                                      type:
                                                        graphql.GraphQLString
                                                    },
                                                    EntityBackgroundImageUrlIsExternal: {
                                                      type:
                                                        graphql.GraphQLBoolean
                                                    }
                                                  }
                                                }
                                              )
                                            },
                                            InitiatorOnTeamA: {
                                              type: graphql.GraphQLBoolean
                                            },
                                            TeamAScore: {
                                              type: graphql.GraphQLFloat
                                            },
                                            TeamBScore: {
                                              type: graphql.GraphQLFloat
                                            },
                                            ImageUrl: {
                                              type: graphql.GraphQLString
                                            },
                                            DisputeDateTime: {
                                              type: graphql.GraphQLString
                                            },
                                            EntityAdministratorId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            ResolutionDateTime: {
                                              type: graphql.GraphQLString
                                            },
                                            ResolutionTeamAScore: {
                                              type: graphql.GraphQLFloat
                                            },
                                            ResolutionTeamBScore: {
                                              type: graphql.GraphQLFloat
                                            }
                                          }
                                        })
                                      },
                                      MyMatch: { type: graphql.GraphQLBoolean },
                                      NewServerRequested: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      NewServerRequestedEntityId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      NewServerRequestedByTeamA: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      NewServerRequestedCount: {
                                        type: graphql.GraphQLFloat
                                      },
                                      NeedsAssistance: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      AllowedSpectators: {
                                        type: graphql.GraphQLString
                                      },
                                      StreamingServiceId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      ManualMode: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      ManualServerConnectionInfo: {
                                        type: graphql.GraphQLString
                                      },
                                      StreamingService: {
                                        type: new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesStreamingServiceResponse',
                                          fields: {
                                            StreamingServiceId: {
                                              type: graphql.GraphQLFloat
                                            },
                                            StreamingService: {
                                              type: graphql.GraphQLString
                                            },
                                            SourceName: {
                                              type: graphql.GraphQLString
                                            }
                                          }
                                        })
                                      },
                                      AssistanceRequests: {
                                        type: new graphql.GraphQLList(
                                          new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesAssistanceRequestsResponse',
                                            fields: {
                                              TournamentMatchAssistanceId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              TournamentMatchId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              AssistanceRequestedById: {
                                                type: graphql.GraphQLFloat
                                              },
                                              AssistanceRequestedDateTime: {
                                                type: graphql.GraphQLString
                                              },
                                              ResolvedById: {
                                                type: graphql.GraphQLFloat
                                              },
                                              ResolutionDateTime: {
                                                type: graphql.GraphQLString
                                              },
                                              ResolutionComments: {
                                                type: graphql.GraphQLString
                                              }
                                            }
                                          })
                                        )
                                      },
                                      LastUpdatedDateTime: {
                                        type: graphql.GraphQLString
                                      },
                                      ServerConfigurationFileName: {
                                        type: graphql.GraphQLString
                                      },
                                      MatchAdministratorId: {
                                        type: graphql.GraphQLFloat
                                      },
                                      ActionLog: {
                                        type: new graphql.GraphQLList(
                                          new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesActionLogResponse',
                                            fields: {
                                              TournamentMatchActionLogId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              EntityId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              EntityProfile: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesActionLogEntityProfileResponse',
                                                    fields: {
                                                      Nickname: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      LanModeEnabled: {
                                                        type:
                                                          graphql.GraphQLBoolean
                                                      },
                                                      LanSeatLocation: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      EntityName: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      EntityIsTeam: {
                                                        type:
                                                          graphql.GraphQLBoolean
                                                      },
                                                      DisplayName: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      EntityImageUrl: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      EntityImageUrlIsExternal: {
                                                        type:
                                                          graphql.GraphQLBoolean
                                                      },
                                                      EntityBackgroundImageUrl: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      EntityBackgroundImageUrlIsExternal: {
                                                        type:
                                                          graphql.GraphQLBoolean
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              TournamentMatchId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              ActionLogTypeId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              ActionLogType: {
                                                type: graphql.GraphQLString
                                              },
                                              AdministratorComment: {
                                                type: graphql.GraphQLString
                                              },
                                              ActionLogDateTime: {
                                                type: graphql.GraphQLString
                                              }
                                            }
                                          })
                                        )
                                      },
                                      Playback: {
                                        type: new graphql.GraphQLList(
                                          new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesPlaybackResponse',
                                            fields: {
                                              TournamentMatchPlaybackId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              TournamentMatchId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              TournamentMatchPlayback: {
                                                type: graphql.GraphQLString
                                              },
                                              TournamentMatchPlaybackDateTime: {
                                                type: graphql.GraphQLString
                                              }
                                            }
                                          })
                                        )
                                      },
                                      QualifierGroupNumber: {
                                        type: graphql.GraphQLFloat
                                      },
                                      IsQualifier: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      HasTieBreaker: {
                                        type: graphql.GraphQLBoolean
                                      },
                                      TieBreakerCount: {
                                        type: graphql.GraphQLFloat
                                      },
                                      ScoringImage: {
                                        type: new graphql.GraphQLObjectType({
                                          name:
                                            'clientPlayerApiPlayerByentityNameResponseGamesPlatformsMatchesScoringImageResponse',
                                          fields: {
                                            UrlPath: {
                                              type: graphql.GraphQLString
                                            },
                                            RelativePath: {
                                              type: graphql.GraphQLString
                                            }
                                          }
                                        })
                                      }
                                    }
                                  })
                                )
                              },
                              Statistics: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerByentityNameResponseGamesPlatformsStatisticsResponse',
                                  fields: {
                                    MatchPlayStatisticsId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    EntityId: { type: graphql.GraphQLFloat },
                                    MatchesPlayedCount: {
                                      type: graphql.GraphQLFloat
                                    },
                                    WonCount: { type: graphql.GraphQLFloat },
                                    LostCount: { type: graphql.GraphQLFloat },
                                    TieCount: { type: graphql.GraphQLFloat },
                                    ForfeitedWonCount: {
                                      type: graphql.GraphQLFloat
                                    },
                                    ForfeitedLostCount: {
                                      type: graphql.GraphQLFloat
                                    },
                                    NoShowCount: { type: graphql.GraphQLFloat },
                                    TotalWinnings: {
                                      type: graphql.GraphQLFloat
                                    },
                                    TotalScore: { type: graphql.GraphQLFloat },
                                    TotalTimePlayedInSeconds: {
                                      type: graphql.GraphQLFloat
                                    },
                                    WinStreak: { type: graphql.GraphQLFloat },
                                    LossStreak: { type: graphql.GraphQLFloat }
                                  }
                                })
                              },
                              GamePlatformId: { type: graphql.GraphQLFloat },
                              GamePlatformCode: { type: graphql.GraphQLString },
                              GamePlatform: { type: graphql.GraphQLString },
                              ImageSmall: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerByentityNameResponseGamesPlatformsImageSmallResponse',
                                  fields: {
                                    UrlPath: { type: graphql.GraphQLString },
                                    RelativePath: {
                                      type: graphql.GraphQLString
                                    }
                                  }
                                })
                              },
                              IsActive: { type: graphql.GraphQLBoolean }
                            }
                          })
                        )
                      },
                      GameTitleId: { type: graphql.GraphQLFloat },
                      GameName: { type: graphql.GraphQLString },
                      GameShortCode: { type: graphql.GraphQLString },
                      GameDescription: { type: graphql.GraphQLString },
                      GameWebsite: { type: graphql.GraphQLString },
                      ImageLarge: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerByentityNameResponseGamesImageLargeResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerByentityNameResponseGamesImageSmallResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerByentityNameResponseGamesImageBackgroundResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      MaximumPlayersAllowed: { type: graphql.GraphQLFloat },
                      MinimumMinutesBetweenTournamentRounds: {
                        type: graphql.GraphQLFloat
                      },
                      Franchise: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerByentityNameResponseGamesFranchiseResponse',
                          fields: {
                            GameFranchiseId: { type: graphql.GraphQLFloat },
                            GameFranchise: { type: graphql.GraphQLString },
                            ImageLarge: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerByentityNameResponseGamesFranchiseImageLargeResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerByentityNameResponseGamesFranchiseImageSmallResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerByentityNameResponseGamesFranchiseImageBackgroundResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            IsActive: { type: graphql.GraphQLBoolean }
                          }
                        })
                      },
                      Developer: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerByentityNameResponseGamesDeveloperResponse',
                          fields: {
                            GameDeveloperId: { type: graphql.GraphQLFloat },
                            GameDeveloper: { type: graphql.GraphQLString },
                            Website: { type: graphql.GraphQLString },
                            IsActive: { type: graphql.GraphQLBoolean }
                          }
                        })
                      },
                      HasTeamSides: { type: graphql.GraphQLBoolean },
                      IsHearthstone: { type: graphql.GraphQLBoolean },
                      HearthstoneManageDecks: { type: graphql.GraphQLBoolean },
                      IsActive: { type: graphql.GraphQLBoolean }
                    }
                  })
                )
              },
              Statistics: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerApiPlayerByentityNameResponseStatisticsResponse',
                  fields: {
                    MatchPlayStatisticsId: { type: graphql.GraphQLFloat },
                    EntityId: { type: graphql.GraphQLFloat },
                    MatchesPlayedCount: { type: graphql.GraphQLFloat },
                    WonCount: { type: graphql.GraphQLFloat },
                    LostCount: { type: graphql.GraphQLFloat },
                    TieCount: { type: graphql.GraphQLFloat },
                    ForfeitedWonCount: { type: graphql.GraphQLFloat },
                    ForfeitedLostCount: { type: graphql.GraphQLFloat },
                    NoShowCount: { type: graphql.GraphQLFloat },
                    TotalWinnings: { type: graphql.GraphQLFloat },
                    TotalScore: { type: graphql.GraphQLFloat },
                    TotalTimePlayedInSeconds: { type: graphql.GraphQLFloat },
                    WinStreak: { type: graphql.GraphQLFloat },
                    LossStreak: { type: graphql.GraphQLFloat }
                  }
                })
              },
              TeamStatistics: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerApiPlayerByentityNameResponseTeamStatisticsResponse',
                  fields: {
                    MatchPlayStatisticsId: { type: graphql.GraphQLFloat },
                    EntityId: { type: graphql.GraphQLFloat },
                    MatchesPlayedCount: { type: graphql.GraphQLFloat },
                    WonCount: { type: graphql.GraphQLFloat },
                    LostCount: { type: graphql.GraphQLFloat },
                    TieCount: { type: graphql.GraphQLFloat },
                    ForfeitedWonCount: { type: graphql.GraphQLFloat },
                    ForfeitedLostCount: { type: graphql.GraphQLFloat },
                    NoShowCount: { type: graphql.GraphQLFloat },
                    TotalWinnings: { type: graphql.GraphQLFloat },
                    TotalScore: { type: graphql.GraphQLFloat },
                    TotalTimePlayedInSeconds: { type: graphql.GraphQLFloat },
                    WinStreak: { type: graphql.GraphQLFloat },
                    LossStreak: { type: graphql.GraphQLFloat }
                  }
                })
              },
              Teams: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerByentityNameResponseTeamsResponse',
                    fields: {
                      Statistics: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerByentityNameResponseTeamsStatisticsResponse',
                          fields: {
                            MatchPlayStatisticsId: {
                              type: graphql.GraphQLFloat
                            },
                            EntityId: { type: graphql.GraphQLFloat },
                            MatchesPlayedCount: { type: graphql.GraphQLFloat },
                            WonCount: { type: graphql.GraphQLFloat },
                            LostCount: { type: graphql.GraphQLFloat },
                            TieCount: { type: graphql.GraphQLFloat },
                            ForfeitedWonCount: { type: graphql.GraphQLFloat },
                            ForfeitedLostCount: { type: graphql.GraphQLFloat },
                            NoShowCount: { type: graphql.GraphQLFloat },
                            TotalWinnings: { type: graphql.GraphQLFloat },
                            TotalScore: { type: graphql.GraphQLFloat },
                            TotalTimePlayedInSeconds: {
                              type: graphql.GraphQLFloat
                            },
                            WinStreak: { type: graphql.GraphQLFloat },
                            LossStreak: { type: graphql.GraphQLFloat }
                          }
                        })
                      },
                      IsFriendsTeam: { type: graphql.GraphQLBoolean },
                      CanEditProfile: { type: graphql.GraphQLBoolean },
                      EntityTeamId: { type: graphql.GraphQLFloat },
                      TeamDescription: { type: graphql.GraphQLString },
                      NumberOfPlayers: { type: graphql.GraphQLFloat },
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
                      EntityImageUrlIsExternal: {
                        type: graphql.GraphQLBoolean
                      },
                      EntityBackgroundImageUrl: { type: graphql.GraphQLString },
                      EntityBackgroundImageUrlIsExternal: {
                        type: graphql.GraphQLBoolean
                      }
                    }
                  })
                )
              },
              Schedule: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerByentityNameResponseScheduleResponse',
                    fields: {
                      Tournament: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerByentityNameResponseScheduleTournamentResponse',
                          fields: {
                            EstimatedPrizePool: { type: graphql.GraphQLFloat },
                            TournamentStateId: { type: graphql.GraphQLFloat },
                            IsTournamentSpecificAdministrator: {
                              type: graphql.GraphQLBoolean
                            },
                            IsPublished: { type: graphql.GraphQLBoolean },
                            GameName: { type: graphql.GraphQLString },
                            IsTournamentAdministrator: {
                              type: graphql.GraphQLBoolean
                            },
                            EntityOwnerId: { type: graphql.GraphQLFloat },
                            GameTitleRulesId: { type: graphql.GraphQLFloat },
                            IsApproved: { type: graphql.GraphQLBoolean },
                            IsRealCurrency: { type: graphql.GraphQLBoolean },
                            EntityApprovedById: { type: graphql.GraphQLFloat },
                            ResultIsFinalized: { type: graphql.GraphQLBoolean },
                            EntityResultFinalizedById: {
                              type: graphql.GraphQLFloat
                            },
                            TournamentPassword: { type: graphql.GraphQLString },
                            PrizePoolAmount: { type: graphql.GraphQLFloat },
                            TournamentPrizeFundingTypeId: {
                              type: graphql.GraphQLFloat
                            },
                            TournamentPrizeFundingTypeName: {
                              type: graphql.GraphQLString
                            },
                            DoesCycle: { type: graphql.GraphQLBoolean },
                            CycleLengthInMinutes: {
                              type: graphql.GraphQLFloat
                            },
                            CycleMinutesBeforeStart: {
                              type: graphql.GraphQLFloat
                            },
                            MaxCycleCount: { type: graphql.GraphQLFloat },
                            CycleCount: { type: graphql.GraphQLFloat },
                            HasCycled: { type: graphql.GraphQLBoolean },
                            CycledTournamentId: { type: graphql.GraphQLFloat },
                            CanOnlyRegisterFromRegionId: {
                              type: graphql.GraphQLFloat
                            },
                            CanOnlyRegisterFromRegionName: {
                              type: graphql.GraphQLString
                            },
                            GamingServerRegionName: {
                              type: graphql.GraphQLString
                            },
                            OpenPlayMinimumTimeToQualify: {
                              type: graphql.GraphQLFloat
                            },
                            RoundRobinIsComplete: {
                              type: graphql.GraphQLBoolean
                            },
                            TournamentSeedingTypeId: {
                              type: graphql.GraphQLFloat
                            },
                            TournamentPairingTypeId: {
                              type: graphql.GraphQLFloat
                            },
                            AutomaticGoLiveOnSchedule: {
                              type: graphql.GraphQLBoolean
                            },
                            MinutesAfterStartToForfeit: {
                              type: graphql.GraphQLFloat
                            },
                            MinutesBeforeStartToAllowCheckin: {
                              type: graphql.GraphQLFloat
                            },
                            Sponsors: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerByentityNameResponseScheduleTournamentSponsorsResponse',
                                fields: {
                                  TitleSponsor: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerByentityNameResponseScheduleTournamentSponsorsTitleSponsorResponse',
                                      fields: {
                                        SponsorName: {
                                          type: graphql.GraphQLString
                                        },
                                        SponsorImageUrl: {
                                          type: graphql.GraphQLString
                                        },
                                        SponsorImageRelativeUrl: {
                                          type: graphql.GraphQLString
                                        },
                                        SponsorLink: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  MainSponsors: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerByentityNameResponseScheduleTournamentSponsorsMainSponsorsResponse',
                                        fields: {
                                          SponsorName: {
                                            type: graphql.GraphQLString
                                          },
                                          SponsorImageUrl: {
                                            type: graphql.GraphQLString
                                          },
                                          SponsorImageRelativeUrl: {
                                            type: graphql.GraphQLString
                                          },
                                          SponsorLink: {
                                            type: graphql.GraphQLString
                                          }
                                        }
                                      })
                                    )
                                  },
                                  Partners: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerByentityNameResponseScheduleTournamentSponsorsPartnersResponse',
                                        fields: {
                                          SponsorName: {
                                            type: graphql.GraphQLString
                                          },
                                          SponsorImageUrl: {
                                            type: graphql.GraphQLString
                                          },
                                          SponsorImageRelativeUrl: {
                                            type: graphql.GraphQLString
                                          },
                                          SponsorLink: {
                                            type: graphql.GraphQLString
                                          }
                                        }
                                      })
                                    )
                                  }
                                }
                              })
                            },
                            Announcements: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerByentityNameResponseScheduleTournamentAnnouncementsResponse',
                                  fields: {
                                    TournamentAnnouncementId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    TournamentId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    TournamentAnnouncement: {
                                      type: graphql.GraphQLString
                                    },
                                    CreatedDateTime: {
                                      type: graphql.GraphQLString
                                    },
                                    CreatedById: { type: graphql.GraphQLFloat },
                                    EntityName: { type: graphql.GraphQLString },
                                    DisplayName: { type: graphql.GraphQLString }
                                  }
                                })
                              )
                            },
                            CreatedDateTime: { type: graphql.GraphQLString },
                            GamePlatformFranchiseTitleStateId: {
                              type: graphql.GraphQLFloat
                            },
                            AllMatchesRunManualMode: {
                              type: graphql.GraphQLBoolean
                            },
                            ThirdPartyTournamentId: {
                              type: graphql.GraphQLString
                            },
                            ThirdPartyApiRegion: {
                              type: graphql.GraphQLString
                            },
                            ThirdPartyTournamentConfiguration: {
                              type: graphql.GraphQLString
                            },
                            ServerConfigurationFileName: {
                              type: graphql.GraphQLString
                            },
                            AllowPreCheckin: { type: graphql.GraphQLBoolean },
                            PreCheckinMinutesBeforeStart: {
                              type: graphql.GraphQLFloat
                            },
                            StandByParticipantCount: {
                              type: graphql.GraphQLFloat
                            },
                            IsPreCheckinAvailable: {
                              type: graphql.GraphQLBoolean
                            },
                            Qualifier: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerByentityNameResponseScheduleTournamentQualifierResponse',
                                fields: {
                                  TournamentId: { type: graphql.GraphQLFloat },
                                  NumberOfGroups: {
                                    type: graphql.GraphQLFloat
                                  },
                                  QualifierWinPoints: {
                                    type: graphql.GraphQLFloat
                                  },
                                  QualifierLossPoints: {
                                    type: graphql.GraphQLFloat
                                  },
                                  QualifierTiePoints: {
                                    type: graphql.GraphQLFloat
                                  },
                                  QualifierScoreMultiplierPoints: {
                                    type: graphql.GraphQLFloat
                                  },
                                  QualifierSortTypeId: {
                                    type: graphql.GraphQLFloat
                                  },
                                  League: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerByentityNameResponseScheduleTournamentQualifierLeagueResponse',
                                      fields: {
                                        EndDateTime: {
                                          type: graphql.GraphQLString
                                        },
                                        GameTileModeMapId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        MinimumNumberOfMatches: {
                                          type: graphql.GraphQLFloat
                                        },
                                        NumberOfPlays: {
                                          type: graphql.GraphQLFloat
                                        },
                                        AllowRegistrationAfterTournamentStart: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        GroupPlacementOnJoin: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        MaximumConcurrentMatches: {
                                          type: graphql.GraphQLFloat
                                        },
                                        BufferInMinutesBetweenMatches: {
                                          type: graphql.GraphQLFloat
                                        }
                                      }
                                    })
                                  },
                                  Groups: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerByentityNameResponseScheduleTournamentQualifierGroupsResponse',
                                        fields: {
                                          TournamentId: {
                                            type: graphql.GraphQLFloat
                                          },
                                          GroupNumber: {
                                            type: graphql.GraphQLFloat
                                          },
                                          GroupName: {
                                            type: graphql.GraphQLString
                                          },
                                          IsGuaranteedPlayoffs: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          NumberOfPlayersToAdvance: {
                                            type: graphql.GraphQLFloat
                                          },
                                          PlayRegularSeasonMatches: {
                                            type: graphql.GraphQLBoolean
                                          }
                                        }
                                      })
                                    )
                                  },
                                  TieBreakers: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerByentityNameResponseScheduleTournamentQualifierTieBreakersResponse',
                                        fields: {
                                          TieBreakerLevelId: {
                                            type: graphql.GraphQLFloat
                                          },
                                          TieBreakerTypeId: {
                                            type: graphql.GraphQLFloat
                                          },
                                          TieBreakerName: {
                                            type: graphql.GraphQLString
                                          },
                                          TieBreakerDescription: {
                                            type: graphql.GraphQLString
                                          }
                                        }
                                      })
                                    )
                                  }
                                }
                              })
                            },
                            TournamentManagementPolicyId: {
                              type: graphql.GraphQLFloat
                            },
                            PredefinedStreamedMatches: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPredefinedStreamedMatchesResponse',
                                  fields: {
                                    RoundRuleLevelId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    RoundNumber: { type: graphql.GraphQLFloat },
                                    MatchNumber: { type: graphql.GraphQLFloat },
                                    StreamingServiceId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    BroadcastUrl: {
                                      type: graphql.GraphQLString
                                    }
                                  }
                                })
                              )
                            },
                            LanModeEnabled: { type: graphql.GraphQLBoolean },
                            EnableLanTagging: { type: graphql.GraphQLBoolean },
                            LanTag: { type: graphql.GraphQLString },
                            AllowedCountryIds: { type: graphql.GraphQLFloat },
                            AllowedCountryList: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerByentityNameResponseScheduleTournamentAllowedCountryListResponse',
                                  fields: {
                                    AddressCountryId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    AddressCountryCode: {
                                      type: graphql.GraphQLString
                                    },
                                    AddressCountry3LetterCode: {
                                      type: graphql.GraphQLString
                                    },
                                    AddressCountry: {
                                      type: graphql.GraphQLString
                                    },
                                    AllowsRealMoney: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    FlagSmallImageUrl: {
                                      type: graphql.GraphQLString
                                    },
                                    FlagLargeImageUrl: {
                                      type: graphql.GraphQLString
                                    },
                                    ShowInList: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    OrderBy: { type: graphql.GraphQLFloat }
                                  }
                                })
                              )
                            },
                            PauseIfQualifierEndsInTie: {
                              type: graphql.GraphQLBoolean
                            },
                            IsPausedForTiedQualifierFinish: {
                              type: graphql.GraphQLBoolean
                            },
                            IsPausedForTiedQualifierFinishDateTime: {
                              type: graphql.GraphQLString
                            },
                            QualifierTiedFinishIsResolved: {
                              type: graphql.GraphQLBoolean
                            },
                            QualifierTiedFinishIsResolvedDateTime: {
                              type: graphql.GraphQLString
                            },
                            QualifierTiedFinishIsResolvedByAdministratorId: {
                              type: graphql.GraphQLFloat
                            },
                            QualifierTiedFinishIsResolvedByAdministratorProfile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerByentityNameResponseScheduleTournamentQualifierTiedFinishIsResolvedByAdministratorProfileResponse',
                                fields: {
                                  Nickname: { type: graphql.GraphQLString },
                                  LanModeEnabled: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  LanSeatLocation: {
                                    type: graphql.GraphQLString
                                  },
                                  EntityName: { type: graphql.GraphQLString },
                                  EntityIsTeam: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  DisplayName: { type: graphql.GraphQLString },
                                  EntityImageUrl: {
                                    type: graphql.GraphQLString
                                  },
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
                            RestrictPowerRankingStartDivisionId: {
                              type: graphql.GraphQLFloat
                            },
                            RestrictPowerRankingEndDivisionId: {
                              type: graphql.GraphQLFloat
                            },
                            Payouts: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPayoutsResponse',
                                fields: {
                                  HasPayouts: { type: graphql.GraphQLBoolean },
                                  IsFixedPayouts: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  PayoutCount: { type: graphql.GraphQLFloat },
                                  FixedPayoutAmount: {
                                    type: graphql.GraphQLFloat
                                  },
                                  Places: {
                                    type: new graphql.GraphQLList(
                                      new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPayoutsPlacesResponse',
                                        fields: {
                                          IsAwarded: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          AwardedDateTime: {
                                            type: graphql.GraphQLString
                                          },
                                          AwardedAmount: {
                                            type: graphql.GraphQLFloat
                                          },
                                          NumberOfWinnersAwarded: {
                                            type: graphql.GraphQLFloat
                                          },
                                          Winners: {
                                            type: new graphql.GraphQLList(
                                              new graphql.GraphQLObjectType({
                                                name:
                                                  'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPayoutsPlacesWinnersResponse',
                                                fields: {
                                                  EntityId: {
                                                    type: graphql.GraphQLFloat
                                                  },
                                                  EntityName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  EntityIsTeam: {
                                                    type: graphql.GraphQLBoolean
                                                  },
                                                  DisplayName: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  EntityImageUrl: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              })
                                            )
                                          },
                                          PlaceNumber: {
                                            type: graphql.GraphQLFloat
                                          },
                                          PayoutAmount: {
                                            type: graphql.GraphQLFloat
                                          },
                                          PayoutPercent: {
                                            type: graphql.GraphQLFloat
                                          },
                                          OtherPayout: {
                                            type: graphql.GraphQLString
                                          },
                                          XperiencePoints: {
                                            type: graphql.GraphQLFloat
                                          }
                                        }
                                      })
                                    )
                                  }
                                }
                              })
                            },
                            ChallengeMinEntryFee: {
                              type: graphql.GraphQLFloat
                            },
                            ChallengeMaxEntryFee: {
                              type: graphql.GraphQLFloat
                            },
                            ChallengeOffers: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerByentityNameResponseScheduleTournamentChallengeOffersResponse',
                                  fields: {
                                    ChallengeOfferId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    EntryFee: { type: graphql.GraphQLFloat },
                                    ServiceFee: { type: graphql.GraphQLFloat },
                                    TotalFee: { type: graphql.GraphQLFloat },
                                    TournamentId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    TournamentDescription: {
                                      type: graphql.GraphQLString
                                    },
                                    TournamentTitle: {
                                      type: graphql.GraphQLString
                                    },
                                    CreatorEntityId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    ChallengerEntityId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    OfferDateTime: {
                                      type: graphql.GraphQLString
                                    },
                                    CreatorStateId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    CreatorStateDateTime: {
                                      type: graphql.GraphQLString
                                    },
                                    ChallengerStateId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    ChallengerStateDateTime: {
                                      type: graphql.GraphQLString
                                    },
                                    HasPendingRegistration: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    TournamentMatchId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    ChallengeComplete: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    ChallengeCompleteDateTime: {
                                      type: graphql.GraphQLString
                                    },
                                    ChallengerNeedsRegistration: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    CreatorNeedsRegistration: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    ChallengeCancelled: {
                                      type: graphql.GraphQLBoolean
                                    }
                                  }
                                })
                              )
                            },
                            KeepAlive: { type: graphql.GraphQLString },
                            MatchCountdownMinutes: {
                              type: graphql.GraphQLFloat
                            },
                            LocationIds: { type: graphql.GraphQLFloat },
                            Locations: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerByentityNameResponseScheduleTournamentLocationsResponse',
                                  fields: {
                                    LocationId: { type: graphql.GraphQLFloat },
                                    StateProvence: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerByentityNameResponseScheduleTournamentLocationsStateProvenceResponse',
                                        fields: {
                                          AddressStateProvenceId: {
                                            type: graphql.GraphQLFloat
                                          },
                                          AddressCountryId: {
                                            type: graphql.GraphQLFloat
                                          },
                                          AddressStateProvenceCode: {
                                            type: graphql.GraphQLString
                                          },
                                          AddressStateProvence: {
                                            type: graphql.GraphQLString
                                          },
                                          AllowsRealMoney: {
                                            type: graphql.GraphQLBoolean
                                          }
                                        }
                                      })
                                    },
                                    Country: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerByentityNameResponseScheduleTournamentLocationsCountryResponse',
                                        fields: {
                                          AddressCountryId: {
                                            type: graphql.GraphQLFloat
                                          },
                                          AddressCountryCode: {
                                            type: graphql.GraphQLString
                                          },
                                          AddressCountry3LetterCode: {
                                            type: graphql.GraphQLString
                                          },
                                          AddressCountry: {
                                            type: graphql.GraphQLString
                                          },
                                          AllowsRealMoney: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          FlagSmallImageUrl: {
                                            type: graphql.GraphQLString
                                          },
                                          FlagLargeImageUrl: {
                                            type: graphql.GraphQLString
                                          },
                                          ShowInList: {
                                            type: graphql.GraphQLBoolean
                                          },
                                          OrderBy: {
                                            type: graphql.GraphQLFloat
                                          }
                                        }
                                      })
                                    },
                                    Region: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerByentityNameResponseScheduleTournamentLocationsRegionResponse',
                                        fields: {
                                          GamingServerRegionId: {
                                            type: graphql.GraphQLFloat
                                          },
                                          GamingServerRegionName: {
                                            type: graphql.GraphQLString
                                          }
                                        }
                                      })
                                    },
                                    IsActive: { type: graphql.GraphQLBoolean },
                                    Location: { type: graphql.GraphQLString },
                                    StreetAddress: {
                                      type: graphql.GraphQLString
                                    },
                                    City: { type: graphql.GraphQLString },
                                    AddressStateProvenceId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    AddressCountryId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    PostalCode: { type: graphql.GraphQLString },
                                    GamingServerRegionId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    PhoneNumber: {
                                      type: graphql.GraphQLString
                                    },
                                    EmailAddress: {
                                      type: graphql.GraphQLString
                                    },
                                    Hours: { type: graphql.GraphQLString },
                                    Description: { type: graphql.GraphQLString }
                                  }
                                })
                              )
                            },
                            TrophyGroup: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerByentityNameResponseScheduleTournamentTrophyGroupResponse',
                                fields: {
                                  TrophyGroupId: { type: graphql.GraphQLFloat },
                                  TrophyGroup: { type: graphql.GraphQLString },
                                  IsActive: { type: graphql.GraphQLBoolean }
                                }
                              })
                            },
                            TrophyGroupId: { type: graphql.GraphQLFloat },
                            XperiencePointsForJoining: {
                              type: graphql.GraphQLFloat
                            },
                            XperiencePointsPerRound: {
                              type: graphql.GraphQLFloat
                            },
                            BracketsBuilt: { type: graphql.GraphQLBoolean },
                            TotalEntryFeesAmount: {
                              type: graphql.GraphQLFloat
                            },
                            TotalPayoutAmount: { type: graphql.GraphQLFloat },
                            TotalRakeAmount: { type: graphql.GraphQLFloat },
                            DirectChallengeOppontentEntityId: {
                              type: graphql.GraphQLFloat
                            },
                            UseCommunitySteamAccounts: {
                              type: graphql.GraphQLBoolean
                            },
                            IsChallenge: { type: graphql.GraphQLBoolean },
                            TournamentIsComplete: {
                              type: graphql.GraphQLBoolean
                            },
                            TournamentIsLive: { type: graphql.GraphQLBoolean },
                            TournamentLiveDateTime: {
                              type: graphql.GraphQLString
                            },
                            TournamentId: { type: graphql.GraphQLFloat },
                            GameTitleModeId: { type: graphql.GraphQLFloat },
                            TournamentTitle: { type: graphql.GraphQLString },
                            TournamentDescription: {
                              type: graphql.GraphQLString
                            },
                            TournamentSeriesId: { type: graphql.GraphQLFloat },
                            GamePlatformFranchiseTitleId: {
                              type: graphql.GraphQLFloat
                            },
                            IsTeamTournament: { type: graphql.GraphQLBoolean },
                            MinimumNumberOfEntities: {
                              type: graphql.GraphQLFloat
                            },
                            MaximumNumberOfEntities: {
                              type: graphql.GraphQLFloat
                            },
                            TeamSize: { type: graphql.GraphQLFloat },
                            TournamentTypeId: { type: graphql.GraphQLFloat },
                            OriginalTournamentTypeId: {
                              type: graphql.GraphQLFloat
                            },
                            TournamentTypeName: { type: graphql.GraphQLString },
                            TournamentStartDateTime: {
                              type: graphql.GraphQLString
                            },
                            TournamentEndDateTime: {
                              type: graphql.GraphQLString
                            },
                            RegistrationCutoffDateTime: {
                              type: graphql.GraphQLString
                            },
                            IsPublic: { type: graphql.GraphQLBoolean },
                            IsFavorite: { type: graphql.GraphQLBoolean },
                            EnableMatchLobby: { type: graphql.GraphQLBoolean },
                            ImageLogo: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerByentityNameResponseScheduleTournamentImageLogoResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerByentityNameResponseScheduleTournamentImageBackgroundResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            JoinPasswordRequired: {
                              type: graphql.GraphQLBoolean
                            },
                            HasConsolationRound: {
                              type: graphql.GraphQLBoolean
                            },
                            CurrentNumberOfParticipants: {
                              type: graphql.GraphQLFloat
                            },
                            PowerRankingProfileId: {
                              type: graphql.GraphQLFloat
                            },
                            PlatformGame: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPlatformGameResponse',
                                fields: {
                                  GamePlatformFranchiseTitleId: {
                                    type: graphql.GraphQLFloat
                                  },
                                  Platform: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPlatformGamePlatformResponse',
                                      fields: {
                                        GamePlatformId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        GamePlatformCode: {
                                          type: graphql.GraphQLString
                                        },
                                        GamePlatform: {
                                          type: graphql.GraphQLString
                                        },
                                        ImageSmall: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPlatformGamePlatformImageSmallResponse',
                                            fields: {
                                              UrlPath: {
                                                type: graphql.GraphQLString
                                              },
                                              RelativePath: {
                                                type: graphql.GraphQLString
                                              }
                                            }
                                          })
                                        },
                                        IsActive: {
                                          type: graphql.GraphQLBoolean
                                        }
                                      }
                                    })
                                  },
                                  Game: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPlatformGameGameResponse',
                                      fields: {
                                        GameTitleId: {
                                          type: graphql.GraphQLFloat
                                        },
                                        GameName: {
                                          type: graphql.GraphQLString
                                        },
                                        GameShortCode: {
                                          type: graphql.GraphQLString
                                        },
                                        GameDescription: {
                                          type: graphql.GraphQLString
                                        },
                                        GameWebsite: {
                                          type: graphql.GraphQLString
                                        },
                                        ImageLarge: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPlatformGameGameImageLargeResponse',
                                            fields: {
                                              UrlPath: {
                                                type: graphql.GraphQLString
                                              },
                                              RelativePath: {
                                                type: graphql.GraphQLString
                                              }
                                            }
                                          })
                                        },
                                        ImageSmall: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPlatformGameGameImageSmallResponse',
                                            fields: {
                                              UrlPath: {
                                                type: graphql.GraphQLString
                                              },
                                              RelativePath: {
                                                type: graphql.GraphQLString
                                              }
                                            }
                                          })
                                        },
                                        ImageBackground: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPlatformGameGameImageBackgroundResponse',
                                            fields: {
                                              UrlPath: {
                                                type: graphql.GraphQLString
                                              },
                                              RelativePath: {
                                                type: graphql.GraphQLString
                                              }
                                            }
                                          })
                                        },
                                        MaximumPlayersAllowed: {
                                          type: graphql.GraphQLFloat
                                        },
                                        MinimumMinutesBetweenTournamentRounds: {
                                          type: graphql.GraphQLFloat
                                        },
                                        Franchise: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPlatformGameGameFranchiseResponse',
                                            fields: {
                                              GameFranchiseId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              GameFranchise: {
                                                type: graphql.GraphQLString
                                              },
                                              ImageLarge: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPlatformGameGameFranchiseImageLargeResponse',
                                                    fields: {
                                                      UrlPath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      RelativePath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              ImageSmall: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPlatformGameGameFranchiseImageSmallResponse',
                                                    fields: {
                                                      UrlPath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      RelativePath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              ImageBackground: {
                                                type: new graphql.GraphQLObjectType(
                                                  {
                                                    name:
                                                      'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPlatformGameGameFranchiseImageBackgroundResponse',
                                                    fields: {
                                                      UrlPath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      },
                                                      RelativePath: {
                                                        type:
                                                          graphql.GraphQLString
                                                      }
                                                    }
                                                  }
                                                )
                                              },
                                              IsActive: {
                                                type: graphql.GraphQLBoolean
                                              }
                                            }
                                          })
                                        },
                                        Developer: {
                                          type: new graphql.GraphQLObjectType({
                                            name:
                                              'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPlatformGameGameDeveloperResponse',
                                            fields: {
                                              GameDeveloperId: {
                                                type: graphql.GraphQLFloat
                                              },
                                              GameDeveloper: {
                                                type: graphql.GraphQLString
                                              },
                                              Website: {
                                                type: graphql.GraphQLString
                                              },
                                              IsActive: {
                                                type: graphql.GraphQLBoolean
                                              }
                                            }
                                          })
                                        },
                                        HasTeamSides: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        IsHearthstone: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        HearthstoneManageDecks: {
                                          type: graphql.GraphQLBoolean
                                        },
                                        IsActive: {
                                          type: graphql.GraphQLBoolean
                                        }
                                      }
                                    })
                                  },
                                  GamePlatformFranchiseTitleStateId: {
                                    type: graphql.GraphQLFloat
                                  },
                                  GameAddedDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  GameDownloadLink: {
                                    type: graphql.GraphQLString
                                  },
                                  ChatPanelGuid: {
                                    type: graphql.GraphQLString
                                  },
                                  ImageLarge: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPlatformGameImageLargeResponse',
                                      fields: {
                                        UrlPath: {
                                          type: graphql.GraphQLString
                                        },
                                        RelativePath: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  ImageSmall: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPlatformGameImageSmallResponse',
                                      fields: {
                                        UrlPath: {
                                          type: graphql.GraphQLString
                                        },
                                        RelativePath: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  ImageBackground: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientPlayerApiPlayerByentityNameResponseScheduleTournamentPlatformGameImageBackgroundResponse',
                                      fields: {
                                        UrlPath: {
                                          type: graphql.GraphQLString
                                        },
                                        RelativePath: {
                                          type: graphql.GraphQLString
                                        }
                                      }
                                    })
                                  },
                                  TotalWinnings: { type: graphql.GraphQLFloat },
                                  ThirdPartyApplicationId: {
                                    type: graphql.GraphQLString
                                  },
                                  ThirdPartyApiKey: {
                                    type: graphql.GraphQLString
                                  },
                                  GameReleaseVersion: {
                                    type: graphql.GraphQLString
                                  },
                                  GameRevisedDateTime: {
                                    type: graphql.GraphQLString
                                  },
                                  GameVersion: { type: graphql.GraphQLString },
                                  GameVersionNeedsVerification: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  IssueGamesServerToMatch: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  TournamentCount: {
                                    type: graphql.GraphQLFloat
                                  },
                                  ValidationMethodTypeId: {
                                    type: graphql.GraphQLFloat
                                  },
                                  ExternalCallbackTemplateId: {
                                    type: graphql.GraphQLFloat
                                  },
                                  InternalCallbackTemplateId: {
                                    type: graphql.GraphQLFloat
                                  },
                                  GameServerModVersion: {
                                    type: graphql.GraphQLFloat
                                  }
                                }
                              })
                            },
                            GameTitleMode: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerByentityNameResponseScheduleTournamentGameTitleModeResponse',
                                fields: {
                                  GameTitleModeId: {
                                    type: graphql.GraphQLFloat
                                  },
                                  GameTitleId: { type: graphql.GraphQLFloat },
                                  GameTitleMode: {
                                    type: graphql.GraphQLString
                                  },
                                  IsActive: { type: graphql.GraphQLBoolean }
                                }
                              })
                            },
                            LastUpdatedDateTime: {
                              type: graphql.GraphQLString
                            },
                            EntryFee: { type: graphql.GraphQLFloat },
                            ServiceFee: { type: graphql.GraphQLFloat },
                            TotalFee: { type: graphql.GraphQLFloat }
                          }
                        })
                      },
                      TournamentTitle: { type: graphql.GraphQLString },
                      TournamentTypeName: { type: graphql.GraphQLString },
                      GameShortCode: { type: graphql.GraphQLString },
                      ImageLogo: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerByentityNameResponseScheduleImageLogoResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      GameName: { type: graphql.GraphQLString },
                      TeamSize: { type: graphql.GraphQLFloat },
                      IsInLobby: { type: graphql.GraphQLBoolean },
                      IsReady: { type: graphql.GraphQLBoolean },
                      TournamentMatchStateId: { type: graphql.GraphQLFloat },
                      TournamentMatchId: { type: graphql.GraphQLFloat },
                      TournamentId: { type: graphql.GraphQLFloat },
                      GamePlatformFranchiseTitleId: {
                        type: graphql.GraphQLFloat
                      },
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
                            'clientPlayerApiPlayerByentityNameResponseScheduleEntityOwnerProfileResponse',
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
                      EntityParticipantA: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerByentityNameResponseScheduleEntityParticipantAResponse',
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
                                  'clientPlayerApiPlayerByentityNameResponseScheduleEntityParticipantARegionResponse',
                                fields: {
                                  GamingServerRegionId: {
                                    type: graphql.GraphQLFloat
                                  },
                                  GamingServerRegionName: {
                                    type: graphql.GraphQLString
                                  }
                                }
                              })
                            },
                            Profile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerByentityNameResponseScheduleEntityParticipantAProfileResponse',
                                fields: {
                                  Nickname: { type: graphql.GraphQLString },
                                  LanModeEnabled: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  LanSeatLocation: {
                                    type: graphql.GraphQLString
                                  },
                                  EntityName: { type: graphql.GraphQLString },
                                  EntityIsTeam: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  DisplayName: { type: graphql.GraphQLString },
                                  EntityImageUrl: {
                                    type: graphql.GraphQLString
                                  },
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
                                    'clientPlayerApiPlayerByentityNameResponseScheduleEntityParticipantAHearthstoneDecksResponse',
                                  fields: {
                                    PlayerNumber: {
                                      type: graphql.GraphQLFloat
                                    },
                                    IsStartingDeck: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    HearthstoneDeckExcluded: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    GameTitleModeHearthstoneDeckId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    GameTitleModeId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    HearthstoneDeck: {
                                      type: graphql.GraphQLString
                                    },
                                    HearthstoneDeckImage: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerByentityNameResponseScheduleEntityParticipantAHearthstoneDecksHearthstoneDeckImageResponse',
                                        fields: {
                                          UrlPath: {
                                            type: graphql.GraphQLString
                                          },
                                          RelativePath: {
                                            type: graphql.GraphQLString
                                          }
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
                            'clientPlayerApiPlayerByentityNameResponseScheduleEntityParticipantBResponse',
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
                                  'clientPlayerApiPlayerByentityNameResponseScheduleEntityParticipantBRegionResponse',
                                fields: {
                                  GamingServerRegionId: {
                                    type: graphql.GraphQLFloat
                                  },
                                  GamingServerRegionName: {
                                    type: graphql.GraphQLString
                                  }
                                }
                              })
                            },
                            Profile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerByentityNameResponseScheduleEntityParticipantBProfileResponse',
                                fields: {
                                  Nickname: { type: graphql.GraphQLString },
                                  LanModeEnabled: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  LanSeatLocation: {
                                    type: graphql.GraphQLString
                                  },
                                  EntityName: { type: graphql.GraphQLString },
                                  EntityIsTeam: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  DisplayName: { type: graphql.GraphQLString },
                                  EntityImageUrl: {
                                    type: graphql.GraphQLString
                                  },
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
                                    'clientPlayerApiPlayerByentityNameResponseScheduleEntityParticipantBHearthstoneDecksResponse',
                                  fields: {
                                    PlayerNumber: {
                                      type: graphql.GraphQLFloat
                                    },
                                    IsStartingDeck: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    HearthstoneDeckExcluded: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    GameTitleModeHearthstoneDeckId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    GameTitleModeId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    HearthstoneDeck: {
                                      type: graphql.GraphQLString
                                    },
                                    HearthstoneDeckImage: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientPlayerApiPlayerByentityNameResponseScheduleEntityParticipantBHearthstoneDecksHearthstoneDeckImageResponse',
                                        fields: {
                                          UrlPath: {
                                            type: graphql.GraphQLString
                                          },
                                          RelativePath: {
                                            type: graphql.GraphQLString
                                          }
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
                      AutomaticGoLiveOnSchedule: {
                        type: graphql.GraphQLBoolean
                      },
                      MinutesAfterStartToForfeit: {
                        type: graphql.GraphQLFloat
                      },
                      MinutesBeforeStartToAllowCheckin: {
                        type: graphql.GraphQLFloat
                      },
                      ServerSendPlayerSummaryStatistics: {
                        type: graphql.GraphQLBoolean
                      },
                      GamingServerId: { type: graphql.GraphQLFloat },
                      EntityPlayerControllerId: { type: graphql.GraphQLFloat },
                      AllTeamAPlayersReady: { type: graphql.GraphQLBoolean },
                      TeamAIsReady: { type: graphql.GraphQLBoolean },
                      AllTeamBPlayersReady: { type: graphql.GraphQLBoolean },
                      TeamBIsReady: { type: graphql.GraphQLBoolean },
                      ScoreManuallyReportedDateTime: {
                        type: graphql.GraphQLString
                      },
                      ScoreManuallyReported: { type: graphql.GraphQLBoolean },
                      ScoreManuallyReportedByPlayerId: {
                        type: graphql.GraphQLFloat
                      },
                      ScoreManuallyReportedByTeamA: {
                        type: graphql.GraphQLBoolean
                      },
                      ScoreManuallyApplyToEntireRound: {
                        type: graphql.GraphQLBoolean
                      },
                      MapsPlayed: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerByentityNameResponseScheduleMapsPlayedResponse',
                            fields: {
                              TournamentMatchId: { type: graphql.GraphQLFloat },
                              MapNumber: { type: graphql.GraphQLFloat },
                              GameTitleModeMapId: {
                                type: graphql.GraphQLFloat
                              },
                              MapStartDateTime: { type: graphql.GraphQLString },
                              MapEndDateTime: { type: graphql.GraphQLString },
                              EntityParticipantAScore: {
                                type: graphql.GraphQLFloat
                              },
                              EntityParticipantBScore: {
                                type: graphql.GraphQLFloat
                              },
                              Map: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerByentityNameResponseScheduleMapsPlayedMapResponse',
                                  fields: {
                                    GameTitleModeMapId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    GameTitleModeId: {
                                      type: graphql.GraphQLFloat
                                    },
                                    MapFileName: {
                                      type: graphql.GraphQLString
                                    },
                                    MapDisplayName: {
                                      type: graphql.GraphQLString
                                    },
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
                            'clientPlayerApiPlayerByentityNameResponseScheduleDisputeResponse',
                          fields: {
                            TournamentMatchDisputeId: {
                              type: graphql.GraphQLFloat
                            },
                            TournamentMatchId: { type: graphql.GraphQLFloat },
                            DisputeState: { type: graphql.GraphQLFloat },
                            InitiatedByPlayerId: { type: graphql.GraphQLFloat },
                            InitiatedByPlayerProfile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlayerApiPlayerByentityNameResponseScheduleDisputeInitiatedByPlayerProfileResponse',
                                fields: {
                                  Nickname: { type: graphql.GraphQLString },
                                  LanModeEnabled: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  LanSeatLocation: {
                                    type: graphql.GraphQLString
                                  },
                                  EntityName: { type: graphql.GraphQLString },
                                  EntityIsTeam: {
                                    type: graphql.GraphQLBoolean
                                  },
                                  DisplayName: { type: graphql.GraphQLString },
                                  EntityImageUrl: {
                                    type: graphql.GraphQLString
                                  },
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
                            EntityAdministratorId: {
                              type: graphql.GraphQLFloat
                            },
                            ResolutionDateTime: { type: graphql.GraphQLString },
                            ResolutionTeamAScore: {
                              type: graphql.GraphQLFloat
                            },
                            ResolutionTeamBScore: { type: graphql.GraphQLFloat }
                          }
                        })
                      },
                      MyMatch: { type: graphql.GraphQLBoolean },
                      NewServerRequested: { type: graphql.GraphQLBoolean },
                      NewServerRequestedEntityId: {
                        type: graphql.GraphQLFloat
                      },
                      NewServerRequestedByTeamA: {
                        type: graphql.GraphQLBoolean
                      },
                      NewServerRequestedCount: { type: graphql.GraphQLFloat },
                      NeedsAssistance: { type: graphql.GraphQLBoolean },
                      AllowedSpectators: { type: graphql.GraphQLString },
                      StreamingServiceId: { type: graphql.GraphQLFloat },
                      ManualMode: { type: graphql.GraphQLBoolean },
                      ManualServerConnectionInfo: {
                        type: graphql.GraphQLString
                      },
                      StreamingService: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlayerApiPlayerByentityNameResponseScheduleStreamingServiceResponse',
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
                              'clientPlayerApiPlayerByentityNameResponseScheduleAssistanceRequestsResponse',
                            fields: {
                              TournamentMatchAssistanceId: {
                                type: graphql.GraphQLFloat
                              },
                              TournamentMatchId: { type: graphql.GraphQLFloat },
                              AssistanceRequestedById: {
                                type: graphql.GraphQLFloat
                              },
                              AssistanceRequestedDateTime: {
                                type: graphql.GraphQLString
                              },
                              ResolvedById: { type: graphql.GraphQLFloat },
                              ResolutionDateTime: {
                                type: graphql.GraphQLString
                              },
                              ResolutionComments: {
                                type: graphql.GraphQLString
                              }
                            }
                          })
                        )
                      },
                      LastUpdatedDateTime: { type: graphql.GraphQLString },
                      ServerConfigurationFileName: {
                        type: graphql.GraphQLString
                      },
                      MatchAdministratorId: { type: graphql.GraphQLFloat },
                      ActionLog: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerByentityNameResponseScheduleActionLogResponse',
                            fields: {
                              TournamentMatchActionLogId: {
                                type: graphql.GraphQLFloat
                              },
                              EntityId: { type: graphql.GraphQLFloat },
                              EntityProfile: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlayerApiPlayerByentityNameResponseScheduleActionLogEntityProfileResponse',
                                  fields: {
                                    Nickname: { type: graphql.GraphQLString },
                                    LanModeEnabled: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    LanSeatLocation: {
                                      type: graphql.GraphQLString
                                    },
                                    EntityName: { type: graphql.GraphQLString },
                                    EntityIsTeam: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    DisplayName: {
                                      type: graphql.GraphQLString
                                    },
                                    EntityImageUrl: {
                                      type: graphql.GraphQLString
                                    },
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
                              AdministratorComment: {
                                type: graphql.GraphQLString
                              },
                              ActionLogDateTime: { type: graphql.GraphQLString }
                            }
                          })
                        )
                      },
                      Playback: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlayerApiPlayerByentityNameResponseSchedulePlaybackResponse',
                            fields: {
                              TournamentMatchPlaybackId: {
                                type: graphql.GraphQLFloat
                              },
                              TournamentMatchId: { type: graphql.GraphQLFloat },
                              TournamentMatchPlayback: {
                                type: graphql.GraphQLString
                              },
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
                            'clientPlayerApiPlayerByentityNameResponseScheduleScoringImageResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      }
                    }
                  })
                )
              },
              TournamentManagementPolicy: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientPlayerApiPlayerByentityNameResponseTournamentManagementPolicyResponse',
                  fields: {
                    TournamentManagementPolicyId: {
                      type: graphql.GraphQLFloat
                    },
                    TournamentManagementPolicyName: {
                      type: graphql.GraphQLString
                    },
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
                    MaxTournamentsTimespanSeconds: {
                      type: graphql.GraphQLFloat
                    },
                    MaxParticipantsPerTournament: {
                      type: graphql.GraphQLFloat
                    },
                    AllowPublicTournament: { type: graphql.GraphQLBoolean },
                    AllowFormatSingleElimination: {
                      type: graphql.GraphQLBoolean
                    },
                    AllowFormatDoubleElimination: {
                      type: graphql.GraphQLBoolean
                    },
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
                    AuthorizedGamePlatformsList: {
                      type: graphql.GraphQLString
                    },
                    AuthorizedGamePlatofrms: { type: graphql.GraphQLFloat }
                  }
                })
              },
              Trophies: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerByentityNameResponseTrophiesResponse',
                    fields: {
                      TournamentId: { type: graphql.GraphQLFloat },
                      TournamentName: { type: graphql.GraphQLString },
                      TournamentStartDateTime: { type: graphql.GraphQLString },
                      PlaceNumber: { type: graphql.GraphQLFloat },
                      TrophyId: { type: graphql.GraphQLFloat },
                      TrophyImageUrl: { type: graphql.GraphQLString }
                    }
                  })
                )
              },
              EntityPlayerId: { type: graphql.GraphQLFloat },
              IsOnline: { type: graphql.GraphQLBoolean },
              ParentOrganizationId: { type: graphql.GraphQLFloat },
              GenderId: { type: graphql.GraphQLFloat },
              Gender: { type: graphql.GraphQLString },
              BirthDate: { type: graphql.GraphQLString },
              LastActivityDateTime: { type: graphql.GraphQLString },
              NumberOfTeams: { type: graphql.GraphQLFloat },
              LastLoginDateTime: { type: graphql.GraphQLString },
              GameNicknames: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerByentityNameResponseGameNicknamesResponse',
                    fields: {
                      IsTeam: { type: graphql.GraphQLBoolean },
                      Nickname: { type: graphql.GraphQLString },
                      GameShortCode: { type: graphql.GraphQLString }
                    }
                  })
                )
              },
              StreamingServices: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerByentityNameResponseStreamingServicesResponse',
                    fields: {
                      EntityId: { type: graphql.GraphQLFloat },
                      StreamName: { type: graphql.GraphQLString },
                      StreamLink: { type: graphql.GraphQLString },
                      StreamCurrentlyActive: { type: graphql.GraphQLBoolean },
                      StreamActiveViewers: { type: graphql.GraphQLFloat },
                      LastUpdatedDateTime: { type: graphql.GraphQLString },
                      StreamingServiceId: { type: graphql.GraphQLFloat },
                      StreamingService: { type: graphql.GraphQLString },
                      SourceName: { type: graphql.GraphQLString }
                    }
                  })
                )
              },
              IsSystemAdministrator: { type: graphql.GraphQLBoolean },
              SystemAdministratorIssuedDateTime: {
                type: graphql.GraphQLString
              },
              FirstName: { type: graphql.GraphQLString },
              LastName: { type: graphql.GraphQLString },
              CompanyName: { type: graphql.GraphQLString },
              RegistrationIp: { type: graphql.GraphQLString },
              RegistrationDateTime: { type: graphql.GraphQLString },
              ClientApiId: { type: graphql.GraphQLString },
              EntityMembershipTypeId: { type: graphql.GraphQLFloat },
              EntityMembershipId: { type: graphql.GraphQLString },
              EntityMembershipToken: { type: graphql.GraphQLString },
              EmailAddress: { type: graphql.GraphQLString },
              TeamMatchPlayStatisticsId: { type: graphql.GraphQLFloat },
              TournamentManagementPolicyId: { type: graphql.GraphQLFloat },
              LanModeEnabled: { type: graphql.GraphQLBoolean },
              LanSeatLocation: { type: graphql.GraphQLString },
              PlayerSubscriptionTypeId: { type: graphql.GraphQLFloat },
              PlayerSubscriptionExpirationDate: { type: graphql.GraphQLString },
              IsSkrillAuthorized: { type: graphql.GraphQLBoolean },
              RaffleTickets: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerByentityNameResponseRaffleTicketsResponse',
                    fields: {
                      RaffleTicketId: { type: graphql.GraphQLFloat },
                      EntityId: { type: graphql.GraphQLFloat },
                      RaffleTicket: { type: graphql.GraphQLString },
                      IsDailyTicket: { type: graphql.GraphQLBoolean },
                      RaffleTicketDate: { type: graphql.GraphQLString }
                    }
                  })
                )
              },
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
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyProfile: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.UpdatePlayerProfile',
    method: 'PUT',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/my/profile',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientPlayerApiPlayerMyProfileBody',
            fields: {
              DisplayName: { type: graphql.GraphQLString },
              FirstName: { type: graphql.GraphQLString },
              LastName: { type: graphql.GraphQLString },
              Address: { type: graphql.GraphQLString },
              City: { type: graphql.GraphQLString },
              PostalCode: { type: graphql.GraphQLString },
              AddressStateProvenceId: { type: graphql.GraphQLFloat },
              Birthdate: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyProfileResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientPlayerApiPlayerMyProfileResponseResponse',
            fields: {
              EntityId: { type: graphql.GraphQLFloat },
              UserLoginToken: { type: graphql.GraphQLString },
              EntityMembershipId: { type: graphql.GraphQLString },
              EntityMembershipToken: { type: graphql.GraphQLString },
              EmailAddress: { type: graphql.GraphQLString },
              FirstName: { type: graphql.GraphQLString },
              LastName: { type: graphql.GraphQLString },
              EntityName: { type: graphql.GraphQLString },
              DisplayName: { type: graphql.GraphQLString },
              IsAdministrator: { type: graphql.GraphQLBoolean },
              RegistrationDateTime: { type: graphql.GraphQLString },
              LastLoginDateTime: { type: graphql.GraphQLString },
              EntityImageUrl: { type: graphql.GraphQLString },
              PlayerSubscriptionTypeId: { type: graphql.GraphQLFloat },
              Muut: {
                type: new graphql.GraphQLObjectType({
                  name: 'clientPlayerApiPlayerMyProfileResponseMuutResponse',
                  fields: {
                    Timestamp: { type: graphql.GraphQLFloat },
                    Message: { type: graphql.GraphQLString },
                    Signature: { type: graphql.GraphQLString }
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
  ApiPlayerMyGameBygameShortCodePlatformByplatformCodeConfirmation: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.ConfirmPlayer',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/my/game/{gameShortCode}/platform/{platformCode}/Confirmation',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientPlayerApiPlayerMyGameBygameShortCodePlatformByplatformCodeConfirmationBody',
            fields: {
              EntityPlayerId: { type: graphql.GraphQLFloat },
              EntityPlayerEmailAddress: { type: graphql.GraphQLString },
              EntityPlayerName: { type: graphql.GraphQLString },
              PlayerNickname: { type: graphql.GraphQLString },
              PlayerIdentifier: { type: graphql.GraphQLString },
              ThirdPartyApiRegion: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientPlayerApiPlayerMyGameBygameShortCodePlatformByplatformCodeConfirmationUrlParams',
            fields: {
              platformCode: { type: graphql.GraphQLString },
              gameShortCode: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientPlayerApiPlayerMyGameBygameShortCodePlatformByplatformCodeConfirmationResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyFriends: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.GetMyFreinds',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/my/Friends',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyFriendsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientPlayerApiPlayerMyFriendsResponseResponse',
              fields: {
                MyRequest: { type: graphql.GraphQLBoolean },
                EntityId: { type: graphql.GraphQLFloat },
                EntityName: { type: graphql.GraphQLString },
                DisplayName: { type: graphql.GraphQLString },
                EntityImageUrl: { type: graphql.GraphQLString },
                GameServerRegion: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientPlayerApiPlayerMyFriendsResponseGameServerRegionResponse',
                    fields: {
                      GamingServerRegionId: { type: graphql.GraphQLFloat },
                      GamingServerRegionName: { type: graphql.GraphQLString }
                    }
                  })
                },
                FriendAccepted: { type: graphql.GraphQLBoolean },
                IsOnline: { type: graphql.GraphQLBoolean }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyFriendByfriendEntityName: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.GetIsMyFreinds',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/my/Friend/{friendEntityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientPlayerApiPlayerMyFriendByfriendEntityNameUrlParams',
            fields: { friendEntityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyFriendByfriendEntityNameResponse',
      fields: {
        Response: { type: graphql.GraphQLBoolean },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyFriendsByentityName: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.RequestFriend',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/my/Friends/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientPlayerApiPlayerMyFriendsByentityNameUrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyFriendsByentityNameResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyFriendsByentityNameAccept: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.ApproveFriend',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/my/Friends/{entityName}/Accept',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientPlayerApiPlayerMyFriendsByentityNameAcceptUrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyFriendsByentityNameAcceptResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyFriendsByentityNameDecline: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.DeclineFriend',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/my/Friends/{entityName}/Decline',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientPlayerApiPlayerMyFriendsByentityNameDeclineUrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyFriendsByentityNameDeclineResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerMyFriendsByentityName2: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlayerController.RemoveFriend',
    method: 'DELETE',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Player/my/Friends/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientPlayerApiPlayerMyFriendsByentityName2UrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientPlayerApiPlayerMyFriendsByentityName2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
