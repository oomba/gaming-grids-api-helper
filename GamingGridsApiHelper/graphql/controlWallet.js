const graphql = require('graphql')

module.exports = {
  ApiWalletBalanceRealByentityName: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.GetPlayerRealBalance',
    method: 'GET',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Wallet/Balance/Real/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletBalanceRealByentityNameUrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletBalanceRealByentityNameResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletBalanceVirtualByentityName: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.GetPlayerVirtualBalance',
    method: 'GET',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Wallet/Balance/virtual/{entityName}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletBalanceVirtualByentityNameUrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletBalanceVirtualByentityNameResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactionByentityName: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.CreateTransaction',
    method: 'POST',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Wallet/Transaction/{entityName}',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionByentityNameBody',
            fields: {
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
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionByentityNameUrlParams',
            fields: { entityName: { type: graphql.GraphQLString } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletTransactionByentityNameResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactionBytransId: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.DeleteTransaction',
    method: 'DELETE',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Wallet/Transaction/{transId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionBytransIdUrlParams',
            fields: { transId: { type: graphql.GraphQLFloat } }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletTransactionBytransIdResponse',
      fields: {
        Response: { type: graphql.GraphQLFloat },
        Success: { type: graphql.GraphQLBoolean },
        Message: { type: graphql.GraphQLString }
      }
    })
  },
  ApiWalletTransactions: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.GetTransactionList',
    method: 'GET',
    url: 'http://t2w.control.v2.dev6.gaminggrids.com/api/Wallet/Transactions',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionsUriParams',
            fields: {
              search: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'controlWalletApiWalletTransactionsUriParamssearchResponse',
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
  ApiWalletTransactionsReportingDetails: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.WalletController.GetTransactionDetailReporting',
    method: 'GET',
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Wallet/Transactions/reporting/details',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionsReportingDetailsUriParams',
            fields: {
              search: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'controlWalletApiWalletTransactionsReportingDetailsUriParamssearchResponse',
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
                TransactionId: { type: graphql.GraphQLFloat },
                TransactionDateTime: { type: graphql.GraphQLString },
                FirstName: { type: graphql.GraphQLString },
                LastName: { type: graphql.GraphQLString },
                EmailAddress: { type: graphql.GraphQLString },
                TransactionType: { type: graphql.GraphQLString },
                TransactionProvider: { type: graphql.GraphQLString },
                TransactionAmount: { type: graphql.GraphQLFloat },
                TransactionFee: { type: graphql.GraphQLFloat },
                TransactionTotal: { type: graphql.GraphQLFloat },
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Wallet/Transactions/reporting/fees',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionsReportingFeesUriParams',
            fields: {
              search: {
                type: new graphql.GraphQLInputObjectType({
                  name:
                    'controlWalletApiWalletTransactionsReportingFeesUriParamssearchResponse',
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
                NumberOfTransactions: { type: graphql.GraphQLFloat },
                TotalFees: { type: graphql.GraphQLFloat }
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Wallet/TransactionTypes',
    args: {},
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletTransactionTypesResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
              name: 'controlWalletApiWalletTransactionTypesResponseResponse',
              fields: {
                WalletTransactionTypeId: { type: graphql.GraphQLFloat },
                IsActive: { type: graphql.GraphQLBoolean },
                WalletTransactionType: { type: graphql.GraphQLString },
                WalletTransactionTypeMultiplier: { type: graphql.GraphQLFloat }
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Wallet/TransactionType',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionTypeBody',
            fields: {
              WalletTransactionType: { type: graphql.GraphQLString },
              WalletTransactionTypeMultiplier: { type: graphql.GraphQLFloat }
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
              WalletTransactionTypeId: { type: graphql.GraphQLFloat },
              IsActive: { type: graphql.GraphQLBoolean },
              WalletTransactionType: { type: graphql.GraphQLString },
              WalletTransactionTypeMultiplier: { type: graphql.GraphQLFloat }
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Wallet/TransactionType/{typeId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionTypeBytypeIdUrlParams',
            fields: { typeId: { type: graphql.GraphQLFloat } }
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Wallet/TransactionProviders',
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
                WalletTransactionProviderId: { type: graphql.GraphQLFloat },
                IsActive: { type: graphql.GraphQLBoolean },
                WalletTransactionProviderGroupId: {
                  type: graphql.GraphQLFloat
                },
                WalletTransactionProvider: { type: graphql.GraphQLString },
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Wallet/TransactionProvider',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlWalletApiWalletTransactionProviderBody',
            fields: {
              WalletTransactionProviderGroupId: { type: graphql.GraphQLFloat },
              WalletTransactionProvider: { type: graphql.GraphQLString },
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
    },
    response: new graphql.GraphQLObjectType({
      name: 'controlWalletApiWalletTransactionProviderResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'controlWalletApiWalletTransactionProviderResponseResponse',
            fields: {
              WalletTransactionProviderId: { type: graphql.GraphQLFloat },
              IsActive: { type: graphql.GraphQLBoolean },
              WalletTransactionProviderGroupId: { type: graphql.GraphQLFloat },
              WalletTransactionProvider: { type: graphql.GraphQLString },
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
    url:
      'http://t2w.control.v2.dev6.gaminggrids.com/api/Wallet/TransactionProvider/{providerId}',
    args: {
      urlParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name:
              'controlWalletApiWalletTransactionProviderByproviderIdUrlParams',
            fields: { providerId: { type: graphql.GraphQLFloat } }
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
