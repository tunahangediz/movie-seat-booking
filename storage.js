class Storage {
  getFromStorage() {
    let seats;
    if (localStorage.getItem('seats') === null) {
      seats = [];
    } else {
      seats = JSON.parse(localStorage.getItem('seats'));
    }
    return seats;
  }

  addStorage(arr) {
    let seats = [];

    arr.forEach((seat) => {
      seats.push(seat);
    });
    localStorage.setItem('seats', JSON.stringify(seats));
  }
}
