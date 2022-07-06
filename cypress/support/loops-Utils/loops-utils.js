export class LoopsUtils {
  sequenceFinder(intergerLocator, loop_limit) {
    var loop_limit = loop_limit;

    cy.get(intergerLocator).then(($value) => {
      var sequenceCount = 0;
      const raw_numbers = $value.text();
      const splitted_numbers = raw_numbers.split("\n");
      if (loop_limit !== 0) {
        if (
          this.sequenceBetweenTwoNumbers(
            splitted_numbers[0],
            splitted_numbers[1]
          )
        ) {
          loop_limit--;
          sequenceCount++
        } else {
          cy.contains("Again!").click();
          loop_limit--;
          this.sequenceFinder(intergerLocator, loop_limit);
        }
      } else {
        cy.get("body").then(()=>{
          if(sequenceCount > 0){
            cy.log("At least one sequence was shown. Test passed successfully!")
          } else {
            throw new Error("No sequence was shown")
          }
        })
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

  sequenceBetweenTwoNumbers(a, b) {
    if (parseInt(a) + 1 === parseInt(b)) {
      return true;
    } else {
      return false;
    }
  }

  coinCheck(loop_limit) {
    var loop_limit = loop_limit;
    cy.get(":nth-child(9) > :nth-child(1)")
      .get("img")
      .then(($first) => {
        var coins_check = true;
        var coins_count = 0;
        cy.get(":nth-child(9)")
          .get("img")
          .each(($value) => {
            if ($value.attr("title") !== $first.attr("title")) {
              coins_check = false;
            }
          });

        cy.get("body").then(() => {
          if (coins_check) {
            cy.log(`All coin faces are ${$first.attr("title")}`);
            coins_count++;
          }
        });

        loop_limit--;
        cy.get("body").then(() => {
          if (loop_limit > 0) {
            cy.contains("Flip Again").click();
            this.coinCheck(loop_limit);
          } else {
            if (coins_count === 0) {
              throw new Error(`There is at least one coin different`)
            }
          }
        })
      });
  }

  coinFlip(loop_limit, coins_num, currency) {
    cy.get('[name="num"]').select(`${coins_num}`);
    cy.get('[name="cur"]').select(`${currency}`);
    cy.contains("Flip Coin(s)").click();

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
            throw new Error("The number was not shown enough, please try again!")
            
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
