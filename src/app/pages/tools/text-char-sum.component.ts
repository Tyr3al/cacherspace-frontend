import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-char-sum',
  templateUrl: './text-char-sum.component.html',
  styles: []
})
export class TextCharSumComponent implements OnInit {

  input = {
    text: "",
    optNumbers: true,
    optUmlaut: true,
    optSingleDigitSum: false,
  }

  result = {
    digitSum: 0,
    charSum: 0,
  }

  private dict = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  private dictNoUmlaut = {
    ä: 6,
    ö: 20,
    ü: 26,
    ß: 38
  };

  private dictUmlaut = {
    ä: 27,
    ö: 28,
    ü: 29,
    ß: 30
  };

  constructor() { }

  ngOnInit() {
  }

  onChange(newValue) {
    let temp = 0;
    for (var i = 0; i < this.input.text.length; i++) {
      if (this.isNumeric(this.input.text[i]) && this.input.optNumbers) {
        temp += parseInt(this.input.text[i]);
      } else if (this.dict[this.input.text[i].toLowerCase()] != null) {
        // umlaut option
        temp += this.dict[this.input.text[i].toLowerCase()];

      } else if (this.dictUmlaut[this.input.text[i].toLowerCase()] != null) {
        if (this.input.optUmlaut) {
          temp += this.dictNoUmlaut[this.input.text[i].toLowerCase()];
        } else {
          temp += this.dictUmlaut[this.input.text[i].toLowerCase()];
        }
      }
    }
    // ausgabe
    this.result.digitSum = this.digitSum(temp, this.input.optSingleDigitSum);
    this.result.charSum = temp;
  
  }
  isNumeric(obj) {
    return !isNaN(obj - parseFloat(obj));
  }

  digitSum(number: number, singleDigit: boolean) {
    let sum = 0;

    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }

    if (singleDigit && (sum > 9)) {
      while (sum > 9) {
        sum = this.digitSum(sum, false);
      }
    }

    return sum;
  }

}
