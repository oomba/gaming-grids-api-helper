const graphql = require('graphql')

module.exports = {
  ApiTournament: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.CreateTournament',
    method: 'POST',
    url: '/api/Tournament',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlTournamentApiTournamentBody',
            fields: {
              TournamentTitle: { type: graphql.GraphQLString },
              TournamentDescription: { type: graphql.GraphQLString },
              OwnerEntityName: { type: graphql.GraphQLString },
              GamePlatformFranchiseTitleId: { type: graphql.GraphQLFloat },
              GameTitleModeId: { type: graphql.GraphQLFloat },
              TournamentSeriesId: { type: graphql.GraphQLFloat },
              PowerRankingProfileId: { type: graphql.GraphQLFloat },
              RestrictPowerRankingStartDivisionId: {
                type: graphql.GraphQLFloat
              },
              RestrictPowerRankingEndDivisionId: { type: graphql.GraphQLFloat },
              TournamentTypeId: { type: graphql.GraphQLFloat },
              IsChallenge: { type: graphql.GraphQLBoolean },
              EnableMatchLobby: { type: graphql.GraphQLBoolean },
              TournamentStartDateTime: { type: graphql.GraphQLString },
              TournamentEndDateTime: { type: graphql.GraphQLString },
              RegistrationCutoffDateTime: { type: graphql.GraphQLString },
              IsTeamTournament: { type: graphql.GraphQLBoolean },
              GameTitleRulesId: { type: graphql.GraphQLFloat },
              MinimumNumberOfEntities: { type: graphql.GraphQLFloat },
              MaximumNumberOfEntities: { type: graphql.GraphQLFloat },
              TeamSize: { type: graphql.GraphQLFloat },
              Sponsors: {
                type: new graphql.GraphQLInputObjectType({
                  name: 'controlTournamentApiTournamentBodySponsorsResponse',
                  fields: {
                    HasSponsor: { type: graphql.GraphQLBoolean },
                    TitleSponsor: {
                      type: new graphql.GraphQLInputObjectType({
                        name:
                          'controlTournamentApiTournamentBodySponsorsTitleSponsorResponse',
                        fields: {
                          SponsorName: { type: graphql.GraphQLString },
                          SponsorImageRelativeUrl: {
                            type: graphql.GraphQLString
                          },
                          SponsorLink: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    MainSponsors: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLInputObjectType({
                          name:
                            'controlTournamentApiTournamentBodySponsorsMainSponsorsResponse',
                          fields: {
                            SponsorName: { type: graphql.GraphQLString },
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
                        new graphql.GraphQLInputObjectType({
                          name:
                            'controlTournamentApiTournamentBodySponsorsPartnersResponse',
                          fields: {
                            SponsorName: { type: graphql.GraphQLString },
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
              IsRealCurrency: { type: graphql.GraphQLBoolean },
              TournamentPassword: { type: graphql.GraphQLString },
              IsPublic: { type: graphql.GraphQLBoolean },
              IsPublished: { type: graphql.GraphQLBoolean },
              DoesCycle: { type: graphql.GraphQLBoolean },
              CycleLengthInMinutes: { type: graphql.GraphQLFloat },
              CycleMinutesBeforeStart: { type: graphql.GraphQLFloat },
              MaxCycleCount: { type: graphql.GraphQLFloat },
              PrizePoolAmount: { type: graphql.GraphQLFloat },
              TournamentPrizeFundingTypeId: { type: graphql.GraphQLFloat },
              CanOnlyRegisterFromRegionId: { type: graphql.GraphQLFloat },
              IsFavorite: { type: graphql.GraphQLBoolean },
              HasConsolationRound: { type: graphql.GraphQLBoolean },
              TournamentSeedingTypeId: { type: graphql.GraphQLFloat },
              TournamentPairingTypeId: { type: graphql.GraphQLFloat },
              AutomaticGoLiveOnSchedule: { type: graphql.GraphQLBoolean },
              MinutesAfterStartToForfeit: { type: graphql.GraphQLFloat },
              MinutesBeforeStartToAllowCheckin: { type: graphql.GraphQLFloat },
              AllMatchesRunManualMode: { type: graphql.GraphQLBoolean },
              LogoRelativeUrl: { type: graphql.GraphQLString },
              BackgroundRelativeUrl: { type: graphql.GraphQLString },
              ThirdPartyApiRegion: { type: graphql.GraphQLString },
              ThirdPartyTournamentConfiguration: {
                type: graphql.GraphQLString
              },
              ServerConfigurationFileName: { type: graphql.GraphQLString },
              AllowPreCheckin: { type: graphql.GraphQLBoolean },
              PreCheckinMinutesBeforeStart: { type: graphql.GraphQLFloat },
              PredefinedStreamedMatches: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'controlTournamentApiTournamentBodyPredefinedStreamedMatchesResponse',
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
              Payouts: {
                type: new graphql.GraphQLInputObjectType({
                  name: 'controlTournamentApiTournamentBodyPayoutsResponse',
                  fields: {
                    IsFixedPayouts: { type: graphql.GraphQLBoolean },
                    PayoutCount: { type: graphql.GraphQLFloat },
                    Places: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLInputObjectType({
                          name:
                            'controlTournamentApiTournamentBodyPayoutsPlacesResponse',
                          fields: {
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
              RoundRules: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'controlTournamentApiTournamentBodyRoundRulesResponse',
                    fields: {
                      RoundNumber: { type: graphql.GraphQLFloat },
                      MinimumStartDateTime: { type: graphql.GraphQLString },
                      MaximumStartDateTime: { type: graphql.GraphQLString },
                      RoundLevelTypeId: { type: graphql.GraphQLFloat },
                      Maps: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLInputObjectType({
                            name:
                              'controlTournamentApiTournamentBodyRoundRulesMapsResponse',
                            fields: {
                              MapPositionNumber: { type: graphql.GraphQLFloat },
                              GameTitleModeMapId: { type: graphql.GraphQLFloat }
                            }
                          })
                        )
                      }
                    }
                  })
                )
              },
              Qualifier: {
                type: new graphql.GraphQLInputObjectType({
                  name: 'controlTournamentApiTournamentBodyQualifierResponse',
                  fields: {
                    NumberOfGroups: { type: graphql.GraphQLFloat },
                    QualifierWinPoints: { type: graphql.GraphQLFloat },
                    QualifierLossPoints: { type: graphql.GraphQLFloat },
                    QualifierTiePoints: { type: graphql.GraphQLFloat },
                    QualifierScoreMultiplierPoints: {
                      type: graphql.GraphQLFloat
                    },
                    QualifierSortTypeId: { type: graphql.GraphQLFloat },
                    League: {
                      type: new graphql.GraphQLInputObjectType({
                        name:
                          'controlTournamentApiTournamentBodyQualifierLeagueResponse',
                        fields: {
                          EndDateTime: { type: graphql.GraphQLString },
                          MinimumNumberOfMatches: {
                            type: graphql.GraphQLFloat
                          },
                          NumberOfPlays: { type: graphql.GraphQLFloat },
                          AllowRegistrationAfterTournamentStart: {
                            type: graphql.GraphQLBoolean
                          },
                          GroupPlacementOnJoin: { type: graphql.GraphQLBoolean }
                        }
                      })
                    },
                    Groups: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLInputObjectType({
                          name:
                            'controlTournamentApiTournamentBodyQualifierGroupsResponse',
                          fields: {
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
                        new graphql.GraphQLInputObjectType({
                          name:
                            'controlTournamentApiTournamentBodyQualifierTieBreakersResponse',
                          fields: {
                            TieBreakerLevelId: { type: graphql.GraphQLFloat },
                            TieBreakerTypeId: { type: graphql.GraphQLFloat }
                          }
                        })
                      )
                    }
                  }
                })
              },
              LanModeEnabled: { type: graphql.GraphQLBoolean },
              EnableLanTagging: { type: graphql.GraphQLBoolean },
              AllowedCountryIds: { type: graphql.GraphQLFloat },
              PauseIfQualifierEndsInTie: { type: graphql.GraphQLBoolean },
              EntryFee: { type: graphql.GraphQLFloat },
              ServiceFee: { type: graphql.GraphQLFloat },
              SkipMatchmaking: { type: graphql.GraphQLBoolean },
              ChallengeMinEntryFee: { type: graphql.GraphQLFloat },
              ChallengeMaxEntryFee: { type: graphql.GraphQLFloat },
              MatchCountdownMinutes: { type: graphql.GraphQLFloat },
              LocationIds: { type: graphql.GraphQLFloat },
              XperiencePointsForJoining: { type: graphql.GraphQLFloat },
              XperiencePointsPerRound: { type: graphql.GraphQLFloat },
              TrophyGroupId: { type: graphql.GraphQLFloat },
              DirectChallengeOpponent: { type: graphql.GraphQLString },
              UseCommunitySteamAccounts: { type: graphql.GraphQLBoolean }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentApiTournamentResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.UpdateTournament',
    method: 'PUT',
    url: '/api/Tournament/{tournamentId}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlTournamentApiTournamentBytournamentIdBody',
            fields: {
              TournamentTitle: { type: graphql.GraphQLString },
              TournamentDescription: { type: graphql.GraphQLString },
              OwnerEntityName: { type: graphql.GraphQLString },
              GamePlatformFranchiseTitleId: { type: graphql.GraphQLFloat },
              GameTitleModeId: { type: graphql.GraphQLFloat },
              TournamentSeriesId: { type: graphql.GraphQLFloat },
              PowerRankingProfileId: { type: graphql.GraphQLFloat },
              RestrictPowerRankingStartDivisionId: {
                type: graphql.GraphQLFloat
              },
              RestrictPowerRankingEndDivisionId: { type: graphql.GraphQLFloat },
              TournamentTypeId: { type: graphql.GraphQLFloat },
              IsChallenge: { type: graphql.GraphQLBoolean },
              EnableMatchLobby: { type: graphql.GraphQLBoolean },
              TournamentStartDateTime: { type: graphql.GraphQLString },
              TournamentEndDateTime: { type: graphql.GraphQLString },
              RegistrationCutoffDateTime: { type: graphql.GraphQLString },
              IsTeamTournament: { type: graphql.GraphQLBoolean },
              GameTitleRulesId: { type: graphql.GraphQLFloat },
              MinimumNumberOfEntities: { type: graphql.GraphQLFloat },
              MaximumNumberOfEntities: { type: graphql.GraphQLFloat },
              TeamSize: { type: graphql.GraphQLFloat },
              Sponsors: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'controlTournamentApiTournamentBytournamentIdBodySponsorsResponse',
                  fields: {
                    HasSponsor: { type: graphql.GraphQLBoolean },
                    TitleSponsor: {
                      type: new graphql.GraphQLInputObjectType({
                        name:
                          'controlTournamentApiTournamentBytournamentIdBodySponsorsTitleSponsorResponse',
                        fields: {
                          SponsorName: { type: graphql.GraphQLString },
                          SponsorImageRelativeUrl: {
                            type: graphql.GraphQLString
                          },
                          SponsorLink: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    MainSponsors: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLInputObjectType({
                          name:
                            'controlTournamentApiTournamentBytournamentIdBodySponsorsMainSponsorsResponse',
                          fields: {
                            SponsorName: { type: graphql.GraphQLString },
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
                        new graphql.GraphQLInputObjectType({
                          name:
                            'controlTournamentApiTournamentBytournamentIdBodySponsorsPartnersResponse',
                          fields: {
                            SponsorName: { type: graphql.GraphQLString },
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
              IsRealCurrency: { type: graphql.GraphQLBoolean },
              TournamentPassword: { type: graphql.GraphQLString },
              IsPublic: { type: graphql.GraphQLBoolean },
              IsPublished: { type: graphql.GraphQLBoolean },
              DoesCycle: { type: graphql.GraphQLBoolean },
              CycleLengthInMinutes: { type: graphql.GraphQLFloat },
              CycleMinutesBeforeStart: { type: graphql.GraphQLFloat },
              MaxCycleCount: { type: graphql.GraphQLFloat },
              PrizePoolAmount: { type: graphql.GraphQLFloat },
              TournamentPrizeFundingTypeId: { type: graphql.GraphQLFloat },
              CanOnlyRegisterFromRegionId: { type: graphql.GraphQLFloat },
              IsFavorite: { type: graphql.GraphQLBoolean },
              HasConsolationRound: { type: graphql.GraphQLBoolean },
              TournamentSeedingTypeId: { type: graphql.GraphQLFloat },
              TournamentPairingTypeId: { type: graphql.GraphQLFloat },
              AutomaticGoLiveOnSchedule: { type: graphql.GraphQLBoolean },
              MinutesAfterStartToForfeit: { type: graphql.GraphQLFloat },
              MinutesBeforeStartToAllowCheckin: { type: graphql.GraphQLFloat },
              AllMatchesRunManualMode: { type: graphql.GraphQLBoolean },
              LogoRelativeUrl: { type: graphql.GraphQLString },
              BackgroundRelativeUrl: { type: graphql.GraphQLString },
              ThirdPartyApiRegion: { type: graphql.GraphQLString },
              ThirdPartyTournamentConfiguration: {
                type: graphql.GraphQLString
              },
              ServerConfigurationFileName: { type: graphql.GraphQLString },
              AllowPreCheckin: { type: graphql.GraphQLBoolean },
              PreCheckinMinutesBeforeStart: { type: graphql.GraphQLFloat },
              PredefinedStreamedMatches: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'controlTournamentApiTournamentBytournamentIdBodyPredefinedStreamedMatchesResponse',
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
              Payouts: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'controlTournamentApiTournamentBytournamentIdBodyPayoutsResponse',
                  fields: {
                    IsFixedPayouts: { type: graphql.GraphQLBoolean },
                    PayoutCount: { type: graphql.GraphQLFloat },
                    Places: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLInputObjectType({
                          name:
                            'controlTournamentApiTournamentBytournamentIdBodyPayoutsPlacesResponse',
                          fields: {
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
              RoundRules: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'controlTournamentApiTournamentBytournamentIdBodyRoundRulesResponse',
                    fields: {
                      RoundNumber: { type: graphql.GraphQLFloat },
                      MinimumStartDateTime: { type: graphql.GraphQLString },
                      MaximumStartDateTime: { type: graphql.GraphQLString },
                      RoundLevelTypeId: { type: graphql.GraphQLFloat },
                      Maps: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLInputObjectType({
                            name:
                              'controlTournamentApiTournamentBytournamentIdBodyRoundRulesMapsResponse',
                            fields: {
                              MapPositionNumber: { type: graphql.GraphQLFloat },
                              GameTitleModeMapId: { type: graphql.GraphQLFloat }
                            }
                          })
                        )
                      }
                    }
                  })
                )
              },
              Qualifier: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'controlTournamentApiTournamentBytournamentIdBodyQualifierResponse',
                  fields: {
                    NumberOfGroups: { type: graphql.GraphQLFloat },
                    QualifierWinPoints: { type: graphql.GraphQLFloat },
                    QualifierLossPoints: { type: graphql.GraphQLFloat },
                    QualifierTiePoints: { type: graphql.GraphQLFloat },
                    QualifierScoreMultiplierPoints: {
                      type: graphql.GraphQLFloat
                    },
                    QualifierSortTypeId: { type: graphql.GraphQLFloat },
                    League: {
                      type: new graphql.GraphQLInputObjectType({
                        name:
                          'controlTournamentApiTournamentBytournamentIdBodyQualifierLeagueResponse',
                        fields: {
                          EndDateTime: { type: graphql.GraphQLString },
                          MinimumNumberOfMatches: {
                            type: graphql.GraphQLFloat
                          },
                          NumberOfPlays: { type: graphql.GraphQLFloat },
                          AllowRegistrationAfterTournamentStart: {
                            type: graphql.GraphQLBoolean
                          },
                          GroupPlacementOnJoin: { type: graphql.GraphQLBoolean }
                        }
                      })
                    },
                    Groups: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLInputObjectType({
                          name:
                            'controlTournamentApiTournamentBytournamentIdBodyQualifierGroupsResponse',
                          fields: {
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
                        new graphql.GraphQLInputObjectType({
                          name:
                            'controlTournamentApiTournamentBytournamentIdBodyQualifierTieBreakersResponse',
                          fields: {
                            TieBreakerLevelId: { type: graphql.GraphQLFloat },
                            TieBreakerTypeId: { type: graphql.GraphQLFloat }
                          }
                        })
                      )
                    }
                  }
                })
              },
              LanModeEnabled: { type: graphql.GraphQLBoolean },
              EnableLanTagging: { type: graphql.GraphQLBoolean },
              AllowedCountryIds: { type: graphql.GraphQLFloat },
              PauseIfQualifierEndsInTie: { type: graphql.GraphQLBoolean },
              EntryFee: { type: graphql.GraphQLFloat },
              ServiceFee: { type: graphql.GraphQLFloat },
              SkipMatchmaking: { type: graphql.GraphQLBoolean },
              ChallengeMinEntryFee: { type: graphql.GraphQLFloat },
              ChallengeMaxEntryFee: { type: graphql.GraphQLFloat },
              MatchCountdownMinutes: { type: graphql.GraphQLFloat },
              LocationIds: { type: graphql.GraphQLFloat },
              XperiencePointsForJoining: { type: graphql.GraphQLFloat },
              XperiencePointsPerRound: { type: graphql.GraphQLFloat },
              TrophyGroupId: { type: graphql.GraphQLFloat },
              DirectChallengeOpponent: { type: graphql.GraphQLString },
              UseCommunitySteamAccounts: { type: graphql.GraphQLBoolean }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlTournamentApiTournamentBytournamentIdUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentApiTournamentBytournamentIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdQualifierPlayoff: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.MoveQualiferToPlayoff',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/Qualifier/Playoff',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdQualifierPlayoffUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdQualifierPlayoffResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdQualifierByentityNameRescore: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.RescoreQualifierParticipant',
    method: 'PUT',
    url: '/api/Tournament/{tournamentId}/Qualifier/{entityName}/Rescore',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdQualifierByentityNameRescoreBody',
            fields: {
              QualifierGroupNumber: { type: graphql.GraphQLFloat },
              TotalPoints: { type: graphql.GraphQLFloat },
              Comment: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdQualifierByentityNameRescoreUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              entityName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdQualifierByentityNameRescoreResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdParticipantByentityNameCheckin: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.UpdateParticipantCheckin',
    method: 'PUT',
    url: '/api/Tournament/{tournamentId}/Participant/{entityName}/Checkin',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdParticipantByentityNameCheckinBody',
            fields: { CheckedIn: { type: graphql.GraphQLBoolean } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdParticipantByentityNameCheckinUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              entityName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdParticipantByentityNameCheckinResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdStreamPredefined: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.UpdatePredefinedStreamedMatches',
    method: 'PUT',
    url: '/api/Tournament/{tournamentId}/Stream/Predefined',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdStreamPredefinedBody',
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
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdStreamPredefinedUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdStreamPredefinedResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdStandByPromote: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.PromoteEntityOnStandbyList',
    method: 'PUT',
    url: '/api/Tournament/{tournamentId}/StandBy/Promote',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdStandByPromoteBody',
            fields: {
              EntityToPromote: { type: graphql.GraphQLString },
              EntityToDemote: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdStandByPromoteUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdStandByPromoteResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdSendSummaryEmails: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.SendTournamentGroupSummaryEmails',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/send/summary/emails',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdSendSummaryEmailsUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdSendSummaryEmailsResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdParticipantByentityNameQualifier: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.UpdateParticipantQualifier',
    method: 'PUT',
    url: '/api/Tournament/{tournamentId}/Participant/{entityName}/Qualifier',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdParticipantByentityNameQualifierBody',
            fields: {
              QualifierGroupNumber: { type: graphql.GraphQLFloat },
              QualifierGroupSeedNumber: { type: graphql.GraphQLFloat }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdParticipantByentityNameQualifierUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              entityName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdParticipantByentityNameQualifierResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdParticipantQualifiers: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.UpdateParticipantQualifierList',
    method: 'PUT',
    url: '/api/Tournament/{tournamentId}/Participant/Qualifiers',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdParticipantQualifiersBody',
            fields: {
              EntityName: { type: graphql.GraphQLString },
              QualifierGroupNumber: { type: graphql.GraphQLFloat },
              QualifierGroupSeedNumber: { type: graphql.GraphQLFloat }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdParticipantQualifiersUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdParticipantQualifiersResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentId2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.DeleteTournament',
    method: 'DELETE',
    url: '/api/Tournament/{tournamentId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlTournamentApiTournamentBytournamentId2UrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentApiTournamentBytournamentId2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdPublish: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.UpdateIsPublished',
    method: 'PUT',
    url: '/api/Tournament/{tournamentId}/Publish',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlTournamentApiTournamentBytournamentIdPublishBody',
            fields: { IsPublished: { type: graphql.GraphQLBoolean } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdPublishUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentApiTournamentBytournamentIdPublishResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdAdministrator: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.CreateTournamentAdministrator',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/Administrator',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdAdministratorBody',
            fields: { EntityName: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdAdministratorUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentApiTournamentBytournamentIdAdministratorResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdAdministratorByentityName: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.DeleteTournamentAdministrator',
    method: 'DELETE',
    url: '/api/Tournament/{tournamentId}/Administrator/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdAdministratorByentityNameUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              entityName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdAdministratorByentityNameResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdScheduleDelayByminutes: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.DelayTenMinutes',
    method: 'PUT',
    url: '/api/Tournament/{tournamentId}/Schedule/Delay/{minutes}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdScheduleDelayByminutesUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              minutes: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdScheduleDelayByminutesResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdAnnouncement: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.CreateAnnouncement',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/Announcement',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdAnnouncementBody',
            fields: { Announcement: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdAnnouncementUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentApiTournamentBytournamentIdAnnouncementResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdParticipantByentityidScoreByscore: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.RecordGroupTournamentScore',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/participant/{entityid}/score/{score}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdParticipantByentityidScoreByscoreUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              entityId: { type: graphql.GraphQLFloat },
              score: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdParticipantByentityidScoreByscoreResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdParticipantByentityidScoreByscoreId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.DeleteGroupTournamentScore',
    method: 'DELETE',
    url:
      '/api/Tournament/{tournamentId}/participant/{entityid}/score/{scoreId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdParticipantByentityidScoreByscoreIdUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              entityId: { type: graphql.GraphQLFloat },
              scoreId: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdParticipantByentityidScoreByscoreIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdParticipantStatus: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.GetGroupParticipantStatus',
    method: 'GET',
    url: '/api/Tournament/{tournamentId}/Participant/Status',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdParticipantStatusUriParams',
            fields: {
              data: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'controlTournamentApiTournamentBytournamentIdParticipantStatusUriParamsdataResponse',
                  fields: { EmailAddress: { type: graphql.GraphQLString } }
                })
              }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdParticipantStatusUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdParticipantStatusResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdParticipantStatusResponseResponse',
            fields: {
              ParticipantCount: { type: graphql.GraphQLFloat },
              ScoreSortTypeId: { type: graphql.GraphQLFloat },
              BestScore: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlTournamentApiTournamentBytournamentIdParticipantStatusResponseBestScoreResponse',
                  fields: {
                    TournamentGroupParticipantScoreId: {
                      type: graphql.GraphQLFloat
                    },
                    Score: { type: graphql.GraphQLFloat },
                    ScoreDateTime: { type: graphql.GraphQLString }
                  }
                })
              },
              Scores: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'controlTournamentApiTournamentBytournamentIdParticipantStatusResponseScoresResponse',
                    fields: {
                      TournamentGroupParticipantScoreId: {
                        type: graphql.GraphQLFloat
                      },
                      Score: { type: graphql.GraphQLFloat },
                      ScoreDateTime: { type: graphql.GraphQLString }
                    }
                  })
                )
              },
              EntityParticipantId: { type: graphql.GraphQLFloat },
              DisplayName: { type: graphql.GraphQLString },
              RankingPosition: { type: graphql.GraphQLFloat }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdAnnouncementByannouncementId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.DeleteAnnouncement',
    method: 'DELETE',
    url: '/api/Tournament/{tournamentId}/Announcement/{announcementId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdAnnouncementByannouncementIdUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              announcementId: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdAnnouncementByannouncementIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdBracketSeeding: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.BracketSeedingInformation',
    method: 'GET',
    url: '/api/Tournament/{tournamentId}/Bracket/Seeding',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdBracketSeedingUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdBracketSeedingResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdBracketSeedingResponseResponse',
            fields: {
              Seeding: { type: graphql.GraphQLString },
              NumberOfSeeds: { type: graphql.GraphQLFloat }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentChallengeStatistics: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.GetChallengeStatistics',
    method: 'GET',
    url: '/api/Tournament/challenge/statistics',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentApiTournamentChallengeStatisticsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlTournamentApiTournamentChallengeStatisticsResponseResponse',
              fields: {
                GamePlatform: { type: graphql.GraphQLString },
                GameName: { type: graphql.GraphQLString },
                GameTitleMode: { type: graphql.GraphQLString },
                MapDisplayName: { type: graphql.GraphQLString },
                NumberOfChallenges: { type: graphql.GraphQLFloat },
                AmountWagered: { type: graphql.GraphQLFloat }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdBracketSeeding2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.UpdateBracketSeeding',
    method: 'PUT',
    url: '/api/Tournament/{tournamentId}/Bracket/Seeding',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdBracketSeeding2Body',
            fields: { Seeding: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdBracketSeeding2UrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdBracketSeeding2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdStatusLive: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.PostGoLive',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/Status/Live',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdStatusLiveUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentApiTournamentBytournamentIdStatusLiveResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdMatchesAutoFill: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.AutoFillMatchPlayers',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/Matches/AutoFill',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdMatchesAutoFillUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdMatchesAutoFillResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdParticipantByentityName: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.Leave',
    method: 'DELETE',
    url: '/api/Tournament/{tournamentId}/Participant/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdParticipantByentityNameUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              entityName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdParticipantByentityNameResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentTrophyGroup: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.CreateTrophyGroup',
    method: 'POST',
    url: '/api/Tournament/TrophyGroup',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlTournamentApiTournamentTrophyGroupBody',
            fields: {
              TrophyGroup: { type: graphql.GraphQLString },
              FirstPlaceImageUrl: { type: graphql.GraphQLString },
              SecondPlaceImageUrl: { type: graphql.GraphQLString },
              ThirdPlaceImageUrl: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentApiTournamentTrophyGroupResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentTrophyGroupBytrophyGroupId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.UpdateTrophyGroup',
    method: 'PUT',
    url: '/api/Tournament/TrophyGroup/{trophyGroupId}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentTrophyGroupBytrophyGroupIdBody',
            fields: {
              TrophyGroup: { type: graphql.GraphQLString },
              FirstPlaceImageUrl: { type: graphql.GraphQLString },
              SecondPlaceImageUrl: { type: graphql.GraphQLString },
              ThirdPlaceImageUrl: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentTrophyGroupBytrophyGroupIdUrlParams',
            fields: { trophyGroupId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentApiTournamentTrophyGroupBytrophyGroupIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentTrophyGroupBytrophyGroupId2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.DeleteTrophyGroup',
    method: 'DELETE',
    url: '/api/Tournament/TrophyGroup/{trophyGroupId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentTrophyGroupBytrophyGroupId2UrlParams',
            fields: { trophyGroupId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlTournamentApiTournamentTrophyGroupBytrophyGroupId2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
