class Resultpage{
    getBadgeImage(){
        return cy.get('.badge-link_thumb_img')
    }
    getBaseTitle(){
        return cy.get('.c-base__title')
    }
    getResultTitle(){
        return cy.get('.result__title')
    }
    getWikiLogo(){
        return cy.get('#p-logo')
    }
    getWikiHeader(){
        return cy.get('#firstHeading')
    }
    getStopWatchTime() {
        return cy.get('#total_time')
    }
    getStopWatchStartButton() {
        return cy.get('.start')
    }
    getStopWatchStopButton() {
        return cy.get('.stop')
    }
}
export default Resultpage