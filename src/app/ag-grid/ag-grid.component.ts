import { Component, Input} from '@angular/core';  
  
@Component({  
  selector: 'app-ag-grid',  
  templateUrl: './ag-grid.component.html',  
  styleUrls: ['./ag-grid.component.scss']  
})  
export class AgGridComponent {  
  @Input() ColumnDefs: any;  
  @Input() RowData: any;  
  @Input() IsColumnsToFit: boolean;  
  
  gridApi: any;  
  gridColumnApi: any;  
  
  BindData(params) {  
    this.gridApi = params.api;  
    this.gridColumnApi = params.columnApi;  
    params.api.setRowData(this.RowData);  
    if (this.IsColumnsToFit) {  
      this.gridApi.sizeColumnsToFit();  
    }  
  }  
} 