/// <reference types="Cypress" />
import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps';

Given('Being on stock page',() => {
  cy.visit('http://localhost:4200');
});

When('Typing {string} ticker', (ticker:string) => {
  cy.get('mat-form-field').type('{selectall}{backspace}').type(ticker);
});

Then('{string} appears in stock details', (name:string) => {
  cy.get('app-stock').should('contain', 'MSFT');
});

