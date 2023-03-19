import { Component } from '@angular/core';
import { Cars } from '../cars';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent {
  
  constructor(private carsService : CarsService) {}

  carsData : Cars[] = [];
  
  ngOnInit(){
    this.carsData = this.carsService.getAllCars();
  }

}
