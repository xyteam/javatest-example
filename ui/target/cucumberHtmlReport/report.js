$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "  As a user I should able to login into my app",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "I login with valid credential",
  "description": "",
  "id": "login;i-login-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to \"http://the-internet.herokuapp.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \"tomsmith\" into input field having id \"username\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"SuperSecretPassword!\" into input field having id \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on element having class \"radius\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should get logged-in",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://the-internet.herokuapp.com/login",
      "offset": 15
    }
  ],
  "location": "PredefinedStepDefinitions.navigate_to(String)"
});
formatter.result({
  "duration": 5488153327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 9
    },
    {
      "val": "id",
      "offset": 43
    },
    {
      "val": "username",
      "offset": 47
    }
  ],
  "location": "PredefinedStepDefinitions.enter_text(String,String,String)"
});
formatter.result({
  "duration": 134646647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword!",
      "offset": 9
    },
    {
      "val": "id",
      "offset": 55
    },
    {
      "val": "password",
      "offset": 59
    }
  ],
  "location": "PredefinedStepDefinitions.enter_text(String,String,String)"
});
formatter.result({
  "duration": 213637585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "class",
      "offset": 26
    },
    {
      "val": "radius",
      "offset": 33
    }
  ],
  "location": "PredefinedStepDefinitions.click(String,String)"
});
formatter.result({
  "duration": 405003096,
  "status": "passed"
});
formatter.match({
  "location": "UserStepDefinitions.should_logged_in()"
});
formatter.result({
  "duration": 140468475,
  "status": "passed"
});
formatter.match({
  "location": "PredefinedStepDefinitions.close_browser()"
});
formatter.result({
  "duration": 116700426,
  "status": "passed"
});
});