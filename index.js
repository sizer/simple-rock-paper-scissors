'use strict';

var Alexa = require('alexa-sdk');

var APP_ID = process.env.ALEXA_APP_ID;

var SKILL_NAME = "しりとり";
var START_MESSAGE = "しりとりを始めます。りんご";
var HELP_MESSAGE = "しりとりを始めたいですか？スタートと言ってください。";
var HELP_REPROMPT = "どうしますか？";
var STOP_MESSAGE = "さようなら";

var data = [
    "すごいすごいほんとすごい",
    "なんでなんで素朴な質問なんで"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', START_MESSAGE);
    },
    'myFirstIntent': function () {
        var speechOutput =  + data[0];
        this.emit(':ask', speechOutput)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
