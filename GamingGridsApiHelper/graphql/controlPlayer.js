const graphql = require('graphql')

module.exports = {
  ApiPlayerByentityNameProfile: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlayerController.UpdatePlayerProfile',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Player/{entityName}/profile',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameProfileBody',
            fields: {
              EmailAddress: { type: graphql.GraphQLString },
              DisplayName: { type: graphql.GraphQLString },
              FirstName: { type: graphql.GraphQLString },
              LastName: { type: graphql.GraphQLString },
              Address: { type: graphql.GraphQLString },
              City: { type: graphql.GraphQLString },
              PostalCode: { type: graphql.GraphQLString },
              AddressStateProvenceId: { type: graphql.GraphQLFloat },
              Birthdate: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameProfileUrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPlayerApiPlayerByentityNameProfileResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlPlayerApiPlayerByentityNameProfileResponseResponse',
            fields: {
              EntityId: { type: graphql.GraphQLFloat },
              UserLoginToken: { type: graphql.GraphQLString },
              EntityMembershipId: { type: graphql.GraphQLString },
              EntityMembershipToken: { type: graphql.GraphQLString },
              EmailAddress: { type: graphql.GraphQLString },
              FirstName: { type: graphql.GraphQLString },
              LastName: { type: graphql.GraphQLString },
              EntityName: { type: graphql.GraphQLString },
              DisplayName: { type: graphql.GraphQLString },
              IsAdministrator: { type: graphql.GraphQLBoolean },
              RegistrationDateTime: { type: graphql.GraphQLString },
              LastLoginDateTime: { type: graphql.GraphQLString },
              EntityImageUrl: { type: graphql.GraphQLString },
              PlayerSubscriptionTypeId: { type: graphql.GraphQLFloat },
              Muut: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlPlayerApiPlayerByentityNameProfileResponseMuutResponse',
                  fields: {
                    Timestamp: { type: graphql.GraphQLFloat },
                    Message: { type: graphql.GraphQLString },
                    Signature: { type: graphql.GraphQLString }
                  }
                })
              }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerByentityNameTournamentAllowed: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlayerController.CanPlayerCreateTournaments',
    method: 'GET',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Player/{entityName}/Tournament/Allowed',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlPlayerApiPlayerByentityNameTournamentAllowedUrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPlayerApiPlayerByentityNameTournamentAllowedResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerByentityNameChangePassword: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlayerController.AdminChangePlayerPassword',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Player/{entityName}/ChangePassword',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameChangePasswordBody',
            fields: { NewPwd: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameChangePasswordUrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPlayerApiPlayerByentityNameChangePasswordResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerByentityNameSteam: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlayerController.AddSteamIdToPlayer',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Player/{entityName}/Steam',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameSteamBody',
            fields: {
              SteamId32: { type: graphql.GraphQLFloat },
              SteamId64: { type: graphql.GraphQLFloat }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameSteamUrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPlayerApiPlayerByentityNameSteamResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiPlayerByentityNameTournamentPolicy: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlayerController.AddTournamentPolicyToPlayer',
    method: 'PUT',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Player/{entityName}/TournamentPolicy',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameTournamentPolicyBody',
            fields: {
              TournamentManagementPolicyId: { type: graphql.GraphQLFloat }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameTournamentPolicyUrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlPlayerApiPlayerByentityNameTournamentPolicyResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
