const graphql = require('graphql')

module.exports = {
  ApiGameTitleSearch: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.SearchGames',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/title/Search',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientGameApiGameTitleSearchUriParams',
            fields: {
              search: {
                type: new graphql.GraphQLInputObjectType({
                  name: 'clientGameApiGameTitleSearchUriParamssearchResponse',
                  fields: {
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
      name: 'clientGameApiGameTitleSearchResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameApiGameTitleSearchResponseResponse',
              fields: {
                IsValid: { type: graphql.GraphQLBoolean },
                Platforms: {
                  type: new graphql.GraphQLList(
                    new graphql.GraphQLObjectType({
                      name:
                        'clientGameApiGameTitleSearchResponsePlatformsResponse',
                      fields: {
                        GamePlatformFranchiseTitleId: {
                          type: graphql.GraphQLFloat
                        },
                        Platform: {
                          type: new graphql.GraphQLObjectType({
                            name:
                              'clientGameApiGameTitleSearchResponsePlatformsPlatformResponse',
                            fields: {
                              GamePlatformId: { type: graphql.GraphQLFloat },
                              GamePlatformCode: { type: graphql.GraphQLString },
                              GamePlatform: { type: graphql.GraphQLString },
                              ImageSmall: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientGameApiGameTitleSearchResponsePlatformsPlatformImageSmallResponse',
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
                              'clientGameApiGameTitleSearchResponsePlatformsGameResponse',
                            fields: {
                              GameTitleId: { type: graphql.GraphQLFloat },
                              GameName: { type: graphql.GraphQLString },
                              GameShortCode: { type: graphql.GraphQLString },
                              GameDescription: { type: graphql.GraphQLString },
                              GameWebsite: { type: graphql.GraphQLString },
                              ImageLarge: {
                                type: new graphql.GraphQLObjectType({
                                  name:
                                    'clientGameApiGameTitleSearchResponsePlatformsGameImageLargeResponse',
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
                                    'clientGameApiGameTitleSearchResponsePlatformsGameImageSmallResponse',
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
                                    'clientGameApiGameTitleSearchResponsePlatformsGameImageBackgroundResponse',
                                  fields: {
                                    UrlPath: { type: graphql.GraphQLString },
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
                                    'clientGameApiGameTitleSearchResponsePlatformsGameFranchiseResponse',
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
                                          'clientGameApiGameTitleSearchResponsePlatformsGameFranchiseImageLargeResponse',
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
                                          'clientGameApiGameTitleSearchResponsePlatformsGameFranchiseImageSmallResponse',
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
                                          'clientGameApiGameTitleSearchResponsePlatformsGameFranchiseImageBackgroundResponse',
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
                                    'clientGameApiGameTitleSearchResponsePlatformsGameDeveloperResponse',
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
                              'clientGameApiGameTitleSearchResponsePlatformsImageLargeResponse',
                            fields: {
                              UrlPath: { type: graphql.GraphQLString },
                              RelativePath: { type: graphql.GraphQLString }
                            }
                          })
                        },
                        ImageSmall: {
                          type: new graphql.GraphQLObjectType({
                            name:
                              'clientGameApiGameTitleSearchResponsePlatformsImageSmallResponse',
                            fields: {
                              UrlPath: { type: graphql.GraphQLString },
                              RelativePath: { type: graphql.GraphQLString }
                            }
                          })
                        },
                        ImageBackground: {
                          type: new graphql.GraphQLObjectType({
                            name:
                              'clientGameApiGameTitleSearchResponsePlatformsImageBackgroundResponse',
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
                        GameRevisedDateTime: { type: graphql.GraphQLString },
                        GameVersion: { type: graphql.GraphQLString },
                        GameVersionNeedsVerification: {
                          type: graphql.GraphQLBoolean
                        },
                        IssueGamesServerToMatch: {
                          type: graphql.GraphQLBoolean
                        },
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
                      'clientGameApiGameTitleSearchResponseImageLargeResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                ImageSmall: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameApiGameTitleSearchResponseImageSmallResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                ImageBackground: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameApiGameTitleSearchResponseImageBackgroundResponse',
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
                      'clientGameApiGameTitleSearchResponseFranchiseResponse',
                    fields: {
                      GameFranchiseId: { type: graphql.GraphQLFloat },
                      GameFranchise: { type: graphql.GraphQLString },
                      ImageLarge: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameApiGameTitleSearchResponseFranchiseImageLargeResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameApiGameTitleSearchResponseFranchiseImageSmallResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameApiGameTitleSearchResponseFranchiseImageBackgroundResponse',
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
                      'clientGameApiGameTitleSearchResponseDeveloperResponse',
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
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGame: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.AllProfiles',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Game',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGameResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameApiGameResponseResponse',
              fields: {
                IsValid: { type: graphql.GraphQLBoolean },
                Platforms: {
                  type: new graphql.GraphQLList(
                    new graphql.GraphQLObjectType({
                      name: 'clientGameApiGameResponsePlatformsResponse',
                      fields: {
                        GamePlatformId: { type: graphql.GraphQLFloat },
                        GamePlatformCode: { type: graphql.GraphQLString },
                        GamePlatform: { type: graphql.GraphQLString },
                        ImageSmall: {
                          type: new graphql.GraphQLObjectType({
                            name:
                              'clientGameApiGameResponsePlatformsImageSmallResponse',
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
                },
                Sides: {
                  type: new graphql.GraphQLList(
                    new graphql.GraphQLObjectType({
                      name: 'clientGameApiGameResponseSidesResponse',
                      fields: {
                        GameTitleTeamSideId: { type: graphql.GraphQLFloat },
                        GameTitleId: { type: graphql.GraphQLFloat },
                        GameTitleTeamSide: { type: graphql.GraphQLString },
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
                    name: 'clientGameApiGameResponseImageLargeResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                ImageSmall: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientGameApiGameResponseImageSmallResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                ImageBackground: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientGameApiGameResponseImageBackgroundResponse',
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
                    name: 'clientGameApiGameResponseFranchiseResponse',
                    fields: {
                      GameFranchiseId: { type: graphql.GraphQLFloat },
                      GameFranchise: { type: graphql.GraphQLString },
                      ImageLarge: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameApiGameResponseFranchiseImageLargeResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameApiGameResponseFranchiseImageSmallResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameApiGameResponseFranchiseImageBackgroundResponse',
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
                    name: 'clientGameApiGameResponseDeveloperResponse',
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
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCode: {
    fullName: 'GamingGrids.Api.Client.v2.Controllers.GameController.Profile',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientGameApiGameBygameShortCodeUrlParams',
            fields: { gameShortCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGameBygameShortCodeResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientGameApiGameBygameShortCodeResponseResponse',
            fields: {
              IsValid: { type: graphql.GraphQLBoolean },
              Platforms: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientGameApiGameBygameShortCodeResponsePlatformsResponse',
                    fields: {
                      GamePlatformId: { type: graphql.GraphQLFloat },
                      GamePlatformCode: { type: graphql.GraphQLString },
                      GamePlatform: { type: graphql.GraphQLString },
                      ImageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameApiGameBygameShortCodeResponsePlatformsImageSmallResponse',
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
              },
              Sides: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLObjectType({
                    name:
                      'clientGameApiGameBygameShortCodeResponseSidesResponse',
                    fields: {
                      GameTitleTeamSideId: { type: graphql.GraphQLFloat },
                      GameTitleId: { type: graphql.GraphQLFloat },
                      GameTitleTeamSide: { type: graphql.GraphQLString },
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
                    'clientGameApiGameBygameShortCodeResponseImageLargeResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageSmall: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameApiGameBygameShortCodeResponseImageSmallResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageBackground: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameApiGameBygameShortCodeResponseImageBackgroundResponse',
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
                    'clientGameApiGameBygameShortCodeResponseFranchiseResponse',
                  fields: {
                    GameFranchiseId: { type: graphql.GraphQLFloat },
                    GameFranchise: { type: graphql.GraphQLString },
                    ImageLarge: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientGameApiGameBygameShortCodeResponseFranchiseImageLargeResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientGameApiGameBygameShortCodeResponseFranchiseImageSmallResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientGameApiGameBygameShortCodeResponseFranchiseImageBackgroundResponse',
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
                    'clientGameApiGameBygameShortCodeResponseDeveloperResponse',
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
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodePlatformByplatformCode: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.PlatformGameProfile',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/Platform/{platformCode}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientGameApiGameBygameShortCodePlatformByplatformCodeUrlParams',
            fields: {
              platformCode: { type: graphql.GraphQLString },
              gameShortCode: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGameBygameShortCodePlatformByplatformCodeResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientGameApiGameBygameShortCodePlatformByplatformCodeResponseResponse',
            fields: {
              GamePlatformFranchiseTitleId: { type: graphql.GraphQLFloat },
              Platform: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameApiGameBygameShortCodePlatformByplatformCodeResponsePlatformResponse',
                  fields: {
                    GamePlatformId: { type: graphql.GraphQLFloat },
                    GamePlatformCode: { type: graphql.GraphQLString },
                    GamePlatform: { type: graphql.GraphQLString },
                    ImageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientGameApiGameBygameShortCodePlatformByplatformCodeResponsePlatformImageSmallResponse',
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
                    'clientGameApiGameBygameShortCodePlatformByplatformCodeResponseGameResponse',
                  fields: {
                    GameTitleId: { type: graphql.GraphQLFloat },
                    GameName: { type: graphql.GraphQLString },
                    GameShortCode: { type: graphql.GraphQLString },
                    GameDescription: { type: graphql.GraphQLString },
                    GameWebsite: { type: graphql.GraphQLString },
                    ImageLarge: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientGameApiGameBygameShortCodePlatformByplatformCodeResponseGameImageLargeResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientGameApiGameBygameShortCodePlatformByplatformCodeResponseGameImageSmallResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'clientGameApiGameBygameShortCodePlatformByplatformCodeResponseGameImageBackgroundResponse',
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
                          'clientGameApiGameBygameShortCodePlatformByplatformCodeResponseGameFranchiseResponse',
                        fields: {
                          GameFranchiseId: { type: graphql.GraphQLFloat },
                          GameFranchise: { type: graphql.GraphQLString },
                          ImageLarge: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'clientGameApiGameBygameShortCodePlatformByplatformCodeResponseGameFranchiseImageLargeResponse',
                              fields: {
                                UrlPath: { type: graphql.GraphQLString },
                                RelativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          ImageSmall: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'clientGameApiGameBygameShortCodePlatformByplatformCodeResponseGameFranchiseImageSmallResponse',
                              fields: {
                                UrlPath: { type: graphql.GraphQLString },
                                RelativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          ImageBackground: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'clientGameApiGameBygameShortCodePlatformByplatformCodeResponseGameFranchiseImageBackgroundResponse',
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
                          'clientGameApiGameBygameShortCodePlatformByplatformCodeResponseGameDeveloperResponse',
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
              },
              GamePlatformFranchiseTitleStateId: { type: graphql.GraphQLFloat },
              GameAddedDateTime: { type: graphql.GraphQLString },
              GameDownloadLink: { type: graphql.GraphQLString },
              ChatPanelGuid: { type: graphql.GraphQLString },
              ImageLarge: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameApiGameBygameShortCodePlatformByplatformCodeResponseImageLargeResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageSmall: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameApiGameBygameShortCodePlatformByplatformCodeResponseImageSmallResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageBackground: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameApiGameBygameShortCodePlatformByplatformCodeResponseImageBackgroundResponse',
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
              GameVersionNeedsVerification: { type: graphql.GraphQLBoolean },
              IssueGamesServerToMatch: { type: graphql.GraphQLBoolean },
              TournamentCount: { type: graphql.GraphQLFloat },
              ValidationMethodTypeId: { type: graphql.GraphQLFloat },
              ExternalCallbackTemplateId: { type: graphql.GraphQLFloat },
              InternalCallbackTemplateId: { type: graphql.GraphQLFloat },
              GameServerModVersion: { type: graphql.GraphQLFloat }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameFranchises: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.GetFranchises',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/Franchises',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGameFranchisesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameApiGameFranchisesResponseResponse',
              fields: {
                GameFranchiseId: { type: graphql.GraphQLFloat },
                GameFranchise: { type: graphql.GraphQLString },
                ImageLarge: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameApiGameFranchisesResponseImageLargeResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                ImageSmall: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameApiGameFranchisesResponseImageSmallResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                ImageBackground: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameApiGameFranchisesResponseImageBackgroundResponse',
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
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameFranchiseByfranchiseId: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.GetFranchise',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/Franchise/{franchiseId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientGameApiGameFranchiseByfranchiseIdUrlParams',
            fields: { franchiseId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGameFranchiseByfranchiseIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientGameApiGameFranchiseByfranchiseIdResponseResponse',
            fields: {
              GameFranchiseId: { type: graphql.GraphQLFloat },
              GameFranchise: { type: graphql.GraphQLString },
              ImageLarge: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameApiGameFranchiseByfranchiseIdResponseImageLargeResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageSmall: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameApiGameFranchiseByfranchiseIdResponseImageSmallResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageBackground: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameApiGameFranchiseByfranchiseIdResponseImageBackgroundResponse',
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
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGamePlatforms: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.GetPlatforms',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/Platforms',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGamePlatformsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameApiGamePlatformsResponseResponse',
              fields: {
                GamePlatformId: { type: graphql.GraphQLFloat },
                GamePlatformCode: { type: graphql.GraphQLString },
                GamePlatform: { type: graphql.GraphQLString },
                ImageSmall: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameApiGamePlatformsResponseImageSmallResponse',
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
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGamePlatformByplatformCode: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.GetPlatforms',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/Platform/{platformCode}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientGameApiGamePlatformByplatformCodeUrlParams',
            fields: { platformCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGamePlatformByplatformCodeResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientGameApiGamePlatformByplatformCodeResponseResponse',
            fields: {
              GamePlatformId: { type: graphql.GraphQLFloat },
              GamePlatformCode: { type: graphql.GraphQLString },
              GamePlatform: { type: graphql.GraphQLString },
              ImageSmall: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientGameApiGamePlatformByplatformCodeResponseImageSmallResponse',
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
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameSearch: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.SearchGames',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/Search',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGameSearchResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameApiGameSearchResponseResponse',
              fields: {
                GamePlatformFranchiseTitleId: { type: graphql.GraphQLFloat },
                Platform: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientGameApiGameSearchResponsePlatformResponse',
                    fields: {
                      GamePlatformId: { type: graphql.GraphQLFloat },
                      GamePlatformCode: { type: graphql.GraphQLString },
                      GamePlatform: { type: graphql.GraphQLString },
                      ImageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameApiGameSearchResponsePlatformImageSmallResponse',
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
                    name: 'clientGameApiGameSearchResponseGameResponse',
                    fields: {
                      GameTitleId: { type: graphql.GraphQLFloat },
                      GameName: { type: graphql.GraphQLString },
                      GameShortCode: { type: graphql.GraphQLString },
                      GameDescription: { type: graphql.GraphQLString },
                      GameWebsite: { type: graphql.GraphQLString },
                      ImageLarge: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameApiGameSearchResponseGameImageLargeResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameApiGameSearchResponseGameImageSmallResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameApiGameSearchResponseGameImageBackgroundResponse',
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
                            'clientGameApiGameSearchResponseGameFranchiseResponse',
                          fields: {
                            GameFranchiseId: { type: graphql.GraphQLFloat },
                            GameFranchise: { type: graphql.GraphQLString },
                            ImageLarge: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameApiGameSearchResponseGameFranchiseImageLargeResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameApiGameSearchResponseGameFranchiseImageSmallResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameApiGameSearchResponseGameFranchiseImageBackgroundResponse',
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
                            'clientGameApiGameSearchResponseGameDeveloperResponse',
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
                },
                GamePlatformFranchiseTitleStateId: {
                  type: graphql.GraphQLFloat
                },
                GameAddedDateTime: { type: graphql.GraphQLString },
                GameDownloadLink: { type: graphql.GraphQLString },
                ChatPanelGuid: { type: graphql.GraphQLString },
                ImageLarge: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientGameApiGameSearchResponseImageLargeResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                ImageSmall: {
                  type: new graphql.GraphQLObjectType({
                    name: 'clientGameApiGameSearchResponseImageSmallResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                ImageBackground: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameApiGameSearchResponseImageBackgroundResponse',
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
                GameVersionNeedsVerification: { type: graphql.GraphQLBoolean },
                IssueGamesServerToMatch: { type: graphql.GraphQLBoolean },
                TournamentCount: { type: graphql.GraphQLFloat },
                ValidationMethodTypeId: { type: graphql.GraphQLFloat },
                ExternalCallbackTemplateId: { type: graphql.GraphQLFloat },
                InternalCallbackTemplateId: { type: graphql.GraphQLFloat },
                GameServerModVersion: { type: graphql.GraphQLFloat }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameSearchByplatformCode: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.SearchGames',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/Search/{platformCode}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientGameApiGameSearchByplatformCodeUrlParams',
            fields: { platformCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGameSearchByplatformCodeResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameApiGameSearchByplatformCodeResponseResponse',
              fields: {
                GamePlatformFranchiseTitleId: { type: graphql.GraphQLFloat },
                Platform: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameApiGameSearchByplatformCodeResponsePlatformResponse',
                    fields: {
                      GamePlatformId: { type: graphql.GraphQLFloat },
                      GamePlatformCode: { type: graphql.GraphQLString },
                      GamePlatform: { type: graphql.GraphQLString },
                      ImageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameApiGameSearchByplatformCodeResponsePlatformImageSmallResponse',
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
                      'clientGameApiGameSearchByplatformCodeResponseGameResponse',
                    fields: {
                      GameTitleId: { type: graphql.GraphQLFloat },
                      GameName: { type: graphql.GraphQLString },
                      GameShortCode: { type: graphql.GraphQLString },
                      GameDescription: { type: graphql.GraphQLString },
                      GameWebsite: { type: graphql.GraphQLString },
                      ImageLarge: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameApiGameSearchByplatformCodeResponseGameImageLargeResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageSmall: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameApiGameSearchByplatformCodeResponseGameImageSmallResponse',
                          fields: {
                            UrlPath: { type: graphql.GraphQLString },
                            RelativePath: { type: graphql.GraphQLString }
                          }
                        })
                      },
                      ImageBackground: {
                        type: new graphql.GraphQLObjectType({
                          name:
                            'clientGameApiGameSearchByplatformCodeResponseGameImageBackgroundResponse',
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
                            'clientGameApiGameSearchByplatformCodeResponseGameFranchiseResponse',
                          fields: {
                            GameFranchiseId: { type: graphql.GraphQLFloat },
                            GameFranchise: { type: graphql.GraphQLString },
                            ImageLarge: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameApiGameSearchByplatformCodeResponseGameFranchiseImageLargeResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageSmall: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameApiGameSearchByplatformCodeResponseGameFranchiseImageSmallResponse',
                                fields: {
                                  UrlPath: { type: graphql.GraphQLString },
                                  RelativePath: { type: graphql.GraphQLString }
                                }
                              })
                            },
                            ImageBackground: {
                              type: new graphql.GraphQLObjectType({
                                name:
                                  'clientGameApiGameSearchByplatformCodeResponseGameFranchiseImageBackgroundResponse',
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
                            'clientGameApiGameSearchByplatformCodeResponseGameDeveloperResponse',
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
                      'clientGameApiGameSearchByplatformCodeResponseImageLargeResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                ImageSmall: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameApiGameSearchByplatformCodeResponseImageSmallResponse',
                    fields: {
                      UrlPath: { type: graphql.GraphQLString },
                      RelativePath: { type: graphql.GraphQLString }
                    }
                  })
                },
                ImageBackground: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameApiGameSearchByplatformCodeResponseImageBackgroundResponse',
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
                GameVersionNeedsVerification: { type: graphql.GraphQLBoolean },
                IssueGamesServerToMatch: { type: graphql.GraphQLBoolean },
                TournamentCount: { type: graphql.GraphQLFloat },
                ValidationMethodTypeId: { type: graphql.GraphQLFloat },
                ExternalCallbackTemplateId: { type: graphql.GraphQLFloat },
                InternalCallbackTemplateId: { type: graphql.GraphQLFloat },
                GameServerModVersion: { type: graphql.GraphQLFloat }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodePlatformByplatformCodePlayerByentityName: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.AssociateToPlayer',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/platform/{platformCode}/Player/{entityName}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientGameApiGameBygameShortCodePlatformByplatformCodePlayerByentityNameBody',
            fields: {
              EntityPlayerId: { type: graphql.GraphQLFloat },
              EntityPlayerEmailAddress: { type: graphql.GraphQLString },
              EntityPlayerName: { type: graphql.GraphQLString },
              PlayerNickname: { type: graphql.GraphQLString },
              PlayerIdentifier: { type: graphql.GraphQLString },
              ThirdPartyApiRegion: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientGameApiGameBygameShortCodePlatformByplatformCodePlayerByentityNameUrlParams',
            fields: {
              platformCode: { type: graphql.GraphQLString },
              gameShortCode: { type: graphql.GraphQLString },
              entityName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientGameApiGameBygameShortCodePlatformByplatformCodePlayerByentityNameResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodePlatformByplatformCodePlayerByentityName2: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.DisassociateFromPlayer',
    method: 'DELETE',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/platform/{platformCode}/Player/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientGameApiGameBygameShortCodePlatformByplatformCodePlayerByentityName2UrlParams',
            fields: {
              platformCode: { type: graphql.GraphQLString },
              gameShortCode: { type: graphql.GraphQLString },
              entityName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientGameApiGameBygameShortCodePlatformByplatformCodePlayerByentityName2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodePlatformByplatformCodeTeamByentityName: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.AssociateToTeam',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/platform/{platformCode}/Team/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientGameApiGameBygameShortCodePlatformByplatformCodeTeamByentityNameUrlParams',
            fields: {
              platformCode: { type: graphql.GraphQLString },
              gameShortCode: { type: graphql.GraphQLString },
              entityName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientGameApiGameBygameShortCodePlatformByplatformCodeTeamByentityNameResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodePlatformByplatformCodeTeamByentityName2: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.DisassociateFromTeam',
    method: 'DELETE',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/platform/{platformCode}/Team/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientGameApiGameBygameShortCodePlatformByplatformCodeTeamByentityName2UrlParams',
            fields: {
              platformCode: { type: graphql.GraphQLString },
              gameShortCode: { type: graphql.GraphQLString },
              entityName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientGameApiGameBygameShortCodePlatformByplatformCodeTeamByentityName2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameModeBygameTitleModeIdMaps: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.GameTitleMaps',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/mode/{gameTitleModeId}/maps',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientGameApiGameModeBygameTitleModeIdMapsUrlParams',
            fields: { gameTitleModeId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGameModeBygameTitleModeIdMapsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientGameApiGameModeBygameTitleModeIdMapsResponseResponse',
              fields: {
                GameTitleModeMapId: { type: graphql.GraphQLFloat },
                GameTitleModeId: { type: graphql.GraphQLFloat },
                MapFileName: { type: graphql.GraphQLString },
                MapDisplayName: { type: graphql.GraphQLString },
                IsActive: { type: graphql.GraphQLBoolean }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameModeBygameTitleModeIdHearthstoneDecks: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.GameTitleModeHearthstoneDecks',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/mode/{gameTitleModeId}/HearthstoneDecks',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientGameApiGameModeBygameTitleModeIdHearthstoneDecksUrlParams',
            fields: { gameTitleModeId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGameModeBygameTitleModeIdHearthstoneDecksResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'clientGameApiGameModeBygameTitleModeIdHearthstoneDecksResponseResponse',
              fields: {
                GameTitleModeHearthstoneDeckId: { type: graphql.GraphQLFloat },
                GameTitleModeId: { type: graphql.GraphQLFloat },
                HearthstoneDeck: { type: graphql.GraphQLString },
                HearthstoneDeckImage: {
                  type: new graphql.GraphQLObjectType({
                    name:
                      'clientGameApiGameModeBygameTitleModeIdHearthstoneDecksResponseHearthstoneDeckImageResponse',
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
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodeRules: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.GameTitleRules',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/rules',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientGameApiGameBygameShortCodeRulesUrlParams',
            fields: { gameShortCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGameBygameShortCodeRulesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameApiGameBygameShortCodeRulesResponseResponse',
              fields: {
                GameTitleRulesId: { type: graphql.GraphQLFloat },
                GameTitleId: { type: graphql.GraphQLFloat },
                RulesTitle: { type: graphql.GraphQLString },
                RulesDescription: { type: graphql.GraphQLString },
                IsOfficial: { type: graphql.GraphQLBoolean },
                IsActive: { type: graphql.GraphQLBoolean },
                EntityRulesCreatedById: { type: graphql.GraphQLFloat }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodeModes: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.GameTitleModes',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/modes',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientGameApiGameBygameShortCodeModesUrlParams',
            fields: { gameShortCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGameBygameShortCodeModesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameApiGameBygameShortCodeModesResponseResponse',
              fields: {
                GameTitleModeId: { type: graphql.GraphQLFloat },
                GameTitleId: { type: graphql.GraphQLFloat },
                GameTitleMode: { type: graphql.GraphQLString },
                IsActive: { type: graphql.GraphQLBoolean }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameModesBygameTitleModeId: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.GameTitleMode',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/modes/{gameTitleModeId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientGameApiGameModesBygameTitleModeIdUrlParams',
            fields: { gameTitleModeId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGameModesBygameTitleModeIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientGameApiGameModesBygameTitleModeIdResponseResponse',
            fields: {
              GameTitleModeId: { type: graphql.GraphQLFloat },
              GameTitleId: { type: graphql.GraphQLFloat },
              GameTitleMode: { type: graphql.GraphQLString },
              IsActive: { type: graphql.GraphQLBoolean }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodeRulesByruleId: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.GameTitleRule',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/rules/{ruleId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientGameApiGameBygameShortCodeRulesByruleIdUrlParams',
            fields: {
              gameShortCode: { type: graphql.GraphQLString },
              ruleId: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGameBygameShortCodeRulesByruleIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientGameApiGameBygameShortCodeRulesByruleIdResponseResponse',
            fields: {
              GameTitleRulesId: { type: graphql.GraphQLFloat },
              GameTitleId: { type: graphql.GraphQLFloat },
              RulesTitle: { type: graphql.GraphQLString },
              RulesDescription: { type: graphql.GraphQLString },
              IsOfficial: { type: graphql.GraphQLBoolean },
              IsActive: { type: graphql.GraphQLBoolean },
              EntityRulesCreatedById: { type: graphql.GraphQLFloat }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameDevelopers: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.GetDevelopers',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/Developers',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGameDevelopersResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientGameApiGameDevelopersResponseResponse',
              fields: {
                GameDeveloperId: { type: graphql.GraphQLFloat },
                GameDeveloper: { type: graphql.GraphQLString },
                Website: { type: graphql.GraphQLString },
                IsActive: { type: graphql.GraphQLBoolean }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameDeveloperBydeveloperId: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.GameController.GetDeveloper',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Game/Developer/{developerId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientGameApiGameDeveloperBydeveloperIdUrlParams',
            fields: { developerId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientGameApiGameDeveloperBydeveloperIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientGameApiGameDeveloperBydeveloperIdResponseResponse',
            fields: {
              GameDeveloperId: { type: graphql.GraphQLFloat },
              GameDeveloper: { type: graphql.GraphQLString },
              Website: { type: graphql.GraphQLString },
              IsActive: { type: graphql.GraphQLBoolean }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
