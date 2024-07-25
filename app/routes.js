//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const journeyPluginExample = require("govuk-prototype-kit-journey-plugin");
const alternativeFormatsPrototype = require("alternative-formats-files-prototype");


// Add your routes here

journeyPluginExample(router);
alternativeFormatsPrototype(router);