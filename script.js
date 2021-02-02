const seats = document.querySelectorAll('.seat');
const movie = document.querySelector('#movies');
const totalC = document.querySelector('#totalC');

const storage = new Storage();
let countSeat;
seats.forEach((seat) => {
  seat.addEventListener('click', selectSeat);
});
movie.addEventListener('change', clearSeat);
document.addEventListener('DOMContentLoaded', loadSeatFromStorage);

function clearSeat() {
  seats.forEach((seat) => {
    if (!seat.classList.contains('occupied')) {
      seat.className = 'seat';
    }
  });
  let cost = 0;
  totalC.textContent = 'Total cost $' + cost;

  localStorage.clear();

  //// BURAYA STORAGE CLEAR EKLENİCEK
  //////
}

function selectSeat(e) {
  if (this.classList.contains('selected')) {
  }
  if (!this.classList.contains('occupied')) {
    this.classList.toggle('selected');
  }

  updateSelectedCount();
}

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.selected');

  const seatIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });
  const seatCount = selectedSeats.length;
  countSeat = seatCount;
  UpadateCost();

  storage.addStorage(seatIndex);
}

function loadSeatFromStorage() {
  const seatIndex = storage.getFromStorage();
  seatIndex.forEach((index) => {
    seats[index].classList.add('selected');
  });
}

function UpadateCost() {
  totalC.textContent = 'Total cost $' + countSeat * Number(movie.value);
}
//// örnek map kullanımı

// const a = [1, 2, 3];

// const b = [2, 3];

// console.log(
//   [2, 3].map((deger) => {
//     return a.indexOf(deger);
//   })
// );
