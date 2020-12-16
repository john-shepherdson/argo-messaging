# Introduction

The Messaging Services is implemented as a Publish/Subscribe Service. Instead of focusing on a single Messaging API specification for handling the logic of publishing/subscribing to the broker network the API focuses on creating nodes of Publishers and Subscribers as a Service.


# Terminology

Term | Description
-----| --------------
Project | ARGO Messaging Service uses the notion of ‘projects’ for each tenant and can support multiple projects each one containing multiple topics/subscriptions and users on the same Kafka backend.
topic |A named resource to which messages are sent by publishers. A topic name must be scoped to a project.
subscription | A named resource representing the stream of messages from a single, specific topic, to be delivered to the subscribing application. A subscription name  must be scoped to a project.
ackDeadlineSeconds | Time window in seconds during which client can send an acknowledgement to notify the Service that a message has been successfully received
ack | Acknowledgement issued by the client that the message has been received
pushConfig |Contains information about the push endpoint
pushEndpoint | Webhook URL which will receive the messages
Message | The combination of data and (optional) attributes that a publisher sends to a topic and is eventually delivered to subscribers.
Messages - messageId | Id of the message - GENERATED by the api
Messages - data | Data payload ALWAYS encoded in Base64
Messages - attributes | Dictionary with key/value metadata - OPTIONAL
Messages - publishTime | Timestamp when the message was published, in UTC Zulu time format - detailed to nanoseconds. - GENERATED BY THE API (UTC+2 at devel infrastructure)
AMS | ARGO Messaging Service
maxMessages| the max number of messages returned by one call by setting maxMessages field (when a client pull messages from a subscription).
returnImmediately| By default, the server will keep the connection open until at least one message is received; you can optionally set the returnImmediately field to true to prevent the subscriber from waiting if the queue is currently empty. (when a client pull messages from a subscription).


# The ARGO Messaging Service
The ARGO Messaging Service is a Publish/Subscribe Service, which implements the Google PubSub protocol. It provides an HTTP API that enables Users/Systems to implement message oriented service using the Publish/Subscribe Model over plain HTTP.

In the Publish/Subscribe paradigm, Publishers are users/systems that can send messages to named-channels called Topics. Subscribers are users/systems that create Subscriptions to specific topics and receive messages.


## Topics
Topics are resources that can hold messages. Publishers (users/systems) can create topics on demand and name them (Usually with names that make sense and express the class of messages delivered in the topic)

## Subscriptions
In order for a user to be able to consume messages, he must first create a subscription. Subscriptions are resources that can be created by users   on demand and are attached to specific topics. Each topic can have multiple subscriptions but each subscription can be attached to just one topic. Subscriptions allows Subscribers to incrementally consume messages, at their own pace, while the progress is automatically tracked for each subscription.

## Pull vs Push Subscriptions
Pub/Sub supports both push and pull message delivery. In push delivery, the Pub/Sub initiates requests to your subscriber application to deliver messages. In pull delivery, your subscription application initiates requests to the Pub/Sub server to retrieve messages.

### Pull subscriptions

Pull subscriptions can be configured to require that message deliveries are acknowledged by the Subscribers. If an acknowledgement is made, subscription can resume progressing and send the next available messages. If no acknowledgement is made subscription pauses progressing and re-sends the same messages.

In a pull subscription, the subscribing application explicitly calls the API pull method, which requests delivery of a message in the subscription queue. The Pub/Sub server responds with the message (or an error if the queue is empty), and an ack ID. The subscriber then explicitly calls the acknowledge method, using the returned ack ID, to acknowledge receipt.


### Push subscriptions
In a push subscription, the Pub/Sub server sends a request to the subscriber application, at a preconfigured endpoint. The subscriber's HTTP response serves as an implicit acknowledgement: a success response indicates that the message has been successfully processed and the Pub/Sub system can delete it from the subscription; a non-success response indicates that the Pub/Sub server should resend it (implicit "nack"). To ensure that subscribers can handle the message flow, the Pub/Sub dynamically adjusts the flow of requests and uses an algorithm to rate-limit retries.


> In the current implementation of the AMS there is support only for pull subscriptions.
> Support for push subscriptions will be available in a later version.

## Messages

In the ARGO Messaging Service each message has an identifier, data (payload) and metadata (optional). The metadata are stored in a attribute dictionary as key/value pairs. The message is represented in json format as follows:

```json
 {
   "messageId": "12",
   "data": "YmFzZTY0",
   "attributes": [
     {
       "key": "attribute1",
       "value": "value1"
     },
     {
       "key": "attribute2",
       "value": "value2"
     }
   ],
   "publishTime":"2016-03-15T17:11:34.035345612Z"  
 }
```


Field | Description
----- | -----------
messageId |  Id of the message - GENERATED by the ARGO Messaging Service. Judging from interaction with the service emulator locally and with the service itself online, yes the messages were identified with sequential numbers.
data |  Data payload ALWAYS encoded in Base64
attributes |  Dictionary with key/value metadata - OPTIONAL
publishTime |  Timestamp when the message was published, in UTC Zulu time format - detailed to nanoseconds. - GENERATED BY THE API


## Message acknowledgement deadline
The ack deadline is the number of seconds after delivery, during which the subscriber must acknowledge the receipt of a pull or push message. If a subscriber does not respond with an explicit acknowledge (for a pull subscriber) or with a success response code (for a push subscriber) by this deadline, the server will attempt to resend the message. By default this deadline is 10 seconds.

If a client tries to acknowledge a message while the Ack period has passed it will receive a 408 ERROR in the following format:
```json
{
  "error": {
    "code": 408,
    "message": "ack timeout",
    "status": "TIMEOUT"
  }
}
```

The Ack deadline can be set-up to a higher number during subscription creation by assigning a value to `ackDeadlineSeconds` json field. More on subscription creation [here](api_subs.md)