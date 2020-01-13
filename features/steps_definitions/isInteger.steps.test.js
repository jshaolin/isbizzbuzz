let { defineFeature, loadFeature } = require('jest-cucumber');
const {isInteger} = require('../../isFizzBuzz');

const feature = loadFeature('./features/isInteger.feature');

defineFeature(feature, test => {
  test('isInteger of 3 to equal true', ({ given, when, then }) => {
    let x;
    let z;
    
    given('3', () => {
      x = 3;
    });
    
    when('isInteger', () => {
      z = isInteger(x);
    });
    
    then('The result is true', () => {
      expect(z).toBe(true);
    });
  });
  
  test('isInteger of -3 to equal true', ({ given, when, then }) => {
    let x;
    let z;
    
    given('-3', () => {
      x = -3;
    });
    
    when('isInteger', () => {
      z = isInteger(x);
    });
    
    then('The result is true', () => {
      expect(z).toBe(true);
    });
  });
  
  test('isInteger of 3a to equal true', ({ given, when, then }) => {
    let x;
    let z;
    
    given('3a', () => {
      x = '3a';
    });
    
    when('isInteger', () => {
      z = isInteger(x);
    });
    
    then('The result is false', () => {
      expect(z).toBe(false);
    });
  });
});