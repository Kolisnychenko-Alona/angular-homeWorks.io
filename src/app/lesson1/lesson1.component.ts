import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.scss']
})
export class Lesson1Component implements OnInit {
  
  public words = 'java';
  public input = 'input-field';
  public inputPlaceholder = 'word here...';
  public tAreaPlaceholder = 'text here...';
  public btnAdd = 'btn add';
  public btnReset = 'btn reset';
  public tarea = 'tarea';
  public checkInput = true;
  public checkTarea = true;
  public value = '';
  public text = '';

  constructor() { }

  ngOnInit(): void {
  }
  showWordsList(): string{
    return this.words;
  }
  addWord(): void{
    if (this.value == '') {
      this.checkInput = false;
      this.inputPlaceholder = 'Please write a word!';
    }
    else {
      this.checkInput = true;
      this.inputPlaceholder = 'word here...';
      this.words += ` ${this.value}`;
      this.value = '';
    }
  }
  cenzor(): void{
    if (this.text == '') {
      this.checkTarea = false;
      this.tAreaPlaceholder = 'Please write a text!';
    }
    else {
      this.checkTarea = true;
      this.tAreaPlaceholder = 'text here...';
      let masWords = this.words.split(' ');
      let masText = this.text.split(' ');
      let cenzorText = [''];
      cenzorText.length = 0;
      masText.map((name) => {
        if (masWords.includes(name)) {
          let w = '';
          for (let i = 0; i < name.length; i++){
            w += '*';
          }
          cenzorText.push(w);
        }
        else {
          cenzorText.push(name);
        }
      }); 
      this.text = cenzorText.join(' ');
    }
  }
  reset() {
    this.text = '';
    this.value = '';
    this.words = '';
  }

}
