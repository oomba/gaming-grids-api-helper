const graphql = require('graphql')

module.exports = {
  ApiPlayerByentityNameProfile: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PlayerController.UpdatePlayerProfile',
    method: 'PUT',
    url: '/api/Player/{entityName}/profile',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameProfilebody',
            fields: {
              EmailAddress: { type: graphql.GraphQLString },
              DisplayName: { type: graphql.GraphQLString },
              FirstName: { type: graphql.GraphQLString },
              LastName: { type: graphql.GraphQLString },
              Address: { type: graphql.GraphQLString },
              City: { type: graphql.GraphQLString },
              PostalCode: { type: graphql.GraphQLString },
              AddressStateProvenceId: { type: graphql.GraphQLInt },
              Birthdate: { type: graphql.GraphQLString }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameProfileurlParams',
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
              EntityId: { type: graphql.GraphQLInt },
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
              PlayerSubscriptionTypeId: { type: graphql.GraphQLInt },
              Muut: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'controlPlayerApiPlayerByentityNameProfileResponseMuutResponse',
                  fields: {
                    Timestamp: { type: graphql.GraphQLInt },
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
    url: '/api/Player/{entityName}/Tournament/Allowed',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlPlayerApiPlayerByentityNameTournamentAllowedurlParams',
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
    url: '/api/Player/{entityName}/ChangePassword',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameChangePasswordbody',
            fields: { NewPwd: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameChangePasswordurlParams',
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
    url: '/api/Player/{entityName}/Steam',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameSteambody',
            fields: {
              SteamId32: { type: graphql.GraphQLInt },
              SteamId64: { type: graphql.GraphQLInt }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameSteamurlParams',
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
    url: '/api/Player/{entityName}/TournamentPolicy',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameTournamentPolicybody',
            fields: {
              TournamentManagementPolicyId: { type: graphql.GraphQLInt }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPlayerApiPlayerByentityNameTournamentPolicyurlParams',
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
