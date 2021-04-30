$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/OtherLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Login",
  "description": "",
  "id": "validate-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OtherLogin"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Login different way",
  "description": "",
  "id": "validate-login;login-different-way",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be able to land on Dashboard Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "validate-login;login-different-way;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 14,
      "id": "validate-login;login-different-way;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 15,
      "id": "validate-login;login-different-way;;2"
    },
    {
      "cells": [
        "demo1@techfios.com",
        "abc123"
      ],
      "line": 16,
      "id": "validate-login;login-different-way;;3"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc124"
      ],
      "line": 17,
      "id": "validate-login;login-different-way;;4"
    },
    {
      "cells": [
        "demo1@techfios.com",
        "abc124"
      ],
      "line": 18,
      "id": "validate-login;login-different-way;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2399726600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.User_is_on_the_techfios_login_Page()"
});
formatter.result({
  "duration": 3491989900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login different way",
  "description": "",
  "id": "validate-login;login-different-way;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@OtherLogin"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be able to land on Dashboard Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 321606200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_signin_button()"
});
formatter.result({
  "duration": 6300492300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_able_to_land_on_Dashboard_Page()"
});
formatter.result({
  "duration": 11308800,
  "status": "passed"
});
formatter.after({
  "duration": 1440142400,
  "status": "passed"
});
formatter.before({
  "duration": 1362121300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.User_is_on_the_techfios_login_Page()"
});
formatter.result({
  "duration": 3556056700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login different way",
  "description": "",
  "id": "validate-login;login-different-way;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@OtherLogin"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"demo1@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be able to land on Dashboard Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo1@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 38
    }
  ],
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 280166900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_signin_button()"
});
formatter.result({
  "duration": 5936633800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_able_to_land_on_Dashboard_Page()"
});
formatter.result({
  "duration": 19254600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat steps.StepDefinition.user_should_be_able_to_land_on_Dashboard_Page(StepDefinition.java:76)\r\n\tat ✽.Then User should be able to land on Dashboard Page(features/OtherLogin.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 708302700,
  "status": "passed"
});
formatter.before({
  "duration": 1402616000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.User_is_on_the_techfios_login_Page()"
});
formatter.result({
  "duration": 3509484400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login different way",
  "description": "",
  "id": "validate-login;login-different-way;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@OtherLogin"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"demo@techfios.com\" and \"abc124\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be able to land on Dashboard Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc124",
      "offset": 37
    }
  ],
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 293224600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_signin_button()"
});
formatter.result({
  "duration": 5926862600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_able_to_land_on_Dashboard_Page()"
});
formatter.result({
  "duration": 9109000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat steps.StepDefinition.user_should_be_able_to_land_on_Dashboard_Page(StepDefinition.java:76)\r\n\tat ✽.Then User should be able to land on Dashboard Page(features/OtherLogin.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 675402000,
  "status": "passed"
});
formatter.before({
  "duration": 1439172200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.User_is_on_the_techfios_login_Page()"
});
formatter.result({
  "duration": 3411933800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login different way",
  "description": "",
  "id": "validate-login;login-different-way;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@OtherLogin"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"demo1@techfios.com\" and \"abc124\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be able to land on Dashboard Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo1@techfios.com",
      "offset": 13
    },
    {
      "val": "abc124",
      "offset": 38
    }
  ],
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 275785700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_signin_button()"
});
formatter.result({
  "duration": 6005971900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_able_to_land_on_Dashboard_Page()"
});
formatter.result({
  "duration": 11576900,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat steps.StepDefinition.user_should_be_able_to_land_on_Dashboard_Page(StepDefinition.java:76)\r\n\tat ✽.Then User should be able to land on Dashboard Page(features/OtherLogin.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 688815200,
  "status": "passed"
});
});