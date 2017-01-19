import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { <%- componentClassName %> } from "./<%- componentName %>.component";

describe('<%- componentName %> test suite', () => {

  let fixture: ComponentFixture<StnHeaderComponent>;
  let my<%- componentClassName %>: <%- componentClassName %>; 

  // provide our implementations or mock-data to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule(
    {
      declarations: [
        <%- componentClassName %>
      ]
    });

    fixture = TestBed.createComponent(<%- componentClassName %>);
    my<%- componentClassName %> = fixture.componentInstance;

  });

  it('Concatenate name property', inject([], () => {
    let valueExpected: string = 'My new component';

    my<%- componentClassName %>.name = 'component';

    fixture.detectChanges();
    expect(my<%- componentClassName %>.getConcatenatedName()).toBe(valueExpected);

  }));

});
