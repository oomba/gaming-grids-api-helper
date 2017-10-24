const graphql = require('graphql')

module.exports = {
  ApiWalletTransactionProviders: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.WalletController.GetTransactionProvider',
    method: 'GET',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Wallet/Transaction/Providers',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletApiWalletTransactionProvidersResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientWalletApiWalletTransactionProvidersResponseResponse',
              fields: {
                WalletTransactionProviderGroupId: {
                  type: graphql.GraphQLFloat
                },
                WalletTransactionProviderGroup: { type: graphql.GraphQLString },
                DisplayInListing: { type: graphql.GraphQLBoolean },
                OrderBy: { type: graphql.GraphQLFloat },
                Providers: {
                  type: new graphql.GraphQLList(
                    new graphql.GraphQLObjectType({
                      name:
                        'clientWalletApiWalletTransactionProvidersResponseProvidersResponse',
                      fields: {
                        CountryTransactionRate: { type: graphql.GraphQLFloat },
                        WalletTransactionProviderId: {
                          type: graphql.GraphQLFloat
                        },
                        IsActive: { type: graphql.GraphQLBoolean },
                        WalletTransactionProviderGroupId: {
                          type: graphql.GraphQLFloat
                        },
                        WalletTransactionProvider: {
                          type: graphql.GraphQLString
                        },
                        WalletTransactionProviderPaymentCode: {
                          type: graphql.GraphQLString
                        },
                        TransactionRate: { type: graphql.GraphQLFloat },
                        TransactionFee: { type: graphql.GraphQLFloat },
                        BrandImageUrl: { type: graphql.GraphQLString },
                        IsInternal: { type: graphql.GraphQLBoolean },
                        DisplayInListing: { type: graphql.GraphQLBoolean },
                        OrderBy: { type: graphql.GraphQLFloat }
                      }
                    })
                  )
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
  ApiWalletTransactionSkrillBegin: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.WalletController.GetTransactionSkrillBegin',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Wallet/Transaction/skrill/begin',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientWalletApiWalletTransactionSkrillBeginBody',
            fields: {
              Amount: { type: graphql.GraphQLFloat },
              Total: { type: graphql.GraphQLFloat },
              ProviderCode: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletApiWalletTransactionSkrillBeginResponse',
      fields: {
        Response: { type: graphql.GraphQLString },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletPaypalPayment: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.WalletController.PaypalStatus',
    method: 'POST',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Wallet/paypal/payment',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientWalletApiWalletPaypalPaymentBody',
            fields: {
              PayPalId: { type: graphql.GraphQLString },
              EmailAddress: { type: graphql.GraphQLString },
              FirstName: { type: graphql.GraphQLString },
              LastName: { type: graphql.GraphQLString },
              PayerId: { type: graphql.GraphQLString },
              Amount: { type: graphql.GraphQLFloat },
              Fee: { type: graphql.GraphQLFloat },
              Currency: { type: graphql.GraphQLString },
              CreateTime: { type: graphql.GraphQLString },
              State: { type: graphql.GraphQLString },
              PaymentMethod: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletApiWalletPaypalPaymentResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactionEkashuHashcode: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.WalletController.GetTransactionEaclBegin',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Wallet/transaction/ekashu/hashcode',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientWalletApiWalletTransactionEkashuHashcodeBody',
            fields: {
              HashKey: { type: graphql.GraphQLString },
              TerminalId: { type: graphql.GraphQLString },
              ReferenceId: { type: graphql.GraphQLString },
              Amount: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletApiWalletTransactionEkashuHashcodeResponse',
      fields: {
        Response: { type: graphql.GraphQLString },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactionEaclBegin: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.WalletController.GetTransactionEaclBegin',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Wallet/Transaction/eacl/begin',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientWalletApiWalletTransactionEaclBeginBody',
            fields: {
              Amount: { type: graphql.GraphQLFloat },
              ServiceFeeAmount: { type: graphql.GraphQLFloat },
              ExternalId: { type: graphql.GraphQLString },
              TransactionTypeId: { type: graphql.GraphQLFloat },
              IsGiftCertificate: { type: graphql.GraphQLBoolean },
              CompletionCallbackUrl: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletApiWalletTransactionEaclBeginResponse',
      fields: {
        Response: { type: graphql.GraphQLString },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactionEaclGiftcertificateBycode: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.WalletController.HonorGiftCertificate',
    method: 'POST',
    url:
      'http://t2w.client.v2.dev6.gaminggrids.com/api/Wallet/transaction/eacl/giftcertificate/{code}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientWalletApiWalletTransactionEaclGiftcertificateBycodeUrlParams',
            fields: { code: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletApiWalletTransactionEaclGiftcertificateBycodeResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactions: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.WalletController.GetTransactionList',
    method: 'GET',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Wallet/Transactions',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientWalletApiWalletTransactionsUriParams',
            fields: {
              search: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'clientWalletApiWalletTransactionsUriParamssearchResponse',
                  fields: {
                    EntityName: { type: graphql.GraphQLString },
                    FromDate: { type: graphql.GraphQLString },
                    ToDate: { type: graphql.GraphQLString },
                    IsRealCurrency: { type: graphql.GraphQLBoolean }
                  }
                })
              }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletApiWalletTransactionsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientWalletApiWalletTransactionsResponseResponse',
              fields: {
                EntityPlayerWalletTransactionId: { type: graphql.GraphQLFloat },
                EntityPlayerId: { type: graphql.GraphQLFloat },
                TournamentId: { type: graphql.GraphQLFloat },
                DisplayName: { type: graphql.GraphQLString },
                EntityName: { type: graphql.GraphQLString },
                AccountBalance: { type: graphql.GraphQLFloat },
                CurrentAccountBalance: { type: graphql.GraphQLFloat },
                WalletTransactionType: { type: graphql.GraphQLString },
                WalletTransactionTypeMultiplier: { type: graphql.GraphQLFloat },
                WalletTransactionProvider: { type: graphql.GraphQLString },
                EntityPlayerTransactionTotal: { type: graphql.GraphQLFloat },
                IsGiftCertificate: { type: graphql.GraphQLBoolean },
                ExternalId: { type: graphql.GraphQLString },
                CompletionCallback: { type: graphql.GraphQLString },
                IsTransacted: { type: graphql.GraphQLBoolean },
                EntityPlayerTransactionDateTime: {
                  type: graphql.GraphQLString
                },
                IsRealCurrency: { type: graphql.GraphQLBoolean },
                WalletTransactionTypeId: { type: graphql.GraphQLFloat },
                WalletTransactionProviderId: { type: graphql.GraphQLFloat },
                EntityPlayerTransactionAmount: { type: graphql.GraphQLFloat },
                EntityPlayerTransactionFee: { type: graphql.GraphQLFloat },
                TransactionDescription: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletWithdraw: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.WalletController.WithdrawMoney',
    method: 'POST',
    url: 'http://t2w.client.v2.dev6.gaminggrids.com/api/Wallet/Withdraw',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientWalletApiWalletWithdrawBody',
            fields: {
              Amount: { type: graphql.GraphQLFloat },
              ServiceFeeAmount: { type: graphql.GraphQLFloat },
              ExternalId: { type: graphql.GraphQLString },
              TransactionTypeId: { type: graphql.GraphQLFloat },
              IsGiftCertificate: { type: graphql.GraphQLBoolean },
              CompletionCallbackUrl: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletApiWalletWithdrawResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
