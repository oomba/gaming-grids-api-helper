const graphql = require('graphql')

module.exports = {
  ApiTournamentMatchBytournamentMatchIdPlayerByentityName: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.RemovePlayer',
    method: 'DELETE',
    url: '/api/Tournament/Match/{tournamentMatchId}/Player/{entityName}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerByentityNamebody',
            fields: { HasPenalty: { type: graphql.GraphQLBoolean } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerByentityNameurlParams',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLInt },
              entityName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerByentityNameResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdFeedback: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.GetMatchFeedbackProfile',
    method: 'GET',
    url: '/api/Tournament/Match/{tournamentMatchId}/Feedback',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdFeedbackurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdFeedbackResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdFeedbackResponseResponse',
            fields: {
              Summary: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientTournamentMatchApiTournamentMatchBytournamentMatchIdFeedbackResponseSummaryResponse',
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
                      'clientTournamentMatchApiTournamentMatchBytournamentMatchIdFeedbackResponseFeedbackResponse',
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
                            'clientTournamentMatchApiTournamentMatchBytournamentMatchIdFeedbackResponseFeedbackEntityProfileResponse',
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
  ApiTournamentMatchBytournamentMatchIdPlayerMyStatus: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.SetPlayerIsReady',
    method: 'PUT',
    url: '/api/Tournament/Match/{tournamentMatchId}/Player/My/Status',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerMyStatusbody',
            fields: {
              IsReady: { type: graphql.GraphQLBoolean },
              ForceSet: { type: graphql.GraphQLBoolean }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerMyStatusurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerMyStatusResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdParticipantByentityIdTeamSideByteamSideId: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.SetParticipantTeamSide',
    method: 'POST',
    url:
      '/api/Tournament/Match/{tournamentMatchId}/Participant/{entityId}/TeamSide/{teamSideId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdTeamSideByteamSideIdurlParams',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLInt },
              entityId: { type: graphql.GraphQLInt },
              teamSideId: { type: graphql.GraphQLInt }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdTeamSideByteamSideIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDecks: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.SetParticipantHearthstonDecks',
    method: 'POST',
    url:
      '/api/Tournament/Match/{tournamentMatchId}/Participant/{entityId}/hearthstone/decks',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDecksbody',
            fields: {
              HearthstoneDecks: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDecksbodyHearthstoneDecksResponse',
                    fields: {
                      PlayerNumber: { type: graphql.GraphQLInt },
                      HearthstoneDeckId: { type: graphql.GraphQLInt }
                    }
                  })
                )
              }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDecksurlParams',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLInt },
              entityId: { type: graphql.GraphQLInt }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDecksResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDeckStartingBydeckId: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.SetParticipantStaringHearthstoneDeck',
    method: 'PUT',
    url:
      '/api/Tournament/Match/{tournamentMatchId}/Participant/{entityId}/hearthstone/deck/starting/{deckId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDeckStartingBydeckIdurlParams',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLInt },
              entityId: { type: graphql.GraphQLInt },
              deckId: { type: graphql.GraphQLInt }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDeckStartingBydeckIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDeckExclude: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.SetParticipantExcludeHearthstoneDeck',
    method: 'PUT',
    url:
      '/api/Tournament/Match/{tournamentMatchId}/Participant/{entityId}/hearthstone/deck/exclude',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDeckExcludebody',
            fields: { HearthstoneDeckIds: { type: graphql.GraphQLInt } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDeckExcludeurlParams',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLInt },
              entityId: { type: graphql.GraphQLInt }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDeckExcludeResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdTeamMyStatus: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.PostSetTeamIsReady',
    method: 'PUT',
    url: '/api/Tournament/Match/{tournamentMatchId}/Team/My/Status',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdTeamMyStatusbody',
            fields: {
              IsReady: { type: graphql.GraphQLBoolean },
              ForceSet: { type: graphql.GraphQLBoolean }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdTeamMyStatusurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdTeamMyStatusResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdScoringManualApprove: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.ApproveManualReportedScore',
    method: 'POST',
    url: '/api/Tournament/Match/{tournamentMatchId}/Scoring/Manual/Approve',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdScoringManualApprovebody',
            fields: { TournamentMatchId: { type: graphql.GraphQLInt } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdScoringManualApproveurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdScoringManualApproveResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdScoringManual: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.ManualReporting',
    method: 'POST',
    url: '/api/Tournament/Match/{tournamentMatchId}/Scoring/Manual',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdScoringManualbody',
            fields: {
              ScoreA: { type: graphql.GraphQLFloat },
              ScoreB: { type: graphql.GraphQLFloat },
              ApplyToEntireRound: { type: graphql.GraphQLBoolean },
              AdministratorComment: { type: graphql.GraphQLString },
              RecursiveAutoDelete: { type: graphql.GraphQLBoolean },
              ImageUrl: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdScoringManualurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdScoringManualResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdServerRequest: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.RequestNewServer',
    method: 'POST',
    url: '/api/Tournament/Match/{tournamentMatchId}/Server/Request',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdServerRequesturlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdServerRequestResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdAssistance: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.RequestAssistance',
    method: 'POST',
    url: '/api/Tournament/Match/{tournamentMatchId}/Assistance',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdAssistanceurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdAssistanceResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdAssistanceResponseResponse',
            fields: {
              AssistanceRequestedById: { type: graphql.GraphQLInt },
              TournamentMatchAssistanceId: { type: graphql.GraphQLInt }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdPlayer: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.Join',
    method: 'POST',
    url: '/api/Tournament/Match/{tournamentMatchId}/Player',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdDispute: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.Dispute',
    method: 'POST',
    url: '/api/Tournament/Match/{tournamentMatchId}/Dispute',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdDisputebody',
            fields: {
              ScoreA: { type: graphql.GraphQLFloat },
              ScoreB: { type: graphql.GraphQLFloat },
              ImageUrl: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdDisputeurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdDisputeResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdScoringConfirm: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.ConfirmScore',
    method: 'PUT',
    url: '/api/Tournament/Match/{tournamentMatchId}/Scoring/Confirm',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdScoringConfirmurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdScoringConfirmResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdForfeit: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.Forfeit',
    method: 'PUT',
    url: '/api/Tournament/Match/{tournamentMatchId}/Forfeit',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdForfeitbody',
            fields: { ApplyToEntireRound: { type: graphql.GraphQLBoolean } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdForfeiturlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdForfeitResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdLeagueSchedule: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.SetLeagueStartDateTime',
    method: 'PUT',
    url: '/api/Tournament/Match/{tournamentMatchId}/League/Schedule',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdLeagueSchedulebody',
            fields: {
              StartDateTime: { type: graphql.GraphQLString },
              AdministratorComment: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdLeagueScheduleurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdLeagueScheduleResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
