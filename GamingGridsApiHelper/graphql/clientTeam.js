const graphql = require('graphql')

module.exports = {
  ApiTeamByentityName: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TeamController.DisbandTeam',
    method: 'DELETE',
    url: '/api/Team/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTeamApiTeamByentityNameurlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamByentityNameResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeam: {
    fullName: 'GamingGrids.Api.Client.v2.Controllers.TeamController.CreateTeam',
    method: 'POST',
    url: '/api/Team',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTeamApiTeambody',
            fields: {
              EntityName: { type: graphql.GraphQLString },
              DisplayName: { type: graphql.GraphQLString },
              JoinPassword: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamResponse',
      fields: {
        Response: { type: graphql.GraphQLString },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeamByteamEntityNameRosterRequested: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TeamController.RequestJoinTeam',
    method: 'POST',
    url: '/api/Team/{teamEntityName}/Roster/requested',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTeamApiTeamByteamEntityNameRosterRequestedurlParams',
            fields: { teamEntityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamByteamEntityNameRosterRequestedResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeamByteamEntityNameRoster: {
    fullName: 'GamingGrids.Api.Client.v2.Controllers.TeamController.LeaveTeam',
    method: 'DELETE',
    url: '/api/Team/{teamEntityName}/Roster',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTeamApiTeamByteamEntityNameRosterurlParams',
            fields: { teamEntityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamByteamEntityNameRosterResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeamByteamEntityNameRosterByplayerEntityNameValidation: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TeamController.ValidateLeaveTeam',
    method: 'GET',
    url: '/api/Team/{teamEntityName}/Roster/{playerEntityName}/Validation',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTeamApiTeamByteamEntityNameRosterByplayerEntityNameValidationurlParams',
            fields: {
              teamEntityName: { type: graphql.GraphQLString },
              playerEntityName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientTeamApiTeamByteamEntityNameRosterByplayerEntityNameValidationResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientTeamApiTeamByteamEntityNameRosterByplayerEntityNameValidationResponseResponse',
            fields: {
              WillDropTeam: { type: graphql.GraphQLBoolean },
              Tournaments: { type: graphql.GraphQLString }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeamOnline: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TeamController.GetOnlineTeams',
    method: 'GET',
    url: '/api/Team/online',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamOnlineResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientTeamApiTeamOnlineResponseResponse',
              fields: {
                OwnerId: { type: graphql.GraphQLInt },
                JoinPassword: { type: graphql.GraphQLString },
                FoundedDate: { type: graphql.GraphQLString },
                TeamDescriptionLong: { type: graphql.GraphQLString },
                TeamColor: { type: graphql.GraphQLString },
                LastOpponentEmailDateTime: { type: graphql.GraphQLString },
                LastAdminEmailDateTime: { type: graphql.GraphQLString },
                IsFriendsTeam: { type: graphql.GraphQLBoolean },
                CanEditProfile: { type: graphql.GraphQLBoolean },
                EntityTeamId: { type: graphql.GraphQLInt },
                TeamDescription: { type: graphql.GraphQLString },
                NumberOfPlayers: { type: graphql.GraphQLInt },
                EntityId: { type: graphql.GraphQLInt },
                AddressCountryId: { type: graphql.GraphQLInt },
                GamingServerRegionId: { type: graphql.GraphQLInt },
                IsActive: { type: graphql.GraphQLBoolean },
                CreatedDateTime: { type: graphql.GraphQLString },
                MatchPlayStatisticsId: { type: graphql.GraphQLInt },
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
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeamByteamEntityNameRosterByplayerEntityName: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TeamController.PostSetRoleAndTitle',
    method: 'PUT',
    url: '/api/Team/{teamEntityName}/Roster/{playerEntityName}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTeamApiTeamByteamEntityNameRosterByplayerEntityNamebody',
            fields: {
              RoleId: { type: graphql.GraphQLInt },
              PlayerTitle: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientTeamApiTeamByteamEntityNameRosterByplayerEntityNameurlParams',
            fields: {
              teamEntityName: { type: graphql.GraphQLString },
              playerEntityName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamByteamEntityNameRosterByplayerEntityNameResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiTeamByteamEntityNameRosterInvite: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.TeamController.RosterInvite',
    method: 'POST',
    url: '/api/Team/{teamEntityName}/Roster/Invite',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTeamApiTeamByteamEntityNameRosterInvitebody',
            fields: { EntityName: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientTeamApiTeamByteamEntityNameRosterInviteurlParams',
            fields: { teamEntityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientTeamApiTeamByteamEntityNameRosterInviteResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
