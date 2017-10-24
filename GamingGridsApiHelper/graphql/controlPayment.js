const graphql = require('graphql')

module.exports = {
  ApiPaymentSkrillStatus: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PaymentController.SkrillStatus',
    method: 'POST',
    url: '/api/Payment/Skrill/Status',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPaymentApiPaymentSkrillStatusBody',
            fields: {
              pay_to_email: { type: graphql.GraphQLString },
              pay_from_email: { type: graphql.GraphQLString },
              merchant_id: { type: graphql.GraphQLString },
              customer_id: { type: graphql.GraphQLString },
              transaction_id: { type: graphql.GraphQLString },
              mb_amount: { type: graphql.GraphQLFloat },
              mb_currency: { type: graphql.GraphQLString },
              status: { type: graphql.GraphQLFloat },
              failed_reason_code: { type: graphql.GraphQLString },
              md5sig: { type: graphql.GraphQLString },
              sha2sig: { type: graphql.GraphQLString },
              amount: { type: graphql.GraphQLFloat },
              currency: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: graphql.GraphQLFloat
  },
  ApiPaymentEaclSuccess: {
    fullName:
      'GamingGrids.Api.Control.v2.Controllers.PaymentController.EaclStatus',
    method: 'POST',
    url: '/api/Payment/eacl/Success',
    args: {
      body: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'controlPaymentApiPaymentEaclSuccessBody',
            fields: {
              ekashu_auth_code: { type: graphql.GraphQLString },
              ekashu_auth_result: { type: graphql.GraphQLString },
              ekashu_card_hash: { type: graphql.GraphQLString },
              ekashu_card_reference: { type: graphql.GraphQLString },
              ekashu_card_scheme: { type: graphql.GraphQLString },
              ekashu_date_time_local: { type: graphql.GraphQLString },
              ekashu_date_time_local_fmt: { type: graphql.GraphQLString },
              ekashu_date_time_utc: { type: graphql.GraphQLString },
              ekashu_date_time_utc_fmt: { type: graphql.GraphQLString },
              ekashu_expires_end_month: { type: graphql.GraphQLString },
              ekashu_issue_number: { type: graphql.GraphQLString },
              ekashu_transaction_id: { type: graphql.GraphQLString },
              ekashu_valid_from_month: { type: graphql.GraphQLString },
              ekashu_valid_from_year: { type: graphql.GraphQLString },
              ekashu_hash_code_result: { type: graphql.GraphQLString },
              ekashu_hash_code_result_format: { type: graphql.GraphQLString },
              ekashu_hash_code_result_type: { type: graphql.GraphQLString },
              ekashu_hash_code_result_version: { type: graphql.GraphQLString },
              ekashu_card_address_result: { type: graphql.GraphQLString },
              ekashu_card_zip_code_result: { type: graphql.GraphQLString },
              ekashu_verification_value_result: { type: graphql.GraphQLString },
              ekashu_paypal_transaction_id: { type: graphql.GraphQLString },
              ekashu_3d_secure_enrolled: { type: graphql.GraphQLString },
              ekashu_3d_secure_result: { type: graphql.GraphQLString },
              ekashu_3d_secure_eci: { type: graphql.GraphQLString },
              ekashu_3d_secure_iav: { type: graphql.GraphQLString },
              ekashu_3d_secure_xid: { type: graphql.GraphQLString },
              ekashu_reference: { type: graphql.GraphQLString }
            }
          })
        )
      }
    },
    response: graphql.GraphQLFloat
  }
}
