import { Injectable } from '@angular/core';
import { Cars } from './cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  carsArr : Cars[] = [
    {name:"RR Black Dodge", imgUrl: "./assets/images/rrbb.jpg",price : 5000 ,seats : 4,logoSvg : "rr"},
    {name:"Bugatti Veyron", imgUrl: "./assets/images/bv.jpg",price : 7000 ,seats : 2,logoSvg : "bv"},
    {name:"Lamborghini Aventador", imgUrl: "./assets/images/la.jpg",price : 12000 ,seats : 2,logoSvg : "la"},
    {name:"Ford Mustang", imgUrl: "./assets/images/fm.jpeg",price : 6500 ,seats : 2,logoSvg : "ford"},
    {name:"Audi R8", imgUrl: "./assets/images/ar.png",price : 7500 ,seats : 2,logoSvg : "audi"},
    {name:"Mercedes Benz", imgUrl: "./assets/images/mb.jpg",price : 10500 ,seats : 2,logoSvg : "mb"},
    {name:"RR Black Dodge", imgUrl: "./assets/images/rrbb.jpg",price : 5000 ,seats : 4,logoSvg : "rr"},
    {name:"Bugatti Veyron", imgUrl: "./assets/images/bv.jpg",price : 7000 ,seats : 2,logoSvg : "bv"},
    {name:"Lamborghini Aventador", imgUrl: "./assets/images/la.jpg",price : 12000 ,seats : 2,logoSvg : "la"},
    {name:"Ford Mustang", imgUrl: "./assets/images/fm.jpeg",price : 6500 ,seats : 2,logoSvg : "ford"},
    {name:"Audi R8", imgUrl: "./assets/images/ar.png",price : 7500 ,seats : 2,logoSvg : "audi"},
    {name:"Mercedes Benz", imgUrl: "./assets/images/mb.jpg",price : 10500 ,seats : 2,logoSvg : "mb"},
    
  ]

  constructor() { }
  
  getAllCars(){
    return this.carsArr;
  }
}
