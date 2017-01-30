(function() {
  'use strict';

  /*
  * Handle formatting of validation errors for angular app
  */
  function validationErrors(err, req, res, next) {
    if (err.name === 'ValidationError') {
      res.status(400);
      var formattedError = {
        message: "Validation Failed",
        errors: {}
      };
      for (var i in err.errors) {
        formattedError.errors[i] = [{
          code: 400,
          message: err.errors[i].message
        }];
      }
      return res.json(formattedError);
    } else {
      return next(err);
    }
  }

  module.exports.validationErrors = validationErrors;
})();