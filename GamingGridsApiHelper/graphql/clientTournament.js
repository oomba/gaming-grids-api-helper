const graphql = require('graphql')

module.exports = {
  ApiTournamentSearch: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.SearchTournaments',
    method: 'GET',
    url: '/api/Tournament/Search',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTournamentApiTournamentSearchUriParams',
            fields: {
              search: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'clientTournamentApiTournamentSearchUriParamssearchResponse',
                  fields: {
                    IsChallenge: { type: graphql.GraphQLBoolean },
                    PlatformCode: { type: graphql.GraphQLString },
                    GameShortCode: { type: graphql.GraphQLString },
                    TournamentRegionId: { type: graphql.GraphQLFloat },
                    ListType: { type: graphql.GraphQLString },
                    FavoritesOnly: { type: graphql.GraphQLBoolean },
                    IncludeGameInSearchTerms: { type: graphql.GraphQLBoolean },
                    SearchTerms: { type: graphql.GraphQLString },
                    Paging: {
                      type: new graphql.GraphQLInputObjectType({
                        name:
                          'clientTournamentApiTournamentSearchUriParamssearchPagingResponse',
                        fields: {
                          CurrentRowNumber: { type: graphql.GraphQLFloat },
                          ReturnTopRowCount: { type: graphql.GraphQLFloat },
                          SortByName: { type: graphql.GraphQLString },
                          SortDirection: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    LocationId: { type: graphql.GraphQLFloat },
                    AddressCountryId: { type: graphql.GraphQLFloat },
                    OpenTournamentsOnly: { type: graphql.GraphQLBoolean },
                    MyTournamentsOnly: { type: graphql.GraphQLBoolean },
                    ParticipantTypeId: { type: graphql.GraphQLFloat },
                    PowerRankingId: { type: graphql.GraphQLFloat },
                    MinimumPrizePool: { type: graphql.GraphQLFloat },
                    MaximumEntryFee: { type: graphql.GraphQLFloat },
                    StartDate: { type: graphql.GraphQLString },
                    EndDate: { type: graphql.GraphQLString }
                  }
                })
              }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentApiTournamentSearchResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientTournamentApiTournamentSearchResponseResponse',
              fields: {
                EntityOwnerId: { type: graphql.GraphQLFloat },
                IsChallenge: { type: graphql.GraphQLBoolean },
                HasPassword: { type: graphql.GraphQLBoolean },
                TournamentTypeId: { type: graphql.GraphQLFloat },
                HasConsolationRound: { type: graphql.GraphQLBoolean },
                EstimatedPrizePool: { type: graphql.GraphQLFloat },
                Organizer: { type: graphql.GraphQLString },
                PrizePoolAmount: { type: graphql.GraphQLFloat },
                EntryFee: { type: graphql.GraphQLFloat },
                ServiceFee: { type: graphql.GraphQLFloat },
                TotalFee: { type: graphql.GraphQLFloat },
                IsTournamentSpecificAdministrator: {
                  type: graphql.GraphQLBoolean
                },
                IsPublic: { type: graphql.GraphQLBoolean },
                ChallengeMinEntryFee: { type: graphql.GraphQLFloat },
                ChallengeMaxEntryFee: { type: graphql.GraphQLFloat },
                IsPublished: { type: graphql.GraphQLBoolean },
                GameName: { type: graphql.GraphQLString },
                GameTournamentCount: { type: graphql.GraphQLFloat },
                DoesCycle: { type: graphql.GraphQLBoolean },
                MaxCycleCount: { type: graphql.GraphQLFloat },
                CycleCount: { type: graphql.GraphQLFloat },
                CanOnlyRegisterFromRegionId: { type: graphql.GraphQLFloat },
                CanOnlyRegisterFromRegionName: { type: graphql.GraphQLString },
                RegistrationCutoffDateTime: { type: graphql.GraphQLString },
                TournamentStartDateTime: { type: graphql.GraphQLString },
                TournamentEndDateTime: { type: graphql.GraphQLString },
                TournamentIsLive: { type: graphql.GraphQLBoolean },
                TournamentTypeName: { type: graphql.GraphQLString },
                TournamentIsComplete: { type: graphql.GraphQLBoolean },
                TournamentTitle: { type: graphql.GraphQLString },
                ImageLogo: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentApiTournamentSearchResponseImageLogoResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                ImageBackground: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentApiTournamentSearchResponseImageBackgroundResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                TeamSize: { type: graphql.GraphQLFloat },
                CurrentNumberOfParticipants: { type: graphql.GraphQLFloat },
                MaximumNumberOfEntities: { type: graphql.GraphQLFloat },
                TournamentId: { type: graphql.GraphQLFloat },
                PlatformGame: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentApiTournamentSearchResponsePlatformGameResponse',
                    fields: {
                      GamePlatformFranchiseTitleId: {
                        type: graphql.GraphQLFloat
                      },
                      Platform: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentApiTournamentSearchResponsePlatformGamePlatformResponse',
                          fields: {
                            GamePlatformId: { type: graphql.GraphQLFloat },
                            GamePlatformCode: { type: graphql.GraphQLString },
                            GamePlatform: { type: graphql.GraphQLString },
                            ImageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentApiTournamentSearchResponsePlatformGamePlatformImageSmallResponse',
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
                            'clientTournamentApiTournamentSearchResponsePlatformGameGameResponse',
                          fields: {
                            GameTitleId: { type: graphql.GraphQLFloat },
                            GameName: { type: graphql.GraphQLString },
                            GameShortCode: { type: graphql.GraphQLString },
                            GameDescription: { type: graphql.GraphQLString },
                            GameWebsite: { type: graphql.GraphQLString },
                            ImageLarge: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentApiTournamentSearchResponsePlatformGameGameImageLargeResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentApiTournamentSearchResponsePlatformGameGameImageSmallResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentApiTournamentSearchResponsePlatformGameGameImageBackgroundResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
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
                                  'clientTournamentApiTournamentSearchResponsePlatformGameGameFranchiseResponse',
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
                                        'clientTournamentApiTournamentSearchResponsePlatformGameGameFranchiseImageLargeResponse',
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
                                        'clientTournamentApiTournamentSearchResponsePlatformGameGameFranchiseImageSmallResponse',
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
                                        'clientTournamentApiTournamentSearchResponsePlatformGameGameFranchiseImageBackgroundResponse',
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
                            Developer: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentApiTournamentSearchResponsePlatformGameGameDeveloperResponse',
                                fields: {
                                  GameDeveloperId: {
                                    type: graphql.GraphQLFloat
                                  },
                                  GameDeveloper: {
                                    type: graphql.GraphQLString
                                  },
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
                            'clientTournamentApiTournamentSearchResponsePlatformGameImageLargeResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentApiTournamentSearchResponsePlatformGameImageSmallResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentApiTournamentSearchResponsePlatformGameImageBackgroundResponse',
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
                GameTitleMode: { type: graphql.GraphQLString },
                KeepAlive: { type: graphql.GraphQLString },
                AllowPreCheckin: { type: graphql.GraphQLBoolean },
                BracketsBuilt: { type: graphql.GraphQLBoolean }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdFeedback: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.TournamentFeedbackProfile',
    method: 'GET',
    url: '/api/Tournament/{tournamentId}/Feedback',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdFeedbackUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentApiTournamentBytournamentIdFeedbackResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdFeedbackResponseResponse',
            fields: {
              Summary: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientTournamentApiTournamentBytournamentIdFeedbackResponseSummaryResponse',
                  fields: {
                    Id: { type: graphql.GraphQLFloat },
                    FeedbackCount: { type: graphql.GraphQLFloat },
                    FeedbackRating1: { type: graphql.GraphQLFloat },
                    FeedbackRating2: { type: graphql.GraphQLFloat },
                    FeedbackRating3: { type: graphql.GraphQLFloat },
                    FeedbackRating4: { type: graphql.GraphQLFloat },
                    FeedbackRating5: { type: graphql.GraphQLFloat }
                  }
                })
              },
              Feedback: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentApiTournamentBytournamentIdFeedbackResponseFeedbackResponse',
                    fields: {
                      SiteFeedbackId: { type: graphql.GraphQLFloat },
                      TournamentId: { type: graphql.GraphQLFloat },
                      TournamentMatchId: { type: graphql.GraphQLFloat },
                      FeedbackRating: { type: graphql.GraphQLFloat },
                      Comments: { type: graphql.GraphQLString },
                      EntityId: { type: graphql.GraphQLFloat },
                      EntityProfile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentApiTournamentBytournamentIdFeedbackResponseFeedbackEntityProfileResponse',
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
                      FeedbackDateTime: { type: graphql.GraphQLString }
                    }
                  })
                )
              }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdBracket: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.GetBrackets',
    method: 'GET',
    url: '/api/Tournament/{tournamentId}/Bracket',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTournamentApiTournamentBytournamentIdBracketUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentApiTournamentBytournamentIdBracketResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdBracketResponseResponse',
            fields: {
              LastUpdatedDateTime: { type: graphql.GraphQLString },
              teams: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentApiTournamentBytournamentIdBracketResponseteamsResponse',
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
  ApiTournamentBytournamentIdTeamByentityNameRoster: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.TeamRoster',
    method: 'GET',
    url: '/api/Tournament/{tournamentId}/Team/{entityName}/Roster',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdTeamByentityNameRosterUrlParams',
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
        'clientTournamentApiTournamentBytournamentIdTeamByentityNameRosterResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientTournamentApiTournamentBytournamentIdTeamByentityNameRosterResponseResponse',
              fields: {
                IsStarter: { type: graphql.GraphQLBoolean },
                StarterForDifferentTeam: { type: graphql.GraphQLBoolean },
                HasEligibleGameProfile: { type: graphql.GraphQLBoolean },
                HasScheduleConflict: { type: graphql.GraphQLBoolean },
                GamePlayerIdentifier: { type: graphql.GraphQLString },
                FirstName: { type: graphql.GraphQLString },
                LastName: { type: graphql.GraphQLString },
                Profile: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentApiTournamentBytournamentIdTeamByentityNameRosterResponseProfileResponse',
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
                        'clientTournamentApiTournamentBytournamentIdTeamByentityNameRosterResponseStreamingServicesResponse',
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
  ApiTournamentBytournamentIdAcceptPayment: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.AcceptPayment',
    method: 'PUT',
    url: '/api/Tournament/{tournamentId}/AcceptPayment',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdAcceptPaymentUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentApiTournamentBytournamentIdAcceptPaymentResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdTeamByentityNameComplete: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.CompleteRegistration',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/team/{entityName}/complete',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdTeamByentityNameCompleteUrlParams',
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
        'clientTournamentApiTournamentBytournamentIdTeamByentityNameCompleteResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdTeamByentityNameRoster2: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.ManageRoster',
    method: 'PUT',
    url: '/api/Tournament/{tournamentId}/team/{entityName}/roster',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdTeamByentityNameRoster2Body',
            fields: { Starters: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdTeamByentityNameRoster2UrlParams',
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
        'clientTournamentApiTournamentBytournamentIdTeamByentityNameRoster2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdCheckin: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.Checkin',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/Checkin',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTournamentApiTournamentBytournamentIdCheckinBody',
            fields: { CheckedIn: { type: graphql.GraphQLBoolean } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTournamentApiTournamentBytournamentIdCheckinUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentApiTournamentBytournamentIdCheckinResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdParticipant: {
    fullName: 'GamingGrids.Api.Client.v2.Controllers.TournamentController.Join',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/Participant',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTournamentApiTournamentBytournamentIdParticipantBody',
            fields: {
              EntityName: { type: graphql.GraphQLString },
              JoinPassword: { type: graphql.GraphQLString },
              GameTitleTeamSideId: { type: graphql.GraphQLFloat }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdParticipantUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentApiTournamentBytournamentIdParticipantResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdParticipant2: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.Leave',
    method: 'DELETE',
    url: '/api/Tournament/{tournamentId}/Participant',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdParticipant2UrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentApiTournamentBytournamentIdParticipant2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdMessagingSendAdministrator: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.SendMessageToAdmin',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/Messaging/Send/Administrator',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdMessagingSendAdministratorBody',
            fields: {
              SendToEntityName: { type: graphql.GraphQLString },
              MessageBody: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdMessagingSendAdministratorUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentApiTournamentBytournamentIdMessagingSendAdministratorResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdMessagingSendParticipant: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.SendMessageToParticipants',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/Messaging/Send/Participant',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdMessagingSendParticipantBody',
            fields: {
              SendToEntityNames: { type: graphql.GraphQLString },
              TeamCaptainsOnly: { type: graphql.GraphQLBoolean },
              MessageBody: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdMessagingSendParticipantUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentApiTournamentBytournamentIdMessagingSendParticipantResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdMessagingSendParticipantResponseResponse',
            fields: {
              MessagesSentCount: { type: graphql.GraphQLFloat },
              MessagesSuccessfulCount: { type: graphql.GraphQLFloat },
              MessagesFailureCount: { type: graphql.GraphQLFloat }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdLeagueScheduleProposed: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.GetProposedLeagueSchedules',
    method: 'GET',
    url: '/api/Tournament/{tournamentId}/League/Schedule/Proposed',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdLeagueScheduleProposedUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentApiTournamentBytournamentIdLeagueScheduleProposedResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientTournamentApiTournamentBytournamentIdLeagueScheduleProposedResponseResponse',
              fields: {
                TournamentParticipantLeagueScheduleId: {
                  type: graphql.GraphQLFloat
                },
                TournamentId: { type: graphql.GraphQLFloat },
                EntityParticipantId: { type: graphql.GraphQLFloat },
                Entity: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentApiTournamentBytournamentIdLeagueScheduleProposedResponseEntityResponse',
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
                ProposedDateTime: { type: graphql.GraphQLString },
                MyProposedSchedule: { type: graphql.GraphQLBoolean }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdLeagueScheduleProposed2: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.CreateProposedLeagueSchedules',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/League/Schedule/Proposed',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdLeagueScheduleProposed2Body',
            fields: { ProposedDateTime: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdLeagueScheduleProposed2UrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentApiTournamentBytournamentIdLeagueScheduleProposed2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdScoreByscore: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.RecordGroupTournamentScore',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/score/{score}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdScoreByscoreUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              score: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentApiTournamentBytournamentIdScoreByscoreResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdParticipantsBycount: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.GetGroupParticipantsList',
    method: 'GET',
    url: '/api/Tournament/{tournamentId}/Participants/{count}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdParticipantsBycountUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              count: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentApiTournamentBytournamentIdParticipantsBycountResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientTournamentApiTournamentBytournamentIdParticipantsBycountResponseResponse',
              fields: {
                Score: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentApiTournamentBytournamentIdParticipantsBycountResponseScoreResponse',
                    fields: {
                      TournamentGroupParticipantScoreId: {
                        type: graphql.GraphQLFloat
                      },
                      Score: { type: graphql.GraphQLFloat },
                      ScoreDateTime: { type: graphql.GraphQLString }
                    }
                  })
                },
                EntityParticipantId: { type: graphql.GraphQLFloat },
                DisplayName: { type: graphql.GraphQLString },
                RankingPosition: { type: graphql.GraphQLFloat }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdParticipantStatus: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.GetGroupParticipantStatus',
    method: 'GET',
    url: '/api/Tournament/{tournamentId}/Participant/Status',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdParticipantStatusUrlParams',
            fields: { tournamentId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentApiTournamentBytournamentIdParticipantStatusResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdParticipantStatusResponseResponse',
            fields: {
              ParticipantCount: { type: graphql.GraphQLFloat },
              ScoreSortTypeId: { type: graphql.GraphQLFloat },
              BestScore: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientTournamentApiTournamentBytournamentIdParticipantStatusResponseBestScoreResponse',
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
                      'clientTournamentApiTournamentBytournamentIdParticipantStatusResponseScoresResponse',
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
  ApiTournamentBytournamentIdLeagueScheduleByscheduleId: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.DeleteProposedLeagueSchedule',
    method: 'DELETE',
    url: '/api/Tournament/{tournamentId}/League/Schedule/{scheduleId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdLeagueScheduleByscheduleIdUrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              scheduleId: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentApiTournamentBytournamentIdLeagueScheduleByscheduleIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentBytournamentIdLeagueScheduleByscheduleId2: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.ScheduleLeagueMatch',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/League/Schedule/{scheduleId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdLeagueScheduleByscheduleId2UrlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLFloat },
              scheduleId: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentApiTournamentBytournamentIdLeagueScheduleByscheduleId2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentTrophyGroups: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.GetTrophyGroups',
    method: 'GET',
    url: '/api/Tournament/TrophyGroups',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentApiTournamentTrophyGroupsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientTournamentApiTournamentTrophyGroupsResponseResponse',
              fields: {
                TrophyGroupId: { type: graphql.GraphQLFloat },
                TrophyGroup: { type: graphql.GraphQLString },
                IsActive: { type: graphql.GraphQLBoolean }
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
