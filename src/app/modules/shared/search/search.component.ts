import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  ngOnInit(): void {}

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public emmiter(value: string): void {
    this.emmitSearch.emit(value);
  }
}
