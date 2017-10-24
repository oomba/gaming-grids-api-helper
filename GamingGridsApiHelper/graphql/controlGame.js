const graphql = require('graphql')

module.exports = {
  ApiGame: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.CreateGame',
    method: 'POST',
    url: 'http://t2w.control.v2.dev6.gaminggrids.com/api/Game',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBody',
            fields: {
              GameShortCode: { type: graphql.GraphQLString },
              GameFranchiseId: { type: graphql.GraphQLFloat },
              GameDeveloperId: { type: graphql.GraphQLFloat },
              GameName: { type: graphql.GraphQLString },
              GameDescription: { type: graphql.GraphQLString },
              GameWebsite: { type: graphql.GraphQLString },
              MinimumMinutesBetweenTournamentRounds: {
                type: graphql.GraphQLFloat
              },
              MaximumPlayersAllowed: { type: graphql.GraphQLFloat },
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
              GameTitleId: { type: graphql.GraphQLFloat },
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
              MaximumPlayersAllowed: { type: graphql.GraphQLFloat },
              MinimumMinutesBetweenTournamentRounds: {
                type: graphql.GraphQLFloat
              },
              Franchise: {
                type: new graphql.GraphQLObjectType({
                  name: 'controlGameApiGameResponseFranchiseResponse',
                  fields: {
                    GameFranchiseId: { type: graphql.GraphQLFloat },
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
  ApiGameBygameShortCode: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.UpdateGame',
    method: 'PUT',
    url: 'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeBody',
            fields: {
              GameFranchiseId: { type: graphql.GraphQLFloat },
              GameDeveloperId: { type: graphql.GraphQLFloat },
              GameName: { type: graphql.GraphQLString },
              GameDescription: { type: graphql.GraphQLString },
              GameWebsite: { type: graphql.GraphQLString },
              MinimumMinutesBetweenTournamentRounds: {
                type: graphql.GraphQLFloat
              },
              MaximumPlayersAllowed: { type: graphql.GraphQLFloat },
              ImageLargeUrl: { type: graphql.GraphQLString },
              ImageSmallUrl: { type: graphql.GraphQLString },
              ImageBackgroundUrl: { type: graphql.GraphQLString },
              HasTeamSides: { type: graphql.GraphQLBoolean },
              IsActive: { type: graphql.GraphQLBoolean }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeUrlParams',
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
  ApiGameBygameShortCode2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteGame',
    method: 'DELETE',
    url: 'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCode2UrlParams',
            fields: { gameShortCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameBygameShortCode2Response',
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/platform/{platformCode}/Status',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlGameApiGameBygameShortCodePlatformByplatformCodeStatusBody',
            fields: { StateId: { type: graphql.GraphQLFloat } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlGameApiGameBygameShortCodePlatformByplatformCodeStatusUrlParams',
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/mode/{gameTitleModeId}/HearthstoneDeck',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameModeBygameTitleModeIdHearthstoneDeckBody',
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
              'controlGameApiGameModeBygameTitleModeIdHearthstoneDeckUrlParams',
            fields: { gameTitleModeId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameModeBygameTitleModeIdHearthstoneDeckResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameModeBygameTitleModeIdHearthstoneDeckBydeckId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteHearthstoneDeck',
    method: 'DELETE',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/mode/{gameTitleModeId}/HearthstoneDeck/{deckId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlGameApiGameModeBygameTitleModeIdHearthstoneDeckBydeckIdUrlParams',
            fields: {
              gameTitleModeId: { type: graphql.GraphQLFloat },
              deckId: { type: graphql.GraphQLFloat }
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/mode/{gameTitleModeId}/Map',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameModeBygameTitleModeIdMapBody',
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
            name: 'controlGameApiGameModeBygameTitleModeIdMapUrlParams',
            fields: { gameTitleModeId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameModeBygameTitleModeIdMapResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameModeBygameTitleModeIdMapBymapId: {
    fullName: 'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteMap',
    method: 'DELETE',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/mode/{gameTitleModeId}/Map/{mapId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameModeBygameTitleModeIdMapBymapIdUrlParams',
            fields: {
              gameTitleModeId: { type: graphql.GraphQLFloat },
              mapId: { type: graphql.GraphQLFloat }
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/Rules',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeRulesBody',
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
            name: 'controlGameApiGameBygameShortCodeRulesUrlParams',
            fields: { gameShortCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameBygameShortCodeRulesResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodeRulesByruleId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.UpdateRule',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/Rules/{ruleId}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeRulesByruleIdBody',
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
            name: 'controlGameApiGameBygameShortCodeRulesByruleIdUrlParams',
            fields: {
              gameShortCode: { type: graphql.GraphQLString },
              ruleId: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameBygameShortCodeRulesByruleIdResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodeRulesByruleId2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteRule',
    method: 'DELETE',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/Rules/{ruleId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeRulesByruleId2UrlParams',
            fields: {
              gameShortCode: { type: graphql.GraphQLString },
              ruleId: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameBygameShortCodeRulesByruleId2Response',
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
    url: 'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/Platform',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGamePlatformBody',
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
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGamePlatformByplatformCode: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.UpdatePlatform',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/platform/{platformCode}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGamePlatformByplatformCodeBody',
            fields: {
              PlatformName: { type: graphql.GraphQLString },
              ImageUrl: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGamePlatformByplatformCodeUrlParams',
            fields: { platformCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGamePlatformByplatformCodeResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlGameApiGamePlatformByplatformCodeResponseResponse',
            fields: {
              GamePlatformId: { type: graphql.GraphQLFloat },
              GamePlatformCode: { type: graphql.GraphQLString },
              GamePlatform: { type: graphql.GraphQLString },
              ImageSmall: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlGameApiGamePlatformByplatformCodeResponseImageSmallResponse',
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
  ApiGamePlatformByplatformCode2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeletePlatform',
    method: 'DELETE',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/Platform/{platformCode}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGamePlatformByplatformCode2UrlParams',
            fields: { platformCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGamePlatformByplatformCode2Response',
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
    url: 'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/Franchise',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameFranchiseBody',
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
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameFranchiseByfranchiseId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.UpdateFranchise',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/Franchise/{franchiseId}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameFranchiseByfranchiseIdBody',
            fields: {
              GameFranchise: { type: graphql.GraphQLString },
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
            name: 'controlGameApiGameFranchiseByfranchiseIdUrlParams',
            fields: { franchiseId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameFranchiseByfranchiseIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlGameApiGameFranchiseByfranchiseIdResponseResponse',
            fields: {
              GameFranchiseId: { type: graphql.GraphQLFloat },
              GameFranchise: { type: graphql.GraphQLString },
              ImageLarge: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlGameApiGameFranchiseByfranchiseIdResponseImageLargeResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageSmall: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlGameApiGameFranchiseByfranchiseIdResponseImageSmallResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageBackground: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlGameApiGameFranchiseByfranchiseIdResponseImageBackgroundResponse',
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
  ApiGameFranchiseByfranchiseId2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteFranchise',
    method: 'DELETE',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/Franchise/{franchiseId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameFranchiseByfranchiseId2UrlParams',
            fields: { franchiseId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameFranchiseByfranchiseId2Response',
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/Side',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeSideBody',
            fields: { TeamSideName: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeSideUrlParams',
            fields: { gameShortCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameBygameShortCodeSideResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameSideByteamSideId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.UpdateTeamSide',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/Side/{teamSideId}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameSideByteamSideIdBody',
            fields: { TeamSideName: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameSideByteamSideIdUrlParams',
            fields: { teamSideId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameSideByteamSideIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlGameApiGameSideByteamSideIdResponseResponse',
            fields: {
              GameTitleTeamSideId: { type: graphql.GraphQLFloat },
              GameTitleId: { type: graphql.GraphQLFloat },
              GameTitleTeamSide: { type: graphql.GraphQLString },
              IsActive: { type: graphql.GraphQLBoolean }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameSideByteamSideId2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteTeamSide',
    method: 'DELETE',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/Side/{teamSideId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameSideByteamSideId2UrlParams',
            fields: { teamSideId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameSideByteamSideId2Response',
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
    url: 'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/Developer',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameDeveloperBody',
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
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameDeveloperBydeveloperId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.UpdateDeveloper',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/Developer/{developerId}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameDeveloperBydeveloperIdBody',
            fields: {
              GameDeveloper: { type: graphql.GraphQLString },
              Website: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameDeveloperBydeveloperIdUrlParams',
            fields: { developerId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameDeveloperBydeveloperIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlGameApiGameDeveloperBydeveloperIdResponseResponse',
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
  },
  ApiGameDeveloperBydeveloperId2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteDeveloper',
    method: 'DELETE',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/Developer/{developerId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameDeveloperBydeveloperId2UrlParams',
            fields: { developerId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameDeveloperBydeveloperId2Response',
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/Mode',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeModeBody',
            fields: { GameMode: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodeModeUrlParams',
            fields: { gameShortCode: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameBygameShortCodeModeResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameModeBygameTitleModeId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.UpdateMode',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/Mode/{gameTitleModeId}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameModeBygameTitleModeIdBody',
            fields: { GameMode: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameModeBygameTitleModeIdUrlParams',
            fields: { gameTitleModeId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameModeBygameTitleModeIdResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlGameApiGameModeBygameTitleModeIdResponseResponse',
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
  ApiGameModeBygameTitleModeId2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.DeleteMode',
    method: 'DELETE',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/Mode/{gameTitleModeId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameModeBygameTitleModeId2UrlParams',
            fields: { gameTitleModeId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameModeBygameTitleModeId2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodePlatformByplatformCode: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.CreatePlatformTitle',
    method: 'POST',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/platform/{platformCode}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlGameApiGameBygameShortCodePlatformByplatformCodeBody',
            fields: {
              GamePlatformFranchiseTitleStateId: { type: graphql.GraphQLFloat },
              GameDownloadLink: { type: graphql.GraphQLString },
              ValidationMethodTypeId: { type: graphql.GraphQLFloat },
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
              'controlGameApiGameBygameShortCodePlatformByplatformCodeUrlParams',
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
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiGameBygameShortCodePlatformByplatformCode2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.GameController.UpdatePlatformTitle',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/platform/{platformCode}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlGameApiGameBygameShortCodePlatformByplatformCode2Body',
            fields: {
              GamePlatformFranchiseTitleStateId: { type: graphql.GraphQLFloat },
              GameDownloadLink: { type: graphql.GraphQLString },
              ValidationMethodTypeId: { type: graphql.GraphQLFloat },
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
              'controlGameApiGameBygameShortCodePlatformByplatformCode2UrlParams',
            fields: {
              gameShortCode: { type: graphql.GraphQLString },
              platformCode: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlGameApiGameBygameShortCodePlatformByplatformCode2Response',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'controlGameApiGameBygameShortCodePlatformByplatformCode2ResponseResponse',
            fields: {
              GamePlatformFranchiseTitleId: { type: graphql.GraphQLFloat },
              Platform: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlGameApiGameBygameShortCodePlatformByplatformCode2ResponsePlatformResponse',
                  fields: {
                    GamePlatformId: { type: graphql.GraphQLFloat },
                    GamePlatformCode: { type: graphql.GraphQLString },
                    GamePlatform: { type: graphql.GraphQLString },
                    ImageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameApiGameBygameShortCodePlatformByplatformCode2ResponsePlatformImageSmallResponse',
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
                    'controlGameApiGameBygameShortCodePlatformByplatformCode2ResponseGameResponse',
                  fields: {
                    GameTitleId: { type: graphql.GraphQLFloat },
                    GameName: { type: graphql.GraphQLString },
                    GameShortCode: { type: graphql.GraphQLString },
                    GameDescription: { type: graphql.GraphQLString },
                    GameWebsite: { type: graphql.GraphQLString },
                    ImageLarge: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameApiGameBygameShortCodePlatformByplatformCode2ResponseGameImageLargeResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageSmall: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameApiGameBygameShortCodePlatformByplatformCode2ResponseGameImageSmallResponse',
                        fields: {
                          UrlPath: { type: graphql.GraphQLString },
                          RelativePath: { type: graphql.GraphQLString }
                        }
                      })
                    },
                    ImageBackground: {
                      type: new graphql.GraphQLObjectType({
                        name:
                          'controlGameApiGameBygameShortCodePlatformByplatformCode2ResponseGameImageBackgroundResponse',
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
                          'controlGameApiGameBygameShortCodePlatformByplatformCode2ResponseGameFranchiseResponse',
                        fields: {
                          GameFranchiseId: { type: graphql.GraphQLFloat },
                          GameFranchise: { type: graphql.GraphQLString },
                          ImageLarge: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'controlGameApiGameBygameShortCodePlatformByplatformCode2ResponseGameFranchiseImageLargeResponse',
                              fields: {
                                UrlPath: { type: graphql.GraphQLString },
                                RelativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          ImageSmall: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'controlGameApiGameBygameShortCodePlatformByplatformCode2ResponseGameFranchiseImageSmallResponse',
                              fields: {
                                UrlPath: { type: graphql.GraphQLString },
                                RelativePath: { type: graphql.GraphQLString }
                              }
                            })
                          },
                          ImageBackground: {
                            type: new graphql.GraphQLObjectType({
                              name:
                                'controlGameApiGameBygameShortCodePlatformByplatformCode2ResponseGameFranchiseImageBackgroundResponse',
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
                          'controlGameApiGameBygameShortCodePlatformByplatformCode2ResponseGameDeveloperResponse',
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
                    'controlGameApiGameBygameShortCodePlatformByplatformCode2ResponseImageLargeResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageSmall: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlGameApiGameBygameShortCodePlatformByplatformCode2ResponseImageSmallResponse',
                  fields: {
                    UrlPath: { type: graphql.GraphQLString },
                    RelativePath: { type: graphql.GraphQLString }
                  }
                })
              },
              ImageBackground: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlGameApiGameBygameShortCodePlatformByplatformCode2ResponseImageBackgroundResponse',
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
  ApiGameBygameShortCodePlatformByplatformCodeMetrics: {
    fullName: 'GamingGrids.Api.Control.v2.Controllers.GameController.Snapshots',
    method: 'GET',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Game/{gameShortCode}/Platform/{platformCode}/Metrics',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlGameApiGameBygameShortCodePlatformByplatformCodeMetricsUriParams',
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
              'controlGameApiGameBygameShortCodePlatformByplatformCodeMetricsUrlParams',
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
                  type: graphql.GraphQLFloat
                },
                GamePlatformFranchiseTitleId: { type: graphql.GraphQLFloat },
                SnapshotDateTime: { type: graphql.GraphQLString },
                UnconfirmedPlayerCount: { type: graphql.GraphQLFloat },
                ConfirmedPlayerCount: { type: graphql.GraphQLFloat },
                ActiveTeamCount: { type: graphql.GraphQLFloat },
                DisbanedTeamCount: { type: graphql.GraphQLFloat },
                FivePlayersOrMoreTeamCount: { type: graphql.GraphQLFloat },
                OnlineGamingServerCount: { type: graphql.GraphQLFloat },
                OfflineGamingServerCount: { type: graphql.GraphQLFloat },
                LiveTournamentCount: { type: graphql.GraphQLFloat },
                CompletedTournamentCount: { type: graphql.GraphQLFloat },
                UpcomingTournamentCount: { type: graphql.GraphQLFloat },
                TournamentMatchCount: { type: graphql.GraphQLFloat },
                DisputedTournamentMatchCount: { type: graphql.GraphQLFloat },
                ForfeitTournamentMatchCount: { type: graphql.GraphQLFloat }
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
