const { floor } = require('math');

class FishPond {
  constructor(
    pond_start_date,
    pond_name,
    pond_diameter,
    pond_height,
    stocking_density,
    initial_fish_total_weight,
    initial_fish_count,
    aeration_checkup_period,
    aerator_cleaning_period,
    water_treatment_period,
    fish_size_sampling_period,
    sorting_period,
  ) {
    // INIT
    this.pond_info = {
      pond_start_date,
      pond_name,
      pond_diameter, // meters
      pond_height, // meters
      stocking_density, // fish / m3
      initial_fish_total_weight, // gr
      initial_fish_count, // fish
      aeration_checkup_period, // day
      aerator_cleaning_period, // day
      water_treatment_period, // day
      fish_size_sampling_period, // day
      sorting_period, // day
    };

    // POND PARAMETERS
    this.pond_parameters = {
      dead_fish: {
        0: {
          status: 'Good',
          content: 0,
          timestamp: this.pond_info.pond_start_date,
        },
      },
      water_volume: {
        0: {
          status: 'Good',
          content: floor(
            3.14 *
              (this.pond_info.pond_diameter / 2) *
              this.pond_info.pond_height,
          ),
          timestamp: this.pond_info.pond_start_date,
        },
      },
      // Add other parameters here...
    };

    // DOC
    this.doc = {
      fish_farming: true, // day
      harvest_time: false, // day
      current_day_of_cultivation: (
        this.pond_info.pond_start_date - new Date()
      ).getDate(), // day
    };

    // FISH
    this.fish = {
      0: {
        status: 'Good',
        content: {
          dead_fish: 0,
          fish_count: this.pond_info.initial_fish_count,
          survival_rate: 1,
        },
        timestamp: this.pond_info.pond_start_date,
      },
    };

    this.fish_biomass = {
      0: {
        status: 'Good',
        content: { average_sampling_size: 0, total_biomass: 0 },
        timestamp: this.pond_info.pond_start_date,
      },
    };

    // SUPPLIES
    this.supplies = {
      fish_feed: {
        0: {
          status: 'Good',
          content: {
            stock: 0,
            dose: 30 * this.pond_parameters.water_volume[0].content,
          },
          timestamp: this.pond_info.pond_start_date,
        },
      },
      probiotic: {
        0: {
          status: 'Good',
          content: {
            stock: 0,
            dose: 30 * this.pond_parameters.water_volume[0].content,
          },
          timestamp: this.pond_info.pond_start_date,
        },
      },
      smoked_salt: {
        0: {
          status: 'Good',
          content: {
            stock: 0,
            dose: 1000 * this.pond_parameters.water_volume[0].content,
          },
          timestamp: this.pond_info.pond_start_date,
        },
      },
      dolomite_lime: {
        0: {
          status: 'Good',
          content: {
            stock: 0,
            dose: 50 * this.pond_parameters.water_volume[0].content,
          },
          timestamp: this.pond_info.pond_start_date,
        },
      },
      molasses: {
        0: {
          status: 'Good',
          content: {
            stock: 0,
            dose: 100 * this.pond_parameters.water_volume[0].content,
          },
          timestamp: this.pond_info.pond_start_date,
        },
      },
    };
  }

  run_fish_farming() {
    const operations = new FishPondOperations();
    const tests = new TestPrintVariables();
    tests.print_configuration_data(this);

    while (this.doc.fish_farming) {
      console.log(
        `##### ${this.pond_name} DOC ${this.doc.current_day_of_cultivation}\n`,
      );

      operations.check_on_dead_fish(this);
      operations.recount_fish_biomass(this);
      operations.check_on_pond_condition(this);
      operations.pond_condition_analysis(this);

      this.doc.current_day_of_cultivation += 1;
    }

    this.doc.fish_farming = false;
  }
}

module.exports = FishPond;
