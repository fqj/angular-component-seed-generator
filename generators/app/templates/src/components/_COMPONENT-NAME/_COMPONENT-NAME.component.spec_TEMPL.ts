import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { <%- componentClassName %> } from "./<%- componentName %>.component";

describe('<%- componentName %> test suite', () => {

  // provide our implementations or mock-data to the dependency injector
  beforeEach(() => TestBed.configureTestingModule(
    {
      providers: [<%- componentClassName %>]
    }
  ));

  it('Concatenate name property', inject([ <%- componentClassName %> ], (myEl: <%- componentClassName %>) => {

    myEl.name = 'Julio Iglesias';
    expect(myEl.getConcatenatedName()).toBe('My name is Julio Iglesias and you know it!');

  }));

});
