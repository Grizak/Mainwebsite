/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

};

// config/bootstrap.js

module.exports.bootstrap = async function () {
  try {
    // Fetch the variable from the database
    const variable = await Variable.findOne({ name: 'yourVariableName' });
    if (variable) {
      // Store the variable value in memory
      sails.variable = variable.value;
    }
  } catch (err) {
    sails.log.error('Failed to retrieve variable from the database:', err);
  }
};

// api/helpers/VariableHelper.js

module.exports = {
  getVariable: function () {
    return sails.variable;
  },
};

// Example usage in a controller
const variable = VariableHelper.getVariable();
console.log('Variable value:', variable);
