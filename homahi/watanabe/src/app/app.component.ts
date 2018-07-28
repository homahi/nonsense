import { Word } from './word/word';
import { Component } from '@angular/core';
import { WoredRepository } from './WoredRepository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  correctWord: Word;
  words: Word[] = [];
  repository = new WoredRepository();
  count = 0;
  timer;
  errorCount = 0;
  constructor() {
    const repository = new WoredRepository();
  }

  start() {
    this.count = 0;
    this.errorCount = 0;
    this.timer = setInterval(() => {
      this.count += 1;
    }, 1000);
    this.correctWord = this.repository.getWordById(Math.floor(Math.random() * 29));
    this.words = this.repository.getAllWord();
  }

  correct() {
    clearInterval(this.timer);
  }
  error() {
    this.errorCount += 1;
  }
}
