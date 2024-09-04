import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SEARCH_CRITERIA } from '../../../core/constants/search-criteria.constants';

@Component({
  selector: 'app-advanced-search-component',
  templateUrl: './advanced-search-component.component.html',
  styleUrl: './advanced-search-component.component.scss'
})
export class AdvancedSearchComponentComponent {

  @Output() searchCriteria = new EventEmitter<any>();
  
  searchForm!: FormGroup;
  standards = SEARCH_CRITERIA.STANDARDS;
  locations = SEARCH_CRITERIA.LOCATIONS;
  mediums = SEARCH_CRITERIA.MEDIUMS;
  genders = SEARCH_CRITERIA.GENDERS;
  attendanceOptions = SEARCH_CRITERIA.ATTENDANCE_OPTIONS;
  years = SEARCH_CRITERIA.YEARS;
  teachers = SEARCH_CRITERIA.TEACHERS;
 
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
