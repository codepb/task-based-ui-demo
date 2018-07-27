let id = 1023;

const assignees = {
  dave: 'David Jones',
  tom: 'Tom Smith',
  jenny: 'Jenny Johnson',
  steve: 'Steven Theroux',
  sally: 'Sally Geron',
  liz: 'Elizabeth Windsor'
}

const stage = {
  identified: 'identified',
  triaged: 'triaged',
  inProgress: 'in progress',
  uat: 'uat',
  resolved: 'resolved'
}

const organisations = {
  motors: 'Motors Inc.',
  pizza: 'PizzaCo'
}

function createData(title, organisation, assignee, stageToAssign ) {
  id += 1;
  return { id, title, organisation, assignee, stage: stageToAssign || stage.identified };
}

const data = [
  createData('Packages not displaying', organisations.motors, null, stage.identified),
  createData('Packages not displaying', organisations.motors, null, stage.triaged),
  createData('Packages not displaying', organisations.motors, assignees.dave, stage.inProgress),
  createData('Packages not displaying', organisations.motors, assignees.dave, stage.uat),
  createData('Packages not displaying', organisations.motors, assignees.dave, stage.resolved),
  createData('Packages not displaying', organisations.motors, assignees.dave, stage.identified),
  createData('Packages not displaying', organisations.motors, assignees.dave, stage.identified),
  createData('Packages not displaying', organisations.motors, assignees.dave, stage.identified),
  createData('Packages not displaying', organisations.motors, assignees.dave, stage.identified),
  createData('Packages not displaying', organisations.motors, assignees.dave, stage.identified),
  createData('Packages not displaying', organisations.motors, assignees.dave, stage.identified),
  createData('Packages not displaying', organisations.motors, assignees.dave, stage.identified),
  createData('Packages not displaying', organisations.motors, assignees.dave, stage.identified),
  createData('Packages not displaying', organisations.motors, assignees.dave, stage.identified)
];

export { stage, data, assignees, organisations, createData };