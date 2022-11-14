/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };

    this.subtr = function() {
        return this.a - this.b;
      };

    this.multi = function() {
      return this.a * this.b;
    };

    this.divi = function() {
        return this.a / this.b;
      };
  }
    
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Subtraction=" + calculator.subtr() );
  alert( "Multiplication=" + calculator.multi() );
  alert( "division=" + calculator.divi() );