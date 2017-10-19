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
            name: 'controlTournamentApiTournamentbody',
            fields: {
              TournamentTitle: { type: graphql.GraphQLString },
              TournamentDescription: { type: graphql.GraphQLString },
              OwnerEntityName: { type: graphql.GraphQLString },
              GamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
              GameTitleModeId: { type: graphql.GraphQLInt },
              TournamentSeriesId: { type: graphql.GraphQLInt },
              PowerRankingProfileId: { type: graphql.GraphQLInt },
              RestrictPowerRankingStartDivisionId: { type: graphql.GraphQLInt },
              RestrictPowerRankingEndDivisionId: { type: graphql.GraphQLInt },
              TournamentTypeId: { type: graphql.GraphQLInt },
              IsChallenge: { type: graphql.GraphQLBoolean },
              EnableMatchLobby: { type: graphql.GraphQLBoolean },
              TournamentStartDateTime: { type: graphql.GraphQLString },
              TournamentEndDateTime: { type: graphql.GraphQLString },
              RegistrationCutoffDateTime: { type: graphql.GraphQLString },
              IsTeamTournament: { type: graphql.GraphQLBoolean },
              GameTitleRulesId: { type: graphql.GraphQLInt },
              MinimumNumberOfEntities: { type: graphql.GraphQLInt },
              MaximumNumberOfEntities: { type: graphql.GraphQLInt },
              TeamSize: { type: graphql.GraphQLInt },
              Sponsors: {
                type: new graphql.GraphQLInputObjectType({
                  name: 'controlTournamentApiTournamentbodySponsorsResponse',
                  fields: {
                    HasSponsor: { type: graphql.GraphQLBoolean },
                    TitleSponsor: {
                      type: new graphql.GraphQLInputObjectType({
                        name:
                          'controlTournamentApiTournamentbodySponsorsTitleSponsorResponse',
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
                            'controlTournamentApiTournamentbodySponsorsMainSponsorsResponse',
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
                            'controlTournamentApiTournamentbodySponsorsPartnersResponse',
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
              CycleLengthInMinutes: { type: graphql.GraphQLInt },
              CycleMinutesBeforeStart: { type: graphql.GraphQLInt },
              MaxCycleCount: { type: graphql.GraphQLInt },
              PrizePoolAmount: { type: graphql.GraphQLInt },
              TournamentPrizeFundingTypeId: { type: graphql.GraphQLInt },
              CanOnlyRegisterFromRegionId: { type: graphql.GraphQLInt },
              IsFavorite: { type: graphql.GraphQLBoolean },
              HasConsolationRound: { type: graphql.GraphQLBoolean },
              TournamentSeedingTypeId: { type: graphql.GraphQLInt },
              TournamentPairingTypeId: { type: graphql.GraphQLInt },
              AutomaticGoLiveOnSchedule: { type: graphql.GraphQLBoolean },
              MinutesAfterStartToForfeit: { type: graphql.GraphQLInt },
              MinutesBeforeStartToAllowCheckin: { type: graphql.GraphQLInt },
              AllMatchesRunManualMode: { type: graphql.GraphQLBoolean },
              LogoRelativeUrl: { type: graphql.GraphQLString },
              BackgroundRelativeUrl: { type: graphql.GraphQLString },
              ThirdPartyApiRegion: { type: graphql.GraphQLString },
              ThirdPartyTournamentConfiguration: {
                type: graphql.GraphQLString
              },
              ServerConfigurationFileName: { type: graphql.GraphQLString },
              AllowPreCheckin: { type: graphql.GraphQLBoolean },
              PreCheckinMinutesBeforeStart: { type: graphql.GraphQLInt },
              PredefinedStreamedMatches: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'controlTournamentApiTournamentbodyPredefinedStreamedMatchesResponse',
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
              Payouts: {
                type: new graphql.GraphQLInputObjectType({
                  name: 'controlTournamentApiTournamentbodyPayoutsResponse',
                  fields: {
                    IsFixedPayouts: { type: graphql.GraphQLBoolean },
                    PayoutCount: { type: graphql.GraphQLInt },
                    Places: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLInputObjectType({
                          name:
                            'controlTournamentApiTournamentbodyPayoutsPlacesResponse',
                          fields: {
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
              RoundRules: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'controlTournamentApiTournamentbodyRoundRulesResponse',
                    fields: {
                      RoundNumber: { type: graphql.GraphQLInt },
                      MinimumStartDateTime: { type: graphql.GraphQLString },
                      MaximumStartDateTime: { type: graphql.GraphQLString },
                      RoundLevelTypeId: { type: graphql.GraphQLInt },
                      Maps: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLInputObjectType({
                            name:
                              'controlTournamentApiTournamentbodyRoundRulesMapsResponse',
                            fields: {
                              MapPositionNumber: { type: graphql.GraphQLInt },
                              GameTitleModeMapId: { type: graphql.GraphQLInt }
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
                  name: 'controlTournamentApiTournamentbodyQualifierResponse',
                  fields: {
                    NumberOfGroups: { type: graphql.GraphQLInt },
                    QualifierWinPoints: { type: graphql.GraphQLInt },
                    QualifierLossPoints: { type: graphql.GraphQLInt },
                    QualifierTiePoints: { type: graphql.GraphQLInt },
                    QualifierScoreMultiplierPoints: {
                      type: graphql.GraphQLInt
                    },
                    QualifierSortTypeId: { type: graphql.GraphQLInt },
                    League: {
                      type: new graphql.GraphQLInputObjectType({
                        name:
                          'controlTournamentApiTournamentbodyQualifierLeagueResponse',
                        fields: {
                          EndDateTime: { type: graphql.GraphQLString },
                          MinimumNumberOfMatches: { type: graphql.GraphQLInt },
                          NumberOfPlays: { type: graphql.GraphQLInt },
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
                            'controlTournamentApiTournamentbodyQualifierGroupsResponse',
                          fields: {
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
                        new graphql.GraphQLInputObjectType({
                          name:
                            'controlTournamentApiTournamentbodyQualifierTieBreakersResponse',
                          fields: {
                            TieBreakerLevelId: { type: graphql.GraphQLInt },
                            TieBreakerTypeId: { type: graphql.GraphQLInt }
                          }
                        })
                      )
                    }
                  }
                })
              },
              LanModeEnabled: { type: graphql.GraphQLBoolean },
              EnableLanTagging: { type: graphql.GraphQLBoolean },
              AllowedCountryIds: { type: graphql.GraphQLInt },
              PauseIfQualifierEndsInTie: { type: graphql.GraphQLBoolean },
              EntryFee: { type: graphql.GraphQLInt },
              ServiceFee: { type: graphql.GraphQLInt },
              SkipMatchmaking: { type: graphql.GraphQLBoolean },
              ChallengeMinEntryFee: { type: graphql.GraphQLInt },
              ChallengeMaxEntryFee: { type: graphql.GraphQLInt },
              MatchCountdownMinutes: { type: graphql.GraphQLInt },
              LocationIds: { type: graphql.GraphQLInt },
              XperiencePointsForJoining: { type: graphql.GraphQLInt },
              XperiencePointsPerRound: { type: graphql.GraphQLInt },
              TrophyGroupId: { type: graphql.GraphQLInt },
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
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.DeleteTournament',
    method: 'DELETE',
    url: '/api/Tournament/{tournamentId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlTournamentApiTournamentBytournamentIdurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              'controlTournamentApiTournamentBytournamentIdQualifierPlayoffurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              'controlTournamentApiTournamentBytournamentIdQualifierByentityNameRescorebody',
            fields: {
              QualifierGroupNumber: { type: graphql.GraphQLInt },
              TotalPoints: { type: graphql.GraphQLInt },
              Comment: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdQualifierByentityNameRescoreurlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
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
              'controlTournamentApiTournamentBytournamentIdParticipantByentityNameCheckinbody',
            fields: { CheckedIn: { type: graphql.GraphQLBoolean } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdParticipantByentityNameCheckinurlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
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
              'controlTournamentApiTournamentBytournamentIdStreamPredefinedbody',
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
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdStreamPredefinedurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              'controlTournamentApiTournamentBytournamentIdStandByPromotebody',
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
              'controlTournamentApiTournamentBytournamentIdStandByPromoteurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              'controlTournamentApiTournamentBytournamentIdSendSummaryEmailsurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              'controlTournamentApiTournamentBytournamentIdParticipantByentityNameQualifierbody',
            fields: {
              QualifierGroupNumber: { type: graphql.GraphQLInt },
              QualifierGroupSeedNumber: { type: graphql.GraphQLInt }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdParticipantByentityNameQualifierurlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
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
              'controlTournamentApiTournamentBytournamentIdParticipantQualifiersbody',
            fields: {
              EntityName: { type: graphql.GraphQLString },
              QualifierGroupNumber: { type: graphql.GraphQLInt },
              QualifierGroupSeedNumber: { type: graphql.GraphQLInt }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdParticipantQualifiersurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
  ApiTournamentBytournamentIdPublish: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.UpdateIsPublished',
    method: 'PUT',
    url: '/api/Tournament/{tournamentId}/Publish',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlTournamentApiTournamentBytournamentIdPublishbody',
            fields: { IsPublished: { type: graphql.GraphQLBoolean } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdPublishurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              'controlTournamentApiTournamentBytournamentIdAdministratorbody',
            fields: { EntityName: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdAdministratorurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              'controlTournamentApiTournamentBytournamentIdAdministratorByentityNameurlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
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
              'controlTournamentApiTournamentBytournamentIdScheduleDelayByminutesurlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
              minutes: { type: graphql.GraphQLInt }
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
              'controlTournamentApiTournamentBytournamentIdAnnouncementbody',
            fields: { Announcement: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdAnnouncementurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              'controlTournamentApiTournamentBytournamentIdParticipantByentityidScoreByscoreurlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
              entityId: { type: graphql.GraphQLInt },
              score: { type: graphql.GraphQLInt }
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
              'controlTournamentApiTournamentBytournamentIdParticipantByentityidScoreByscoreIdurlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
              entityId: { type: graphql.GraphQLInt },
              scoreId: { type: graphql.GraphQLInt }
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
              'controlTournamentApiTournamentBytournamentIdParticipantStatusuriParams',
            fields: {
              data: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'controlTournamentApiTournamentBytournamentIdParticipantStatusuriParamsdataResponse',
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
              'controlTournamentApiTournamentBytournamentIdParticipantStatusurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              ParticipantCount: { type: graphql.GraphQLInt },
              ScoreSortTypeId: { type: graphql.GraphQLInt },
              BestScore: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlTournamentApiTournamentBytournamentIdParticipantStatusResponseBestScoreResponse',
                  fields: {
                    TournamentGroupParticipantScoreId: {
                      type: graphql.GraphQLInt
                    },
                    Score: { type: graphql.GraphQLInt },
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
                        type: graphql.GraphQLInt
                      },
                      Score: { type: graphql.GraphQLInt },
                      ScoreDateTime: { type: graphql.GraphQLString }
                    }
                  })
                )
              },
              EntityParticipantId: { type: graphql.GraphQLInt },
              DisplayName: { type: graphql.GraphQLString },
              RankingPosition: { type: graphql.GraphQLInt }
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
              'controlTournamentApiTournamentBytournamentIdAnnouncementByannouncementIdurlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
              announcementId: { type: graphql.GraphQLInt }
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
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.UpdateBracketSeeding',
    method: 'PUT',
    url: '/api/Tournament/{tournamentId}/Bracket/Seeding',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdBracketSeedingbody',
            fields: { Seeding: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentBytournamentIdBracketSeedingurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentApiTournamentBytournamentIdBracketSeedingResponse',
      fields: {
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
                NumberOfChallenges: { type: graphql.GraphQLInt },
                AmountWagered: { type: graphql.GraphQLInt }
              }
            })
          )
        },
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
              'controlTournamentApiTournamentBytournamentIdStatusLiveurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              'controlTournamentApiTournamentBytournamentIdMatchesAutoFillurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              'controlTournamentApiTournamentBytournamentIdParticipantByentityNameurlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
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
            name: 'controlTournamentApiTournamentTrophyGroupbody',
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
      'GamingGrids.Api.Control.v2.Controllers.TournamentController.DeleteTrophyGroup',
    method: 'DELETE',
    url: '/api/Tournament/TrophyGroup/{trophyGroupId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentApiTournamentTrophyGroupBytrophyGroupIdurlParams',
            fields: { trophyGroupId: { type: graphql.GraphQLInt } }
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
  }
}
