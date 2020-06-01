$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/stibo_test.feature");
formatter.feature({
  "line": 1,
  "name": "Product Attributes Integration Test",
  "description": "",
  "id": "product-attributes-integration-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify the product name",
  "description": "",
  "id": "product-attributes-integration-test;verify-the-product-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@testAll"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User hits get endpoint \"https://ibt-dev.scloud.stibo.com/restapi/products/\u003cProduct_id\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Product name in response should be \"\u003cProduct_name\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "product-attributes-integration-test;verify-the-product-name;",
  "rows": [
    {
      "cells": [
        "Product_id",
        "Product_name"
      ],
      "line": 17,
      "id": "product-attributes-integration-test;verify-the-product-name;;1"
    },
    {
      "cells": [
        "SKU-137322",
        "91225001091"
      ],
      "line": 18,
      "id": "product-attributes-integration-test;verify-the-product-name;;2"
    },
    {
      "cells": [
        "SKU-115401",
        "91772012236"
      ],
      "line": 19,
      "id": "product-attributes-integration-test;verify-the-product-name;;3"
    },
    {
      "cells": [
        "SKU-115403",
        "91772012251"
      ],
      "line": 20,
      "id": "product-attributes-integration-test;verify-the-product-name;;4"
    },
    {
      "cells": [
        "SKU-158125",
        "54855106"
      ],
      "line": 21,
      "id": "product-attributes-integration-test;verify-the-product-name;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Verify the product name",
  "description": "",
  "id": "product-attributes-integration-test;verify-the-product-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@testAll"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User hits get endpoint \"https://ibt-dev.scloud.stibo.com/restapi/products/SKU-137322\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Product name in response should be \"91225001091\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ibt-dev.scloud.stibo.com/restapi/products/SKU-137322",
      "offset": 24
    }
  ],
  "location": "UserStepDefinitions.userHitsGetEndpoint(String)"
});
formatter.result({
  "duration": 5554731800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "91225001091",
      "offset": 36
    }
  ],
  "location": "UserStepDefinitions.productNameInResponseShouldBe(String)"
});
formatter.result({
  "duration": 754835900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify the product name",
  "description": "",
  "id": "product-attributes-integration-test;verify-the-product-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@testAll"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User hits get endpoint \"https://ibt-dev.scloud.stibo.com/restapi/products/SKU-115401\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Product name in response should be \"91772012236\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ibt-dev.scloud.stibo.com/restapi/products/SKU-115401",
      "offset": 24
    }
  ],
  "location": "UserStepDefinitions.userHitsGetEndpoint(String)"
});
formatter.result({
  "duration": 267302700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "91772012236",
      "offset": 36
    }
  ],
  "location": "UserStepDefinitions.productNameInResponseShouldBe(String)"
});
formatter.result({
  "duration": 66327400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the product name",
  "description": "",
  "id": "product-attributes-integration-test;verify-the-product-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@testAll"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User hits get endpoint \"https://ibt-dev.scloud.stibo.com/restapi/products/SKU-115403\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Product name in response should be \"91772012251\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ibt-dev.scloud.stibo.com/restapi/products/SKU-115403",
      "offset": 24
    }
  ],
  "location": "UserStepDefinitions.userHitsGetEndpoint(String)"
});
formatter.result({
  "duration": 200787900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "91772012251",
      "offset": 36
    }
  ],
  "location": "UserStepDefinitions.productNameInResponseShouldBe(String)"
});
formatter.result({
  "duration": 46739100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the product name",
  "description": "",
  "id": "product-attributes-integration-test;verify-the-product-name;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@testAll"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User hits get endpoint \"https://ibt-dev.scloud.stibo.com/restapi/products/SKU-158125\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Product name in response should be \"54855106\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ibt-dev.scloud.stibo.com/restapi/products/SKU-158125",
      "offset": 24
    }
  ],
  "location": "UserStepDefinitions.userHitsGetEndpoint(String)"
});
formatter.result({
  "duration": 191478200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "54855106",
      "offset": 36
    }
  ],
  "location": "UserStepDefinitions.productNameInResponseShouldBe(String)"
});
formatter.result({
  "duration": 39752400,
  "status": "passed"
});
});