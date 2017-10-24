const graphql = require('graphql')

module.exports = {
  ApiTournamentSeries: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentSeriesController.GetSeriesList',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Series',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentSeriesApiTournamentSeriesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientTournamentSeriesApiTournamentSeriesResponseResponse',
              fields: {
                TournamentSeriesId: { type: graphql.GraphQLFloat },
                TournamentSeriesStateId: { type: graphql.GraphQLFloat },
                TournamentCount: { type: graphql.GraphQLFloat },
                OpenPlayerCount: { type: graphql.GraphQLFloat },
                PremiumlayerCount: { type: graphql.GraphQLFloat },
                PlatformGame: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientTournamentSeriesApiTournamentSeriesResponsePlatformGameResponse',
                    fields: {
                      GamePlatformFranchiseTitleId: {
                        type: graphql.GraphQLFloat
                      },
                      Platform: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentSeriesApiTournamentSeriesResponsePlatformGamePlatformResponse',
                          fields: {
                            GamePlatformId: { type: graphql.GraphQLFloat },
                            GamePlatformCode: { type: graphql.GraphQLString },
                            GamePlatform: { type: graphql.GraphQLString },
                            ImageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentSeriesApiTournamentSeriesResponsePlatformGamePlatformImageSmallResponse',
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
                            'clientTournamentSeriesApiTournamentSeriesResponsePlatformGameGameResponse',
                          fields: {
                            GameTitleId: { type: graphql.GraphQLFloat },
                            GameName: { type: graphql.GraphQLString },
                            GameShortCode: { type: graphql.GraphQLString },
                            GameDescription: { type: graphql.GraphQLString },
                            GameWebsite: { type: graphql.GraphQLString },
                            ImageLarge: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentSeriesApiTournamentSeriesResponsePlatformGameGameImageLargeResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentSeriesApiTournamentSeriesResponsePlatformGameGameImageSmallResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientTournamentSeriesApiTournamentSeriesResponsePlatformGameGameImageBackgroundResponse',
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
                                  'clientTournamentSeriesApiTournamentSeriesResponsePlatformGameGameFranchiseResponse',
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
                                        'clientTournamentSeriesApiTournamentSeriesResponsePlatformGameGameFranchiseImageLargeResponse',
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
                                        'clientTournamentSeriesApiTournamentSeriesResponsePlatformGameGameFranchiseImageSmallResponse',
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
                                        'clientTournamentSeriesApiTournamentSeriesResponsePlatformGameGameFranchiseImageBackgroundResponse',
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
                                  'clientTournamentSeriesApiTournamentSeriesResponsePlatformGameGameDeveloperResponse',
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
                            'clientTournamentSeriesApiTournamentSeriesResponsePlatformGameImageLargeResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentSeriesApiTournamentSeriesResponsePlatformGameImageSmallResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientTournamentSeriesApiTournamentSeriesResponsePlatformGameImageBackgroundResponse',
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
                TournamentSeriesName: { type: graphql.GraphQLString },
                GamePlatformFranchiseTitleId: { type: graphql.GraphQLFloat },
                TournamentSubscriptionTypeId: { type: graphql.GraphQLFloat },
                RegistrationOpenDateTIme: { type: graphql.GraphQLString },
                TournamentStartDateTime: { type: graphql.GraphQLString },
                TournamentSerieseDoesCycle: { type: graphql.GraphQLBoolean }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentSeriesByseriesId: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentSeriesController.GetTournamentSeries',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Series/{seriesId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentSeriesApiTournamentSeriesByseriesIdUrlParams',
            fields: { seriesId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTournamentSeriesApiTournamentSeriesByseriesIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTournamentSeriesApiTournamentSeriesByseriesIdResponseResponse',
            fields: {
              TournamentSeriesId: { type: graphql.GraphQLFloat },
              TournamentSeriesStateId: { type: graphql.GraphQLFloat },
              TournamentCount: { type: graphql.GraphQLFloat },
              OpenPlayerCount: { type: graphql.GraphQLFloat },
              PremiumlayerCount: { type: graphql.GraphQLFloat },
              PlatformGame: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientTournamentSeriesApiTournamentSeriesByseriesIdResponsePlatformGameResponse',
                  fields: {
                    GamePlatformFranchiseTitleId: {
                      type: graphql.GraphQLFloat
                    },
                    Platform: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientTournamentSeriesApiTournamentSeriesByseriesIdResponsePlatformGamePlatformResponse',
                        fields: {
                          GamePlatformId: { type: graphql.GraphQLFloat },
                          GamePlatformCode: { type: graphql.GraphQLString },
                          GamePlatform: { type: graphql.GraphQLString },
                          ImageSmall: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'clientTournamentSeriesApiTournamentSeriesByseriesIdResponsePlatformGamePlatformImageSmallResponse',
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
                          'clientTournamentSeriesApiTournamentSeriesByseriesIdResponsePlatformGameGameResponse',
                        fields: {
                          GameTitleId: { type: graphql.GraphQLFloat },
                          GameName: { type: graphql.GraphQLString },
                          GameShortCode: { type: graphql.GraphQLString },
                          GameDescription: { type: graphql.GraphQLString },
                          GameWebsite: { type: graphql.GraphQLString },
                          ImageLarge: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'clientTournamentSeriesApiTournamentSeriesByseriesIdResponsePlatformGameGameImageLargeResponse',
                              fields: {
                                UrlPath: { type: graphql.GraphQLString },
                                RelativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          ImageSmall: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'clientTournamentSeriesApiTournamentSeriesByseriesIdResponsePlatformGameGameImageSmallResponse',
                              fields: {
                                UrlPath: { type: graphql.GraphQLString },
                                RelativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          ImageBackground: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'clientTournamentSeriesApiTournamentSeriesByseriesIdResponsePlatformGameGameImageBackgroundResponse',
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
                                'clientTournamentSeriesApiTournamentSeriesByseriesIdResponsePlatformGameGameFranchiseResponse',
                              fields: {
                                GameFranchiseId: { type: graphql.GraphQLFloat },
                                GameFranchise: { type: graphql.GraphQLString },
                                ImageLarge: {
                                  type: new graphql.GraphQLObjectType({
                                    name:
                                      'clientTournamentSeriesApiTournamentSeriesByseriesIdResponsePlatformGameGameFranchiseImageLargeResponse',
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
                                      'clientTournamentSeriesApiTournamentSeriesByseriesIdResponsePlatformGameGameFranchiseImageSmallResponse',
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
                                      'clientTournamentSeriesApiTournamentSeriesByseriesIdResponsePlatformGameGameFranchiseImageBackgroundResponse',
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
                                'clientTournamentSeriesApiTournamentSeriesByseriesIdResponsePlatformGameGameDeveloperResponse',
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
                          'clientTournamentSeriesApiTournamentSeriesByseriesIdResponsePlatformGameImageLargeResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientTournamentSeriesApiTournamentSeriesByseriesIdResponsePlatformGameImageSmallResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientTournamentSeriesApiTournamentSeriesByseriesIdResponsePlatformGameImageBackgroundResponse',
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
              TournamentSeriesName: { type: graphql.GraphQLString },
              GamePlatformFranchiseTitleId: { type: graphql.GraphQLFloat },
              TournamentSubscriptionTypeId: { type: graphql.GraphQLFloat },
              RegistrationOpenDateTIme: { type: graphql.GraphQLString },
              TournamentStartDateTime: { type: graphql.GraphQLString },
              TournamentSerieseDoesCycle: { type: graphql.GraphQLBoolean }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
