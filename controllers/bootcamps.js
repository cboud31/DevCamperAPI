// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
  res.send({ success: true, message: 'Show all bootcamps.' });
};

// @desc        Get single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
  res.send({
    success: true,
    message: `Display bootcamp with id of ${req.params.id}`,
  });
};

// @desc        Create a new bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = (req, res, next) => {
  res.send({ success: true, message: 'Create a new bootcamp.' });
};

// @desc        Update a bootcamp
// @route       POST /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = (req, res, next) => {
  res.send({
    success: true,
    message: `Update bootcamp with id of ${req.params.id}`,
  });
};

// @desc        DELETE a bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = (req, res, next) => {
  res.send({
    success: true,
    message: `Delete bootcamp with id of ${req.params.id}`,
  });
};
