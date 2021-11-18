//Literal Object
console.log(`LITERAL OBJECT`);
let hotel  = {

  name: 'Raffles Hotel',
  rooms:  100,
  booked: 24,
  gym: true,
  roomTypes: ['twin','suite','delux'],

  checkAvailability: function() {
    return this.rooms - this.booked;
  } 
};

console.log(`Hotel Name: ${hotel.name}`);
console.log(`Available rooms?: ${hotel.checkAvailability()}`);

console.log(`FUNCTION BASED OBJECTS`);

function Hotel(name, rooms, booked= 100){
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  }; 
  this.printHotelDetails = function(){
    //console.log(".....");
    return `\nHotel Name: ${this.name}\nHotel Rooms: ${this.rooms}\nBooked Rooms: ${this.booked}\nAvailable Rooms: ${this.checkAvailability()}
            `;
  }
}
let ngeeannHotel = new Hotel("Ngee Ann Hotel", 88, 40);
console.log(ngeeannHotel.printHotelDetails());

let hotel2  = new Object();

hotel2.name = 'Singapore Hotel';
hotel2.rooms = 100;
hotel2.booked = 24;
hotel2.gym = true;
hotel2.roomTypes = ['twin','suite','delux'];

hotel2.checkAvailability = function() {
  return this.rooms - this.booked;
} 

console.log(hotel2);
console.log(hotel2.checkAvailability());
