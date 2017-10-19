const graphql = require('graphql')

module.exports = {
  ApiGame: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.CreateGame',
    method: 'POST',
    url: '/api/Game',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGamebody',
            fields: {
              GameShortCode: { type: graphql.GraphQLString },
              GameFranchiseId: { type: graphql.GraphQLInt },
              GameDeveloperId: { type: graphql.GraphQLInt },
              GameName: { type: graphql.GraphQLString },
              GameDescription: { type: graphql.GraphQLString },
              GameWebsite: { type: graphql.GraphQLString },
              MinimumMinutesBetweenTournamentRounds: {
                type: graphql.GraphQLInt
              },
              MaximumPlayersAllowed: { type: graphql.GraphQLInt },
              ImageLargeUrl: { type: graphql.GraphQLString },
              ImageSmallUrl: { type: graphql.GraphQLString },
              ImageBackgroundUrl: { type: graphql.GraphQLString },
              HasTeamSides: { type: graphql.GraphQLBoolean },
              IsActive: { type: graphql.GraphQLBoolean }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlGameApiGameResponseResponse',
            fields: {
              GameTitleId: { type: graphql.GraphQLInt },
              GameName: { type: graphql.GraphQLString },
              GameShortCode: { type: graphql.GraphQLString },
              GameDescription: { type: graphql.GraphQLString },
              GameWebsite: { type: graphql.GraphQLString },
              ImageLarge: {
                type: new graphql.GraphQLObjectType({
                  name: 'controlGameApiGameResponseImageLargeResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageSmall: {
                type: new graphql.GraphQLObjectType({
                  name: 'controlGameApiGameResponseImageSmallResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageBackground: {
                type: new graphql.GraphQLObjectType({
                  name: 'controlGameApiGameResponseImageBackgroundResponse',
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
                  name: 'controlGameApiGameResponseFranchiseResponse',
                  fields: {
                    GameFranchiseId: { type: graphql.GraphQLInt },
                    GameFranchise: { type: graphql.GraphQLString },
                    ImageLarge: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameApiGameResponseFranchiseImageLargeResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameApiGameResponseFranchiseImageSmallResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameApiGameResponseFranchiseImageBackgroundResponse',
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
                  name: 'controlGameApiGameResponseDeveloperResponse',
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
  ApiGameBygameShortCode: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteGame',
    method: 'DELETE',
    url: '/api/Game/{gameShortCode}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeurlParams',
            fields: { gameShortCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameBygameShortCodeResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodePlatformByplatformCodeStatus: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.UpdateGamePlatformFranchiseTitleState',
    method: 'PUT',
    url: '/api/Game/{gameShortCode}/platform/{platformCode}/Status',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlGameApiGameBygameShortCodePlatformByplatformCodeStatusbody',
            fields: { StateId: { type: graphql.GraphQLInt } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlGameApiGameBygameShortCodePlatformByplatformCodeStatusurlParams',
            fields: {
              platformCode: { type: graphql.GraphQLString },
              gameShortCode: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlGameApiGameBygameShortCodePlatformByplatformCodeStatusResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameModeBygameTitleModeIdHearthstoneDeck: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.CreateModeHearthstoneDeck',
    method: 'POST',
    url: '/api/Game/mode/{gameTitleModeId}/HearthstoneDeck',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameModeBygameTitleModeIdHearthstoneDeckbody',
            fields: {
              HearthstoneDeck: { type: graphql.GraphQLString },
              HearthstoneDeckImage: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlGameApiGameModeBygameTitleModeIdHearthstoneDeckurlParams',
            fields: { gameTitleModeId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameModeBygameTitleModeIdHearthstoneDeckResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameModeBygameTitleModeIdHearthstoneDeckBydeckId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteHearthstoneDeck',
    method: 'DELETE',
    url: '/api/Game/mode/{gameTitleModeId}/HearthstoneDeck/{deckId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlGameApiGameModeBygameTitleModeIdHearthstoneDeckBydeckIdurlParams',
            fields: {
              gameTitleModeId: { type: graphql.GraphQLInt },
              deckId: { type: graphql.GraphQLInt }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlGameApiGameModeBygameTitleModeIdHearthstoneDeckBydeckIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameModeBygameTitleModeIdMap: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.CreateModeMap',
    method: 'POST',
    url: '/api/Game/mode/{gameTitleModeId}/Map',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameModeBygameTitleModeIdMapbody',
            fields: {
              MapFileName: { type: graphql.GraphQLString },
              MapDisplayName: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameModeBygameTitleModeIdMapurlParams',
            fields: { gameTitleModeId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameModeBygameTitleModeIdMapResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameModeBygameTitleModeIdMapBymapId: {
    fullName: 'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteMap',
    method: 'DELETE',
    url: '/api/Game/mode/{gameTitleModeId}/Map/{mapId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameModeBygameTitleModeIdMapBymapIdurlParams',
            fields: {
              gameTitleModeId: { type: graphql.GraphQLInt },
              mapId: { type: graphql.GraphQLInt }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameModeBygameTitleModeIdMapBymapIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodeRules: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.PostCreate',
    method: 'POST',
    url: '/api/Game/{gameShortCode}/Rules',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeRulesbody',
            fields: {
              RuleTitle: { type: graphql.GraphQLString },
              Rule: { type: graphql.GraphQLString },
              IsOfficial: { type: graphql.GraphQLBoolean }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeRulesurlParams',
            fields: { gameShortCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameBygameShortCodeRulesResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodeRulesByruleId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteRule',
    method: 'DELETE',
    url: '/api/Game/{gameShortCode}/Rules/{ruleId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeRulesByruleIdurlParams',
            fields: {
              gameShortCode: { type: graphql.GraphQLString },
              ruleId: { type: graphql.GraphQLInt }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameBygameShortCodeRulesByruleIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGamePlatform: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.CreatePlatform',
    method: 'POST',
    url: '/api/Game/Platform',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGamePlatformbody',
            fields: {
              PlatformCode: { type: graphql.GraphQLString },
              PlatformName: { type: graphql.GraphQLString },
              ImageUrl: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGamePlatformResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGamePlatformByplatformCode: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeletePlatform',
    method: 'DELETE',
    url: '/api/Game/Platform/{platformCode}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGamePlatformByplatformCodeurlParams',
            fields: { platformCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGamePlatformByplatformCodeResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameFranchise: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.CreateFranchise',
    method: 'POST',
    url: '/api/Game/Franchise',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameFranchisebody',
            fields: {
              GameFranchise: { type: graphql.GraphQLString },
              ImageLargeUrl: { type: graphql.GraphQLString },
              ImageSmallUrl: { type: graphql.GraphQLString },
              ImageBackgroundUrl: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameFranchiseResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameFranchiseByfranchiseId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteFranchise',
    method: 'DELETE',
    url: '/api/Game/Franchise/{franchiseId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameFranchiseByfranchiseIdurlParams',
            fields: { franchiseId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameFranchiseByfranchiseIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodeSide: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.CreateTeamSide',
    method: 'POST',
    url: '/api/Game/{gameShortCode}/Side',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeSidebody',
            fields: { TeamSideName: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeSideurlParams',
            fields: { gameShortCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameBygameShortCodeSideResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameSideByteamSideId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteTeamSide',
    method: 'DELETE',
    url: '/api/Game/Side/{teamSideId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameSideByteamSideIdurlParams',
            fields: { teamSideId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameSideByteamSideIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameDeveloper: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.CreateDeveloper',
    method: 'POST',
    url: '/api/Game/Developer',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameDeveloperbody',
            fields: {
              GameDeveloper: { type: graphql.GraphQLString },
              Website: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameDeveloperResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameDeveloperBydeveloperId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteDeveloper',
    method: 'DELETE',
    url: '/api/Game/Developer/{developerId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameDeveloperBydeveloperIdurlParams',
            fields: { developerId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameDeveloperBydeveloperIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodeMode: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.CreateMode',
    method: 'POST',
    url: '/api/Game/{gameShortCode}/Mode',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeModebody',
            fields: { GameMode: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeModeurlParams',
            fields: { gameShortCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameBygameShortCodeModeResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameModeBygameTitleModeId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteMode',
    method: 'DELETE',
    url: '/api/Game/Mode/{gameTitleModeId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameModeBygameTitleModeIdurlParams',
            fields: { gameTitleModeId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameModeBygameTitleModeIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodePlatformByplatformCode: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.UpdatePlatformTitle',
    method: 'PUT',
    url: '/api/Game/{gameShortCode}/platform/{platformCode}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodePlatformByplatformCodebody',
            fields: {
              GamePlatformFranchiseTitleStateId: { type: graphql.GraphQLInt },
              GameDownloadLink: { type: graphql.GraphQLString },
              ValidationMethodTypeId: { type: graphql.GraphQLInt },
              ImageLargeUrl: { type: graphql.GraphQLString },
              ImageSmallUrl: { type: graphql.GraphQLString },
              ImageBackgroundUrl: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlGameApiGameBygameShortCodePlatformByplatformCodeurlParams',
            fields: {
              gameShortCode: { type: graphql.GraphQLString },
              platformCode: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameBygameShortCodePlatformByplatformCodeResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'controlGameApiGameBygameShortCodePlatformByplatformCodeResponseResponse',
            fields: {
              GamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
              Platform: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlGameApiGameBygameShortCodePlatformByplatformCodeResponsePlatformResponse',
                  fields: {
                    GamePlatformId: { type: graphql.GraphQLInt },
                    GamePlatformCode: { type: graphql.GraphQLString },
                    GamePlatform: { type: graphql.GraphQLString },
                    ImageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameApiGameBygameShortCodePlatformByplatformCodeResponsePlatformImageSmallResponse',
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
                    'controlGameApiGameBygameShortCodePlatformByplatformCodeResponseGameResponse',
                  fields: {
                    GameTitleId: { type: graphql.GraphQLInt },
                    GameName: { type: graphql.GraphQLString },
                    GameShortCode: { type: graphql.GraphQLString },
                    GameDescription: { type: graphql.GraphQLString },
                    GameWebsite: { type: graphql.GraphQLString },
                    ImageLarge: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameApiGameBygameShortCodePlatformByplatformCodeResponseGameImageLargeResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameApiGameBygameShortCodePlatformByplatformCodeResponseGameImageSmallResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameApiGameBygameShortCodePlatformByplatformCodeResponseGameImageBackgroundResponse',
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
                          'controlGameApiGameBygameShortCodePlatformByplatformCodeResponseGameFranchiseResponse',
                        fields: {
                          GameFranchiseId: { type: graphql.GraphQLInt },
                          GameFranchise: { type: graphql.GraphQLString },
                          ImageLarge: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'controlGameApiGameBygameShortCodePlatformByplatformCodeResponseGameFranchiseImageLargeResponse',
                              fields: {
                                UrlPath: { type: graphql.GraphQLString },
                                RelativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          ImageSmall: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'controlGameApiGameBygameShortCodePlatformByplatformCodeResponseGameFranchiseImageSmallResponse',
                              fields: {
                                UrlPath: { type: graphql.GraphQLString },
                                RelativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          ImageBackground: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'controlGameApiGameBygameShortCodePlatformByplatformCodeResponseGameFranchiseImageBackgroundResponse',
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
                          'controlGameApiGameBygameShortCodePlatformByplatformCodeResponseGameDeveloperResponse',
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
                    HearthstoneManageDecks: { type: graphql.GraphQLBoolean },
                    IsActive: { type: graphql.GraphQLBoolean }
                  }
                })
              },
              GamePlatformFranchiseTitleStateId: { type: graphql.GraphQLInt },
              GameAddedDateTime: { type: graphql.GraphQLString },
              GameDownloadLink: { type: graphql.GraphQLString },
              ChatPanelGuid: { type: graphql.GraphQLString },
              ImageLarge: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlGameApiGameBygameShortCodePlatformByplatformCodeResponseImageLargeResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageSmall: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlGameApiGameBygameShortCodePlatformByplatformCodeResponseImageSmallResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageBackground: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlGameApiGameBygameShortCodePlatformByplatformCodeResponseImageBackgroundResponse',
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
              GameVersionNeedsVerification: { type: graphql.GraphQLBoolean },
              IssueGamesServerToMatch: { type: graphql.GraphQLBoolean },
              TournamentCount: { type: graphql.GraphQLInt },
              ValidationMethodTypeId: { type: graphql.GraphQLInt },
              ExternalCallbackTemplateId: { type: graphql.GraphQLInt },
              InternalCallbackTemplateId: { type: graphql.GraphQLInt },
              GameServerModVersion: { type: graphql.GraphQLFloat }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodePlatformByplatformCodeMetrics: {
    fullName: 'GamingGrids.Api.Control.v2.Controllers.GameController.Snapshots',
    method: 'GET',
    url: '/api/Game/{gameShortCode}/Platform/{platformCode}/Metrics',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlGameApiGameBygameShortCodePlatformByplatformCodeMetricsuriParams',
            fields: {
              startDate: { type: graphql.GraphQLString },
              endDate: { type: graphql.GraphQLString },
              granularity: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlGameApiGameBygameShortCodePlatformByplatformCodeMetricsurlParams',
            fields: {
              platformCode: { type: graphql.GraphQLString },
              gameShortCode: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlGameApiGameBygameShortCodePlatformByplatformCodeMetricsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlGameApiGameBygameShortCodePlatformByplatformCodeMetricsResponseResponse',
              fields: {
                GamePlatformFranchiseTitleMetricSnapshotId: {
                  type: graphql.GraphQLInt
                },
                GamePlatformFranchiseTitleId: { type: graphql.GraphQLInt },
                SnapshotDateTime: { type: graphql.GraphQLString },
                UnconfirmedPlayerCount: { type: graphql.GraphQLInt },
                ConfirmedPlayerCount: { type: graphql.GraphQLInt },
                ActiveTeamCount: { type: graphql.GraphQLInt },
                DisbanedTeamCount: { type: graphql.GraphQLInt },
                FivePlayersOrMoreTeamCount: { type: graphql.GraphQLInt },
                OnlineGamingServerCount: { type: graphql.GraphQLInt },
                OfflineGamingServerCount: { type: graphql.GraphQLInt },
                LiveTournamentCount: { type: graphql.GraphQLInt },
                CompletedTournamentCount: { type: graphql.GraphQLInt },
                UpcomingTournamentCount: { type: graphql.GraphQLInt },
                TournamentMatchCount: { type: graphql.GraphQLInt },
                DisputedTournamentMatchCount: { type: graphql.GraphQLInt },
                ForfeitTournamentMatchCount: { type: graphql.GraphQLInt }
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
