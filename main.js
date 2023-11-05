// Import the FishPond class
const FishPond = require('./fish_pond');

// Initialize an instance of FishPond
const diameter2_fish_pond = new FishPond(
  new Date(2023, 10, 6),
  'Kolam A',
  2.5,
  1,
  80,
  3021,
  483,
  3,
  5,
  7,
  7,
  45,
);

// Run the fish farming
diameter2_fish_pond.runFishFarming();
