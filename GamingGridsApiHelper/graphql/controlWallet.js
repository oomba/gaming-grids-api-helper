const graphql = require('graphql')

module.exports = {
  ApiWalletBalanceRealByentityName: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.GetPlayerRealBalance',
    method: 'GET',
    url: '/api/Wallet/Balance/Real/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletBalanceRealByentityNameurlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletBalanceRealByentityNameResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletBalanceVirtualByentityName: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.GetPlayerVirtualBalance',
    method: 'GET',
    url: '/api/Wallet/Balance/virtual/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletBalanceVirtualByentityNameurlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletBalanceVirtualByentityNameResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactionByentityName: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.CreateTransaction',
    method: 'POST',
    url: '/api/Wallet/Transaction/{entityName}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionByentityNamebody',
            fields: {
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
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionByentityNameurlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletTransactionByentityNameResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactionBytransId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.DeleteTransaction',
    method: 'DELETE',
    url: '/api/Wallet/Transaction/{transId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionBytransIdurlParams',
            fields: { transId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletTransactionBytransIdResponse',
      fields: {
        Response: { type: graphql.GraphQLInt },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactions: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.GetTransactionList',
    method: 'GET',
    url: '/api/Wallet/Transactions',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionsuriParams',
            fields: {
              search: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'controlWalletApiWalletTransactionsuriParamssearchResponse',
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
      name: 'controlWalletApiWalletTransactionsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlWalletApiWalletTransactionsResponseResponse',
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
  ApiWalletTransactionsReportingDetails: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.GetTransactionDetailReporting',
    method: 'GET',
    url: '/api/Wallet/Transactions/reporting/details',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionsReportingDetailsuriParams',
            fields: {
              search: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'controlWalletApiWalletTransactionsReportingDetailsuriParamssearchResponse',
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
      name: 'controlWalletApiWalletTransactionsReportingDetailsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlWalletApiWalletTransactionsReportingDetailsResponseResponse',
              fields: {
                TransactionId: { type: graphql.GraphQLInt },
                TransactionDateTime: { type: graphql.GraphQLString },
                FirstName: { type: graphql.GraphQLString },
                LastName: { type: graphql.GraphQLString },
                EmailAddress: { type: graphql.GraphQLString },
                TransactionType: { type: graphql.GraphQLString },
                TransactionProvider: { type: graphql.GraphQLString },
                TransactionAmount: { type: graphql.GraphQLInt },
                TransactionFee: { type: graphql.GraphQLInt },
                TransactionTotal: { type: graphql.GraphQLInt },
                TransactionDescription: { type: graphql.GraphQLString },
                AddressCountryCode: { type: graphql.GraphQLString }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactionsReportingFees: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.GetTransactionFeesReporting',
    method: 'GET',
    url: '/api/Wallet/Transactions/reporting/fees',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionsReportingFeesuriParams',
            fields: {
              search: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'controlWalletApiWalletTransactionsReportingFeesuriParamssearchResponse',
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
      name: 'controlWalletApiWalletTransactionsReportingFeesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlWalletApiWalletTransactionsReportingFeesResponseResponse',
              fields: {
                AddressCountryCode: { type: graphql.GraphQLString },
                NumberOfTransactions: { type: graphql.GraphQLInt },
                TotalFees: { type: graphql.GraphQLInt }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactionTypes: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.GetTransactionTypeList',
    method: 'GET',
    url: '/api/Wallet/TransactionTypes',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletTransactionTypesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlWalletApiWalletTransactionTypesResponseResponse',
              fields: {
                WalletTransactionTypeId: { type: graphql.GraphQLInt },
                IsActive: { type: graphql.GraphQLBoolean },
                WalletTransactionType: { type: graphql.GraphQLString },
                WalletTransactionTypeMultiplier: { type: graphql.GraphQLInt }
              }
            })
          )
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactionType: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.CreateTransactionType',
    method: 'POST',
    url: '/api/Wallet/TransactionType',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionTypebody',
            fields: {
              WalletTransactionType: { type: graphql.GraphQLString },
              WalletTransactionTypeMultiplier: { type: graphql.GraphQLInt }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletTransactionTypeResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlWalletApiWalletTransactionTypeResponseResponse',
            fields: {
              WalletTransactionTypeId: { type: graphql.GraphQLInt },
              IsActive: { type: graphql.GraphQLBoolean },
              WalletTransactionType: { type: graphql.GraphQLString },
              WalletTransactionTypeMultiplier: { type: graphql.GraphQLInt }
            }
          })
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactionTypeBytypeId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.DeleteTransactionType',
    method: 'DELETE',
    url: '/api/Wallet/TransactionType/{typeId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionTypeBytypeIdurlParams',
            fields: { typeId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletTransactionTypeBytypeIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactionProviders: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.GetTransactionProviderList',
    method: 'GET',
    url: '/api/Wallet/TransactionProviders',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletTransactionProvidersResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name:
                'controlWalletApiWalletTransactionProvidersResponseResponse',
              fields: {
                WalletTransactionProviderId: { type: graphql.GraphQLInt },
                IsActive: { type: graphql.GraphQLBoolean },
                WalletTransactionProviderGroupId: { type: graphql.GraphQLInt },
                WalletTransactionProvider: { type: graphql.GraphQLString },
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
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactionProvider: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.CreateTransactionProvider',
    method: 'POST',
    url: '/api/Wallet/TransactionProvider',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionProviderbody',
            fields: {
              WalletTransactionProviderGroupId: { type: graphql.GraphQLInt },
              WalletTransactionProvider: { type: graphql.GraphQLString },
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
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletTransactionProviderResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlWalletApiWalletTransactionProviderResponseResponse',
            fields: {
              WalletTransactionProviderId: { type: graphql.GraphQLInt },
              IsActive: { type: graphql.GraphQLBoolean },
              WalletTransactionProviderGroupId: { type: graphql.GraphQLInt },
              WalletTransactionProvider: { type: graphql.GraphQLString },
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
        },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactionProviderByproviderId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.DeleteTransactionProvider',
    method: 'DELETE',
    url: '/api/Wallet/TransactionProvider/{providerId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlWalletApiWalletTransactionProviderByproviderIdurlParams',
            fields: { providerId: { type: graphql.GraphQLInt } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletTransactionProviderByproviderIdResponse',
      fields: {
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  }
}
