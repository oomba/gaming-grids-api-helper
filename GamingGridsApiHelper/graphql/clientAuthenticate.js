const graphql = require('graphql')

module.exports = {
  ApiAuthenticateGOWSSO: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.AuthenticateController.BySingleSignInGow',
    method: 'POST',
    url: '/api/Authenticate/GOW/SSO',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientAuthenticateApiAuthenticateGOWSSOBody',
            fields: { Token: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientAuthenticateApiAuthenticateGOWSSOResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientAuthenticateApiAuthenticateGOWSSOResponseResponse',
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
                    'clientAuthenticateApiAuthenticateGOWSSOResponseMuutResponse',
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
  ApiAuthenticateGOWToken: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.AuthenticateController.GetUserToken',
    method: 'POST',
    url: '/api/Authenticate/GOW/Token',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientAuthenticateApiAuthenticateGOWTokenBody',
            fields: { Token: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientAuthenticateApiAuthenticateGOWTokenResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientAuthenticateApiAuthenticateGOWTokenResponseResponse',
            fields: {
              Iss: { type: graphql.GraphQLString },
              Aud: { type: graphql.GraphQLString },
              UserId: { type: graphql.GraphQLString },
              UsereMail: { type: graphql.GraphQLString },
              UserFirstName: { type: graphql.GraphQLString },
              UserLastName: { type: graphql.GraphQLString },
              UserStore: { type: graphql.GraphQLString },
              UserGamerTag: { type: graphql.GraphQLString },
              UserCountry: { type: graphql.GraphQLString },
              UserLanguage: { type: graphql.GraphQLString }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiAuthenticatePLayer: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.AuthenticateController.PlayerLogin',
    method: 'POST',
    url: '/api/Authenticate/PLayer',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientAuthenticateApiAuthenticatePLayerResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientAuthenticateApiAuthenticatePLayerResponseResponse',
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
                    'clientAuthenticateApiAuthenticatePLayerResponseMuutResponse',
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
  ApiAuthenticateOrganization: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.AuthenticateController.OrganizationLogin',
    method: 'POST',
    url: '/api/Authenticate/Organization',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientAuthenticateApiAuthenticateOrganizationResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientAuthenticateApiAuthenticateOrganizationResponseResponse',
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
                    'clientAuthenticateApiAuthenticateOrganizationResponseMuutResponse',
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
  ApiAuthenticateTokenValidate: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.AuthenticateController.GetValidateLoginToken',
    method: 'GET',
    url: '/api/Authenticate/Token/Validate',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientAuthenticateApiAuthenticateTokenValidateResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiAuthenticatePasswordForgot: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.AuthenticateController.RequestPasswordChange',
    method: 'POST',
    url: '/api/Authenticate/Password/Forgot',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientAuthenticateApiAuthenticatePasswordForgotBody',
            fields: { EmailAddress: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientAuthenticateApiAuthenticatePasswordForgotResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiAuthenticatePasswordChange: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.AuthenticateController.PasswordChange',
    method: 'POST',
    url: '/api/Authenticate/Password/Change',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientAuthenticateApiAuthenticatePasswordChangeBody',
            fields: {
              Token: { type: graphql.GraphQLString },
              OldPwd: { type: graphql.GraphQLString },
              Pwd: { type: graphql.GraphQLString },
              ConfirmPwd: { type: graphql.GraphQLString },
              EmailAddress: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientAuthenticateApiAuthenticatePasswordChangeResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiAuthenticateAdminImpersonateByentityName: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.AuthenticateController.AdminAuthenticateAsEntity',
    method: 'GET',
    url: '/api/Authenticate/Admin/Impersonate/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientAuthenticateApiAuthenticateAdminImpersonateByentityNameUrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name:
        'clientAuthenticateApiAuthenticateAdminImpersonateByentityNameResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientAuthenticateApiAuthenticateAdminImpersonateByentityNameResponseResponse',
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
                    'clientAuthenticateApiAuthenticateAdminImpersonateByentityNameResponseMuutResponse',
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
  }
}
