/// <reference types="cypress" />

describe("Basic Weather App Functionality", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should show the weather of a specific city when a user enters the right city in the search field", () => {
    cy.get("header h1").should("have.text", "Weather App of Destiny!")
    
    cy.get("section.CurrentWeather").should("not.exist")
    cy.get("h1.Error").should("not.exist")

    cy.get("form input").type("Montréal")

    cy.get("form button").click()

    cy.get("section.CurrentWeather").should("exist")
  });

  it("should show an error message when a user enters a wrong city in the search field", () => {
    cy.get("header h1").should("have.text", "Weather App of Destiny!")
    
    cy.get("section.CurrentWeather").should("not.exist")
    cy.get("h1.Error").should("not.exist")

    cy.get("form input").type("Zoumbadowow Pif Pif")

    cy.get("form button").click()

    cy.get("h1.Error").should("exist").and("have.text", "City not found")
  });
});

describe("Optional Weather App Functionality", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should show a button of a specific city when a user enters the right city in the search field, and should not show multiple instances of the button", () => {
    cy.get("header h1").should("have.text", "Weather App of Destiny!")
    
    cy.get("form input").type("Montréal{enter}")

    cy.get(".CityList li").should("have.length", 1)

    cy.get(".CityList li:first-of-type button").should("have.text", "Montréal")
  });

  it("should show the weather of the first city if we search for two valids cities, and click on the first button", () => {
    cy.get("header h1").should("have.text", "Weather App of Destiny!")
    
    cy.get("form input").type("Toronto{enter}")

    cy.get("form input").type("Montréal{enter}")

    cy.get("form input").type("Montréal{enter}")

    cy.get(".CityList li").should("have.length", 2)

    cy.get(".CityList li:first-of-type button").should("have.text", "Toronto")

    cy.get(".CityList li:first-of-type button").click()

    cy.get("section.CurrentWeather").should("exist").and("contain.text", "Toronto")
  });
});
