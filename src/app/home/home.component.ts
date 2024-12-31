import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    { url: 'https://images.pexels.com/photos/11160121/pexels-photo-11160121.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Boba with Tapioca Pearls' },
    { url: 'https://images.pexels.com/photos/12187693/pexels-photo-12187693.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Boba with Cheese Foam' },
    { url: 'https://images.pexels.com/photos/6412830/pexels-photo-6412830.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Boba with Rainbow Jelly' },
    { url: 'https://images.pexels.com/photos/12187693/pexels-photo-12187693.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Person holding a Boba drink' },
    { url: 'https://images.pexels.com/photos/6412832/pexels-photo-6412832.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Boba with popping boba' }
  ];  
}
