export class LoopsUtils {
  sequenceFinder(intergerLocator, loop_limit) {
    var loop_limit = loop_limit;

    cy.get(intergerLocator).then(($value) => {
      const raw_numbers = $value.text();
      const splitted_numbers = raw_numbers.split("\n");
      if (loop_limit !== 0) {
        if (
          parseInt(splitted_numbers[0]) + 1 ===
          parseInt(splitted_numbers[1])
        ) {
          loop_limit--;
          expect(true).to.eq(true);
        } else {
          cy.contains("Again!").click();
          loop_limit--;
          this.sequenceFinder(intergerLocator, loop_limit);
        }
      }
    });
  }

  intergersSequence(loop_limit) {
    cy.get('input[name="num"]').clear().type("2");

    cy.get('input[name="max"]').clear().type("15");

    cy.get('input[name="col"]').clear().type("1");

    cy.contains("Get Numbers").click();

    this.sequenceFinder(".data", loop_limit);
  }

  coinCheck(loop_limit) {
    var loop_limit = loop_limit;
    cy.get(":nth-child(9) > :nth-child(1)")
    .get("img")
    .then(($first) => {
      
        var coins_count = 1;
        cy.get(":nth-child(9)")
          .get("img")
          .each(($value) => {
            if ($value.attr("title") !== $first.attr("title")) {
              cy.log($value.attr("title"));
              coins_count = 0;
            }
          });

        cy.get("body").then(() => {
          if (coins_count !== 0) {
            cy.log(`All coin faces are ${$first.attr("title")}`);
            expect(true).to.eq(true)
          } else {
            cy.log(`There is at least one coin different`);
          }
        });

        loop_limit--;
        if(loop_limit > 0){
          cy.contains("Flip Again").click();
        this.coinCheck(loop_limit);
        }
        
    });
  }

  coinFlip(loop_limit, coins_num, currency) {
    cy.get('[name="num"]').select(`${coins_num}`);
    cy.get('[name="cur"]').select(`${currency}`);
    cy.contains("Flip Coin(s)").click();

    this.coinCheck(loop_limit);
  }
}

// coinCheck(loop_limit, coins_num, coin_face) {
//   var loop_limit = loop_limit;
//   cy.get("body").then(() => {
//     if (loop_limit > 0) {
//       var coins_count = coins_num;
//       cy.get(":nth-child(9)")
//         .get("img")
//         .each(($value) => {
//           if ($value.attr("title") === coin_face) {
//             cy.log($value.attr("title"));
//             coins_count--;
//           }
//         });

//       cy.get("body").then(() => {
//         if (coins_count === 0) {
//           cy.log(`All coin faces are ${coin_face}`);
//         } else {
//           cy.log(`There's ${coins_count} left`);
//         }
//       });
      
//       loop_limit--;
//       cy.contains("Flip Again").click();
//       this.coinCheck(loop_limit, coins_num, coin_face);
//     }
//   });
// }