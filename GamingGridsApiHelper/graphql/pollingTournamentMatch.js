const graphql = require('graphql')

module.exports = {
  ApiTournamentMatchByTournamentMatchId: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.TournamentMatchController.Profile',
    method: 'GET',
    url: '/api/Tournament/Match/{TournamentMatchId}',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'pollingTournamentMatchApiTournamentMatchByTournamentMatchIduriParams',
            fields: { lastUpdatedDateTime: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdurlParams',
            fields: { TournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseResponse',
            fields: {
              IsTournamentAdministrator: { type: graphql.GraphQLBoolean },
              MySession: { type: graphql.GraphQLBoolean },
              IsTeamCaptain: { type: graphql.GraphQLBoolean },
              IsOnTeamA: { type: graphql.GraphQLBoolean },
              Administrators: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseAdministratorsResponse',
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
                )
              },
              TournamentProfile: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfileResponse',
                  fields: {
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
                          'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfileImageLogoResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfileImageBackgroundResponse',
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
                          'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfilePlatformGameResponse',
                        fields: {
                          GamePlatformFranchiseTitleId: {
                            type: graphql.GraphQLInt
                          },
                          Platform: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfilePlatformGamePlatformResponse',
                              fields: {
                                GamePlatformId: { type: graphql.GraphQLInt },
                                GamePlatformCode: {
                                  type: graphql.GraphQLString
                                },
                                GamePlatform: { type: graphql.GraphQLString },
                                ImageSmall: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfilePlatformGamePlatformImageSmallResponse',
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
                          Game: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfilePlatformGameGameResponse',
                              fields: {
                                GameTitleId: { type: graphql.GraphQLInt },
                                GameName: { type: graphql.GraphQLString },
                                GameShortCode: { type: graphql.GraphQLString },
                                GameDescription: {
                                  type: graphql.GraphQLString
                                },
                                GameWebsite: { type: graphql.GraphQLString },
                                ImageLarge: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfilePlatformGameGameImageLargeResponse',
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
                                      'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfilePlatformGameGameImageSmallResponse',
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
                                      'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfilePlatformGameGameImageBackgroundResponse',
                                    fields: {
                                      UrlPath: { type: graphql.GraphQLString },
                                      RelativePath: {
                                        type: graphql.GraphQLString
                                      }
                                    }
                                  })
                                },
                                MaximumPlayersAllowed: {
                                  type: graphql.GraphQLInt
                                },
                                MinimumMinutesBetweenTournamentRounds: {
                                  type: graphql.GraphQLInt
                                },
                                Franchise: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfilePlatformGameGameFranchiseResponse',
                                    fields: {
                                      GameFranchiseId: {
                                        type: graphql.GraphQLInt
                                      },
                                      GameFranchise: {
                                        type: graphql.GraphQLString
                                      },
                                      ImageLarge: {
                                        type: new graphql.GraphQLObjectType({
                                          name:
                                            'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfilePlatformGameGameFranchiseImageLargeResponse',
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
                                            'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfilePlatformGameGameFranchiseImageSmallResponse',
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
                                            'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfilePlatformGameGameFranchiseImageBackgroundResponse',
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
                                      'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfilePlatformGameGameDeveloperResponse',
                                    fields: {
                                      GameDeveloperId: {
                                        type: graphql.GraphQLInt
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
                            type: graphql.GraphQLInt
                          },
                          GameAddedDateTime: { type: graphql.GraphQLString },
                          GameDownloadLink: { type: graphql.GraphQLString },
                          ChatPanelGuid: { type: graphql.GraphQLString },
                          ImageLarge: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfilePlatformGameImageLargeResponse',
                              fields: {
                                UrlPath: { type: graphql.GraphQLString },
                                RelativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          ImageSmall: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfilePlatformGameImageSmallResponse',
                              fields: {
                                UrlPath: { type: graphql.GraphQLString },
                                RelativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          ImageBackground: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfilePlatformGameImageBackgroundResponse',
                              fields: {
                                UrlPath: { type: graphql.GraphQLString },
                                RelativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          TotalWinnings: { type: graphql.GraphQLInt },
                          ThirdPartyApplicationId: {
                            type: graphql.GraphQLString
                          },
                          ThirdPartyApiKey: { type: graphql.GraphQLString },
                          GameReleaseVersion: { type: graphql.GraphQLString },
                          GameRevisedDateTime: { type: graphql.GraphQLString },
                          GameVersion: { type: graphql.GraphQLString },
                          GameVersionNeedsVerification: {
                            type: graphql.GraphQLBoolean
                          },
                          IssueGamesServerToMatch: {
                            type: graphql.GraphQLBoolean
                          },
                          TournamentCount: { type: graphql.GraphQLInt },
                          ValidationMethodTypeId: { type: graphql.GraphQLInt },
                          ExternalCallbackTemplateId: {
                            type: graphql.GraphQLInt
                          },
                          InternalCallbackTemplateId: {
                            type: graphql.GraphQLInt
                          },
                          GameServerModVersion: { type: graphql.GraphQLFloat }
                        }
                      })
                    },
                    GameTitleMode: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTournamentProfileGameTitleModeResponse',
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
              GamingServer: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseGamingServerResponse',
                  fields: {
                    GamingServerId: { type: graphql.GraphQLInt },
                    GamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
                    GameName: { type: graphql.GraphQLString },
                    GamingServerAddedDateTime: { type: graphql.GraphQLString },
                    GamingServerTypeCode: { type: graphql.GraphQLString },
                    GamingServerTypeId: { type: graphql.GraphQLInt },
                    GamingServerTypeName: { type: graphql.GraphQLString },
                    GamingServerLocationId: { type: graphql.GraphQLInt },
                    GamingServerCityName: { type: graphql.GraphQLString },
                    AddressCountryId: { type: graphql.GraphQLInt },
                    AddressCountry: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseGamingServerAddressCountryResponse',
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
                    GamingServerRegionId: { type: graphql.GraphQLInt },
                    GamingServerRegionName: { type: graphql.GraphQLString },
                    GamingServerName: { type: graphql.GraphQLString },
                    IpAddress: { type: graphql.GraphQLString },
                    StreamingPort: { type: graphql.GraphQLString },
                    GamePort: { type: graphql.GraphQLString },
                    GameQueryPort: { type: graphql.GraphQLString },
                    GamingServerHostingProviderCode: {
                      type: graphql.GraphQLString
                    },
                    GamingServerHostingProviderId: { type: graphql.GraphQLInt },
                    GamingServerHostingProviderName: {
                      type: graphql.GraphQLString
                    },
                    GamingServerModeTypeCode: { type: graphql.GraphQLString },
                    GamingServerModeTypeId: { type: graphql.GraphQLInt },
                    GamingServerModeTypeName: { type: graphql.GraphQLString },
                    JoinPassword: { type: graphql.GraphQLString },
                    LastHeartbeatDateTime: { type: graphql.GraphQLString },
                    ExternalCallbackTemplate: { type: graphql.GraphQLString },
                    InternalCallbackTemplate: { type: graphql.GraphQLString },
                    IsInUsed: { type: graphql.GraphQLBoolean },
                    GameModVersion: { type: graphql.GraphQLFloat },
                    CurrentGameModVersion: { type: graphql.GraphQLFloat },
                    IsPremiumServer: { type: graphql.GraphQLBoolean },
                    ThirdPartyServerIdentifier: { type: graphql.GraphQLString },
                    GameServerVersion: { type: graphql.GraphQLString },
                    IsServerOutdated: { type: graphql.GraphQLBoolean },
                    PlatformCode: { type: graphql.GraphQLString },
                    GameShortCode: { type: graphql.GraphQLString },
                    LanTag: { type: graphql.GraphQLString }
                  }
                })
              },
              TeamAPlayers: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTeamAPlayersResponse',
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
                            'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTeamAPlayersProfileResponse',
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
                      FirstName: { type: graphql.GraphQLString },
                      LastName: { type: graphql.GraphQLString },
                      AddressCountry: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTeamAPlayersAddressCountryResponse',
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
                              'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTeamAPlayersStreamingServicesResponse',
                            fields: {
                              EntityId: { type: graphql.GraphQLInt },
                              StreamName: { type: graphql.GraphQLString },
                              StreamLink: { type: graphql.GraphQLString },
                              StreamCurrentlyActive: {
                                type: graphql.GraphQLBoolean
                              },
                              StreamActiveViewers: { type: graphql.GraphQLInt },
                              LastUpdatedDateTime: {
                                type: graphql.GraphQLString
                              },
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
              TeamBPlayers: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTeamBPlayersResponse',
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
                            'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTeamBPlayersProfileResponse',
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
                      FirstName: { type: graphql.GraphQLString },
                      LastName: { type: graphql.GraphQLString },
                      AddressCountry: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTeamBPlayersAddressCountryResponse',
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
                              'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseTeamBPlayersStreamingServicesResponse',
                            fields: {
                              EntityId: { type: graphql.GraphQLInt },
                              StreamName: { type: graphql.GraphQLString },
                              StreamLink: { type: graphql.GraphQLString },
                              StreamCurrentlyActive: {
                                type: graphql.GraphQLBoolean
                              },
                              StreamActiveViewers: { type: graphql.GraphQLInt },
                              LastUpdatedDateTime: {
                                type: graphql.GraphQLString
                              },
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
              IssuedGamingServerHistory: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseIssuedGamingServerHistoryResponse',
                    fields: {
                      IssuedDateTime: { type: graphql.GraphQLString },
                      RequestedServerChange: { type: graphql.GraphQLBoolean },
                      RequestedByEntityId: { type: graphql.GraphQLInt },
                      GamingServerId: { type: graphql.GraphQLInt },
                      GamePlatformFranchiseTitleId: {
                        type: graphql.GraphQLInt
                      },
                      GameName: { type: graphql.GraphQLString },
                      GamingServerAddedDateTime: {
                        type: graphql.GraphQLString
                      },
                      GamingServerTypeCode: { type: graphql.GraphQLString },
                      GamingServerTypeId: { type: graphql.GraphQLInt },
                      GamingServerTypeName: { type: graphql.GraphQLString },
                      GamingServerLocationId: { type: graphql.GraphQLInt },
                      GamingServerCityName: { type: graphql.GraphQLString },
                      AddressCountryId: { type: graphql.GraphQLInt },
                      AddressCountry: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseIssuedGamingServerHistoryAddressCountryResponse',
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
                      GamingServerRegionId: { type: graphql.GraphQLInt },
                      GamingServerRegionName: { type: graphql.GraphQLString },
                      GamingServerName: { type: graphql.GraphQLString },
                      IpAddress: { type: graphql.GraphQLString },
                      StreamingPort: { type: graphql.GraphQLString },
                      GamePort: { type: graphql.GraphQLString },
                      GameQueryPort: { type: graphql.GraphQLString },
                      GamingServerHostingProviderCode: {
                        type: graphql.GraphQLString
                      },
                      GamingServerHostingProviderId: {
                        type: graphql.GraphQLInt
                      },
                      GamingServerHostingProviderName: {
                        type: graphql.GraphQLString
                      },
                      GamingServerModeTypeCode: { type: graphql.GraphQLString },
                      GamingServerModeTypeId: { type: graphql.GraphQLInt },
                      GamingServerModeTypeName: { type: graphql.GraphQLString },
                      JoinPassword: { type: graphql.GraphQLString },
                      LastHeartbeatDateTime: { type: graphql.GraphQLString },
                      ExternalCallbackTemplate: { type: graphql.GraphQLString },
                      InternalCallbackTemplate: { type: graphql.GraphQLString },
                      IsInUsed: { type: graphql.GraphQLBoolean },
                      GameModVersion: { type: graphql.GraphQLFloat },
                      CurrentGameModVersion: { type: graphql.GraphQLFloat },
                      IsPremiumServer: { type: graphql.GraphQLBoolean },
                      ThirdPartyServerIdentifier: {
                        type: graphql.GraphQLString
                      },
                      GameServerVersion: { type: graphql.GraphQLString },
                      IsServerOutdated: { type: graphql.GraphQLBoolean },
                      PlatformCode: { type: graphql.GraphQLString },
                      GameShortCode: { type: graphql.GraphQLString },
                      LanTag: { type: graphql.GraphQLString }
                    }
                  })
                )
              },
              TournamentMatchStateId: { type: graphql.GraphQLInt },
              TournamentMatchId: { type: graphql.GraphQLInt },
              TournamentId: { type: graphql.GraphQLInt },
              GamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
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
                    'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseEntityOwnerProfileResponse',
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
                    'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseEntityParticipantAResponse',
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
                          'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseEntityParticipantARegionResponse',
                        fields: {
                          GamingServerRegionId: { type: graphql.GraphQLInt },
                          GamingServerRegionName: {
                            type: graphql.GraphQLString
                          }
                        }
                      })
                    },
                    Profile: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseEntityParticipantAProfileResponse',
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
                            'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseEntityParticipantAHearthstoneDecksResponse',
                          fields: {
                            PlayerNumber: { type: graphql.GraphQLInt },
                            IsStartingDeck: { type: graphql.GraphQLBoolean },
                            HearthstoneDeckExcluded: {
                              type: graphql.GraphQLBoolean
                            },
                            GameTitleModeHearthstoneDeckId: {
                              type: graphql.GraphQLInt
                            },
                            GameTitleModeId: { type: graphql.GraphQLInt },
                            HearthstoneDeck: { type: graphql.GraphQLString },
                            HearthstoneDeckImage: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseEntityParticipantAHearthstoneDecksHearthstoneDeckImageResponse',
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
                    'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseEntityParticipantBResponse',
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
                          'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseEntityParticipantBRegionResponse',
                        fields: {
                          GamingServerRegionId: { type: graphql.GraphQLInt },
                          GamingServerRegionName: {
                            type: graphql.GraphQLString
                          }
                        }
                      })
                    },
                    Profile: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseEntityParticipantBProfileResponse',
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
                            'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseEntityParticipantBHearthstoneDecksResponse',
                          fields: {
                            PlayerNumber: { type: graphql.GraphQLInt },
                            IsStartingDeck: { type: graphql.GraphQLBoolean },
                            HearthstoneDeckExcluded: {
                              type: graphql.GraphQLBoolean
                            },
                            GameTitleModeHearthstoneDeckId: {
                              type: graphql.GraphQLInt
                            },
                            GameTitleModeId: { type: graphql.GraphQLInt },
                            HearthstoneDeck: { type: graphql.GraphQLString },
                            HearthstoneDeckImage: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseEntityParticipantBHearthstoneDecksHearthstoneDeckImageResponse',
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
              AutomaticGoLiveOnSchedule: { type: graphql.GraphQLBoolean },
              MinutesAfterStartToForfeit: { type: graphql.GraphQLInt },
              MinutesBeforeStartToAllowCheckin: { type: graphql.GraphQLInt },
              ServerSendPlayerSummaryStatistics: {
                type: graphql.GraphQLBoolean
              },
              GamingServerId: { type: graphql.GraphQLInt },
              EntityPlayerControllerId: { type: graphql.GraphQLInt },
              AllTeamAPlayersReady: { type: graphql.GraphQLBoolean },
              TeamAIsReady: { type: graphql.GraphQLBoolean },
              AllTeamBPlayersReady: { type: graphql.GraphQLBoolean },
              TeamBIsReady: { type: graphql.GraphQLBoolean },
              ScoreManuallyReportedDateTime: { type: graphql.GraphQLString },
              ScoreManuallyReported: { type: graphql.GraphQLBoolean },
              ScoreManuallyReportedByPlayerId: { type: graphql.GraphQLInt },
              ScoreManuallyReportedByTeamA: { type: graphql.GraphQLBoolean },
              ScoreManuallyApplyToEntireRound: { type: graphql.GraphQLBoolean },
              MapsPlayed: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseMapsPlayedResponse',
                    fields: {
                      TournamentMatchId: { type: graphql.GraphQLInt },
                      MapNumber: { type: graphql.GraphQLInt },
                      GameTitleModeMapId: { type: graphql.GraphQLInt },
                      MapStartDateTime: { type: graphql.GraphQLString },
                      MapEndDateTime: { type: graphql.GraphQLString },
                      EntityParticipantAScore: { type: graphql.GraphQLFloat },
                      EntityParticipantBScore: { type: graphql.GraphQLFloat },
                      Map: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseMapsPlayedMapResponse',
                          fields: {
                            GameTitleModeMapId: { type: graphql.GraphQLInt },
                            GameTitleModeId: { type: graphql.GraphQLInt },
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
                    'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseDisputeResponse',
                  fields: {
                    TournamentMatchDisputeId: { type: graphql.GraphQLInt },
                    TournamentMatchId: { type: graphql.GraphQLInt },
                    DisputeState: { type: graphql.GraphQLInt },
                    InitiatedByPlayerId: { type: graphql.GraphQLInt },
                    InitiatedByPlayerProfile: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseDisputeInitiatedByPlayerProfileResponse',
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
                    EntityAdministratorId: { type: graphql.GraphQLInt },
                    ResolutionDateTime: { type: graphql.GraphQLString },
                    ResolutionTeamAScore: { type: graphql.GraphQLFloat },
                    ResolutionTeamBScore: { type: graphql.GraphQLFloat }
                  }
                })
              },
              MyMatch: { type: graphql.GraphQLBoolean },
              NewServerRequested: { type: graphql.GraphQLBoolean },
              NewServerRequestedEntityId: { type: graphql.GraphQLInt },
              NewServerRequestedByTeamA: { type: graphql.GraphQLBoolean },
              NewServerRequestedCount: { type: graphql.GraphQLInt },
              NeedsAssistance: { type: graphql.GraphQLBoolean },
              AllowedSpectators: { type: graphql.GraphQLString },
              StreamingServiceId: { type: graphql.GraphQLInt },
              ManualMode: { type: graphql.GraphQLBoolean },
              ManualServerConnectionInfo: { type: graphql.GraphQLString },
              StreamingService: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseStreamingServiceResponse',
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
                      'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseAssistanceRequestsResponse',
                    fields: {
                      TournamentMatchAssistanceId: { type: graphql.GraphQLInt },
                      TournamentMatchId: { type: graphql.GraphQLInt },
                      AssistanceRequestedById: { type: graphql.GraphQLInt },
                      AssistanceRequestedDateTime: {
                        type: graphql.GraphQLString
                      },
                      ResolvedById: { type: graphql.GraphQLInt },
                      ResolutionDateTime: { type: graphql.GraphQLString },
                      ResolutionComments: { type: graphql.GraphQLString }
                    }
                  })
                )
              },
              LastUpdatedDateTime: { type: graphql.GraphQLString },
              ServerConfigurationFileName: { type: graphql.GraphQLString },
              MatchAdministratorId: { type: graphql.GraphQLInt },
              ActionLog: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseActionLogResponse',
                    fields: {
                      TournamentMatchActionLogId: { type: graphql.GraphQLInt },
                      EntityId: { type: graphql.GraphQLInt },
                      EntityProfile: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseActionLogEntityProfileResponse',
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
                      TournamentMatchId: { type: graphql.GraphQLInt },
                      ActionLogTypeId: { type: graphql.GraphQLInt },
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
                      'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponsePlaybackResponse',
                    fields: {
                      TournamentMatchPlaybackId: { type: graphql.GraphQLInt },
                      TournamentMatchId: { type: graphql.GraphQLInt },
                      TournamentMatchPlayback: { type: graphql.GraphQLString },
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
                    'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdResponseScoringImageResponse',
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
  ApiTournamentMatchByTournamentMatchIdMessaging: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.TournamentMatchController.MessageList',
    method: 'GET',
    url: '/api/Tournament/Match/{TournamentMatchId}/Messaging',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdMessaginguriParams',
            fields: { lastUpdatedDateTime: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdMessagingurlParams',
            fields: { TournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdMessagingResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'pollingTournamentMatchApiTournamentMatchByTournamentMatchIdMessagingResponseResponse',
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
  }
}
