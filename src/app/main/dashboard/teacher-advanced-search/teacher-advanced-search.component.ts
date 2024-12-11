import { Component, EventEmitter, Output } from '@angular/core';
import { SEARCH_CRITERIA } from '../../../core/constants/search-criteria.constants';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainService } from '../../main.service';

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
 
  constructor(private fb: FormBuilder, public _service: MainService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      standard: [''],

      medium: [''],
      
    });
  }


  onSearch() {
    
let payload  = Object.entries(this.searchForm.value).map(([key, value1]) => ({key,value1}));
    
    this._service.stafffilterSearch(payload).subscribe((res: any) => {
     
    });
    console.log('Search Criteria:', payload);
    const criteria = this.searchForm.value;
    this.searchCriteria.emit(criteria); // Emit the search criteria
  }
}
