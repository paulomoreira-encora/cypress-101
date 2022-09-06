// <reference types="cypress" />

describe("GraphQL trials", () => {
  var weatherQuery = `{
        getCityByName(name: "Pernambuco"){
          country
          weather {
            summary{
              title
              description
            }
            temperature{
              actual
              feelsLike
              min
              max
            }
            clouds{
              all
              visibility
              humidity
            }
          }
        }
      }`;

  var rickAndMortyQuery = `query {
        characters(filter: {name: "rick sanchez"}){
        info {
          count
        }
        results {
          name
          species
          status
          location{
            name
            dimension
          }
        }
      }
    }`;

  var fruitsQuery = `{
        fruit(id: 13){
          fruit_name
          tree_name
          family
          climatic_zone
          bloom
          origin
          description
        }
      }`;

  var fruitsMutation = `mutation {
        addFruit (id: 98, scientific_name:"btt", tree_name:"tree", fruit_name: "fruta", family:"familia", origin:"origin", description:"descrição", bloom:"bloom", maturation_fruit:"maturation", life_cycle:"cicle", climatic_zone:"climatic zone") {
          id
          scientific_name
          tree_name
          fruit_name
          family
          origin
          description
          bloom
          maturation_fruit
          life_cycle
          climatic_zone
        }
      }`;

  it("Weather GraphQL Request (Query)", () => {
    cy.request({
      method: "POST",
      url: "https://graphql-weather-api.herokuapp.com/",
      body: {
        query: weatherQuery,
      },
    }).then((response) => {
      cy.log(response.body);
    });
  });

  it("Rick and Morty GraphQL Request (Query)", () => {
    cy.request({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      body: {
        query: rickAndMortyQuery,
      },
    }).then((response) => {
      cy.log(response.body);
    });
  });

  it("Fruits GraphQL Request (Query)", () => {
    cy.request({
      method: "POST",
      url: "https://fruits-api.netlify.app/graphql",
      body: {
        query: fruitsQuery,
      },
    }).then((response) => {
      cy.log(response.body);
    });
  });

  it("Fruits GraphQL Request (mutation)", () => {
    cy.request({
      method: "POST",
      url: "https://fruits-api.netlify.app/graphql",
      body: {
        query: fruitsMutation,
      },
    }).then((response) => {
      cy.log(response.body);
    });
  });
});
