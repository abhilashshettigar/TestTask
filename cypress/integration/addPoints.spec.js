/// <reference types="cypress" />



describe("Calculate the total points of IPL team", () => {
    before("Visit IPL Page", () => {
        cy.visit("https://www.iplt20.com/points-table/men/2020")
    })
    it("Add Total points and generate the reports", () => {
        var points = []
        cy.get("#main-content > div > table > tbody").find('tr').within(() => {
            // getting all elements with td with point class
        }).find('td.standings-table__highlight.js-points').then((point) => {

            for (let index = 0; index < point.length; index++) {
                points.push(parseInt(point[index].textContent))
            }
            var totalPoints = points.reduce((a, b) => a + b, 0)
            expect(totalPoints).to.eq(112)
        })

    });
})