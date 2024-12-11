import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SEARCH_CRITERIA } from '../../../core/constants/search-criteria.constants';
import { MainService } from '../../main.service';

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
 
  constructor(private fb: FormBuilder,public _service: MainService) { }

  ngOnInit() {
    console.log("stand",this.standards)
    this.searchForm = this.fb.group({
      standard: [''],
      location: [''],
      medium: [''],
    
      attendance: [''],
      gender: [''],
      year: ['']
    });
  }


  onSearch() {
    console.log('Search Criteria:', this.searchForm.value);
    let payload = Object.entries(this.searchForm.value).map(([key, value1]) => ({key,value1}));
    this._service.studentfilterSearch(payload).subscribe((res: any) => {
     
    });
    const criteria = this.searchForm.value;
    this.searchCriteria.emit(criteria); // Emit the search criteria
  }
}
