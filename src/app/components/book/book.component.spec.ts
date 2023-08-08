import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from './book.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from 'src/app/store/entity-metadata';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/services/book.service';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('dataTable', {}),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot(entityConfig),
        NgbModule,
        StoreModule.forRoot({}, {}),
      ],
      declarations: [BookComponent],
      providers: [{ provide: BookService }],
    }).compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
