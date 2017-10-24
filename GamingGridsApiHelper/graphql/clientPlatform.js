const graphql = require('graphql')

module.exports = {
  ApiPlatformSearch: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlatformController.GlobalSearch',
    method: 'GET',
    url: '/api/Platform/Search',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientPlatformApiPlatformSearchUriParams',
            fields: {
              search: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'clientPlatformApiPlatformSearchUriParamssearchResponse',
                  fields: {
                    TopPlayersCount: { type: graphql.GraphQLFloat },
                    TopTeamsCount: { type: graphql.GraphQLFloat },
                    TopTournamentCount: { type: graphql.GraphQLFloat },
                    SearchTerm: { type: graphql.GraphQLString },
                    TopGamesCount: { type: graphql.GraphQLFloat }
                  }
                })
              }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientPlatformApiPlatformSearchResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientPlatformApiPlatformSearchResponseResponse',
            fields: {
              Tournaments: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlatformApiPlatformSearchResponseTournamentsResponse',
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
                      CanOnlyRegisterFromRegionId: {
                        type: graphql.GraphQLFloat
                      },
                      CanOnlyRegisterFromRegionName: {
                        type: graphql.GraphQLString
                      },
                      RegistrationCutoffDateTime: {
                        type: graphql.GraphQLString
                      },
                      TournamentStartDateTime: { type: graphql.GraphQLString },
                      TournamentEndDateTime: { type: graphql.GraphQLString },
                      TournamentIsLive: { type: graphql.GraphQLBoolean },
                      TournamentTypeName: { type: graphql.GraphQLString },
                      TournamentIsComplete: { type: graphql.GraphQLBoolean },
                      TournamentTitle: { type: graphql.GraphQLString },
                      ImageLogo: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlatformApiPlatformSearchResponseTournamentsImageLogoResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlatformApiPlatformSearchResponseTournamentsImageBackgroundResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      TeamSize: { type: graphql.GraphQLFloat },
                      CurrentNumberOfParticipants: {
                        type: graphql.GraphQLFloat
                      },
                      MaximumNumberOfEntities: { type: graphql.GraphQLFloat },
                      TournamentId: { type: graphql.GraphQLFloat },
                      PlatformGame: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlatformApiPlatformSearchResponseTournamentsPlatformGameResponse',
                          fields: {
                            GamePlatformFranchiseTitleId: {
                              type: graphql.GraphQLFloat
                            },
                            Platform: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlatformApiPlatformSearchResponseTournamentsPlatformGamePlatformResponse',
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
                                        'clientPlatformApiPlatformSearchResponseTournamentsPlatformGamePlatformImageSmallResponse',
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
                                  'clientPlatformApiPlatformSearchResponseTournamentsPlatformGameGameResponse',
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
                                        'clientPlatformApiPlatformSearchResponseTournamentsPlatformGameGameImageLargeResponse',
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
                                        'clientPlatformApiPlatformSearchResponseTournamentsPlatformGameGameImageSmallResponse',
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
                                        'clientPlatformApiPlatformSearchResponseTournamentsPlatformGameGameImageBackgroundResponse',
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
                                        'clientPlatformApiPlatformSearchResponseTournamentsPlatformGameGameFranchiseResponse',
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
                                              'clientPlatformApiPlatformSearchResponseTournamentsPlatformGameGameFranchiseImageLargeResponse',
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
                                              'clientPlatformApiPlatformSearchResponseTournamentsPlatformGameGameFranchiseImageSmallResponse',
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
                                              'clientPlatformApiPlatformSearchResponseTournamentsPlatformGameGameFranchiseImageBackgroundResponse',
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
                                        'clientPlatformApiPlatformSearchResponseTournamentsPlatformGameGameDeveloperResponse',
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
                                  'clientPlatformApiPlatformSearchResponseTournamentsPlatformGameImageLargeResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlatformApiPlatformSearchResponseTournamentsPlatformGameImageSmallResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlatformApiPlatformSearchResponseTournamentsPlatformGameImageBackgroundResponse',
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
                      GameTitleMode: { type: graphql.GraphQLString },
                      KeepAlive: { type: graphql.GraphQLString },
                      AllowPreCheckin: { type: graphql.GraphQLBoolean },
                      BracketsBuilt: { type: graphql.GraphQLBoolean }
                    }
                  })
                )
              },
              Games: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlatformApiPlatformSearchResponseGamesResponse',
                    fields: {
                      IsValid: { type: graphql.GraphQLBoolean },
                      Platforms: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlatformApiPlatformSearchResponseGamesPlatformsResponse',
                            fields: {
                              GamePlatformFranchiseTitleId: {
                                type: graphql.GraphQLFloat
                              },
                              Platform: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlatformApiPlatformSearchResponseGamesPlatformsPlatformResponse',
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
                                          'clientPlatformApiPlatformSearchResponseGamesPlatformsPlatformImageSmallResponse',
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
                                    'clientPlatformApiPlatformSearchResponseGamesPlatformsGameResponse',
                                  fields: {
                                    GameTitleId: { type: graphql.GraphQLFloat },
                                    GameName: { type: graphql.GraphQLString },
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
                                          'clientPlatformApiPlatformSearchResponseGamesPlatformsGameImageLargeResponse',
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
                                          'clientPlatformApiPlatformSearchResponseGamesPlatformsGameImageSmallResponse',
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
                                          'clientPlatformApiPlatformSearchResponseGamesPlatformsGameImageBackgroundResponse',
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
                                          'clientPlatformApiPlatformSearchResponseGamesPlatformsGameFranchiseResponse',
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
                                                  'clientPlatformApiPlatformSearchResponseGamesPlatformsGameFranchiseImageLargeResponse',
                                                fields: {
                                                  UrlPath: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  RelativePath: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          ImageSmall: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlatformApiPlatformSearchResponseGamesPlatformsGameFranchiseImageSmallResponse',
                                                fields: {
                                                  UrlPath: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  RelativePath: {
                                                    type: graphql.GraphQLString
                                                  }
                                                }
                                              }
                                            )
                                          },
                                          ImageBackground: {
                                            type: new graphql.GraphQLObjectType(
                                              {
                                                name:
                                                  'clientPlatformApiPlatformSearchResponseGamesPlatformsGameFranchiseImageBackgroundResponse',
                                                fields: {
                                                  UrlPath: {
                                                    type: graphql.GraphQLString
                                                  },
                                                  RelativePath: {
                                                    type: graphql.GraphQLString
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
                                          'clientPlatformApiPlatformSearchResponseGamesPlatformsGameDeveloperResponse',
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
                              GameAddedDateTime: {
                                type: graphql.GraphQLString
                              },
                              GameDownloadLink: { type: graphql.GraphQLString },
                              ChatPanelGuid: { type: graphql.GraphQLString },
                              ImageLarge: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientPlatformApiPlatformSearchResponseGamesPlatformsImageLargeResponse',
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
                                    'clientPlatformApiPlatformSearchResponseGamesPlatformsImageSmallResponse',
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
                                    'clientPlatformApiPlatformSearchResponseGamesPlatformsImageBackgroundResponse',
                                  fields: {
                                    UrlPath: { type: graphql.GraphQLString },
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
                              ThirdPartyApiKey: { type: graphql.GraphQLString },
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
                              GameServerModVersion: {
                                type: graphql.GraphQLFloat
                              }
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
                            'clientPlatformApiPlatformSearchResponseGamesImageLargeResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlatformApiPlatformSearchResponseGamesImageSmallResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientPlatformApiPlatformSearchResponseGamesImageBackgroundResponse',
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
                            'clientPlatformApiPlatformSearchResponseGamesFranchiseResponse',
                          fields: {
                            GameFranchiseId: { type: graphql.GraphQLFloat },
                            GameFranchise: { type: graphql.GraphQLString },
                            ImageLarge: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlatformApiPlatformSearchResponseGamesFranchiseImageLargeResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlatformApiPlatformSearchResponseGamesFranchiseImageSmallResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientPlatformApiPlatformSearchResponseGamesFranchiseImageBackgroundResponse',
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
                            'clientPlatformApiPlatformSearchResponseGamesDeveloperResponse',
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
                      'clientPlatformApiPlatformSearchResponsePlayersResponse',
                    fields: {
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
                              'clientPlatformApiPlatformSearchResponsePlayersGameNicknamesResponse',
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
                              'clientPlatformApiPlatformSearchResponsePlayersStreamingServicesResponse',
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
                      TournamentManagementPolicyId: {
                        type: graphql.GraphQLFloat
                      },
                      LanModeEnabled: { type: graphql.GraphQLBoolean },
                      LanSeatLocation: { type: graphql.GraphQLString },
                      PlayerSubscriptionTypeId: { type: graphql.GraphQLFloat },
                      PlayerSubscriptionExpirationDate: {
                        type: graphql.GraphQLString
                      },
                      IsSkrillAuthorized: { type: graphql.GraphQLBoolean },
                      RaffleTickets: {
                        type: new graphql.GraphQLList(
                          new graphql.GraphQLObjectType({
                            name:
                              'clientPlatformApiPlatformSearchResponsePlayersRaffleTicketsResponse',
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
              Teams: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientPlatformApiPlatformSearchResponseTeamsResponse',
                    fields: {
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
              }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlatformSummaryPlayerWinners: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlatformController.PlayerWinnerSummary',
    method: 'GET',
    url: '/api/Platform/summary/player/winners',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPlatformApiPlatformSummaryPlayerWinnersResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientPlatformApiPlatformSummaryPlayerWinnersResponseResponse',
              fields: {
                TournamentId: { type: graphql.GraphQLFloat },
                TournamentName: { type: graphql.GraphQLString },
                TournamentDate: { type: graphql.GraphQLString },
                EntityId: { type: graphql.GraphQLFloat },
                DisplayName: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlatformSummaryPlayerRankingDaily: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlatformController.DailyPlayerRanking',
    method: 'GET',
    url: '/api/Platform/summary/player/ranking/daily',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPlatformApiPlatformSummaryPlayerRankingDailyResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientPlatformApiPlatformSummaryPlayerRankingDailyResponseResponse',
              fields: {
                PowerRankingPoints: { type: graphql.GraphQLFloat },
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
  ApiPlatformSummaryPlayerRankingMonthlyByyearBymonth: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlatformController.MonthlyPlayerRanking',
    method: 'GET',
    url: '/api/Platform/summary/player/ranking/monthly/{year}/{month}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientPlatformApiPlatformSummaryPlayerRankingMonthlyByyearBymonthUrlParams',
            fields: {
              year: { type: graphql.GraphQLFloat },
              month: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientPlatformApiPlatformSummaryPlayerRankingMonthlyByyearBymonthResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientPlatformApiPlatformSummaryPlayerRankingMonthlyByyearBymonthResponseResponse',
              fields: {
                PowerRankingPoints: { type: graphql.GraphQLFloat },
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
  ApiPlatformHomeContent: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlatformController.MarketingBanners',
    method: 'GET',
    url: '/api/Platform/home/content',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPlatformApiPlatformHomeContentResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientPlatformApiPlatformHomeContentResponseResponse',
              fields: {
                MarketingBannerId: { type: graphql.GraphQLFloat },
                MarketingBannerTitle: { type: graphql.GraphQLString },
                MarketingBannerLinkUrl: { type: graphql.GraphQLString },
                MarketingBannerImageUrl: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlatformFAQ: {
    fullName: 'GamingGrids.Api.Client.v2.Controllers.PlatformController.GetFaq',
    method: 'GET',
    url: '/api/Platform/FAQ',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPlatformApiPlatformFAQResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientPlatformApiPlatformFAQResponseResponse',
              fields: {
                FrequentlyAskedQuestionId: { type: graphql.GraphQLFloat },
                LanguageId: { type: graphql.GraphQLFloat },
                Question: { type: graphql.GraphQLString },
                Answer: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlatformVersion: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.PlatformController.GetVersion',
    method: 'GET',
    url: '/api/Platform/Version',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientPlatformApiPlatformVersionResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientPlatformApiPlatformVersionResponseResponse',
            fields: {
              ReleaseDate: { type: graphql.GraphQLString },
              Version: { type: graphql.GraphQLString },
              ReleaseNotesLink: { type: graphql.GraphQLString },
              UpdateVersion: { type: graphql.GraphQLString },
              FullVersion: { type: graphql.GraphQLString }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
