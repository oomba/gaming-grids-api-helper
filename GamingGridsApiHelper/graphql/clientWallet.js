const graphql = require('graphql')

module.exports = {
  ApiWalletTransactionProviders: {
    fullName:
      'GamingGrids.Api.Client.v2.Controllers.WalletController.GetTransactionProvider',
    method: 'GET',
    url: '/api/Wallet/Transaction/Providers',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'clientWalletApiWalletTransactionProvidersResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'clientWalletApiWalletTransactionProvidersResponseResponse',
              fields: {
                WalletTransactionProviderGroupId: { type: graphql.GraphQLInt },
                WalletTransactionProviderGroup: { type: graphql.GraphQLString },
                DisplayInListing: { type: graphql.GraphQLBoolean },
                OrderBy: { type: graphql.GraphQLInt },
                Providers: {
                  type: new graphql.GraphQLList(
                    new graphql.GraphQLObjectType({
                      name:
                        'clientWalletApiWalletTransactionProvidersResponseProvidersResponse',
                      fields: {
                        CountryTransactionRate: { type: graphql.GraphQLInt },
                        WalletTransactionProviderId: {
                          type: graphql.GraphQLInt
                        },
                        IsActive: { type: graphql.GraphQLBoolean },
                        WalletTransactionProviderGroupId: {
                          type: graphql.GraphQLInt
                        },
                        WalletTransactionProvider: {
                          type: graphql.GraphQLString
                        },
                        WalletTransactionProviderPaymentCode: {
                          type: graphql.GraphQLString
                        },
                        TransactionRate: { type: graphql.GraphQLInt },
                        TransactionFee: { type: graphql.GraphQLInt },
                        BrandImageUrl: { type: graphql.GraphQLString },
                        IsInternal: { type: graphql.GraphQLBoolean },
                        DisplayInListing: { type: graphql.GraphQLBoolean },
                        OrderBy: { type: graphql.GraphQLInt }
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
    url: '/api/Wallet/Transaction/skrill/begin',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientWalletApiWalletTransactionSkrillBeginbody',
            fields: {
              Amount: { type: graphql.GraphQLInt },
              Total: { type: graphql.GraphQLInt },
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
    url: '/api/Wallet/paypal/payment',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientWalletApiWalletPaypalPaymentbody',
            fields: {
              PayPalId: { type: graphql.GraphQLString },
              EmailAddress: { type: graphql.GraphQLString },
              FirstName: { type: graphql.GraphQLString },
              LastName: { type: graphql.GraphQLString },
              PayerId: { type: graphql.GraphQLString },
              Amount: { type: graphql.GraphQLInt },
              Fee: { type: graphql.GraphQLInt },
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
    url: '/api/Wallet/transaction/ekashu/hashcode',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientWalletApiWalletTransactionEkashuHashcodebody',
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
    url: '/api/Wallet/Transaction/eacl/begin',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientWalletApiWalletTransactionEaclBeginbody',
            fields: {
              Amount: { type: graphql.GraphQLInt },
              ServiceFeeAmount: { type: graphql.GraphQLInt },
              ExternalId: { type: graphql.GraphQLString },
              TransactionTypeId: { type: graphql.GraphQLInt },
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
    url: '/api/Wallet/transaction/eacl/giftcertificate/{code}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'clientWalletApiWalletTransactionEaclGiftcertificateBycodeurlParams',
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
    url: '/api/Wallet/Transactions',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientWalletApiWalletTransactionsuriParams',
            fields: {
              search: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'clientWalletApiWalletTransactionsuriParamssearchResponse',
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
                EntityPlayerWalletTransactionId: { type: graphql.GraphQLInt },
                EntityPlayerId: { type: graphql.GraphQLInt },
                TournamentId: { type: graphql.GraphQLInt },
                DisplayName: { type: graphql.GraphQLString },
                EntityName: { type: graphql.GraphQLString },
                AccountBalance: { type: graphql.GraphQLInt },
                CurrentAccountBalance: { type: graphql.GraphQLInt },
                WalletTransactionType: { type: graphql.GraphQLString },
                WalletTransactionTypeMultiplier: { type: graphql.GraphQLInt },
                WalletTransactionProvider: { type: graphql.GraphQLString },
                EntityPlayerTransactionTotal: { type: graphql.GraphQLInt },
                IsGiftCertificate: { type: graphql.GraphQLBoolean },
                ExternalId: { type: graphql.GraphQLString },
                CompletionCallback: { type: graphql.GraphQLString },
                IsTransacted: { type: graphql.GraphQLBoolean },
                EntityPlayerTransactionDateTime: {
                  type: graphql.GraphQLString
                },
                IsRealCurrency: { type: graphql.GraphQLBoolean },
                WalletTransactionTypeId: { type: graphql.GraphQLInt },
                WalletTransactionProviderId: { type: graphql.GraphQLInt },
                EntityPlayerTransactionAmount: { type: graphql.GraphQLInt },
                EntityPlayerTransactionFee: { type: graphql.GraphQLInt },
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
    url: '/api/Wallet/Withdraw',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'clientWalletApiWalletWithdrawbody',
            fields: {
              Amount: { type: graphql.GraphQLInt },
              ServiceFeeAmount: { type: graphql.GraphQLInt },
              ExternalId: { type: graphql.GraphQLString },
              TransactionTypeId: { type: graphql.GraphQLInt },
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
