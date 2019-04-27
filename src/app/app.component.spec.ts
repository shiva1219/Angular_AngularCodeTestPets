import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';

describe('AppComponent', () => {
  
  it('should process the pets object and push the data into arrays', () => {
    let service: DataService;
    let component = new AppComponent(service);
    var obj = [{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]},{"name":"Steve","gender":"Male","age":45,"pets":null},{"name":"Fred","gender":"Male","age":40,"pets":[{"name":"Tom","type":"Cat"},{"name":"Max","type":"Cat"},{"name":"Sam","type":"Dog"},{"name":"Jim","type":"Cat"}]},{"name":"Samantha","gender":"Female","age":40,"pets":[{"name":"Tabby","type":"Cat"}]},{"name":"Alice","gender":"Female","age":64,"pets":[{"name":"Simba","type":"Cat"},{"name":"Nemo","type":"Fish"}]}];
    component.getPetsData(obj,"Cat");
    expect(component.female.length).toBeGreaterThan(0);
  });

});
