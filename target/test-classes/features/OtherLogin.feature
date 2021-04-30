@OtherLogin
Feature: Validate Login 

Background: 
  Given User is on the techfios login Page  
 
 @Scenario1
 Scenario Outline: Login different way
  When User enters "<userName>" and "<password>"
  And User click on signin button
  Then User should be able to land on Dashboard Page
  
 Examples:
    |userName           |password|
    |demo@techfios.com  | abc123 |
    |demo1@techfios.com | abc123 |
    |demo@techfios.com  | abc124 |
    |demo1@techfios.com | abc124 |
 