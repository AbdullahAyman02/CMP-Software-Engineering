const employee = [
  { id: '1', name: 'Mohamed Sayed' },
  { id: '2', name: 'Ahmed Ali' },
  { id: '3', name: 'Ali Mohamed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const { id } = req.params;
  const index = employee.findIndex((emp) => emp.id === id);
  employee.splice(index, 1);
  res.status(200).json({ data: employee });
};

// TODO
exports.createEmployee = async (req, res, next) => {
  const { name, id } = req.body;
  employee.push({ name, id });
  res.status(201).json({ data: employee });
};
