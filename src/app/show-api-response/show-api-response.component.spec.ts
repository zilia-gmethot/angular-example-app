import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowApiResponseComponent } from './show-api-response.component';

describe('ShowApiResponseComponent', () => {
  let component: ShowApiResponseComponent;
  let fixture: ComponentFixture<ShowApiResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowApiResponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowApiResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
