import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxSimpleComboModule, IgxGridModule, IgxInputGroupModule } from 'igniteui-angular';
import { IgxPieChartModule } from 'igniteui-angular-charts';
import { MasterViewComponent } from './master-view.component';

describe('MasterViewComponent', () => {
  let component: MasterViewComponent;
  let fixture: ComponentFixture<MasterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxSimpleComboModule, IgxGridModule, IgxInputGroupModule, IgxPieChartModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
