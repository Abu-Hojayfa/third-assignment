// https://github.com/Abu-Hojayfa/third-assignment.git

// km to m

function kilometerToMeter(kilometers) {

  if (kilometers >= -1) {
    return kilometers * 1000;
  } else {
    return 'Negative value of distance is not allowed';
  }
}


// budget calculator

function budgetCalculator(watches, phones, laptops) {
  var price = 0;

  if (watches > 0) {
    price = watches * 50;
  }
  if (phones > 0) {
    price = price + phones * 100;
  }
  if (laptops > 0) {
    price = price + laptops * 500;
  } else if (watches <= 0 && phones <= 0 && laptops <= 0) {
    return 'Kiso to akta kino vai🙁🙁';
  }
  return price;
}

// Hostel cost

function hotelCost(days) {
  var totalCost = 0;

  if (days <= 0) {
    return 'visit and stay in our hotel🥰🥰';
  } else if (days <= 10) {
    totalCost = days * 100;
  } else if (days <= 20) {
    totalCost = 10 * 100 + (days - 10) * 80;
  } else if (days > 20) {
    totalCost = 10 * 100 + 10 * 80 + (days - 20) * 50;
  }
  return totalCost;
}

// Mega Friends

function megaFriend(friendsNames) {
  var bigName = friendsNames[0];

  for (var i = 0; i < friendsNames.length; i++) {
    if (friendsNames[i].length > bigName.length) {
      bigName = friendsNames[i];
    } else if (friendsNames[i].length == 0) {
      return 'enter at least 2 different names.';
    }
  }
  return bigName;
}