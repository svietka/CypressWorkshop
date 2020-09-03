/// <reference types="Cypress" />

import HomePage from './objektai/HomePage.js'
import { random } from 'cypress/types/lodash';

var homePage = new HomePage

var listTags = ['1', '2', '3', '4']
var website = "https://testsheepnz.github.io/BasicCalculator";
// it("Goes to the calculator website", ()=> {
//     cy.visit("https://testsheepnz.github.io/BasicCalculator")
//     //cy.get('#selectBuild').each(() => {})
//     //cy.get('#selectBuild')
//     })

// var listTags = ['1', '2', '10']
// cy.visit("https://testsheepnz.github.io/BasicCalculator")
// cy.get("#selectBuild").each(($div, i) => {
// expect($div).to.contain(listTags[i])
// })
var randNumb1 = random()

describe('Calculator Homepage', () => {
    describe('Addition', () => {
        it.only("Test addition on every version of a calculator", () => {
            context('Build ', () => {
                cy.visit(website)
                // listTags.forEach(build), () =>{
                //     alert("Bad")
                // }
                for (var i = 1; i <= 4; i++) {
                    //cy.wrap($el).contains("1", {matchCase: false});
                    cy.get("#selectBuild").select(i.toString());
                    homePage.checkIfFieldsExist()
                    homePage.enterFieldsWiths("0", "0", "Add")
                    homePage.enterFieldsWiths("-1", "-1", "Add")
                    homePage.enterFieldsWiths("1", "1", "Add")
                    homePage.enterFieldsWiths("-200", "306", "Add")
                    homePage.enterFieldsWiths("3006", "-300", "Add")
                    homePage.enterFieldsWiths("2147483647", "1000", "Add")
                    homePage.enterFieldsWiths("2147483647", "-1000", "Add")
                    homePage.checkAnswer("0")
                    //cy.get('#numberAnswerField').contains

                }
            })
        })
    })
    describe('Subtraction', () => {
        it.only("Test subtraction on every version of a calculator", () => {
            context('Build ', () => {
                cy.visit(website)
                // listTags.forEach(build), () =>{
                //     alert("Bad")
                // }
                for (var i = 1; i <= 4; i++) {
                    //cy.wrap($el).contains("1", {matchCase: false});
                    cy.get("#selectBuild").select(i.toString());
                    homePage.checkIfFieldsExist()
                    homePage.enterFieldsWiths("0", "0", "Subtract")
                    homePage.enterFieldsWiths("-1", "-1", "Subtract")
                    homePage.enterFieldsWiths("1", "1", "Subtract")
                    homePage.enterFieldsWiths("-200", "306", "Subtract")
                    homePage.enterFieldsWiths("3006", "-300", "Subtract")
                    homePage.enterFieldsWiths("2147483647", "1000", "Subtract")
                    homePage.enterFieldsWiths("2147483647", "-1000", "Subtract")
                    homePage.checkAnswer("0")
                    //cy.get('#numberAnswerField').contains

                }
            })
        })
    })
})

