const readlineSync = require('readline-sync');
const { floor } = require('math');

class FishPondOperations {
  checkOnDeadFish(pond) {
    const userInput = readlineSync.question('Enter the number of dead fish: ');
    pond.deadFish = parseInt(userInput);
    console.log('');
    if (pond.deadFish > 0) {
      const initialFishCount = pond.fishCount;
      console.log(`Initial fishCount: ${pond.fishCount} fish`);
      pond.fishCount -= pond.deadFish;
      pond.deadFish = 0; // reset to 0
      console.log(`Final fishCount: ${pond.fishCount} fish\n`);
    }
  }

  recountFishBiomass(pond) {
    const initialFishBiomass = pond.fishBiomass;
    console.log(`Initial fishBiomass: ${pond.fishBiomass} gram`);
    pond.fishBiomass = floor(pond.fishCount * pond.fishWeight);
    console.log(`Final fishBiomass: ${pond.fishBiomass} gram\n`);
  }

  checkOnFishActivity(pond) {
    const initialFishStrugglingForBreath = pond.fishStrugglingForBreath;
    console.log(
      `Initial fishStrugglingForBreath: ${pond.fishStrugglingForBreath}`,
    );
    const userInput = readlineSync.keyInYNStrict(
      'Are the fish struggling for breath: ',
    );
    pond.fishStrugglingForBreath = userInput;
    console.log(
      `Final fishStrugglingForBreath: ${pond.fishStrugglingForBreath}\n`,
    );
  }

  checkOnDissolvedOxygenRate(pond) {
    const initialDissolvedOxygen = pond.dissolvedOxygen;
    console.log(`Initial dissolvedOxygen: ${pond.dissolvedOxygen}`);
    const userInput = readlineSync.question('How much is the DO: ');
    pond.dissolvedOxygen = parseInt(userInput);
    console.log(`Final dissolvedOxygen: ${pond.dissolvedOxygen}\n`);
  }

  checkOnPH(pond) {
    const initialPotentialOfHydrogen = pond.potentialOfHydrogen;
    console.log(`Initial potentialOfHydrogen: ${pond.potentialOfHydrogen}`);
    const userInput = readlineSync.question('How much is the pH: ');
    pond.potentialOfHydrogen = parseInt(userInput);
    console.log(`Final potentialOfHydrogen: ${pond.potentialOfHydrogen}\n`);
  }

  checkOnWaterTemperature(pond) {
    const initialWaterTemperature = pond.waterTemperature;
    console.log(`Initial waterTemperature: ${pond.waterTemperature}`);
    const userInput = readlineSync.question(
      'How much is the water temperature: ',
    );
    pond.waterTemperature = parseInt(userInput);
    console.log(`Final waterTemperature: ${pond.waterTemperature}\n`);
  }

  checkOnTotalDissolvedSolid(pond) {
    const initialTotalDissolvedSolid = pond.totalDissolvedSolid;
    console.log(`Initial totalDissolvedSolid: ${pond.totalDissolvedSolid}`);
    const userInput = readlineSync.question('How much is the TDS: ');
    pond.totalDissolvedSolid = parseInt(userInput);
    console.log(`Final totalDissolvedSolid: ${pond.totalDissolvedSolid}\n`);
  }

  checkOnFlocCondition(pond) {
    const initialFlocVolume = pond.flocVolume;
    const initialClearFlocWater = pond.clearFlocWater;
    console.log(
      `Initial flocCondition: ${pond.flocVolume} ${pond.clearFlocWater}`,
    );
    const userInputVolume = readlineSync.question(
      'How much is the floc volume: ',
    );
    pond.flocVolume = parseInt(userInputVolume);
    const userInputWater = readlineSync.keyInYNStrict(
      'Is the floc water clear: ',
    );
    pond.clearFlocWater = userInputWater;
    console.log(
      `Final flocCondition: ${pond.flocVolume} ${pond.clearFlocWater}\n`,
    );
  }

  checkOnPondCondition(pond) {
    this.checkOnFishActivity(pond);
    this.checkOnDissolvedOxygenRate(pond);
    this.checkOnPH(pond);
    this.checkOnWaterTemperature(pond);
    this.checkOnTotalDissolvedSolid(pond);
    this.checkOnFlocCondition(pond);
  }

  fishActivityAnalysis(pond) {
    const initialFishActivityStatus = pond.fishActivityStatus;
    console.log(`Initial fishActivityStatus: ${pond.fishActivityStatus}`);
    // Ikan megap-megap (DO terlalu tinggi, ammonia terlalu tinggi (pH), TDS terlalu tinggi)
    console.log(`Final fishActivityStatus: ${pond.fishActivityStatus}\n`);
  }

  dissolvedOxygenRateAnalysis(pond) {
    const initialDissolvedOxygenStatus = pond.dissolvedOxygenStatus;
    console.log(`Initial dissolvedOxygenStatus: ${pond.dissolvedOxygenStatus}`);
    // DO < 4.0 mg/l atau DO > 5.2 mg/l (Kalau kelebihan bisa doping garam)
    console.log(`Final dissolvedOxygenStatus: ${pond.dissolvedOxygenStatus}\n`);
  }

  phAnalysis(pond) {
    const initialPotentialOfHydrogenStatus = pond.potentialOfHydrogenStatus;
    console.log(
      `Initial potentialOfHydrogenStatus: ${pond.potentialOfHydrogenStatus}`,
    );
    // ph < 6 atau pH > 8
    // pH swing (berubah lebih dari 0..5)
    console.log(
      `Final potentialOfHydrogenStatus: ${pond.potentialOfHydrogenStatus}\n`,
    );
  }

  waterTemperatureAnalysis(pond) {
    const initialWaterTemperatureStatus = pond.waterTemperatureStatus;
    console.log(
      `Initial waterTemperatureStatus: ${pond.waterTemperatureStatus}`,
    );
    // Suhu < 25 atau suhu > 28
    // Suhu swing (berubah lebih dari 4)
    console.log(
      `Final waterTemperatureStatus: ${pond.waterTemperatureStatus}\n`,
    );
  }

  totalDissolvedSolidAnalysis(pond) {
    const initialTotalDissolvedSolidStatus = pond.totalDissolvedSolidStatus;
    console.log(
      `Initial totalDissolvedSolidStatus: ${pond.totalDissolvedSolidStatus}`,
    );
    // TDS < 1000
    console.log(
      `Final totalDissolvedSolidStatus: ${pond.totalDissolvedSolidStatus}\n`,
    );
  }

  flocConditionAnalysis(pond) {
    const initialFlocConditionStatus = pond.flocConditionStatus;
    console.log(`Initial flocConditionStatus: ${pond.flocConditionStatus}`);
    // Flok < 20ml, air keruh
    // Flok > 30ml (dipuasakan 1-2 hari)
    // Sludge ngumpul, air keruh (ammonia > flok)
    console.log(`Final flocConditionStatus: ${pond.flocConditionStatus}\n`);
  }

  pondConditionAnalysis(pond) {
    this.fishActivityAnalysis(pond);
    this.dissolvedOxygenRateAnalysis(pond);
    this.phAnalysis(pond);
    this.waterTemperatureAnalysis(pond);
    this.totalDissolvedSolidAnalysis(pond);
    this.flocConditionAnalysis(pond);
  }
}

module.exports = FishPondOperations;
