import { Component } from '@angular/core';

interface Profile {
  name: string;
  dob: Date;
  gender: string;
  religion: string;
  denomination: string;
  baptismDate: Date;
  holySpiritDate: Date;
  doa: Date;
  standard: string;
  medium: string;
  admissionNumber: string;
  location: string;
  address: string;
  studentMobile1: string;
  studentMobile2: string;
  father: {
    name: string;
    religion: string;
    denomination: string;
    baptismDate: Date;
    holySpiritDate: Date;
    mobileNumber: string;
  };
  mother: {
    name: string;
    religion: string;
    denomination: string;
    baptismDate: Date;
    holySpiritDate: Date;
    mobileNumber: string;
  };
}

@Component({
  selector: 'app-children-profile',
  templateUrl: './children-profile.component.html',
  styleUrl: './children-profile.component.scss'
})
export class ChildrenProfileComponent {
  profiles: Profile[] = [
    {
      name: 'John Doe',
      dob: new Date('2005-02-15'),
      gender: 'Male',
      religion: 'Christian',
      denomination: 'Catholic',
      baptismDate: new Date('2010-04-25'),
      holySpiritDate: new Date('2012-06-10'),
      doa: new Date('2016-01-05'),
      standard: '5th',
      medium: 'English',
      admissionNumber: '2023001',
      location: 'City, Country',
      address: '123 Main Street',
      studentMobile1: '1234567890',
      studentMobile2: '',
      father: {
        name: 'Michael Doe',
        religion: 'Christian',
        denomination: 'Catholic',
        baptismDate: new Date('1975-08-20'),
        holySpiritDate: new Date('1978-10-05'),
        mobileNumber: '9876543210'
      },
      mother: {
        name: 'Sarah Doe',
        religion: 'Christian',
        denomination: 'Catholic',
        baptismDate: new Date('1977-06-15'),
        holySpiritDate: new Date('1980-08-30'),
        mobileNumber: '8765432109'
      }
    },
    // Add more profiles as needed
  ];

  // Define dynamic columns
  columns: any[];

  constructor() {
    // Initialize dynamic columns
    this.columns = [
      { field: 'name', header: 'Name' },
      { field: 'dob', header: 'Date of Birth', type: 'date' },
      { field: 'gender', header: 'Gender' },
      { field: 'religion', header: 'Religion' },
      { field: 'denomination', header: 'Denomination' },
      { field: 'baptismDate', header: 'Baptism Date', type: 'date' },
      { field: 'holySpiritDate', header: 'Holy Spirit Date', type: 'date' },
      { field: 'doa', header: 'DOA(Admission)', type: 'date' },
      { field: 'standard', header: 'Standard' },
      { field: 'medium', header: 'Medium' },
      { field: 'admissionNumber', header: 'Admission Number' },
      { field: 'location', header: 'Location' },
      { field: 'address', header: 'Address' },
      { field: 'studentMobile1', header: 'Student Mobile Number (1)' },
      { field: 'studentMobile2', header: 'Student Mobile Number (2)' },
      { field: 'father.name', header: 'Father\'s Name' },
      { field: 'father.religion', header: 'Father\'s Religion' },
      { field: 'father.denomination', header: 'Father\'s Denomination' },
      { field: 'father.baptismDate', header: 'Father\'s Baptism Date', type: 'date' },
      { field: 'father.holySpiritDate', header: 'Father\'s Holy Spirit Date', type: 'date' },
      { field: 'father.mobileNumber', header: 'Father\'s Mobile Number' },
      { field: 'mother.name', header: 'Mother\'s Name' },
      { field: 'mother.religion', header: 'Mother\'s Religion' },
      { field: 'mother.denomination', header: 'Mother\'s Denomination' },
      { field: 'mother.baptismDate', header: 'Mother\'s Baptism Date', type: 'date' },
      { field: 'mother.holySpiritDate', header: 'Mother\'s Holy Spirit Date', type: 'date' },
      { field: 'mother.mobileNumber', header: 'Mother\'s Mobile Number' },
    ];
  }
  resolveFieldData(data: any, field: string): any {
    if (field.includes('.')) {
      let fields = field.split('.');
      let value = data;
      fields.forEach(f => {
        value = value[f];
      });
      return value;
    } else {
      return data[field];
    }
  }
}
