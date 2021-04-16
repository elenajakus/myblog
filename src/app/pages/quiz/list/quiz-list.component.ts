import { FbBaseService } from './../../../services/fb-base.service';
import { Quiz } from './../../../shared/models/quiz.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { QuizAddComponent } from '../add/quiz-add.component';
import {FormControl} from '@angular/forms';
import {debounceTime, map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  title = 'Quizek';
  list: Observable<Quiz[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<String[]> | null = null; /*filteredOptions: ebbe rakom bele a talalatokat*/

  constructor(private service: FbBaseService<Quiz>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
    this.filteredOptions = this.myControl.valueChanges /*a control barmilyen valtozasara reagalni fog*/
      .pipe(
        startWith(''), /*stringet varok el*/
        debounceTime(300),
        map(value => this._filter(value)) /*vegig megyek a valuekon es azt filterezem*/
      );
  }

  get(): void {
    this.list = this.service.get('quizes');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QuizAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((quiz: Quiz) => {
      console.log(quiz);
      if (quiz?.title) {
        this.service.add('quizes', quiz);
      }
    }, (err: any) => {
      console.warn(err);
    });
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue)); /*lowercase, es az opciokba legyen benne egyertelmuen*/
  }

}
