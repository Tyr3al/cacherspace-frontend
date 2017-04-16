import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-rot',
  templateUrl: './text-rot.component.html',
  styles: []
})
export class TextRotComponent implements OnInit {

  input = {
    text: "",
    rot: 13
  }

  result = {
    text: ""
  }

  constructor() {
    // nothing to do
  }

  ngOnInit() {
    // nothing to do
  }

  onChange(newValue) {
    // workaround to get integer (casting)
    this.input.rot = +this.input.rot;

    let temp: string = "";
    let asciiNr: number = 0;

    for (var i = 0; i < this.input.text.length; i++) {
      // get ascii dec
      asciiNr = this.input.text[i].charCodeAt(0);
      // upper Case
      if ((asciiNr >= 65) && (asciiNr <= 90)) {
        asciiNr += this.input.rot;

        if ( asciiNr > 90 ) {
          asciiNr = 65 + (asciiNr - 91);
        }
      }
      // lower case
      else if (asciiNr >= 97 && asciiNr <= 122) {
        asciiNr += this.input.rot;
        if (asciiNr > 122) {
          asciiNr = 97 + (asciiNr - 123);
        }
      } 
      // integer back to corresponding ascii char
      temp += String.fromCharCode(asciiNr);
    }

    // ausgabe
    this.result.text = temp;

  }

}
