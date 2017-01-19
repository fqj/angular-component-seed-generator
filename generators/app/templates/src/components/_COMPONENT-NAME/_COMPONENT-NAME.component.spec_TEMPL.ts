import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { <%- componentClassName %> } from "./<%- componentName %>.component";

describe('<%- componentName %> test suite', () => {

  let fixture: ComponentFixture<StnHeaderComponent>;
  let inst<%- componentClassName %>: <%- componentClassName %>; 

  // provide our implementations or mock-data to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule(
    {
      declarations: [
        <%- componentClassName %>
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(<%- componentClassName %>);
    inst<%- componentClassName %> = fixture.componentInstance;

  });

  it('Concatenate name property', inject([], () => {
    let valueExpected: string = 'My new component';

    inst<%- componentClassName %>.name = 'component';

    fixture.detectChanges();
    expect(inst<%- componentClassName %>.getConcatenatedName()).toBe(valueExpected);

  }));

});
