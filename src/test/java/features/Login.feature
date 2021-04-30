@Login
Feature: Validate Techfios Login Functionality

Background: 
  Given User is on the techfios login Page  
 
 @Scenario1
 Scenario: 1 User should be able to login with valid credentials
  Given User enters username as "demo@techfios.com" 
  When User enters password as "abc123"  
  And User click on signin button
  Then User should be able to land on Dashboard Page 
  
 @Scenario2
 Scenario: 2 User should be able to login with valid credentials
  Given User enters username as "demo1@techfios.com" 
  When User enters password as "abc123"  
  And User click on signin button
  Then User should be able to land on Dashboard Page
  
 @Scenario3
 Scenario: 3 User should be able to login with valid credentials
  Given User enters username as "demo@techfios.com" 
  When User enters password as "abc124"  
  And User click on signin button
  Then User should be able to land on Dashboard Page
  
 @Scenario4
 Scenario: 4 User should be able to login with valid credentials
  Given User enters username as "demo1@techfios.com" 
  When User enters password as "abc124"  
  And User click on signin button
  Then User should be able to land on Dashboard Page