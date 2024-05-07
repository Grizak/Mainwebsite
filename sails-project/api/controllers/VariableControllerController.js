/**
 * VariableControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

};

// api/controllers/VariableController.js

module.exports = {
  create: async function (req, res) {
    try {
      const variable = await Variable.create(req.body).fetch();
      return res.json(variable);
    } catch (err) {
      return res.serverError(err);
    }
  },
};

// api/controllers/VariableController.js

module.exports = {
  find: async function (req, res) {
    try {
      const variable = await Variable.findOne({ id: req.params.id });
      if (!variable) {
        return res.notFound('Variable not found');
      }
      return res.json(variable);
    } catch (err) {
      return res.serverError(err);
    }
  },
};

// api/controllers/VariableController.js

module.exports = {
  update: async function (req, res) {
    try {
      const updatedVariable = await Variable.updateOne({ id: req.params.id }).set(req.body);
      if (!updatedVariable) {
        return res.notFound('Variable not found');
      }
      return res.json(updatedVariable);
    } catch (err) {
      return res.serverError(err);
    }
  },
};

// api/controllers/VariableController.js

module.exports = {
  destroy: async function (req, res) {
    try {
      const destroyedVariable = await Variable.destroyOne({ id: req.params.id });
      if (!destroyedVariable) {
        return res.notFound('Variable not found');
      }
      return res.json(destroyedVariable);
    } catch (err) {
      return res.serverError(err);
    }
  },
};
