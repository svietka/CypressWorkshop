/// <reference types="cypress" />

import Objects from "../../page_objects/home_page/calcobjects.js"


    var objects = new Objects()

    const builds = ["Prototype","1","2","3","4","5","6","7","8","9"]
    var operations = [["Add","5.5","5"],["Subtract","1.5","1"],
    ["Multiply","7","7"],["Divide","1.75","1"]]

    before(() => {
        objects.visitPage()
    })
    beforeEach(() => {
        cy.reload()
    })
           
    builds.forEach(number =>{    
            it.only("Check the fields and buttons " + number,()=>{
                objects.getSelectBuild(number)
                objects.imputField1Enabled()
                objects.imputField2Enabled()
                objects.calculateButtonEnabled()
                objects.integerSelectEnabled()
                objects.integerNotSelected()
                objects.clearButtonEnabled()
         })
        operations.forEach(operation =>{ 
            it.only(operation[0]+" operation on builds " + number,()=>{
                objects.getSelectBuild(number)
                objects.getInputField1("3.5")
                objects.getInputField2("2")
                objects.selectOperation(operation[0])  
                objects.getCalculateButton()
                objects.expectAnswer(operation[1])
                objects.integerChecked()
                objects.expectAnswer(operation[2])
                objects.getClearButton()
                objects.answerShouldBeEmpty()
               }) 
            })  
            it.only("Concatenate operation on builds " + number,()=>{
                objects.getSelectBuild(number)
                objects.getInputField1("3.5")
                objects.getInputField2("2")
                objects.selectOperation("Concatenate")  
                objects.getCalculateButton()
                objects.expectAnswer("3.52")
                objects.getClearButton()
                objects.answerShouldBeEmpty()
            })
            it.only("Get number error message in build " + number,()=>{    
                objects.getSelectBuild(number)
                objects.getInputField1("abc")
                objects.getCalculateButton()
                objects.visibleErrorMessage()
                cy.reload()
                objects.getInputField2("abc")
                objects.getCalculateButton()
                objects.visibleErrorMessage()
            })
        })


