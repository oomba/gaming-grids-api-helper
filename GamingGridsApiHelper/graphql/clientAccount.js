const graphql = require('graphql')

module.exports = {
  ApiAccountEmail: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.AccountController.EmailValidation',
    method: 'POST',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Account/Email',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientAccountApiAccountEmailBody',
            fields: {
              MembershipTypeId: { type: graphql.GraphQLFloat },
              FirstName: { type: graphql.GraphQLString },
              LastName: { type: graphql.GraphQLString },
              CustomData: { type: graphql.GraphQLString },
              EmailAddress: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientAccountApiAccountEmailResponse',
      fields: {
        Response: { type: graphql.GraphQLString },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiAccountEmailRegisterBytoken: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.AccountController.EmailRegister',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Account/Email/Register/{token}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientAccountApiAccountEmailRegisterBytokenBody',
            fields: {
              BirthDate: { type: graphql.GraphQLString },
              EntityGenderId: { type: graphql.GraphQLFloat },
              AuthenticateSkrill: { type: graphql.GraphQLBoolean },
              DisplayName: { type: graphql.GraphQLString },
              FirstName: { type: graphql.GraphQLString },
              LastName: { type: graphql.GraphQLString },
              Pwd: { type: graphql.GraphQLString },
              Address: { type: graphql.GraphQLString },
              City: { type: graphql.GraphQLString },
              AddressStateProvenceId: { type: graphql.GraphQLFloat },
              OtherAddressStateProvence: { type: graphql.GraphQLString },
              PostalCode: { type: graphql.GraphQLString },
              AddressCountryId: { type: graphql.GraphQLFloat }
            }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientAccountApiAccountEmailRegisterBytokenUrlParams',
            fields: { token: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientAccountApiAccountEmailRegisterBytokenResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientAccountApiAccountEmailRegisterBytokenResponseResponse',
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
                    'clientAccountApiAccountEmailRegisterBytokenResponseMuutResponse',
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
  ApiAccountEmailConfirmationBytoken: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.AccountController.EmailConfirmation',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Account/Email/Confirmation/{token}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientAccountApiAccountEmailConfirmationBytokenUrlParams',
            fields: { token: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientAccountApiAccountEmailConfirmationBytokenResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name:
              'clientAccountApiAccountEmailConfirmationBytokenResponseResponse',
            fields: {
              Token: { type: graphql.GraphQLString },
              MembershipId: { type: graphql.GraphQLString },
              EmailAddress: { type: graphql.GraphQLString },
              MembershipTypeId: { type: graphql.GraphQLFloat },
              IpAddress: { type: graphql.GraphQLString },
              FirstName: { type: graphql.GraphQLString },
              LastName: { type: graphql.GraphQLString },
              AddressCountryId: { type: graphql.GraphQLFloat },
              AddressCountry: { type: graphql.GraphQLString },
              AddressStateId: { type: graphql.GraphQLFloat },
              AddressState: { type: graphql.GraphQLString },
              RegionId: { type: graphql.GraphQLFloat },
              TempPassword: { type: graphql.GraphQLString },
              CustomData: { type: graphql.GraphQLString },
              CreatedDateTime: { type: graphql.GraphQLString }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiAccountConfirmationBytoken: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.AccountController.AccountConfirmation',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Account/Confirmation/{token}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientAccountApiAccountConfirmationBytokenBody',
            fields: { EmailAddress: { type: graphql.GraphQLString } }
          })
        )
      },
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientAccountApiAccountConfirmationBytokenUrlParams',
            fields: { token: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientAccountApiAccountConfirmationBytokenResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiAccount: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.AccountController.CreateUser',
    method: 'POST',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Account',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientAccountApiAccountBody',
            fields: {
              Token: { type: graphql.GraphQLString },
              MembershipTypeId: { type: graphql.GraphQLFloat },
              DisplayName: { type: graphql.GraphQLString },
              EmailAddress: { type: graphql.GraphQLString },
              Pwd: { type: graphql.GraphQLString },
              FirstName: { type: graphql.GraphQLString },
              LastName: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientAccountApiAccountResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'clientAccountApiAccountResponseResponse',
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
                  name: 'clientAccountApiAccountResponseMuutResponse',
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
