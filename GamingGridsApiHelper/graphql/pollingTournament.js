const graphql = require('graphql')

module.exports = {
  ApiTournamentByTournamentIdBracketUpdated: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.TournamentController.GetIsBracketUpdated',
    method: 'GET',
    url: '/api/Tournament/{TournamentId}/Bracket/Updated',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'pollingTournamentApiTournamentByTournamentIdBracketUpdateduriParams',
            fields: { lastUpdatedDateTime: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'pollingTournamentApiTournamentByTournamentIdBracketUpdatedurlParams',
            fields: { TournamentId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'pollingTournamentApiTournamentByTournamentIdBracketUpdatedResponse',
      fields: {
        Response: { type: graphql.GraphQLBoolean },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentByTournamentIdBracket: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.TournamentController.GetBrackets',
    method: 'GET',
    url: '/api/Tournament/{TournamentId}/Bracket',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'pollingTournamentApiTournamentByTournamentIdBracketuriParams',
            fields: { lastUpdatedDateTime: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'pollingTournamentApiTournamentByTournamentIdBracketurlParams',
            fields: { TournamentId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'pollingTournamentApiTournamentByTournamentIdBracketResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'pollingTournamentApiTournamentByTournamentIdBracketResponseResponse',
            fields: {
              LastUpdatedDateTime: { type: graphql.GraphQLString },
              teams: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentApiTournamentByTournamentIdBracketResponseteamsResponse',
                    fields: {
                      Length: { type: graphql.GraphQLInt },
                      LongLength: { type: graphql.GraphQLInt },
                      Rank: { type: graphql.GraphQLInt },
                      SyncRoot: { type: graphql.GraphQLString },
                      IsReadOnly: { type: graphql.GraphQLBoolean },
                      IsFixedSize: { type: graphql.GraphQLBoolean },
                      IsSynchronized: { type: graphql.GraphQLBoolean }
                    }
                  })
                )
              },
              results: { type: graphql.GraphQLInt }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentByTournamentIdLeaguePlayByparticipantId: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.TournamentController.GetLeagueMatchOpponent',
    method: 'GET',
    url: '/api/Tournament/{TournamentId}/League/Play/{participantId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'pollingTournamentApiTournamentByTournamentIdLeaguePlayByparticipantIdurlParams',
            fields: {
              participantId: { type: graphql.GraphQLInt },
              TournamentId: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'pollingTournamentApiTournamentByTournamentIdLeaguePlayByparticipantIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'pollingTournamentApiTournamentByTournamentIdLeaguePlayByparticipantIdResponseResponse',
            fields: {
              TournamentMatchId: { type: graphql.GraphQLInt },
              RoundNumber: { type: graphql.GraphQLInt },
              MatchNumber: { type: graphql.GraphQLInt },
              QualifierGroupNumber: { type: graphql.GraphQLInt },
              RoundLevelTypeId: { type: graphql.GraphQLInt },
              ParticipantAName: { type: graphql.GraphQLString },
              ParticipantBName: { type: graphql.GraphQLString },
              IsFinalized: { type: graphql.GraphQLBoolean }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentByTournamentIdAssistanceUnresolved: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.TournamentController.UnresolvedAssistanceList',
    method: 'GET',
    url: '/api/Tournament/{TournamentId}/Assistance/Unresolved',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'pollingTournamentApiTournamentByTournamentIdAssistanceUnresolvedurlParams',
            fields: { TournamentId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'pollingTournamentApiTournamentByTournamentIdAssistanceUnresolvedResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'pollingTournamentApiTournamentByTournamentIdAssistanceUnresolvedResponseResponse',
              fields: {
                TournamentMatchId: { type: graphql.GraphQLInt },
                RoundNumber: { type: graphql.GraphQLInt },
                MatchNumber: { type: graphql.GraphQLInt },
                QualifierGroupNumber: { type: graphql.GraphQLInt },
                RoundLevelTypeId: { type: graphql.GraphQLInt },
                ParticipantAName: { type: graphql.GraphQLString },
                ParticipantBName: { type: graphql.GraphQLString },
                IsFinalized: { type: graphql.GraphQLBoolean }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentByTournamentId: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.TournamentController.Profile',
    method: 'GET',
    url: '/api/Tournament/{TournamentId}',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'pollingTournamentApiTournamentByTournamentIduriParams',
            fields: { lastUpdatedDateTime: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'pollingTournamentApiTournamentByTournamentIdurlParams',
            fields: { TournamentId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'pollingTournamentApiTournamentByTournamentIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'pollingTournamentApiTournamentByTournamentIdResponseResponse',
            fields: {
              IsRegisteredForTournament: { type: graphql.GraphQLBoolean },
              IsMyLanModeEnabled: { type: graphql.GraphQLBoolean },
              MyLanSeatLocation: { type: graphql.GraphQLString },
              RegisteredTeamProfile: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponseRegisteredTeamProfileResponse',
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
              RulesTitle: { type: graphql.GraphQLString },
              RulesDescription: { type: graphql.GraphQLString },
              Administrators: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentApiTournamentByTournamentIdResponseAdministratorsResponse',
                    fields: {
                      IsTournamentLevelAdministrator: {
                        type: graphql.GraphQLBoolean
                      },
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
                )
              },
              EntityOwnerProfile: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponseEntityOwnerProfileResponse',
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
              Participants: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentApiTournamentByTournamentIdResponseParticipantsResponse',
                    fields: {
                      TournamentId: { type: graphql.GraphQLInt },
                      EntityParticipantId: { type: graphql.GraphQLInt },
                      EntityParticipantProfile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentApiTournamentByTournamentIdResponseParticipantsEntityParticipantProfileResponse',
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
                      JoinDateTime: { type: graphql.GraphQLString },
                      IsChallengeAggrssor: { type: graphql.GraphQLBoolean },
                      IsAccepted: { type: graphql.GraphQLBoolean },
                      Statistics: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentApiTournamentByTournamentIdResponseParticipantsStatisticsResponse',
                          fields: {
                            MatchPlayStatisticsId: { type: graphql.GraphQLInt },
                            EntityId: { type: graphql.GraphQLInt },
                            MatchesPlayedCount: { type: graphql.GraphQLInt },
                            WonCount: { type: graphql.GraphQLInt },
                            LostCount: { type: graphql.GraphQLInt },
                            TieCount: { type: graphql.GraphQLInt },
                            ForfeitedWonCount: { type: graphql.GraphQLInt },
                            ForfeitedLostCount: { type: graphql.GraphQLInt },
                            NoShowCount: { type: graphql.GraphQLInt },
                            TotalWinnings: { type: graphql.GraphQLInt },
                            TotalScore: { type: graphql.GraphQLFloat },
                            TotalTimePlayedInSeconds: {
                              type: graphql.GraphQLInt
                            },
                            WinStreak: { type: graphql.GraphQLInt },
                            LossStreak: { type: graphql.GraphQLInt }
                          }
                        })
                      },
                      FinalPlacement: { type: graphql.GraphQLInt },
                      SeededPlacement: { type: graphql.GraphQLInt },
                      FlaggedAsCheater: { type: graphql.GraphQLBoolean },
                      HasDismissedResults: { type: graphql.GraphQLBoolean },
                      PrizeAwardedAmount: { type: graphql.GraphQLInt },
                      OtherPrizeAwarded: { type: graphql.GraphQLString },
                      MatchPlayStatisticsId: { type: graphql.GraphQLInt },
                      IsCheckedIn: { type: graphql.GraphQLBoolean },
                      CheckedInDateTime: { type: graphql.GraphQLString },
                      IsStandBy: { type: graphql.GraphQLBoolean },
                      StandByPosition: { type: graphql.GraphQLInt },
                      QualifierGroupNumber: { type: graphql.GraphQLInt },
                      QualifierGroupSeedNumber: { type: graphql.GraphQLInt },
                      QualifierWinCount: { type: graphql.GraphQLInt },
                      QualifierLossCount: { type: graphql.GraphQLInt },
                      QualifierTieCount: { type: graphql.GraphQLInt },
                      QualifierScoreCount: { type: graphql.GraphQLInt },
                      QualifierTotalPoints: { type: graphql.GraphQLInt },
                      QualifierLastTotalPoints: { type: graphql.GraphQLInt },
                      QualifierRankingPosition: { type: graphql.GraphQLInt },
                      QualifierLastRankingPosition: {
                        type: graphql.GraphQLInt
                      },
                      QualifierScoreLastUpdate: { type: graphql.GraphQLString },
                      QualifierCurrentRoundNumber: { type: graphql.GraphQLInt },
                      QualifierMatchCount: { type: graphql.GraphQLInt },
                      QualifierAveragePoints: { type: graphql.GraphQLInt },
                      QualifierPointsFor: { type: graphql.GraphQLInt },
                      QualifierPointsAgainst: { type: graphql.GraphQLInt },
                      QuitAfterLive: { type: graphql.GraphQLBoolean },
                      QuitAfterLiveDateTime: { type: graphql.GraphQLString },
                      RemovedAfterLive: { type: graphql.GraphQLBoolean },
                      RemovedAfterLiveDateTime: { type: graphql.GraphQLString },
                      CurrentTieBreakerValues: { type: graphql.GraphQLFloat },
                      QualifierTieBreakers: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'pollingTournamentApiTournamentByTournamentIdResponseParticipantsQualifierTieBreakersResponse',
                            fields: {
                              RoundNumber: { type: graphql.GraphQLInt },
                              TieBreakerLevelId: { type: graphql.GraphQLInt },
                              TieBreakerTypeId: { type: graphql.GraphQLInt },
                              TieBreakerValue: { type: graphql.GraphQLFloat }
                            }
                          })
                        )
                      },
                      GameTitleTeamSideId: { type: graphql.GraphQLInt },
                      GameTitleTeamSide: { type: graphql.GraphQLString }
                    }
                  })
                )
              },
              Matches: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentApiTournamentByTournamentIdResponseMatchesResponse',
                    fields: {
                      TournamentMatchStateId: { type: graphql.GraphQLInt },
                      TournamentMatchId: { type: graphql.GraphQLInt },
                      TournamentId: { type: graphql.GraphQLInt },
                      GamePlatformFranchiseTitleId: {
                        type: graphql.GraphQLInt
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
                      EntityOwnerId: { type: graphql.GraphQLInt },
                      EntityOwnerProfile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentApiTournamentByTournamentIdResponseMatchesEntityOwnerProfileResponse',
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
                            'pollingTournamentApiTournamentByTournamentIdResponseMatchesEntityParticipantAResponse',
                          fields: {
                            Id: { type: graphql.GraphQLInt },
                            IsBye: { type: graphql.GraphQLBoolean },
                            NoShow: { type: graphql.GraphQLBoolean },
                            Forfeit: { type: graphql.GraphQLBoolean },
                            Score: { type: graphql.GraphQLFloat },
                            LiveScore: { type: graphql.GraphQLFloat },
                            TeamSideId: { type: graphql.GraphQLInt },
                            TeamSideName: { type: graphql.GraphQLString },
                            CountryCode: { type: graphql.GraphQLString },
                            Region: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentApiTournamentByTournamentIdResponseMatchesEntityParticipantARegionResponse',
                                fields: {
                                  GamingServerRegionId: {
                                    type: graphql.GraphQLInt
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
                                  'pollingTournamentApiTournamentByTournamentIdResponseMatchesEntityParticipantAProfileResponse',
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
                                    'pollingTournamentApiTournamentByTournamentIdResponseMatchesEntityParticipantAHearthstoneDecksResponse',
                                  fields: {
                                    PlayerNumber: { type: graphql.GraphQLInt },
                                    IsStartingDeck: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    HearthstoneDeckExcluded: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    GameTitleModeHearthstoneDeckId: {
                                      type: graphql.GraphQLInt
                                    },
                                    GameTitleModeId: {
                                      type: graphql.GraphQLInt
                                    },
                                    HearthstoneDeck: {
                                      type: graphql.GraphQLString
                                    },
                                    HearthstoneDeckImage: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'pollingTournamentApiTournamentByTournamentIdResponseMatchesEntityParticipantAHearthstoneDecksHearthstoneDeckImageResponse',
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
                            'pollingTournamentApiTournamentByTournamentIdResponseMatchesEntityParticipantBResponse',
                          fields: {
                            Id: { type: graphql.GraphQLInt },
                            IsBye: { type: graphql.GraphQLBoolean },
                            NoShow: { type: graphql.GraphQLBoolean },
                            Forfeit: { type: graphql.GraphQLBoolean },
                            Score: { type: graphql.GraphQLFloat },
                            LiveScore: { type: graphql.GraphQLFloat },
                            TeamSideId: { type: graphql.GraphQLInt },
                            TeamSideName: { type: graphql.GraphQLString },
                            CountryCode: { type: graphql.GraphQLString },
                            Region: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentApiTournamentByTournamentIdResponseMatchesEntityParticipantBRegionResponse',
                                fields: {
                                  GamingServerRegionId: {
                                    type: graphql.GraphQLInt
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
                                  'pollingTournamentApiTournamentByTournamentIdResponseMatchesEntityParticipantBProfileResponse',
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
                                    'pollingTournamentApiTournamentByTournamentIdResponseMatchesEntityParticipantBHearthstoneDecksResponse',
                                  fields: {
                                    PlayerNumber: { type: graphql.GraphQLInt },
                                    IsStartingDeck: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    HearthstoneDeckExcluded: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    GameTitleModeHearthstoneDeckId: {
                                      type: graphql.GraphQLInt
                                    },
                                    GameTitleModeId: {
                                      type: graphql.GraphQLInt
                                    },
                                    HearthstoneDeck: {
                                      type: graphql.GraphQLString
                                    },
                                    HearthstoneDeckImage: {
                                      type: new graphql.GraphQLObjectType({
                                        name:
                                          'pollingTournamentApiTournamentByTournamentIdResponseMatchesEntityParticipantBHearthstoneDecksHearthstoneDeckImageResponse',
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
                      RoundNumber: { type: graphql.GraphQLInt },
                      RoundLevelTypeId: { type: graphql.GraphQLInt },
                      MatchNumber: { type: graphql.GraphQLInt },
                      NumberOfMaps: { type: graphql.GraphQLInt },
                      MapNumber: { type: graphql.GraphQLInt },
                      CurrentGameTitleModeMapId: { type: graphql.GraphQLInt },
                      MapFileName: { type: graphql.GraphQLString },
                      MapDisplayName: { type: graphql.GraphQLString },
                      GamingServerRegionId: { type: graphql.GraphQLInt },
                      GamingServerRegionName: { type: graphql.GraphQLString },
                      IsBracket: { type: graphql.GraphQLBoolean },
                      AllowRescheduling: { type: graphql.GraphQLBoolean },
                      WillBroadcast: { type: graphql.GraphQLBoolean },
                      BroadcastUrl: { type: graphql.GraphQLString },
                      AutomaticGoLiveOnSchedule: {
                        type: graphql.GraphQLBoolean
                      },
                      MinutesAfterStartToForfeit: { type: graphql.GraphQLInt },
                      MinutesBeforeStartToAllowCheckin: {
                        type: graphql.GraphQLInt
                      },
                      ServerSendPlayerSummaryStatistics: {
                        type: graphql.GraphQLBoolean
                      },
                      GamingServerId: { type: graphql.GraphQLInt },
                      EntityPlayerControllerId: { type: graphql.GraphQLInt },
                      AllTeamAPlayersReady: { type: graphql.GraphQLBoolean },
                      TeamAIsReady: { type: graphql.GraphQLBoolean },
                      AllTeamBPlayersReady: { type: graphql.GraphQLBoolean },
                      TeamBIsReady: { type: graphql.GraphQLBoolean },
                      ScoreManuallyReportedDateTime: {
                        type: graphql.GraphQLString
                      },
                      ScoreManuallyReported: { type: graphql.GraphQLBoolean },
                      ScoreManuallyReportedByPlayerId: {
                        type: graphql.GraphQLInt
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
                              'pollingTournamentApiTournamentByTournamentIdResponseMatchesMapsPlayedResponse',
                            fields: {
                              TournamentMatchId: { type: graphql.GraphQLInt },
                              MapNumber: { type: graphql.GraphQLInt },
                              GameTitleModeMapId: { type: graphql.GraphQLInt },
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
                                    'pollingTournamentApiTournamentByTournamentIdResponseMatchesMapsPlayedMapResponse',
                                  fields: {
                                    GameTitleModeMapId: {
                                      type: graphql.GraphQLInt
                                    },
                                    GameTitleModeId: {
                                      type: graphql.GraphQLInt
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
                            'pollingTournamentApiTournamentByTournamentIdResponseMatchesDisputeResponse',
                          fields: {
                            TournamentMatchDisputeId: {
                              type: graphql.GraphQLInt
                            },
                            TournamentMatchId: { type: graphql.GraphQLInt },
                            DisputeState: { type: graphql.GraphQLInt },
                            InitiatedByPlayerId: { type: graphql.GraphQLInt },
                            InitiatedByPlayerProfile: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentApiTournamentByTournamentIdResponseMatchesDisputeInitiatedByPlayerProfileResponse',
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
                            EntityAdministratorId: { type: graphql.GraphQLInt },
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
                      NewServerRequestedEntityId: { type: graphql.GraphQLInt },
                      NewServerRequestedByTeamA: {
                        type: graphql.GraphQLBoolean
                      },
                      NewServerRequestedCount: { type: graphql.GraphQLInt },
                      NeedsAssistance: { type: graphql.GraphQLBoolean },
                      AllowedSpectators: { type: graphql.GraphQLString },
                      StreamingServiceId: { type: graphql.GraphQLInt },
                      ManualMode: { type: graphql.GraphQLBoolean },
                      ManualServerConnectionInfo: {
                        type: graphql.GraphQLString
                      },
                      StreamingService: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentApiTournamentByTournamentIdResponseMatchesStreamingServiceResponse',
                          fields: {
                            StreamingServiceId: { type: graphql.GraphQLInt },
                            StreamingService: { type: graphql.GraphQLString },
                            SourceName: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      AssistanceRequests: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'pollingTournamentApiTournamentByTournamentIdResponseMatchesAssistanceRequestsResponse',
                            fields: {
                              TournamentMatchAssistanceId: {
                                type: graphql.GraphQLInt
                              },
                              TournamentMatchId: { type: graphql.GraphQLInt },
                              AssistanceRequestedById: {
                                type: graphql.GraphQLInt
                              },
                              AssistanceRequestedDateTime: {
                                type: graphql.GraphQLString
                              },
                              ResolvedById: { type: graphql.GraphQLInt },
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
                      MatchAdministratorId: { type: graphql.GraphQLInt },
                      ActionLog: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'pollingTournamentApiTournamentByTournamentIdResponseMatchesActionLogResponse',
                            fields: {
                              TournamentMatchActionLogId: {
                                type: graphql.GraphQLInt
                              },
                              EntityId: { type: graphql.GraphQLInt },
                              EntityProfile: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'pollingTournamentApiTournamentByTournamentIdResponseMatchesActionLogEntityProfileResponse',
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
                              TournamentMatchId: { type: graphql.GraphQLInt },
                              ActionLogTypeId: { type: graphql.GraphQLInt },
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
                              'pollingTournamentApiTournamentByTournamentIdResponseMatchesPlaybackResponse',
                            fields: {
                              TournamentMatchPlaybackId: {
                                type: graphql.GraphQLInt
                              },
                              TournamentMatchId: { type: graphql.GraphQLInt },
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
                      QualifierGroupNumber: { type: graphql.GraphQLInt },
                      IsQualifier: { type: graphql.GraphQLBoolean },
                      HasTieBreaker: { type: graphql.GraphQLBoolean },
                      TieBreakerCount: { type: graphql.GraphQLInt },
                      ScoringImage: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentApiTournamentByTournamentIdResponseMatchesScoringImageResponse',
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
              RoundRules: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentApiTournamentByTournamentIdResponseRoundRulesResponse',
                    fields: {
                      TournamentRoundRulesId: { type: graphql.GraphQLInt },
                      TournamentId: { type: graphql.GraphQLInt },
                      RoundLevelTypeId: { type: graphql.GraphQLInt },
                      RoundNumber: { type: graphql.GraphQLInt },
                      OriginalStartDateTime: { type: graphql.GraphQLString },
                      MinimumStartDateTime: { type: graphql.GraphQLString },
                      MaximumStartDateTime: { type: graphql.GraphQLString },
                      IsMultipleMap: { type: graphql.GraphQLBoolean },
                      IsMapListOrdered: { type: graphql.GraphQLBoolean },
                      IsDelayed: { type: graphql.GraphQLBoolean },
                      Maps: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'pollingTournamentApiTournamentByTournamentIdResponseRoundRulesMapsResponse',
                            fields: {
                              TournamentRoundRulesId: {
                                type: graphql.GraphQLInt
                              },
                              TournamentId: { type: graphql.GraphQLInt },
                              RoundLevelTypeId: { type: graphql.GraphQLInt },
                              RoundNumber: { type: graphql.GraphQLInt },
                              MapPositionNumber: { type: graphql.GraphQLInt },
                              GameTitleModeMapId: { type: graphql.GraphQLInt },
                              GameTitleModeId: { type: graphql.GraphQLInt },
                              MapFileName: { type: graphql.GraphQLString },
                              MapDisplayName: { type: graphql.GraphQLString },
                              IsActive: { type: graphql.GraphQLBoolean }
                            }
                          })
                        )
                      }
                    }
                  })
                )
              },
              IsCheckedIn: { type: graphql.GraphQLBoolean },
              IsRegisteredAsStandby: { type: graphql.GraphQLBoolean },
              RegisteredAsStandbyPosition: { type: graphql.GraphQLInt },
              TournamentManagementPolicy: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponseTournamentManagementPolicyResponse',
                  fields: {
                    TournamentManagementPolicyId: { type: graphql.GraphQLInt },
                    TournamentManagementPolicyName: {
                      type: graphql.GraphQLString
                    },
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
                    AllowFormatSingleElimination: {
                      type: graphql.GraphQLBoolean
                    },
                    AllowFormatDoubleElimination: {
                      type: graphql.GraphQLBoolean
                    },
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
                    AuthorizedGamePlatformsList: {
                      type: graphql.GraphQLString
                    },
                    AuthorizedGamePlatofrms: { type: graphql.GraphQLInt }
                  }
                })
              },
              PendingRegistration: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentApiTournamentByTournamentIdResponsePendingRegistrationResponse',
                    fields: {
                      EntityPlayerId: { type: graphql.GraphQLInt },
                      DisplayName: { type: graphql.GraphQLString },
                      EntityTeamId: { type: graphql.GraphQLInt },
                      TeamEntityName: { type: graphql.GraphQLString },
                      IsTeamCaptain: { type: graphql.GraphQLBoolean },
                      HasAccepted: { type: graphql.GraphQLBoolean }
                    }
                  })
                )
              },
              EstimatedPrizePool: { type: graphql.GraphQLInt },
              TournamentStateId: { type: graphql.GraphQLInt },
              IsTournamentSpecificAdministrator: {
                type: graphql.GraphQLBoolean
              },
              IsPublished: { type: graphql.GraphQLBoolean },
              GameName: { type: graphql.GraphQLString },
              IsTournamentAdministrator: { type: graphql.GraphQLBoolean },
              EntityOwnerId: { type: graphql.GraphQLInt },
              GameTitleRulesId: { type: graphql.GraphQLInt },
              IsApproved: { type: graphql.GraphQLBoolean },
              IsRealCurrency: { type: graphql.GraphQLBoolean },
              EntityApprovedById: { type: graphql.GraphQLInt },
              ResultIsFinalized: { type: graphql.GraphQLBoolean },
              EntityResultFinalizedById: { type: graphql.GraphQLInt },
              TournamentPassword: { type: graphql.GraphQLString },
              PrizePoolAmount: { type: graphql.GraphQLInt },
              TournamentPrizeFundingTypeId: { type: graphql.GraphQLInt },
              TournamentPrizeFundingTypeName: { type: graphql.GraphQLString },
              DoesCycle: { type: graphql.GraphQLBoolean },
              CycleLengthInMinutes: { type: graphql.GraphQLInt },
              CycleMinutesBeforeStart: { type: graphql.GraphQLInt },
              MaxCycleCount: { type: graphql.GraphQLInt },
              CycleCount: { type: graphql.GraphQLInt },
              HasCycled: { type: graphql.GraphQLBoolean },
              CycledTournamentId: { type: graphql.GraphQLInt },
              CanOnlyRegisterFromRegionId: { type: graphql.GraphQLInt },
              CanOnlyRegisterFromRegionName: { type: graphql.GraphQLString },
              GamingServerRegionName: { type: graphql.GraphQLString },
              OpenPlayMinimumTimeToQualify: { type: graphql.GraphQLInt },
              RoundRobinIsComplete: { type: graphql.GraphQLBoolean },
              TournamentSeedingTypeId: { type: graphql.GraphQLInt },
              TournamentPairingTypeId: { type: graphql.GraphQLInt },
              AutomaticGoLiveOnSchedule: { type: graphql.GraphQLBoolean },
              MinutesAfterStartToForfeit: { type: graphql.GraphQLInt },
              MinutesBeforeStartToAllowCheckin: { type: graphql.GraphQLInt },
              Sponsors: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponseSponsorsResponse',
                  fields: {
                    TitleSponsor: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentApiTournamentByTournamentIdResponseSponsorsTitleSponsorResponse',
                        fields: {
                          SponsorName: { type: graphql.GraphQLString },
                          SponsorImageUrl: { type: graphql.GraphQLString },
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
                            'pollingTournamentApiTournamentByTournamentIdResponseSponsorsMainSponsorsResponse',
                          fields: {
                            SponsorName: { type: graphql.GraphQLString },
                            SponsorImageUrl: { type: graphql.GraphQLString },
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
                            'pollingTournamentApiTournamentByTournamentIdResponseSponsorsPartnersResponse',
                          fields: {
                            SponsorName: { type: graphql.GraphQLString },
                            SponsorImageUrl: { type: graphql.GraphQLString },
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
                      'pollingTournamentApiTournamentByTournamentIdResponseAnnouncementsResponse',
                    fields: {
                      TournamentAnnouncementId: { type: graphql.GraphQLInt },
                      TournamentId: { type: graphql.GraphQLInt },
                      TournamentAnnouncement: { type: graphql.GraphQLString },
                      CreatedDateTime: { type: graphql.GraphQLString },
                      CreatedById: { type: graphql.GraphQLInt },
                      EntityName: { type: graphql.GraphQLString },
                      DisplayName: { type: graphql.GraphQLString }
                    }
                  })
                )
              },
              CreatedDateTime: { type: graphql.GraphQLString },
              GamePlatformFranchiseTitleStateId: { type: graphql.GraphQLInt },
              AllMatchesRunManualMode: { type: graphql.GraphQLBoolean },
              ThirdPartyTournamentId: { type: graphql.GraphQLString },
              ThirdPartyApiRegion: { type: graphql.GraphQLString },
              ThirdPartyTournamentConfiguration: {
                type: graphql.GraphQLString
              },
              ServerConfigurationFileName: { type: graphql.GraphQLString },
              AllowPreCheckin: { type: graphql.GraphQLBoolean },
              PreCheckinMinutesBeforeStart: { type: graphql.GraphQLInt },
              StandByParticipantCount: { type: graphql.GraphQLInt },
              IsPreCheckinAvailable: { type: graphql.GraphQLBoolean },
              Qualifier: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponseQualifierResponse',
                  fields: {
                    TournamentId: { type: graphql.GraphQLInt },
                    NumberOfGroups: { type: graphql.GraphQLInt },
                    QualifierWinPoints: { type: graphql.GraphQLInt },
                    QualifierLossPoints: { type: graphql.GraphQLInt },
                    QualifierTiePoints: { type: graphql.GraphQLInt },
                    QualifierScoreMultiplierPoints: {
                      type: graphql.GraphQLInt
                    },
                    QualifierSortTypeId: { type: graphql.GraphQLInt },
                    League: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentApiTournamentByTournamentIdResponseQualifierLeagueResponse',
                        fields: {
                          EndDateTime: { type: graphql.GraphQLString },
                          GameTileModeMapId: { type: graphql.GraphQLInt },
                          MinimumNumberOfMatches: { type: graphql.GraphQLInt },
                          NumberOfPlays: { type: graphql.GraphQLInt },
                          AllowRegistrationAfterTournamentStart: {
                            type: graphql.GraphQLBoolean
                          },
                          GroupPlacementOnJoin: {
                            type: graphql.GraphQLBoolean
                          },
                          MaximumConcurrentMatches: {
                            type: graphql.GraphQLInt
                          },
                          BufferInMinutesBetweenMatches: {
                            type: graphql.GraphQLInt
                          }
                        }
                      })
                    },
                    Groups: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentApiTournamentByTournamentIdResponseQualifierGroupsResponse',
                          fields: {
                            TournamentId: { type: graphql.GraphQLInt },
                            GroupNumber: { type: graphql.GraphQLInt },
                            GroupName: { type: graphql.GraphQLString },
                            IsGuaranteedPlayoffs: {
                              type: graphql.GraphQLBoolean
                            },
                            NumberOfPlayersToAdvance: {
                              type: graphql.GraphQLInt
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
                            'pollingTournamentApiTournamentByTournamentIdResponseQualifierTieBreakersResponse',
                          fields: {
                            TieBreakerLevelId: { type: graphql.GraphQLInt },
                            TieBreakerTypeId: { type: graphql.GraphQLInt },
                            TieBreakerName: { type: graphql.GraphQLString },
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
              TournamentManagementPolicyId: { type: graphql.GraphQLInt },
              PredefinedStreamedMatches: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentApiTournamentByTournamentIdResponsePredefinedStreamedMatchesResponse',
                    fields: {
                      RoundRuleLevelId: { type: graphql.GraphQLInt },
                      RoundNumber: { type: graphql.GraphQLInt },
                      MatchNumber: { type: graphql.GraphQLInt },
                      StreamingServiceId: { type: graphql.GraphQLInt },
                      BroadcastUrl: { type: graphql.GraphQLString }
                    }
                  })
                )
              },
              LanModeEnabled: { type: graphql.GraphQLBoolean },
              EnableLanTagging: { type: graphql.GraphQLBoolean },
              LanTag: { type: graphql.GraphQLString },
              AllowedCountryIds: { type: graphql.GraphQLInt },
              AllowedCountryList: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentApiTournamentByTournamentIdResponseAllowedCountryListResponse',
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
                )
              },
              PauseIfQualifierEndsInTie: { type: graphql.GraphQLBoolean },
              IsPausedForTiedQualifierFinish: { type: graphql.GraphQLBoolean },
              IsPausedForTiedQualifierFinishDateTime: {
                type: graphql.GraphQLString
              },
              QualifierTiedFinishIsResolved: { type: graphql.GraphQLBoolean },
              QualifierTiedFinishIsResolvedDateTime: {
                type: graphql.GraphQLString
              },
              QualifierTiedFinishIsResolvedByAdministratorId: {
                type: graphql.GraphQLInt
              },
              QualifierTiedFinishIsResolvedByAdministratorProfile: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponseQualifierTiedFinishIsResolvedByAdministratorProfileResponse',
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
              RestrictPowerRankingStartDivisionId: { type: graphql.GraphQLInt },
              RestrictPowerRankingEndDivisionId: { type: graphql.GraphQLInt },
              Payouts: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponsePayoutsResponse',
                  fields: {
                    HasPayouts: { type: graphql.GraphQLBoolean },
                    IsFixedPayouts: { type: graphql.GraphQLBoolean },
                    PayoutCount: { type: graphql.GraphQLInt },
                    FixedPayoutAmount: { type: graphql.GraphQLInt },
                    Places: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentApiTournamentByTournamentIdResponsePayoutsPlacesResponse',
                          fields: {
                            IsAwarded: { type: graphql.GraphQLBoolean },
                            AwardedDateTime: { type: graphql.GraphQLString },
                            AwardedAmount: { type: graphql.GraphQLInt },
                            NumberOfWinnersAwarded: {
                              type: graphql.GraphQLInt
                            },
                            Winners: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'pollingTournamentApiTournamentByTournamentIdResponsePayoutsPlacesWinnersResponse',
                                  fields: {
                                    EntityId: { type: graphql.GraphQLInt },
                                    EntityName: { type: graphql.GraphQLString },
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
                            PlaceNumber: { type: graphql.GraphQLInt },
                            PayoutAmount: { type: graphql.GraphQLInt },
                            PayoutPercent: { type: graphql.GraphQLInt },
                            OtherPayout: { type: graphql.GraphQLString },
                            XperiencePoints: { type: graphql.GraphQLInt }
                          }
                        })
                      )
                    }
                  }
                })
              },
              ChallengeMinEntryFee: { type: graphql.GraphQLInt },
              ChallengeMaxEntryFee: { type: graphql.GraphQLInt },
              ChallengeOffers: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentApiTournamentByTournamentIdResponseChallengeOffersResponse',
                    fields: {
                      ChallengeOfferId: { type: graphql.GraphQLInt },
                      EntryFee: { type: graphql.GraphQLInt },
                      ServiceFee: { type: graphql.GraphQLInt },
                      TotalFee: { type: graphql.GraphQLInt },
                      TournamentId: { type: graphql.GraphQLInt },
                      TournamentDescription: { type: graphql.GraphQLString },
                      TournamentTitle: { type: graphql.GraphQLString },
                      CreatorEntityId: { type: graphql.GraphQLInt },
                      ChallengerEntityId: { type: graphql.GraphQLInt },
                      OfferDateTime: { type: graphql.GraphQLString },
                      CreatorStateId: { type: graphql.GraphQLInt },
                      CreatorStateDateTime: { type: graphql.GraphQLString },
                      ChallengerStateId: { type: graphql.GraphQLInt },
                      ChallengerStateDateTime: { type: graphql.GraphQLString },
                      HasPendingRegistration: { type: graphql.GraphQLBoolean },
                      TournamentMatchId: { type: graphql.GraphQLInt },
                      ChallengeComplete: { type: graphql.GraphQLBoolean },
                      ChallengeCompleteDateTime: {
                        type: graphql.GraphQLString
                      },
                      ChallengerNeedsRegistration: {
                        type: graphql.GraphQLBoolean
                      },
                      CreatorNeedsRegistration: {
                        type: graphql.GraphQLBoolean
                      },
                      ChallengeCancelled: { type: graphql.GraphQLBoolean }
                    }
                  })
                )
              },
              KeepAlive: { type: graphql.GraphQLString },
              MatchCountdownMinutes: { type: graphql.GraphQLInt },
              LocationIds: { type: graphql.GraphQLInt },
              Locations: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentApiTournamentByTournamentIdResponseLocationsResponse',
                    fields: {
                      LocationId: { type: graphql.GraphQLInt },
                      StateProvence: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentApiTournamentByTournamentIdResponseLocationsStateProvenceResponse',
                          fields: {
                            AddressStateProvenceId: {
                              type: graphql.GraphQLInt
                            },
                            AddressCountryId: { type: graphql.GraphQLInt },
                            AddressStateProvenceCode: {
                              type: graphql.GraphQLString
                            },
                            AddressStateProvence: {
                              type: graphql.GraphQLString
                            },
                            AllowsRealMoney: { type: graphql.GraphQLBoolean }
                          }
                        })
                      },
                      Country: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentApiTournamentByTournamentIdResponseLocationsCountryResponse',
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
                      Region: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentApiTournamentByTournamentIdResponseLocationsRegionResponse',
                          fields: {
                            GamingServerRegionId: { type: graphql.GraphQLInt },
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
                      AddressStateProvenceId: { type: graphql.GraphQLInt },
                      AddressCountryId: { type: graphql.GraphQLInt },
                      PostalCode: { type: graphql.GraphQLString },
                      GamingServerRegionId: { type: graphql.GraphQLInt },
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
                    'pollingTournamentApiTournamentByTournamentIdResponseTrophyGroupResponse',
                  fields: {
                    TrophyGroupId: { type: graphql.GraphQLInt },
                    TrophyGroup: { type: graphql.GraphQLString },
                    IsActive: { type: graphql.GraphQLBoolean }
                  }
                })
              },
              TrophyGroupId: { type: graphql.GraphQLInt },
              XperiencePointsForJoining: { type: graphql.GraphQLInt },
              XperiencePointsPerRound: { type: graphql.GraphQLInt },
              BracketsBuilt: { type: graphql.GraphQLBoolean },
              TotalEntryFeesAmount: { type: graphql.GraphQLInt },
              TotalPayoutAmount: { type: graphql.GraphQLInt },
              TotalRakeAmount: { type: graphql.GraphQLInt },
              DirectChallengeOppontentEntityId: { type: graphql.GraphQLInt },
              UseCommunitySteamAccounts: { type: graphql.GraphQLBoolean },
              IsChallenge: { type: graphql.GraphQLBoolean },
              TournamentIsComplete: { type: graphql.GraphQLBoolean },
              TournamentIsLive: { type: graphql.GraphQLBoolean },
              TournamentLiveDateTime: { type: graphql.GraphQLString },
              TournamentId: { type: graphql.GraphQLInt },
              GameTitleModeId: { type: graphql.GraphQLInt },
              TournamentTitle: { type: graphql.GraphQLString },
              TournamentDescription: { type: graphql.GraphQLString },
              TournamentSeriesId: { type: graphql.GraphQLInt },
              GamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
              IsTeamTournament: { type: graphql.GraphQLBoolean },
              MinimumNumberOfEntities: { type: graphql.GraphQLInt },
              MaximumNumberOfEntities: { type: graphql.GraphQLInt },
              TeamSize: { type: graphql.GraphQLInt },
              TournamentTypeId: { type: graphql.GraphQLInt },
              OriginalTournamentTypeId: { type: graphql.GraphQLInt },
              TournamentTypeName: { type: graphql.GraphQLString },
              TournamentStartDateTime: { type: graphql.GraphQLString },
              TournamentEndDateTime: { type: graphql.GraphQLString },
              RegistrationCutoffDateTime: { type: graphql.GraphQLString },
              IsPublic: { type: graphql.GraphQLBoolean },
              IsFavorite: { type: graphql.GraphQLBoolean },
              EnableMatchLobby: { type: graphql.GraphQLBoolean },
              ImageLogo: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponseImageLogoResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageBackground: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponseImageBackgroundResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              JoinPasswordRequired: { type: graphql.GraphQLBoolean },
              HasConsolationRound: { type: graphql.GraphQLBoolean },
              CurrentNumberOfParticipants: { type: graphql.GraphQLInt },
              PowerRankingProfileId: { type: graphql.GraphQLInt },
              PlatformGame: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponsePlatformGameResponse',
                  fields: {
                    GamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
                    Platform: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentApiTournamentByTournamentIdResponsePlatformGamePlatformResponse',
                        fields: {
                          GamePlatformId: { type: graphql.GraphQLInt },
                          GamePlatformCode: { type: graphql.GraphQLString },
                          GamePlatform: { type: graphql.GraphQLString },
                          ImageSmall: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentApiTournamentByTournamentIdResponsePlatformGamePlatformImageSmallResponse',
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
                    Game: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentApiTournamentByTournamentIdResponsePlatformGameGameResponse',
                        fields: {
                          GameTitleId: { type: graphql.GraphQLInt },
                          GameName: { type: graphql.GraphQLString },
                          GameShortCode: { type: graphql.GraphQLString },
                          GameDescription: { type: graphql.GraphQLString },
                          GameWebsite: { type: graphql.GraphQLString },
                          ImageLarge: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentApiTournamentByTournamentIdResponsePlatformGameGameImageLargeResponse',
                              fields: {
                                UrlPath: { type: graphql.GraphQLString },
                                RelativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          ImageSmall: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentApiTournamentByTournamentIdResponsePlatformGameGameImageSmallResponse',
                              fields: {
                                UrlPath: { type: graphql.GraphQLString },
                                RelativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          ImageBackground: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentApiTournamentByTournamentIdResponsePlatformGameGameImageBackgroundResponse',
                              fields: {
                                UrlPath: { type: graphql.GraphQLString },
                                RelativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          MaximumPlayersAllowed: { type: graphql.GraphQLInt },
                          MinimumMinutesBetweenTournamentRounds: {
                            type: graphql.GraphQLInt
                          },
                          Franchise: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentApiTournamentByTournamentIdResponsePlatformGameGameFranchiseResponse',
                              fields: {
                                GameFranchiseId: { type: graphql.GraphQLInt },
                                GameFranchise: { type: graphql.GraphQLString },
                                ImageLarge: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'pollingTournamentApiTournamentByTournamentIdResponsePlatformGameGameFranchiseImageLargeResponse',
                                    fields: {
                                      UrlPath: { type: graphql.GraphQLString },
                                      RelativePath: {
                                        type: graphql.GraphQLString
                                      }
                                    }
                                  })
                                },
                                ImageSmall: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'pollingTournamentApiTournamentByTournamentIdResponsePlatformGameGameFranchiseImageSmallResponse',
                                    fields: {
                                      UrlPath: { type: graphql.GraphQLString },
                                      RelativePath: {
                                        type: graphql.GraphQLString
                                      }
                                    }
                                  })
                                },
                                ImageBackground: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'pollingTournamentApiTournamentByTournamentIdResponsePlatformGameGameFranchiseImageBackgroundResponse',
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
                          },
                          Developer: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentApiTournamentByTournamentIdResponsePlatformGameGameDeveloperResponse',
                              fields: {
                                GameDeveloperId: { type: graphql.GraphQLInt },
                                GameDeveloper: { type: graphql.GraphQLString },
                                Website: { type: graphql.GraphQLString },
                                IsActive: { type: graphql.GraphQLBoolean }
                              }
                            })
                          },
                          HasTeamSides: { type: graphql.GraphQLBoolean },
                          IsHearthstone: { type: graphql.GraphQLBoolean },
                          HearthstoneManageDecks: {
                            type: graphql.GraphQLBoolean
                          },
                          IsActive: { type: graphql.GraphQLBoolean }
                        }
                      })
                    },
                    GamePlatformFranchiseTitleStateId: {
                      type: graphql.GraphQLInt
                    },
                    GameAddedDateTime: { type: graphql.GraphQLString },
                    GameDownloadLink: { type: graphql.GraphQLString },
                    ChatPanelGuid: { type: graphql.GraphQLString },
                    ImageLarge: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentApiTournamentByTournamentIdResponsePlatformGameImageLargeResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentApiTournamentByTournamentIdResponsePlatformGameImageSmallResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentApiTournamentByTournamentIdResponsePlatformGameImageBackgroundResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    TotalWinnings: { type: graphql.GraphQLInt },
                    ThirdPartyApplicationId: { type: graphql.GraphQLString },
                    ThirdPartyApiKey: { type: graphql.GraphQLString },
                    GameReleaseVersion: { type: graphql.GraphQLString },
                    GameRevisedDateTime: { type: graphql.GraphQLString },
                    GameVersion: { type: graphql.GraphQLString },
                    GameVersionNeedsVerification: {
                      type: graphql.GraphQLBoolean
                    },
                    IssueGamesServerToMatch: { type: graphql.GraphQLBoolean },
                    TournamentCount: { type: graphql.GraphQLInt },
                    ValidationMethodTypeId: { type: graphql.GraphQLInt },
                    ExternalCallbackTemplateId: { type: graphql.GraphQLInt },
                    InternalCallbackTemplateId: { type: graphql.GraphQLInt },
                    GameServerModVersion: { type: graphql.GraphQLFloat }
                  }
                })
              },
              GameTitleMode: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponseGameTitleModeResponse',
                  fields: {
                    GameTitleModeId: { type: graphql.GraphQLInt },
                    GameTitleId: { type: graphql.GraphQLInt },
                    GameTitleMode: { type: graphql.GraphQLString },
                    IsActive: { type: graphql.GraphQLBoolean }
                  }
                })
              },
              LastUpdatedDateTime: { type: graphql.GraphQLString },
              EntryFee: { type: graphql.GraphQLInt },
              ServiceFee: { type: graphql.GraphQLInt },
              TotalFee: { type: graphql.GraphQLInt }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
