Feature: Is it Integer
  Check the if a string is an integer
 
  Scenario: isInteger of 3 to equal true
    Given 3
    When isInteger
    Then The result is true
    
  Scenario: isInteger of -3 to equal true
    Given -3
    When isInteger
    Then The result is true
    
  Scenario: isInteger of 3a to equal true
    Given 3a
    When isInteger
    Then The result is false