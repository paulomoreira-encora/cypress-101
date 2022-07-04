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
        }
        else {
          cy.contains('Again!').click()
          loop_limit--
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

  coinCheck(loop_limit){
    var loop_limit = loop_limit
    var status = true
    if(loop_limit > 0) {
      cy.get(':nth-child(9) > :nth-child(1)').get("img").then(($first, index) => {
        
        cy.get(':nth-child(9)').get("img").each(($value, index) => {
          cy.log($value.attr('title'))
          if ($first.attr('title') !== $value.attr('title')){
            status = false
          }
        })
      })
      loop_limit--
    }
    
  }

  coinFlip(loop_limit,coins_num, currency){
    cy.get('[name="num"]').select(`${coins_num}`)
    cy.get('[name="cur"]').select(`${currency}`)
    cy.contains('Flip Coin(s)').click()

    this.coinCheck(loop_limit)
  }
}
