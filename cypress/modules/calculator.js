
class Calculator{   
    startAndRun(build){
        return cy.visit('https://testsheepnz.github.io/BasicCalculator').then(
            cy.get('#selectBuild').select(build)
        )
    }

    goToCalculator(){
        return cy.visit('https://testsheepnz.github.io/BasicCalculator')
    }
    selectBuild(build){
        cy.get('#selectBuild').select(build).invoke('val')
    }
    calculate(){
        return cy.get('#calculateButton').click()   
    }
}

export default Calculator