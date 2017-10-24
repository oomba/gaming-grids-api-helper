const graphql = require('graphql')

module.exports = {
  ApiTeamByentityName: {
    fullName: 'GamingGrids.Api.Client.v2.Controllers.TeamController.Profile',
    method: 'GET',
    url: '/api/Team/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTeamApiTeamByentityNameUrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamByentityNameResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientTeamApiTeamByentityNameResponseResponse',
            fields: {
              IsMyTeam: { type: graphql.GraphQLBoolean },
              MyRosterProfile: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientTeamApiTeamByentityNameResponseMyRosterProfileResponse',
                  fields: {
                    FirstName: { type: graphql.GraphQLString },
                    LastName: { type: graphql.GraphQLString },
                    Profile: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientTeamApiTeamByentityNameResponseMyRosterProfileProfileResponse',
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
                    EntityTeamId: { type: graphql.GraphQLFloat },
                    EntityPlayerId: { type: graphql.GraphQLFloat },
                    PlayerTitle: { type: graphql.GraphQLString },
                    JoinDateTime: { type: graphql.GraphQLString },
                    RosterRoleId: { type: graphql.GraphQLFloat },
                    RosterRoleName: { type: graphql.GraphQLString },
                    RemovedFromTeam: { type: graphql.GraphQLBoolean },
                    RemovedFromTeamByEntityId: { type: graphql.GraphQLFloat },
                    IsActive: { type: graphql.GraphQLBoolean },
                    InactiveDateTime: { type: graphql.GraphQLString },
                    StreamingServices: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'clientTeamApiTeamByentityNameResponseMyRosterProfileStreamingServicesResponse',
                          fields: {
                            EntityId: { type: graphql.GraphQLFloat },
                            StreamName: { type: graphql.GraphQLString },
                            StreamLink: { type: graphql.GraphQLString },
                            StreamCurrentlyActive: {
                              type: graphql.GraphQLBoolean
                            },
                            StreamActiveViewers: { type: graphql.GraphQLFloat },
                            LastUpdatedDateTime: {
                              type: graphql.GraphQLString
                            },
                            StreamingServiceId: { type: graphql.GraphQLFloat },
                            StreamingService: { type: graphql.GraphQLString },
                            SourceName: { type: graphql.GraphQLString }
                          }
                        })
                      )
                    }
                  }
                })
              },
              Country: {
                type: new graphql.GraphQLObjectType({
                  name: 'clientTeamApiTeamByentityNameResponseCountryResponse',
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
              Games: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name: 'clientTeamApiTeamByentityNameResponseGamesResponse',
                    fields: {
                      IsValid: { type: graphql.GraphQLBoolean },
                      Platforms: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientTeamApiTeamByentityNameResponseGamesPlatformsResponse',
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
                                    'clientTeamApiTeamByentityNameResponseGamesPlatformsPowerRankingDivisionResponse',
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
                                            'clientTeamApiTeamByentityNameResponseGamesPlatformsPowerRankingDivisionPowerRankingLevelsResponse',
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
                                          'clientTeamApiTeamByentityNameResponseGamesPlatformsPowerRankingDivisionPowerRankingImageLogoResponse',
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
                                      'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesResponse',
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
                                            'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesImageLogoResponse',
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
                                            'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesEntityOwnerProfileResponse',
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
                                            'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesEntityParticipantAResponse',
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
                                                    'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesEntityParticipantARegionResponse',
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
                                                    'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesEntityParticipantAProfileResponse',
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
                                                    'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesEntityParticipantAHearthstoneDecksResponse',
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
                                                            'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesEntityParticipantAHearthstoneDecksHearthstoneDeckImageResponse',
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
                                            'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesEntityParticipantBResponse',
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
                                                    'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesEntityParticipantBRegionResponse',
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
                                                    'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesEntityParticipantBProfileResponse',
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
                                                    'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesEntityParticipantBHearthstoneDecksResponse',
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
                                                            'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesEntityParticipantBHearthstoneDecksHearthstoneDeckImageResponse',
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
                                              'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesMapsPlayedResponse',
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
                                                      'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesMapsPlayedMapResponse',
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
                                            'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesDisputeResponse',
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
                                                    'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesDisputeInitiatedByPlayerProfileResponse',
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
                                            'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesStreamingServiceResponse',
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
                                              'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesAssistanceRequestsResponse',
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
                                              'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesActionLogResponse',
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
                                                      'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesActionLogEntityProfileResponse',
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
                                              'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesPlaybackResponse',
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
                                            'clientTeamApiTeamByentityNameResponseGamesPlatformsMatchesScoringImageResponse',
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
                                    'clientTeamApiTeamByentityNameResponseGamesPlatformsStatisticsResponse',
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
                                    'clientTeamApiTeamByentityNameResponseGamesPlatformsImageSmallResponse',
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
                            'clientTeamApiTeamByentityNameResponseGamesImageLargeResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTeamApiTeamByentityNameResponseGamesImageSmallResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTeamApiTeamByentityNameResponseGamesImageBackgroundResponse',
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
                            'clientTeamApiTeamByentityNameResponseGamesFranchiseResponse',
                          fields: {
                            GameFranchiseId: { type: graphql.GraphQLFloat },
                            GameFranchise: { type: graphql.GraphQLString },
                            ImageLarge: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTeamApiTeamByentityNameResponseGamesFranchiseImageLargeResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTeamApiTeamByentityNameResponseGamesFranchiseImageSmallResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTeamApiTeamByentityNameResponseGamesFranchiseImageBackgroundResponse',
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
                            'clientTeamApiTeamByentityNameResponseGamesDeveloperResponse',
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
              Players: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientTeamApiTeamByentityNameResponsePlayersResponse',
                    fields: {
                      FirstName: { type: graphql.GraphQLString },
                      LastName: { type: graphql.GraphQLString },
                      Profile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTeamApiTeamByentityNameResponsePlayersProfileResponse',
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
                      EntityTeamId: { type: graphql.GraphQLFloat },
                      EntityPlayerId: { type: graphql.GraphQLFloat },
                      PlayerTitle: { type: graphql.GraphQLString },
                      JoinDateTime: { type: graphql.GraphQLString },
                      RosterRoleId: { type: graphql.GraphQLFloat },
                      RosterRoleName: { type: graphql.GraphQLString },
                      RemovedFromTeam: { type: graphql.GraphQLBoolean },
                      RemovedFromTeamByEntityId: { type: graphql.GraphQLFloat },
                      IsActive: { type: graphql.GraphQLBoolean },
                      InactiveDateTime: { type: graphql.GraphQLString },
                      StreamingServices: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientTeamApiTeamByentityNameResponsePlayersStreamingServicesResponse',
                            fields: {
                              EntityId: { type: graphql.GraphQLFloat },
                              StreamName: { type: graphql.GraphQLString },
                              StreamLink: { type: graphql.GraphQLString },
                              StreamCurrentlyActive: {
                                type: graphql.GraphQLBoolean
                              },
                              StreamActiveViewers: {
                                type: graphql.GraphQLFloat
                              },
                              LastUpdatedDateTime: {
                                type: graphql.GraphQLString
                              },
                              StreamingServiceId: {
                                type: graphql.GraphQLFloat
                              },
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
              Statistics: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientTeamApiTeamByentityNameResponseStatisticsResponse',
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
              StreamingServices: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientTeamApiTeamByentityNameResponseStreamingServicesResponse',
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
              Schedule: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientTeamApiTeamByentityNameResponseScheduleResponse',
                    fields: {
                      Tournament: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTeamApiTeamByentityNameResponseScheduleTournamentResponse',
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
                                  'clientTeamApiTeamByentityNameResponseScheduleTournamentSponsorsResponse',
                                fields: {
                                  TitleSponsor: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientTeamApiTeamByentityNameResponseScheduleTournamentSponsorsTitleSponsorResponse',
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
                                          'clientTeamApiTeamByentityNameResponseScheduleTournamentSponsorsMainSponsorsResponse',
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
                                          'clientTeamApiTeamByentityNameResponseScheduleTournamentSponsorsPartnersResponse',
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
                                    'clientTeamApiTeamByentityNameResponseScheduleTournamentAnnouncementsResponse',
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
                                  'clientTeamApiTeamByentityNameResponseScheduleTournamentQualifierResponse',
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
                                        'clientTeamApiTeamByentityNameResponseScheduleTournamentQualifierLeagueResponse',
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
                                          'clientTeamApiTeamByentityNameResponseScheduleTournamentQualifierGroupsResponse',
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
                                          'clientTeamApiTeamByentityNameResponseScheduleTournamentQualifierTieBreakersResponse',
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
                                    'clientTeamApiTeamByentityNameResponseScheduleTournamentPredefinedStreamedMatchesResponse',
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
                                    'clientTeamApiTeamByentityNameResponseScheduleTournamentAllowedCountryListResponse',
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
                                  'clientTeamApiTeamByentityNameResponseScheduleTournamentQualifierTiedFinishIsResolvedByAdministratorProfileResponse',
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
                                  'clientTeamApiTeamByentityNameResponseScheduleTournamentPayoutsResponse',
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
                                          'clientTeamApiTeamByentityNameResponseScheduleTournamentPayoutsPlacesResponse',
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
                                                  'clientTeamApiTeamByentityNameResponseScheduleTournamentPayoutsPlacesWinnersResponse',
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
                                    'clientTeamApiTeamByentityNameResponseScheduleTournamentChallengeOffersResponse',
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
                                    'clientTeamApiTeamByentityNameResponseScheduleTournamentLocationsResponse',
                                  fields: {
                                    LocationId: { type: graphql.GraphQLFloat },
                                    StateProvence: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'clientTeamApiTeamByentityNameResponseScheduleTournamentLocationsStateProvenceResponse',
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
                                          'clientTeamApiTeamByentityNameResponseScheduleTournamentLocationsCountryResponse',
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
                                          'clientTeamApiTeamByentityNameResponseScheduleTournamentLocationsRegionResponse',
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
                                  'clientTeamApiTeamByentityNameResponseScheduleTournamentTrophyGroupResponse',
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
                                  'clientTeamApiTeamByentityNameResponseScheduleTournamentImageLogoResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTeamApiTeamByentityNameResponseScheduleTournamentImageBackgroundResponse',
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
                                  'clientTeamApiTeamByentityNameResponseScheduleTournamentPlatformGameResponse',
                                fields: {
                                  GamePlatformFranchiseTitleId: {
                                    type: graphql.GraphQLFloat
                                  },
                                  Platform: {
                                    type: new graphql.GraphQLObjectType({
                                      name:
                                        'clientTeamApiTeamByentityNameResponseScheduleTournamentPlatformGamePlatformResponse',
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
                                              'clientTeamApiTeamByentityNameResponseScheduleTournamentPlatformGamePlatformImageSmallResponse',
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
                                        'clientTeamApiTeamByentityNameResponseScheduleTournamentPlatformGameGameResponse',
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
                                              'clientTeamApiTeamByentityNameResponseScheduleTournamentPlatformGameGameImageLargeResponse',
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
                                              'clientTeamApiTeamByentityNameResponseScheduleTournamentPlatformGameGameImageSmallResponse',
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
                                              'clientTeamApiTeamByentityNameResponseScheduleTournamentPlatformGameGameImageBackgroundResponse',
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
                                              'clientTeamApiTeamByentityNameResponseScheduleTournamentPlatformGameGameFranchiseResponse',
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
                                                      'clientTeamApiTeamByentityNameResponseScheduleTournamentPlatformGameGameFranchiseImageLargeResponse',
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
                                                      'clientTeamApiTeamByentityNameResponseScheduleTournamentPlatformGameGameFranchiseImageSmallResponse',
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
                                                      'clientTeamApiTeamByentityNameResponseScheduleTournamentPlatformGameGameFranchiseImageBackgroundResponse',
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
                                              'clientTeamApiTeamByentityNameResponseScheduleTournamentPlatformGameGameDeveloperResponse',
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
                                        'clientTeamApiTeamByentityNameResponseScheduleTournamentPlatformGameImageLargeResponse',
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
                                        'clientTeamApiTeamByentityNameResponseScheduleTournamentPlatformGameImageSmallResponse',
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
                                        'clientTeamApiTeamByentityNameResponseScheduleTournamentPlatformGameImageBackgroundResponse',
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
                                  'clientTeamApiTeamByentityNameResponseScheduleTournamentGameTitleModeResponse',
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
                            'clientTeamApiTeamByentityNameResponseScheduleImageLogoResponse',
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
                            'clientTeamApiTeamByentityNameResponseScheduleEntityOwnerProfileResponse',
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
                            'clientTeamApiTeamByentityNameResponseScheduleEntityParticipantAResponse',
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
                                  'clientTeamApiTeamByentityNameResponseScheduleEntityParticipantARegionResponse',
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
                                  'clientTeamApiTeamByentityNameResponseScheduleEntityParticipantAProfileResponse',
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
                                    'clientTeamApiTeamByentityNameResponseScheduleEntityParticipantAHearthstoneDecksResponse',
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
                                          'clientTeamApiTeamByentityNameResponseScheduleEntityParticipantAHearthstoneDecksHearthstoneDeckImageResponse',
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
                            'clientTeamApiTeamByentityNameResponseScheduleEntityParticipantBResponse',
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
                                  'clientTeamApiTeamByentityNameResponseScheduleEntityParticipantBRegionResponse',
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
                                  'clientTeamApiTeamByentityNameResponseScheduleEntityParticipantBProfileResponse',
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
                                    'clientTeamApiTeamByentityNameResponseScheduleEntityParticipantBHearthstoneDecksResponse',
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
                                          'clientTeamApiTeamByentityNameResponseScheduleEntityParticipantBHearthstoneDecksHearthstoneDeckImageResponse',
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
                              'clientTeamApiTeamByentityNameResponseScheduleMapsPlayedResponse',
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
                                    'clientTeamApiTeamByentityNameResponseScheduleMapsPlayedMapResponse',
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
                            'clientTeamApiTeamByentityNameResponseScheduleDisputeResponse',
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
                                  'clientTeamApiTeamByentityNameResponseScheduleDisputeInitiatedByPlayerProfileResponse',
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
                            'clientTeamApiTeamByentityNameResponseScheduleStreamingServiceResponse',
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
                              'clientTeamApiTeamByentityNameResponseScheduleAssistanceRequestsResponse',
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
                              'clientTeamApiTeamByentityNameResponseScheduleActionLogResponse',
                            fields: {
                              TournamentMatchActionLogId: {
                                type: graphql.GraphQLFloat
                              },
                              EntityId: { type: graphql.GraphQLFloat },
                              EntityProfile: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientTeamApiTeamByentityNameResponseScheduleActionLogEntityProfileResponse',
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
                              'clientTeamApiTeamByentityNameResponseSchedulePlaybackResponse',
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
                            'clientTeamApiTeamByentityNameResponseScheduleScoringImageResponse',
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
              OwnerId: { type: graphql.GraphQLFloat },
              JoinPassword: { type: graphql.GraphQLString },
              FoundedDate: { type: graphql.GraphQLString },
              TeamDescriptionLong: { type: graphql.GraphQLString },
              TeamColor: { type: graphql.GraphQLString },
              LastOpponentEmailDateTime: { type: graphql.GraphQLString },
              LastAdminEmailDateTime: { type: graphql.GraphQLString },
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
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeam: {
    fullName: 'GamingGrids.Api.Client.v2.Controllers.TeamController.CreateTeam',
    method: 'POST',
    url: '/api/Team',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTeamApiTeamBody',
            fields: {
              EntityName: { type: graphql.GraphQLString },
              DisplayName: { type: graphql.GraphQLString },
              JoinPassword: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamResponse',
      fields: {
        Response: { type: graphql.GraphQLString },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeamByentityName2: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TeamController.DisbandTeam',
    method: 'DELETE',
    url: '/api/Team/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTeamApiTeamByentityName2UrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamByentityName2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeamByteamEntityNameRosterRequested: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TeamController.RequestJoinTeam',
    method: 'POST',
    url: '/api/Team/{teamEntityName}/Roster/requested',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTeamApiTeamByteamEntityNameRosterRequestedUrlParams',
            fields: { teamEntityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamByteamEntityNameRosterRequestedResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeamByteamEntityNameRoster: {
    fullName: 'GamingGrids.Api.Client.v2.Controllers.TeamController.JoinTeam',
    method: 'POST',
    url: '/api/Team/{teamEntityName}/Roster',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTeamApiTeamByteamEntityNameRosterBody',
            fields: {
              JoinPassword: { type: graphql.GraphQLString },
              PlayerTitle: { type: graphql.GraphQLString },
              TeamRoleId: { type: graphql.GraphQLFloat }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTeamApiTeamByteamEntityNameRosterUrlParams',
            fields: { teamEntityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamByteamEntityNameRosterResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeamByteamEntityNameRoster2: {
    fullName: 'GamingGrids.Api.Client.v2.Controllers.TeamController.LeaveTeam',
    method: 'DELETE',
    url: '/api/Team/{teamEntityName}/Roster',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTeamApiTeamByteamEntityNameRoster2UrlParams',
            fields: { teamEntityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamByteamEntityNameRoster2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeamByteamEntityNameRosterByplayerEntityNameValidation: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TeamController.ValidateLeaveTeam',
    method: 'GET',
    url: '/api/Team/{teamEntityName}/Roster/{playerEntityName}/Validation',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTeamApiTeamByteamEntityNameRosterByplayerEntityNameValidationUrlParams',
            fields: {
              teamEntityName: { type: graphql.GraphQLString },
              playerEntityName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTeamApiTeamByteamEntityNameRosterByplayerEntityNameValidationResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTeamApiTeamByteamEntityNameRosterByplayerEntityNameValidationResponseResponse',
            fields: {
              WillDropTeam: { type: graphql.GraphQLBoolean },
              Tournaments: { type: graphql.GraphQLString }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeamOnline: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TeamController.GetOnlineTeams',
    method: 'GET',
    url: '/api/Team/online',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamOnlineResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientTeamApiTeamOnlineResponseResponse',
              fields: {
                OwnerId: { type: graphql.GraphQLFloat },
                JoinPassword: { type: graphql.GraphQLString },
                FoundedDate: { type: graphql.GraphQLString },
                TeamDescriptionLong: { type: graphql.GraphQLString },
                TeamColor: { type: graphql.GraphQLString },
                LastOpponentEmailDateTime: { type: graphql.GraphQLString },
                LastAdminEmailDateTime: { type: graphql.GraphQLString },
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
  ApiTeamByteamEntityNameRosterByplayerEntityName: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TeamController.RemovePlayer',
    method: 'DELETE',
    url: '/api/Team/{teamEntityName}/Roster/{playerEntityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTeamApiTeamByteamEntityNameRosterByplayerEntityNameUrlParams',
            fields: {
              teamEntityName: { type: graphql.GraphQLString },
              playerEntityName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamByteamEntityNameRosterByplayerEntityNameResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeamByteamEntityNameRosterInvite: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TeamController.RosterInvite',
    method: 'POST',
    url: '/api/Team/{teamEntityName}/Roster/Invite',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTeamApiTeamByteamEntityNameRosterInviteBody',
            fields: { EntityName: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTeamApiTeamByteamEntityNameRosterInviteUrlParams',
            fields: { teamEntityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamByteamEntityNameRosterInviteResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeamByteamEntityNameRosterByplayerEntityName2: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TeamController.PostSetRoleAndTitle',
    method: 'PUT',
    url: '/api/Team/{teamEntityName}/Roster/{playerEntityName}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTeamApiTeamByteamEntityNameRosterByplayerEntityName2Body',
            fields: {
              RoleId: { type: graphql.GraphQLFloat },
              PlayerTitle: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTeamApiTeamByteamEntityNameRosterByplayerEntityName2UrlParams',
            fields: {
              teamEntityName: { type: graphql.GraphQLString },
              playerEntityName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTeamApiTeamByteamEntityNameRosterByplayerEntityName2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
