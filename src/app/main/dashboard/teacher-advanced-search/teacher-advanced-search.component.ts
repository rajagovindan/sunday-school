import { Component, EventEmitter, Output } from '@angular/core';
import { SEARCH_CRITERIA } from '../../../core/constants/search-criteria.constants';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher-advanced-search',
  templateUrl: './teacher-advanced-search.component.html',
  styleUrl: './teacher-advanced-search.component.scss'
})
export class TeacherAdvancedSearchComponent {

  @Output() searchCriteria = new EventEmitter<any>();
  
  searchForm!: FormGroup;
  standards = SEARCH_CRITERIA.STANDARDS;
  mediums = SEARCH_CRITERIA.MEDIUMS;
 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      standard: [''],
      location: [''],
      medium: [''],
      teacher: [''],
      attendance: [''],
      gender: [''],
      year: ['']
    });
  }


  onSearch() {
    console.log('Search Criteria:', this.searchForm.value);
    const criteria = this.searchForm.value;
    this.searchCriteria.emit(criteria); // Emit the search criteria
  }
}
