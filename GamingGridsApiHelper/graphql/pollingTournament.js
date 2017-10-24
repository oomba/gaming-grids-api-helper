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
              'pollingTournamentApiTournamentByTournamentIdBracketUpdatedUriParams',
            fields: { lastUpdatedDateTime: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'pollingTournamentApiTournamentByTournamentIdBracketUpdatedUrlParams',
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
              'pollingTournamentApiTournamentByTournamentIdBracketUriParams',
            fields: { lastUpdatedDateTime: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'pollingTournamentApiTournamentByTournamentIdBracketUrlParams',
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
                      Length: { type: graphql.GraphQLFloat },
                      LongLength: { type: graphql.GraphQLFloat },
                      Rank: { type: graphql.GraphQLFloat },
                      SyncRoot: { type: graphql.GraphQLString },
                      IsReadOnly: { type: graphql.GraphQLBoolean },
                      IsFixedSize: { type: graphql.GraphQLBoolean },
                      IsSynchronized: { type: graphql.GraphQLBoolean }
                    }
                  })
                )
              },
              results: { type: graphql.GraphQLFloat }
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
              'pollingTournamentApiTournamentByTournamentIdLeaguePlayByparticipantIdUrlParams',
            fields: {
              participantId: { type: graphql.GraphQLFloat },
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
              TournamentMatchId: { type: graphql.GraphQLFloat },
              RoundNumber: { type: graphql.GraphQLFloat },
              MatchNumber: { type: graphql.GraphQLFloat },
              QualifierGroupNumber: { type: graphql.GraphQLFloat },
              RoundLevelTypeId: { type: graphql.GraphQLFloat },
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
              'pollingTournamentApiTournamentByTournamentIdAssistanceUnresolvedUrlParams',
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
                TournamentMatchId: { type: graphql.GraphQLFloat },
                RoundNumber: { type: graphql.GraphQLFloat },
                MatchNumber: { type: graphql.GraphQLFloat },
                QualifierGroupNumber: { type: graphql.GraphQLFloat },
                RoundLevelTypeId: { type: graphql.GraphQLFloat },
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
            name: 'pollingTournamentApiTournamentByTournamentIdUriParams',
            fields: { lastUpdatedDateTime: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'pollingTournamentApiTournamentByTournamentIdUrlParams',
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
                      TournamentId: { type: graphql.GraphQLFloat },
                      EntityParticipantId: { type: graphql.GraphQLFloat },
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
                      FinalPlacement: { type: graphql.GraphQLFloat },
                      SeededPlacement: { type: graphql.GraphQLFloat },
                      FlaggedAsCheater: { type: graphql.GraphQLBoolean },
                      HasDismissedResults: { type: graphql.GraphQLBoolean },
                      PrizeAwardedAmount: { type: graphql.GraphQLFloat },
                      OtherPrizeAwarded: { type: graphql.GraphQLString },
                      MatchPlayStatisticsId: { type: graphql.GraphQLFloat },
                      IsCheckedIn: { type: graphql.GraphQLBoolean },
                      CheckedInDateTime: { type: graphql.GraphQLString },
                      IsStandBy: { type: graphql.GraphQLBoolean },
                      StandByPosition: { type: graphql.GraphQLFloat },
                      QualifierGroupNumber: { type: graphql.GraphQLFloat },
                      QualifierGroupSeedNumber: { type: graphql.GraphQLFloat },
                      QualifierWinCount: { type: graphql.GraphQLFloat },
                      QualifierLossCount: { type: graphql.GraphQLFloat },
                      QualifierTieCount: { type: graphql.GraphQLFloat },
                      QualifierScoreCount: { type: graphql.GraphQLFloat },
                      QualifierTotalPoints: { type: graphql.GraphQLFloat },
                      QualifierLastTotalPoints: { type: graphql.GraphQLFloat },
                      QualifierRankingPosition: { type: graphql.GraphQLFloat },
                      QualifierLastRankingPosition: {
                        type: graphql.GraphQLFloat
                      },
                      QualifierScoreLastUpdate: { type: graphql.GraphQLString },
                      QualifierCurrentRoundNumber: {
                        type: graphql.GraphQLFloat
                      },
                      QualifierMatchCount: { type: graphql.GraphQLFloat },
                      QualifierAveragePoints: { type: graphql.GraphQLFloat },
                      QualifierPointsFor: { type: graphql.GraphQLFloat },
                      QualifierPointsAgainst: { type: graphql.GraphQLFloat },
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
                              RoundNumber: { type: graphql.GraphQLFloat },
                              TieBreakerLevelId: { type: graphql.GraphQLFloat },
                              TieBreakerTypeId: { type: graphql.GraphQLFloat },
                              TieBreakerValue: { type: graphql.GraphQLFloat }
                            }
                          })
                        )
                      },
                      GameTitleTeamSideId: { type: graphql.GraphQLFloat },
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
                                  'pollingTournamentApiTournamentByTournamentIdResponseMatchesEntityParticipantARegionResponse',
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
                                  'pollingTournamentApiTournamentByTournamentIdResponseMatchesEntityParticipantBRegionResponse',
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
                              'pollingTournamentApiTournamentByTournamentIdResponseMatchesMapsPlayedResponse',
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
                                    'pollingTournamentApiTournamentByTournamentIdResponseMatchesMapsPlayedMapResponse',
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
                            'pollingTournamentApiTournamentByTournamentIdResponseMatchesDisputeResponse',
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
                            'pollingTournamentApiTournamentByTournamentIdResponseMatchesStreamingServiceResponse',
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
                              'pollingTournamentApiTournamentByTournamentIdResponseMatchesAssistanceRequestsResponse',
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
                              'pollingTournamentApiTournamentByTournamentIdResponseMatchesActionLogResponse',
                            fields: {
                              TournamentMatchActionLogId: {
                                type: graphql.GraphQLFloat
                              },
                              EntityId: { type: graphql.GraphQLFloat },
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
                              'pollingTournamentApiTournamentByTournamentIdResponseMatchesPlaybackResponse',
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
                      TournamentRoundRulesId: { type: graphql.GraphQLFloat },
                      TournamentId: { type: graphql.GraphQLFloat },
                      RoundLevelTypeId: { type: graphql.GraphQLFloat },
                      RoundNumber: { type: graphql.GraphQLFloat },
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
                                type: graphql.GraphQLFloat
                              },
                              TournamentId: { type: graphql.GraphQLFloat },
                              RoundLevelTypeId: { type: graphql.GraphQLFloat },
                              RoundNumber: { type: graphql.GraphQLFloat },
                              MapPositionNumber: { type: graphql.GraphQLFloat },
                              GameTitleModeMapId: {
                                type: graphql.GraphQLFloat
                              },
                              GameTitleModeId: { type: graphql.GraphQLFloat },
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
              RegisteredAsStandbyPosition: { type: graphql.GraphQLFloat },
              TournamentManagementPolicy: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponseTournamentManagementPolicyResponse',
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
              PendingRegistration: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentApiTournamentByTournamentIdResponsePendingRegistrationResponse',
                    fields: {
                      EntityPlayerId: { type: graphql.GraphQLFloat },
                      DisplayName: { type: graphql.GraphQLString },
                      EntityTeamId: { type: graphql.GraphQLFloat },
                      TeamEntityName: { type: graphql.GraphQLString },
                      IsTeamCaptain: { type: graphql.GraphQLBoolean },
                      HasAccepted: { type: graphql.GraphQLBoolean }
                    }
                  })
                )
              },
              EstimatedPrizePool: { type: graphql.GraphQLFloat },
              TournamentStateId: { type: graphql.GraphQLFloat },
              IsTournamentSpecificAdministrator: {
                type: graphql.GraphQLBoolean
              },
              IsPublished: { type: graphql.GraphQLBoolean },
              GameName: { type: graphql.GraphQLString },
              IsTournamentAdministrator: { type: graphql.GraphQLBoolean },
              EntityOwnerId: { type: graphql.GraphQLFloat },
              GameTitleRulesId: { type: graphql.GraphQLFloat },
              IsApproved: { type: graphql.GraphQLBoolean },
              IsRealCurrency: { type: graphql.GraphQLBoolean },
              EntityApprovedById: { type: graphql.GraphQLFloat },
              ResultIsFinalized: { type: graphql.GraphQLBoolean },
              EntityResultFinalizedById: { type: graphql.GraphQLFloat },
              TournamentPassword: { type: graphql.GraphQLString },
              PrizePoolAmount: { type: graphql.GraphQLFloat },
              TournamentPrizeFundingTypeId: { type: graphql.GraphQLFloat },
              TournamentPrizeFundingTypeName: { type: graphql.GraphQLString },
              DoesCycle: { type: graphql.GraphQLBoolean },
              CycleLengthInMinutes: { type: graphql.GraphQLFloat },
              CycleMinutesBeforeStart: { type: graphql.GraphQLFloat },
              MaxCycleCount: { type: graphql.GraphQLFloat },
              CycleCount: { type: graphql.GraphQLFloat },
              HasCycled: { type: graphql.GraphQLBoolean },
              CycledTournamentId: { type: graphql.GraphQLFloat },
              CanOnlyRegisterFromRegionId: { type: graphql.GraphQLFloat },
              CanOnlyRegisterFromRegionName: { type: graphql.GraphQLString },
              GamingServerRegionName: { type: graphql.GraphQLString },
              OpenPlayMinimumTimeToQualify: { type: graphql.GraphQLFloat },
              RoundRobinIsComplete: { type: graphql.GraphQLBoolean },
              TournamentSeedingTypeId: { type: graphql.GraphQLFloat },
              TournamentPairingTypeId: { type: graphql.GraphQLFloat },
              AutomaticGoLiveOnSchedule: { type: graphql.GraphQLBoolean },
              MinutesAfterStartToForfeit: { type: graphql.GraphQLFloat },
              MinutesBeforeStartToAllowCheckin: { type: graphql.GraphQLFloat },
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
                      TournamentAnnouncementId: { type: graphql.GraphQLFloat },
                      TournamentId: { type: graphql.GraphQLFloat },
                      TournamentAnnouncement: { type: graphql.GraphQLString },
                      CreatedDateTime: { type: graphql.GraphQLString },
                      CreatedById: { type: graphql.GraphQLFloat },
                      EntityName: { type: graphql.GraphQLString },
                      DisplayName: { type: graphql.GraphQLString }
                    }
                  })
                )
              },
              CreatedDateTime: { type: graphql.GraphQLString },
              GamePlatformFranchiseTitleStateId: { type: graphql.GraphQLFloat },
              AllMatchesRunManualMode: { type: graphql.GraphQLBoolean },
              ThirdPartyTournamentId: { type: graphql.GraphQLString },
              ThirdPartyApiRegion: { type: graphql.GraphQLString },
              ThirdPartyTournamentConfiguration: {
                type: graphql.GraphQLString
              },
              ServerConfigurationFileName: { type: graphql.GraphQLString },
              AllowPreCheckin: { type: graphql.GraphQLBoolean },
              PreCheckinMinutesBeforeStart: { type: graphql.GraphQLFloat },
              StandByParticipantCount: { type: graphql.GraphQLFloat },
              IsPreCheckinAvailable: { type: graphql.GraphQLBoolean },
              Qualifier: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponseQualifierResponse',
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
                          'pollingTournamentApiTournamentByTournamentIdResponseQualifierLeagueResponse',
                        fields: {
                          EndDateTime: { type: graphql.GraphQLString },
                          GameTileModeMapId: { type: graphql.GraphQLFloat },
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
                            'pollingTournamentApiTournamentByTournamentIdResponseQualifierGroupsResponse',
                          fields: {
                            TournamentId: { type: graphql.GraphQLFloat },
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
                            'pollingTournamentApiTournamentByTournamentIdResponseQualifierTieBreakersResponse',
                          fields: {
                            TieBreakerLevelId: { type: graphql.GraphQLFloat },
                            TieBreakerTypeId: { type: graphql.GraphQLFloat },
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
              TournamentManagementPolicyId: { type: graphql.GraphQLFloat },
              PredefinedStreamedMatches: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentApiTournamentByTournamentIdResponsePredefinedStreamedMatchesResponse',
                    fields: {
                      RoundRuleLevelId: { type: graphql.GraphQLFloat },
                      RoundNumber: { type: graphql.GraphQLFloat },
                      MatchNumber: { type: graphql.GraphQLFloat },
                      StreamingServiceId: { type: graphql.GraphQLFloat },
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
                      'pollingTournamentApiTournamentByTournamentIdResponseAllowedCountryListResponse',
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
                type: graphql.GraphQLFloat
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
              RestrictPowerRankingStartDivisionId: {
                type: graphql.GraphQLFloat
              },
              RestrictPowerRankingEndDivisionId: { type: graphql.GraphQLFloat },
              Payouts: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponsePayoutsResponse',
                  fields: {
                    HasPayouts: { type: graphql.GraphQLBoolean },
                    IsFixedPayouts: { type: graphql.GraphQLBoolean },
                    PayoutCount: { type: graphql.GraphQLFloat },
                    FixedPayoutAmount: { type: graphql.GraphQLFloat },
                    Places: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentApiTournamentByTournamentIdResponsePayoutsPlacesResponse',
                          fields: {
                            IsAwarded: { type: graphql.GraphQLBoolean },
                            AwardedDateTime: { type: graphql.GraphQLString },
                            AwardedAmount: { type: graphql.GraphQLFloat },
                            NumberOfWinnersAwarded: {
                              type: graphql.GraphQLFloat
                            },
                            Winners: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'pollingTournamentApiTournamentByTournamentIdResponsePayoutsPlacesWinnersResponse',
                                  fields: {
                                    EntityId: { type: graphql.GraphQLFloat },
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
                            PlaceNumber: { type: graphql.GraphQLFloat },
                            PayoutAmount: { type: graphql.GraphQLFloat },
                            PayoutPercent: { type: graphql.GraphQLFloat },
                            OtherPayout: { type: graphql.GraphQLString },
                            XperiencePoints: { type: graphql.GraphQLFloat }
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
                      'pollingTournamentApiTournamentByTournamentIdResponseChallengeOffersResponse',
                    fields: {
                      ChallengeOfferId: { type: graphql.GraphQLFloat },
                      EntryFee: { type: graphql.GraphQLFloat },
                      ServiceFee: { type: graphql.GraphQLFloat },
                      TotalFee: { type: graphql.GraphQLFloat },
                      TournamentId: { type: graphql.GraphQLFloat },
                      TournamentDescription: { type: graphql.GraphQLString },
                      TournamentTitle: { type: graphql.GraphQLString },
                      CreatorEntityId: { type: graphql.GraphQLFloat },
                      ChallengerEntityId: { type: graphql.GraphQLFloat },
                      OfferDateTime: { type: graphql.GraphQLString },
                      CreatorStateId: { type: graphql.GraphQLFloat },
                      CreatorStateDateTime: { type: graphql.GraphQLString },
                      ChallengerStateId: { type: graphql.GraphQLFloat },
                      ChallengerStateDateTime: { type: graphql.GraphQLString },
                      HasPendingRegistration: { type: graphql.GraphQLBoolean },
                      TournamentMatchId: { type: graphql.GraphQLFloat },
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
              MatchCountdownMinutes: { type: graphql.GraphQLFloat },
              LocationIds: { type: graphql.GraphQLFloat },
              Locations: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentApiTournamentByTournamentIdResponseLocationsResponse',
                    fields: {
                      LocationId: { type: graphql.GraphQLFloat },
                      StateProvence: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentApiTournamentByTournamentIdResponseLocationsStateProvenceResponse',
                          fields: {
                            AddressStateProvenceId: {
                              type: graphql.GraphQLFloat
                            },
                            AddressCountryId: { type: graphql.GraphQLFloat },
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
                            'pollingTournamentApiTournamentByTournamentIdResponseLocationsRegionResponse',
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
              TrophyGroup: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponseTrophyGroupResponse',
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
              DirectChallengeOppontentEntityId: { type: graphql.GraphQLFloat },
              UseCommunitySteamAccounts: { type: graphql.GraphQLBoolean },
              IsChallenge: { type: graphql.GraphQLBoolean },
              TournamentIsComplete: { type: graphql.GraphQLBoolean },
              TournamentIsLive: { type: graphql.GraphQLBoolean },
              TournamentLiveDateTime: { type: graphql.GraphQLString },
              TournamentId: { type: graphql.GraphQLFloat },
              GameTitleModeId: { type: graphql.GraphQLFloat },
              TournamentTitle: { type: graphql.GraphQLString },
              TournamentDescription: { type: graphql.GraphQLString },
              TournamentSeriesId: { type: graphql.GraphQLFloat },
              GamePlatformFranchiseTitleId: { type: graphql.GraphQLFloat },
              IsTeamTournament: { type: graphql.GraphQLBoolean },
              MinimumNumberOfEntities: { type: graphql.GraphQLFloat },
              MaximumNumberOfEntities: { type: graphql.GraphQLFloat },
              TeamSize: { type: graphql.GraphQLFloat },
              TournamentTypeId: { type: graphql.GraphQLFloat },
              OriginalTournamentTypeId: { type: graphql.GraphQLFloat },
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
              CurrentNumberOfParticipants: { type: graphql.GraphQLFloat },
              PowerRankingProfileId: { type: graphql.GraphQLFloat },
              PlatformGame: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponsePlatformGameResponse',
                  fields: {
                    GamePlatformFranchiseTitleId: {
                      type: graphql.GraphQLFloat
                    },
                    Platform: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentApiTournamentByTournamentIdResponsePlatformGamePlatformResponse',
                        fields: {
                          GamePlatformId: { type: graphql.GraphQLFloat },
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
                          GameTitleId: { type: graphql.GraphQLFloat },
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
                          MaximumPlayersAllowed: { type: graphql.GraphQLFloat },
                          MinimumMinutesBetweenTournamentRounds: {
                            type: graphql.GraphQLFloat
                          },
                          Franchise: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentApiTournamentByTournamentIdResponsePlatformGameGameFranchiseResponse',
                              fields: {
                                GameFranchiseId: { type: graphql.GraphQLFloat },
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
                                GameDeveloperId: { type: graphql.GraphQLFloat },
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
                      type: graphql.GraphQLFloat
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
                    TotalWinnings: { type: graphql.GraphQLFloat },
                    ThirdPartyApplicationId: { type: graphql.GraphQLString },
                    ThirdPartyApiKey: { type: graphql.GraphQLString },
                    GameReleaseVersion: { type: graphql.GraphQLString },
                    GameRevisedDateTime: { type: graphql.GraphQLString },
                    GameVersion: { type: graphql.GraphQLString },
                    GameVersionNeedsVerification: {
                      type: graphql.GraphQLBoolean
                    },
                    IssueGamesServerToMatch: { type: graphql.GraphQLBoolean },
                    TournamentCount: { type: graphql.GraphQLFloat },
                    ValidationMethodTypeId: { type: graphql.GraphQLFloat },
                    ExternalCallbackTemplateId: { type: graphql.GraphQLFloat },
                    InternalCallbackTemplateId: { type: graphql.GraphQLFloat },
                    GameServerModVersion: { type: graphql.GraphQLFloat }
                  }
                })
              },
              GameTitleMode: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentApiTournamentByTournamentIdResponseGameTitleModeResponse',
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
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
