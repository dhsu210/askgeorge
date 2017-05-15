const botBuilder = require('claudia-bot-builder'),
    // AWS = require('aws-sdk'),
    // dynamoDb = new AWS.DynamoDB.DocumentClient(),
	  getIntentName = function (alexaPayload) {
		  'use strict';
		  return alexaPayload &&
			  alexaPayload.request &&
			  alexaPayload.request.type === 'IntentRequest' &&
			  alexaPayload.request.intent &&
			  alexaPayload.request.intent.name;
	  },
    getIntent = function (alexaPayload) {
      'use strict';
      return alexaPayload &&
        alexaPayload.request &&
        alexaPayload.request.type === 'IntentRequest' &&
        alexaPayload.request.intent
    };

module.exports = botBuilder(function (message, originalRequest) {

    const intent = getIntent(originalRequest.body);

    switch (getIntentName(originalRequest.body)) {
      case "coffee":

        return {
        				response: {
        					outputSpeech: {
        						type: 'PlainText',
        						text: 'While I am not sure if Thomas had his coffee today, I do recommend checking the cupboard to see if there are any capsules left.'
        					},
        					shouldEndSession: false
        				}
        			};

        break;


      default:
          return {
                    response: {
                      outputSpeech: {
                        type: 'PlainText',
                        text: 'I am sorry, could you repeat that?'
                      },
                      shouldEndSession: false
                    }
                  };
        break;
    }

});
