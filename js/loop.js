// Loop for
for (let z = 0; z < 5; z++) {
    console.log("Iterasi ke " + z);
  }

//loop do .. while
let y = 0;

do {
  console.log("Iterasi ke_" + y);
  y++;
} while (y < 5);

// Loop while
let x = 0;

while (x < 5) {
  console.log("Iterasi ke-" + x);
  x++;
}

// loop control break
for (let w = 0; w < 5; w++) {
    if (w === 3) {
      break;
    }
    console.log("Iterasi Ke^" + w);
  }

// Loop control continue
for (let v = 0; v < 5; v++) {
    if (v === 2) {
      continue;
    }
    console.log("Iterasi Ke*" + v);
  }