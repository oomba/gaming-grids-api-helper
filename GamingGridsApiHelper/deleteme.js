const foo = {
    apiLookupsCountryList: {
      method: 'GET',
      url: '/api/lookups/countrylist',
      response: new graphql.GraphQLObjectType({
        name: 'controlLookupsapiLookupsCountryListResponse',
        fields: {
          Response: {
            type: new graphql.GraphQLList(
              new graphql.GraphQLObjectType({
                name: 'controlLookupsapiLookupsCountryListresponseResponse',
                fields: {
                  addressCountryId: { type: graphql.GraphQLInt },
                  AddressCountryCode: { type: graphql.GraphQLString },
                  addressCountry3LetterCode: {
                    type: graphql.GraphQLString
                  },
                  AddressCountry: { type: graphql.GraphQLString },
                  allowsRealMoney: { type: graphql.GraphQLBoolean },
                  flagSmallImageUrl: { type: graphql.GraphQLString },
                  flagLargeImageUrl: { type: graphql.GraphQLString },
                  showInList: { type: graphql.GraphQLBoolean },
                  orderBy: { type: graphql.GraphQLInt }
                }
              })
            )
          },
          success: { type: graphql.GraphQLBoolean },
          message: { type: graphql.GraphQLString }
        }
      })
    }
  }
  