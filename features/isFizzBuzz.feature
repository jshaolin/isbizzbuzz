Feature: Is it FizzBuzz
  Check the FizzBuzz of a number
 
  Scenario: FizzBuzz of 3 to equal Fizz
    Given 3
    When FizzBuzz
    Then The result is Fizz
    
  Scenario: FizzBuzz of 5 to equal Buzz
    Given 5
    When FizzBuzz
    Then The result is Buzz
    
  Scenario: FizzBuzz of 15 to equal FizzBuzz
    Given 15
    When FizzBuzz
    Then The result is FizzBuzz
    
  Scenario: FizzBuzz of 16 to equal Neither!
    Given 16
    When FizzBuzz
    Then The result is Neither!