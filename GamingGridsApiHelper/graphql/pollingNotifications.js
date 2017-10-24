const graphql = require('graphql')

module.exports = {
  ApiNotifications: {
    fullName:
      'GamingGrids.Api.Polling.v2.Controllers.NotificationsController.List',
    method: 'GET',
    url: 'http://t2w.polling.v2.dev6.gaminggrids.com/api/Notifications',
    args: {
      uriParams: {
        type: new graphql.GraphQLNonNull(
          new graphql.GraphQLInputObjectType({
            name: 'pollingNotificationsApiNotificationsUriParams',
            fields: {
              lastDateTime: { type: graphql.GraphQLString },
              topCount: { type: graphql.GraphQLFloat }
            }
          })
        )
      }
    },
    response: new graphql.GraphQLObjectType({
      name: 'pollingNotificationsApiNotificationsResponse',
      fields: {
        Response: {
          type: new graphql.GraphQLObjectType({
            name: 'pollingNotificationsApiNotificationsResponseResponse',
            fields: {
              DismissedNotifications: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingNotificationsApiNotificationsResponseDismissedNotificationsResponse',
                  fields: {
                    Notifications: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'pollingNotificationsApiNotificationsResponseDismissedNotificationsNotificationsResponse',
                          fields: {
                            NotificationStateName: {
                              type: graphql.GraphQLString
                            },
                            DisplayName: { type: graphql.GraphQLString },
                            LinkAttribute: { type: graphql.GraphQLString },
                            LinkType: { type: graphql.GraphQLString },
                            LogoUrl: { type: graphql.GraphQLString },
                            Message: { type: graphql.GraphQLString },
                            MessageAttributes: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'pollingNotificationsApiNotificationsResponseDismissedNotificationsNotificationsMessageAttributesResponse',
                                  fields: {
                                    AttributeId: { type: graphql.GraphQLFloat },
                                    DisplayName: {
                                      type: graphql.GraphQLString
                                    },
                                    LinkType: { type: graphql.GraphQLString },
                                    LinkAttribute: {
                                      type: graphql.GraphQLString
                                    }
                                  }
                                })
                              )
                            },
                            Actions: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'pollingNotificationsApiNotificationsResponseDismissedNotificationsNotificationsActionsResponse',
                                  fields: {
                                    Action: { type: graphql.GraphQLString },
                                    IsPreferredAction: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    ActionAttribute: {
                                      type: graphql.GraphQLString
                                    }
                                  }
                                })
                              )
                            },
                            NotificationId: { type: graphql.GraphQLFloat },
                            UserNotifiedEntityId: {
                              type: graphql.GraphQLFloat
                            },
                            MessageId: { type: graphql.GraphQLFloat },
                            CreatedDateTime: { type: graphql.GraphQLString },
                            NotificationStateId: { type: graphql.GraphQLFloat },
                            ActionDateTime: { type: graphql.GraphQLString }
                          }
                        })
                      )
                    },
                    ReturnedNoticationsCount: { type: graphql.GraphQLFloat },
                    TotalNoticationsCount: { type: graphql.GraphQLFloat }
                  }
                })
              },
              PendingNotifications: {
                type: new graphql.GraphQLObjectType({
                  name:
                    'pollingNotificationsApiNotificationsResponsePendingNotificationsResponse',
                  fields: {
                    Notifications: {
                      type: new graphql.GraphQLList(
                        new graphql.GraphQLObjectType({
                          name:
                            'pollingNotificationsApiNotificationsResponsePendingNotificationsNotificationsResponse',
                          fields: {
                            NotificationStateName: {
                              type: graphql.GraphQLString
                            },
                            DisplayName: { type: graphql.GraphQLString },
                            LinkAttribute: { type: graphql.GraphQLString },
                            LinkType: { type: graphql.GraphQLString },
                            LogoUrl: { type: graphql.GraphQLString },
                            Message: { type: graphql.GraphQLString },
                            MessageAttributes: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'pollingNotificationsApiNotificationsResponsePendingNotificationsNotificationsMessageAttributesResponse',
                                  fields: {
                                    AttributeId: { type: graphql.GraphQLFloat },
                                    DisplayName: {
                                      type: graphql.GraphQLString
                                    },
                                    LinkType: { type: graphql.GraphQLString },
                                    LinkAttribute: {
                                      type: graphql.GraphQLString
                                    }
                                  }
                                })
                              )
                            },
                            Actions: {
                              type: new graphql.GraphQLList(
                                new graphql.GraphQLObjectType({
                                  name:
                                    'pollingNotificationsApiNotificationsResponsePendingNotificationsNotificationsActionsResponse',
                                  fields: {
                                    Action: { type: graphql.GraphQLString },
                                    IsPreferredAction: {
                                      type: graphql.GraphQLBoolean
                                    },
                                    ActionAttribute: {
                                      type: graphql.GraphQLString
                                    }
                                  }
                                })
                              )
                            },
                            NotificationId: { type: graphql.GraphQLFloat },
                            UserNotifiedEntityId: {
                              type: graphql.GraphQLFloat
                            },
                            MessageId: { type: graphql.GraphQLFloat },
                            CreatedDateTime: { type: graphql.GraphQLString },
                            NotificationStateId: { type: graphql.GraphQLFloat },
                            ActionDateTime: { type: graphql.GraphQLString }
                          }
                        })
                      )
                    },
                    ReturnedNoticationsCount: { type: graphql.GraphQLFloat },
                    TotalNoticationsCount: { type: graphql.GraphQLFloat }
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
