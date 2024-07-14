const users = [
	{ firstName: "Alice", lastName: "Johnson", points: 120 },
	{ firstName: "Bob", lastName: "Smith", points: 99 },
	{ firstName: "Charlie", lastName: "Brown", points: 180 }
];

const userStatus = users.map(function (users) {
	let fullName = `${users.firstName} ${users.lastName}`;
	let status = users.points > 100 ? 'Status Premium' : 'Status Standard';
	return `${fullName}, ${status}`;
})
