import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Word } from './word';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  @Input()
  word: Word;

  @Input()
  correctId: number;

  @Output()
  correct = new EventEmitter();

  @Output()
  error = new EventEmitter();

  success = false;
  fail = false;

  constructor() { }

  ngOnInit() {
  }

  check() {
    if (this.word.id === this.correctId) {
      console.log('success');
      this.success = true;
      this.correct.emit();
    } else {
      console.log('false');
      this.error.emit();
      this.fail = true;
    }
  }

}
