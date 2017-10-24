const graphql = require('graphql')

module.exports = {
  ApiTournamentMatchBytournamentMatchId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.DeleteMatch',
    method: 'DELETE',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdPlayerByentityName: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.Join',
    method: 'POST',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Player/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerByentityNameUrlParams',
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
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerByentityNameResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdMessage: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.SendMessage',
    method: 'POST',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Message',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdMessageBody',
            fields: { Message: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdMessageUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdMessageResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdScheduleDelayByminutes: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.DelayTenMinutes',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Schedule/Delay/{minutes}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdScheduleDelayByminutesUrlParams',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLFloat },
              minutes: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdScheduleDelayByminutesResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdMode: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.UpdateMatchManualMode',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Mode',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdModeBody',
            fields: { ManualMode: { type: graphql.GraphQLBoolean } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdModeUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdModeResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdAdministrator: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.UpdateAdministrator',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Administrator',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdAdministratorBody',
            fields: { EntityName: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdAdministratorUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdAdministratorResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdAssistanceByassistanceId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.ResolveRequest',
    method: 'DELETE',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Assistance/{assistanceId}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdAssistanceByassistanceIdBody',
            fields: { Comments: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdAssistanceByassistanceIdUrlParams',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLFloat },
              assistanceId: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdAssistanceByassistanceIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdPlayer: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.RemovePlayer',
    method: 'DELETE',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Player',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerBody',
            fields: { EntityName: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdSchedule: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.UpdateStartDateTime',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Schedule',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdScheduleBody',
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
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdScheduleUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdScheduleResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdStreamingVideo: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.UpdateBroadcastUrl',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Streaming/Video',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdStreamingVideoBody',
            fields: {
              StreamingServiceId: { type: graphql.GraphQLFloat },
              BroadcastUrl: { type: graphql.GraphQLString },
              AllowedSpectators: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdStreamingVideoUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdStreamingVideoResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdModeManualServer: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.UpdateManualConnectionInfo',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Mode/Manual/Server',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdModeManualServerBody',
            fields: { ManualConnectionInfo: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdModeManualServerUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdModeManualServerResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdPlayer2: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.CheckInPlayer',
    method: 'POST',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Player',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdPlayer2Body',
            fields: {
              EntityName: { type: graphql.GraphQLString },
              IsOnTeamA: { type: graphql.GraphQLBoolean }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdPlayer2UrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdPlayer2Response',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdStatusEnforceLive: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.ReadyPlayers',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Status/EnforceLive',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdStatusEnforceLiveUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdStatusEnforceLiveResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdDispute: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.DisputeMatch',
    method: 'POST',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Dispute',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdDisputeUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdDisputeResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdServerIssue: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.IssueNewServer',
    method: 'POST',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Server/Issue',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdServerIssueBody',
            fields: {
              RegionId: { type: graphql.GraphQLFloat },
              ServerId: { type: graphql.GraphQLFloat },
              EnforceSnapshotRound: { type: graphql.GraphQLFloat },
              AdministratorComment: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdServerIssueUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdServerIssueResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdScoringEnforce: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.EnforceManualScore',
    method: 'POST',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Tournament/Match/{tournamentMatchId}/Scoring/Enforce',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdScoringEnforceBody',
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
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdScoringEnforceUrlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdScoringEnforceResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
