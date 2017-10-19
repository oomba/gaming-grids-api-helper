const graphql = require('graphql')

module.exports = {
  ApiTournamentMatchBytournamentMatchId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.DeleteMatch',
    method: 'DELETE',
    url: '/api/Tournament/Match/{tournamentMatchId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
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
    url: '/api/Tournament/Match/{tournamentMatchId}/Player/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerByentityNameurlParams',
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
        'controlTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerByentityNameResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTournamentMatchBytournamentMatchIdMessage: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.SendMessage',
    method: 'POST',
    url: '/api/Tournament/Match/{tournamentMatchId}/Message',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdMessagebody',
            fields: { Message: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdMessageurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
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
    url: '/api/Tournament/Match/{tournamentMatchId}/Schedule/Delay/{minutes}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdScheduleDelayByminutesurlParams',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLInt },
              minutes: { type: graphql.GraphQLInt }
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
    url: '/api/Tournament/Match/{tournamentMatchId}/Mode',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdModebody',
            fields: { ManualMode: { type: graphql.GraphQLBoolean } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdModeurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
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
    url: '/api/Tournament/Match/{tournamentMatchId}/Administrator',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdAdministratorbody',
            fields: { EntityName: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdAdministratorurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
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
    url: '/api/Tournament/Match/{tournamentMatchId}/Assistance/{assistanceId}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdAssistanceByassistanceIdbody',
            fields: { Comments: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdAssistanceByassistanceIdurlParams',
            fields: {
              tournamentMatchId: { type: graphql.GraphQLInt },
              assistanceId: { type: graphql.GraphQLInt }
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
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.CheckInPlayer',
    method: 'POST',
    url: '/api/Tournament/Match/{tournamentMatchId}/Player',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerbody',
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
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdPlayerurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
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
    url: '/api/Tournament/Match/{tournamentMatchId}/Schedule',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdSchedulebody',
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
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdScheduleurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
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
    url: '/api/Tournament/Match/{tournamentMatchId}/Streaming/Video',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdStreamingVideobody',
            fields: {
              StreamingServiceId: { type: graphql.GraphQLInt },
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
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdStreamingVideourlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
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
    url: '/api/Tournament/Match/{tournamentMatchId}/Mode/Manual/Server',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdModeManualServerbody',
            fields: { ManualConnectionInfo: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdModeManualServerurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
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
  ApiTournamentMatchBytournamentMatchIdStatusEnforceLive: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.TournamentMatchController.ReadyPlayers',
    method: 'PUT',
    url: '/api/Tournament/Match/{tournamentMatchId}/Status/EnforceLive',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdStatusEnforceLiveurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
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
    url: '/api/Tournament/Match/{tournamentMatchId}/Dispute',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdDisputeurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
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
    url: '/api/Tournament/Match/{tournamentMatchId}/Server/Issue',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdServerIssuebody',
            fields: {
              RegionId: { type: graphql.GraphQLInt },
              ServerId: { type: graphql.GraphQLInt },
              EnforceSnapshotRound: { type: graphql.GraphQLInt },
              AdministratorComment: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdServerIssueurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
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
    url: '/api/Tournament/Match/{tournamentMatchId}/Scoring/Enforce',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdScoringEnforcebody',
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
              'controlTournamentMatchApiTournamentMatchBytournamentMatchIdScoringEnforceurlParams',
            fields: { tournamentMatchId: { type: graphql.GraphQLInt } }
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
