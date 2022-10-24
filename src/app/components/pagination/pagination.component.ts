import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})

export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @Input() id: string | any;
    @Input() maxSize: number = 10;
    @Input()

    get directionLinks(): boolean {
        return this._directionLinks;
    }

    set directionLinks(value: boolean) {
        this._directionLinks = !!value && <any>value !== 'false';
    }

    @Input()
    get autoHide(): boolean {
        return this._autoHide;
    }

    set autoHide(value: boolean) {
        this._autoHide = !!value && <any>value !== 'false';
    }

    @Input() previousLabel: string = 'Previous';
    @Input() nextLabel: string = 'Next';
    @Input() screenReaderPaginationLabel: string = 'Pagination';
    @Input() screenReaderPageLabel: string = 'page';
    @Input() screenReaderCurrentLabel: string = `You're on page`;
    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

    private _directionLinks: boolean = true;
    private _autoHide: boolean = false;
    public totalListCount: number = this.maxSize;
} 