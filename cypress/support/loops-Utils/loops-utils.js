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
            expect(true).to.eq(true);
          } else {
            cy.log(`There is at least one coin different`);
          }
        });

        loop_limit--;
        if (loop_limit > 0) {
          cy.contains("Flip Again").click();
          this.coinCheck(loop_limit);
        }
      });
  }

  coinFlip(loop_limit, coins_num, currency) {
    cy.get('[name="num"]').select(`${coins_num}`);
    cy.get('[name="cur"]').select(`${currency}`);
    cy.contains("Flip Coin(s)").countRolls, pickedNumber, countShowclick();

    this.coinCheck(loop_limit);
  }

  rollDiceCheck(countRolls, pickedNumber, countShow) {
    var countRolls = countRolls;
    cy.get('[type="submit"]').contains("Roll").click();

    cy.get("img").then(($value) => {
      var auxCountShow = countShow;

      if ($value.attr("alt") === pickedNumber.toString()) {
        cy.log($value.attr("alt"));
        auxCountShow--;
      }

      countRolls--;
      if (countRolls > 0) {
        this.rollDiceCheck(countRolls, pickedNumber, auxCountShow);
      } else {
        cy.get("body").then(() => {
          if (auxCountShow <= 0) {
            cy.log(
              `The number ${pickedNumber} was shown how much was requested`
            );
          } else {
            cy.log("The number was not shown enough, please try again!");
            cy.log(`${auxCountShow} remaining times.`);
          }
        });
      }
    });
  }

  rollDice(countRolls, pickedNumber, countShow) {
    if (countRolls < countShow) {
      cy.log("Rolls count should be greater than Show count");
    } else {
      cy.get('[name="num"]').select("1");
      this.rollDiceCheck(countRolls, pickedNumber, countShow);
    }
  }
}
