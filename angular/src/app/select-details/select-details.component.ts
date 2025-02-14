import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { IRowSelectionEventArgs } from '@infragistics/igniteui-angular';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-select-details',
  templateUrl: './select-details.component.html',
  styleUrls: ['./select-details.component.scss']
})
export class SelectDetailsComponent implements OnInit {
  public northwindCustomers: Customer[] | null = null;
  public selectedCustomer = '';
  public selectedOrdersData: any = [];
  public selectedOrdersDetails: any = [];
  public selectedRows = [10355];
  public selectedCustomerData: any = [
    {
      "customerID": "AROUT",
      "companyName": "Around the Horn",
      "contactName": "Thomas Hardy",
      "contactTitle": "Sales Representative",
      "address": "120 Hanover Sq.",
      "city": "London",
      "region": null,
      "postalCode": "WA1 1DP",
      "country": "UK",
      "phone": "(171) 555-7788",
      "fax": "(171) 555-6750",
      "orders": [],
      "customerTypes": []
    }
  ];

  constructor(private northwindService: NorthwindService, private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this.northwindService.getCustomers().subscribe(data => {
      this.northwindCustomers = data;
      this.cdref.detectChanges();
    });

    this.northwindService.getCustomerOrders(this.selectedCustomerData[0].customerID).subscribe(data => {
      this.selectedOrdersData = data.filter(el => el.customerID === this.selectedCustomerData[0]?.customerID);
      this.selectedCustomer = data[0].customerID;
    });

    this.northwindService.getCustomerOrderDetails(this.selectedRows[0]).subscribe(data => {
      this.selectedOrdersDetails = data;
    });
  }

  handleClosed() {
    this.northwindService.getCustomerOrders(this.selectedCustomer).subscribe(data => {
      this.selectedCustomerData = new Array;
      this.selectedCustomerData.push(this.northwindCustomers.filter(el => el.customerID === this.selectedCustomer)[0]);
      this.selectedOrdersData = data.filter(el => el.customerID === this.selectedCustomerData[0]?.customerID);
      this.selectedOrdersDetails = [];
    });
  }

  public orderSelected(orderID: IRowSelectionEventArgs) {
    this.northwindService.getCustomerOrderDetails(orderID.newSelection[0].toString()).subscribe(data => {
      this.selectedOrdersDetails = data;
    });
  }
}
