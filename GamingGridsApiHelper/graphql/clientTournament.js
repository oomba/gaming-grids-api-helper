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
            name: 'clientTournamentApiTournamentSearchuriParams',
            fields: {
              search: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'clientTournamentApiTournamentSearchuriParamssearchResponse',
                  fields: {
                    IsChallenge: { type: graphql.GraphQLBoolean },
                    PlatformCode: { type: graphql.GraphQLString },
                    GameShortCode: { type: graphql.GraphQLString },
                    TournamentRegionId: { type: graphql.GraphQLInt },
                    ListType: { type: graphql.GraphQLString },
                    FavoritesOnly: { type: graphql.GraphQLBoolean },
                    IncludeGameInSearchTerms: { type: graphql.GraphQLBoolean },
                    SearchTerms: { type: graphql.GraphQLString },
                    Paging: {
                      type: new graphql.GraphQLInputObjectType({
                        name:
                          'clientTournamentApiTournamentSearchuriParamssearchPagingResponse',
                        fields: {
                          CurrentRowNumber: { type: graphql.GraphQLInt },
                          ReturnTopRowCount: { type: graphql.GraphQLInt },
                          SortByName: { type: graphql.GraphQLString },
                          SortDirection: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    LocationId: { type: graphql.GraphQLInt },
                    AddressCountryId: { type: graphql.GraphQLInt },
                    OpenTournamentsOnly: { type: graphql.GraphQLBoolean },
                    MyTournamentsOnly: { type: graphql.GraphQLBoolean },
                    ParticipantTypeId: { type: graphql.GraphQLInt },
                    PowerRankingId: { type: graphql.GraphQLInt },
                    MinimumPrizePool: { type: graphql.GraphQLInt },
                    MaximumEntryFee: { type: graphql.GraphQLInt },
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
                EntityOwnerId: { type: graphql.GraphQLInt },
                IsChallenge: { type: graphql.GraphQLBoolean },
                HasPassword: { type: graphql.GraphQLBoolean },
                TournamentTypeId: { type: graphql.GraphQLInt },
                HasConsolationRound: { type: graphql.GraphQLBoolean },
                EstimatedPrizePool: { type: graphql.GraphQLInt },
                Organizer: { type: graphql.GraphQLString },
                PrizePoolAmount: { type: graphql.GraphQLInt },
                EntryFee: { type: graphql.GraphQLInt },
                ServiceFee: { type: graphql.GraphQLInt },
                TotalFee: { type: graphql.GraphQLInt },
                IsTournamentSpecificAdministrator: {
                  type: graphql.GraphQLBoolean
                },
                IsPublic: { type: graphql.GraphQLBoolean },
                ChallengeMinEntryFee: { type: graphql.GraphQLInt },
                ChallengeMaxEntryFee: { type: graphql.GraphQLInt },
                IsPublished: { type: graphql.GraphQLBoolean },
                GameName: { type: graphql.GraphQLString },
                GameTournamentCount: { type: graphql.GraphQLInt },
                DoesCycle: { type: graphql.GraphQLBoolean },
                MaxCycleCount: { type: graphql.GraphQLInt },
                CycleCount: { type: graphql.GraphQLInt },
                CanOnlyRegisterFromRegionId: { type: graphql.GraphQLInt },
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
                TeamSize: { type: graphql.GraphQLInt },
                CurrentNumberOfParticipants: { type: graphql.GraphQLInt },
                MaximumNumberOfEntities: { type: graphql.GraphQLInt },
                TournamentId: { type: graphql.GraphQLInt },
                PlatformGame: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentApiTournamentSearchResponsePlatformGameResponse',
                    fields: {
                      GamePlatformFranchiseTitleId: {
                        type: graphql.GraphQLInt
                      },
                      Platform: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentApiTournamentSearchResponsePlatformGamePlatformResponse',
                          fields: {
                            GamePlatformId: { type: graphql.GraphQLInt },
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
                            GameTitleId: { type: graphql.GraphQLInt },
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
                            MaximumPlayersAllowed: { type: graphql.GraphQLInt },
                            MinimumMinutesBetweenTournamentRounds: {
                              type: graphql.GraphQLInt
                            },
                            Franchise: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentApiTournamentSearchResponsePlatformGameGameFranchiseResponse',
                                fields: {
                                  GameFranchiseId: { type: graphql.GraphQLInt },
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
                                  GameDeveloperId: { type: graphql.GraphQLInt },
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
                        type: graphql.GraphQLInt
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
              'clientTournamentApiTournamentBytournamentIdFeedbackurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
                    Id: { type: graphql.GraphQLInt },
                    FeedbackCount: { type: graphql.GraphQLInt },
                    FeedbackRating1: { type: graphql.GraphQLInt },
                    FeedbackRating2: { type: graphql.GraphQLInt },
                    FeedbackRating3: { type: graphql.GraphQLInt },
                    FeedbackRating4: { type: graphql.GraphQLInt },
                    FeedbackRating5: { type: graphql.GraphQLInt }
                  }
                })
              },
              Feedback: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentApiTournamentBytournamentIdFeedbackResponseFeedbackResponse',
                    fields: {
                      SiteFeedbackId: { type: graphql.GraphQLInt },
                      TournamentId: { type: graphql.GraphQLInt },
                      TournamentMatchId: { type: graphql.GraphQLInt },
                      FeedbackRating: { type: graphql.GraphQLInt },
                      Comments: { type: graphql.GraphQLString },
                      EntityId: { type: graphql.GraphQLInt },
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
            name: 'clientTournamentApiTournamentBytournamentIdBracketurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
  ApiTournamentBytournamentIdTeamByentityNameRoster: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.ManageRoster',
    method: 'PUT',
    url: '/api/Tournament/{tournamentId}/team/{entityName}/roster',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdTeamByentityNameRosterbody',
            fields: { Starters: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdTeamByentityNameRosterurlParams',
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
        'clientTournamentApiTournamentBytournamentIdTeamByentityNameRosterResponse',
      fields: {
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
              'clientTournamentApiTournamentBytournamentIdAcceptPaymenturlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              'clientTournamentApiTournamentBytournamentIdTeamByentityNameCompleteurlParams',
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
        'clientTournamentApiTournamentBytournamentIdTeamByentityNameCompleteResponse',
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
            name: 'clientTournamentApiTournamentBytournamentIdCheckinbody',
            fields: { CheckedIn: { type: graphql.GraphQLBoolean } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTournamentApiTournamentBytournamentIdCheckinurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.Leave',
    method: 'DELETE',
    url: '/api/Tournament/{tournamentId}/Participant',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdParticipanturlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              'clientTournamentApiTournamentBytournamentIdMessagingSendAdministratorbody',
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
              'clientTournamentApiTournamentBytournamentIdMessagingSendAdministratorurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              'clientTournamentApiTournamentBytournamentIdMessagingSendParticipantbody',
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
              'clientTournamentApiTournamentBytournamentIdMessagingSendParticipanturlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              MessagesSentCount: { type: graphql.GraphQLInt },
              MessagesSuccessfulCount: { type: graphql.GraphQLInt },
              MessagesFailureCount: { type: graphql.GraphQLInt }
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
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.CreateProposedLeagueSchedules',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/League/Schedule/Proposed',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdLeagueScheduleProposedbody',
            fields: { ProposedDateTime: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdLeagueScheduleProposedurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentApiTournamentBytournamentIdLeagueScheduleProposedResponse',
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
              'clientTournamentApiTournamentBytournamentIdScoreByscoreurlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
              score: { type: graphql.GraphQLInt }
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
              'clientTournamentApiTournamentBytournamentIdParticipantsBycounturlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
              count: { type: graphql.GraphQLInt }
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
                        type: graphql.GraphQLInt
                      },
                      Score: { type: graphql.GraphQLInt },
                      ScoreDateTime: { type: graphql.GraphQLString }
                    }
                  })
                },
                EntityParticipantId: { type: graphql.GraphQLInt },
                DisplayName: { type: graphql.GraphQLString },
                RankingPosition: { type: graphql.GraphQLInt }
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
              'clientTournamentApiTournamentBytournamentIdParticipantStatusurlParams',
            fields: { tournamentId: { type: graphql.GraphQLInt } }
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
              ParticipantCount: { type: graphql.GraphQLInt },
              ScoreSortTypeId: { type: graphql.GraphQLInt },
              BestScore: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientTournamentApiTournamentBytournamentIdParticipantStatusResponseBestScoreResponse',
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
                      'clientTournamentApiTournamentBytournamentIdParticipantStatusResponseScoresResponse',
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
  ApiTournamentBytournamentIdLeagueScheduleByscheduleId: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentController.ScheduleLeagueMatch',
    method: 'POST',
    url: '/api/Tournament/{tournamentId}/League/Schedule/{scheduleId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentApiTournamentBytournamentIdLeagueScheduleByscheduleIdurlParams',
            fields: {
              tournamentId: { type: graphql.GraphQLInt },
              scheduleId: { type: graphql.GraphQLInt }
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
                TrophyGroupId: { type: graphql.GraphQLInt },
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
