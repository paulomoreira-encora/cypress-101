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
      }`

  it("Weather GraphQL Request", () => {
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

  it("Rick and Morty GraphQL Request", () => {
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

  it('Fruits GraphQL Request', () => {
    cy.request({
        method: "POST",
        url: "https://fruits-api.netlify.app/graphql",
        body: {
            query: fruitsQuery
        }
    }).then(response => {
        cy.log(response.body)
    })
  })
});
