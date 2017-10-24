const graphql = require('graphql')

module.exports = {
  ApiTournamentMatchBytournamentMatchIdPlayerByentityName: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.RemovePlayer',
    method: 'DELETE',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Player/{entityName}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerByentityNameBody',
            fields: { HasPenalty: { type: graphql.GraphQLBoolean } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerByentityNameUrlParams',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLFloat },
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
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.ReportFeedback',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Feedback',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdFeedbackBody',
            fields: {
              FeedbackRating: { type: graphql.GraphQLFloat },
              Comments: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdFeedbackUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdFeedbackResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdFeedback2: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.GetMatchFeedbackProfile',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Feedback',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdFeedback2UrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdFeedback2Response',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdFeedback2ResponseResponse',
            fields: {
              Summary: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'clientTournamentMatchApiTournamentMatchBytournamentMatchIdFeedback2ResponseSummaryResponse',
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
                      'clientTournamentMatchApiTournamentMatchBytournamentMatchIdFeedback2ResponseFeedbackResponse',
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
                            'clientTournamentMatchApiTournamentMatchBytournamentMatchIdFeedback2ResponseFeedbackEntityProfileResponse',
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
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Player/My/Status',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerMyStatusBody',
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
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerMyStatusUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
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
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Participant/{entityId}/TeamSide/{teamSideId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdTeamSideByteamSideIdUrlParams',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLFloat },
              entityId: { type: graphql.GraphQLFloat },
              teamSideId: { type: graphql.GraphQLFloat }
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
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Participant/{entityId}/hearthstone/decks',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDecksBody',
            fields: {
              HearthstoneDecks: {
                type: new graphql.GraphQLList(
                  new graphql.GraphQLInputObjectType({
                    name:
                      'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDecksBodyHearthstoneDecksResponse',
                    fields: {
                      PlayerNumber: { type: graphql.GraphQLFloat },
                      HearthstoneDeckId: { type: graphql.GraphQLFloat }
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
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDecksUrlParams',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLFloat },
              entityId: { type: graphql.GraphQLFloat }
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
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Participant/{entityId}/hearthstone/deck/starting/{deckId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDeckStartingBydeckIdUrlParams',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLFloat },
              entityId: { type: graphql.GraphQLFloat },
              deckId: { type: graphql.GraphQLFloat }
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
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Participant/{entityId}/hearthstone/deck/exclude',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDeckExcludeBody',
            fields: { HearthstoneDeckIds: { type: graphql.GraphQLFloat } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdParticipantByentityIdHearthstoneDeckExcludeUrlParams',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLFloat },
              entityId: { type: graphql.GraphQLFloat }
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
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Team/My/Status',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdTeamMyStatusBody',
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
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdTeamMyStatusUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
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
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Scoring/Manual/Approve',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdScoringManualApproveBody',
            fields: { TournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdScoringManualApproveUrlParams',
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
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Scoring/Manual',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdScoringManualBody',
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
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdScoringManualUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
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
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Server/Request',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdServerRequestUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
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
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Assistance',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdAssistanceUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
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
              AssistanceRequestedById: { type: graphql.GraphQLFloat },
              TournamentMatchAssistanceId: { type: graphql.GraphQLFloat }
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
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Player',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdDispute: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TournamentMatchController.Dispute',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Dispute',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdDisputeBody',
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
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdDisputeUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
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
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Scoring/Confirm',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdScoringConfirmUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
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
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Forfeit',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdForfeitBody',
            fields: { ApplyToEntireRound: { type: graphql.GraphQLBoolean } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdForfeitUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
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
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/League/Schedule',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdLeagueScheduleBody',
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
              'clientTournamentMatchApiTournamentMatchBytournamentMatchIdLeagueScheduleUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
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
