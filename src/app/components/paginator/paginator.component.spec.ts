import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})

export class PaginatorComponent {
  @Input() totalPages: number = 11;
  currentPage: number = 1;
  pagesToShow: Array<number | string> = [];

  ngOnInit() {
    this.updatePagesToShow();
  }

  goToPage(page: number) {
    if (typeof page === 'number') {
      this.currentPage = page;
      this.updatePagesToShow();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagesToShow();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagesToShow();
    }
  }

  updatePagesToShow() {
    const maxVisiblePages = 5;
    this.pagesToShow = [];

    if (this.totalPages <= maxVisiblePages) {
      this.pagesToShow = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    } else {
  
      const leftRange = 3;
      const rightRange = 2;

      if (this.currentPage <= leftRange) {
    
        this.pagesToShow = [1, 2, 3, '...', this.totalPages];
      } else if (this.currentPage >= this.totalPages - rightRange) {
 
        this.pagesToShow = [1, '...', this.totalPages - 2, this.totalPages - 1, this.totalPages];
      } else {
     
        this.pagesToShow = [1, '...', this.currentPage, '...', this.totalPages];
      }
    }
  }
}
