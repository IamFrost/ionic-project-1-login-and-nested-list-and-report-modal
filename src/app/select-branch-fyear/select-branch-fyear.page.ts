import { Component, OnInit } from '@angular/core';
import { CompinfoService } from '../services/comp-info/compinfo.service';
import { YearinfoService } from '../services/year-info/yearinfo.service';

@Component({
  selector: 'app-select-branch-fyear',
  templateUrl: './select-branch-fyear.page.html',
  styleUrls: ['./select-branch-fyear.page.scss'],
})
export class SelectBranchFyearPage implements OnInit {

  
  allCompaniesName: string[] = [];
  allYearsDescription: string[] = [];

  constructor(private compinfoService: CompinfoService,
    private yearinfoService: YearinfoService) {

    this.GetCompaniesInfo();
    this.GetYearsInfo();

  }

  ngOnInit() {
  }

  async GetCompaniesInfo() {
    const response = await this.compinfoService.GetCompanies();;
    const dataService = await response.json();
    this.compinfoService.companiesInfo = dataService;
    let companyNames: string[] = [];
    this.compinfoService.companiesInfo.forEach(element => {
      companyNames.push(element.compname);
    });
    this.compinfoService.companiesName = companyNames;
    this.allCompaniesName = companyNames;
    // console.log(companyNames);
    // console.log('this is dataService array : ' +  dataService);
  }

  async GetYearsInfo() {
    const response = await this.yearinfoService.GetYears();;
    const dataService = await response.json();
    this.yearinfoService.yearsInfo = dataService;

    let yearsDescription: string[] = [];
    this.yearinfoService.yearsInfo.forEach(element => {
      yearsDescription.push(element.description);
    });
    this.yearinfoService.yearsDescription = yearsDescription;
    this.allYearsDescription = yearsDescription;

    // console.log('this is dataService array : ' +  dataService);
  }

}
