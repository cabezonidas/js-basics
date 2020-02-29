var getDigits = () => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
};
var logDigits = () => {
  console.log(getDigits());
};

var p1 = { id: 1, name: "Dalmasso", number: 1, position: "keeper" };
var p2 = { id: 2, name: "Juani", number: 2, position: "defender" };
var p3 = { id: 3, name: "Lucas", number: 3, position: "defender" };
var p4 = { id: 4, name: "Joseph", number: 4, position: "defender" };
var p5 = { id: 5, name: "Maikol", number: 6, position: "defender" };
var p6 = { id: 6, name: "Wawa", number: 5, position: "midfield" };
var p7 = { id: 7, name: "Hammer", number: 8, position: "midfield" };
var p8 = { id: 8, name: "Nano", number: 1, position: "midfield" };
var p9 = { id: 9, name: "Cabe", number: 1, position: "attacker" };
var p10 = { id: 10, name: "Muhand", number: 1, position: "attacker" };
var p11 = { id: 11, name: "Hector", number: 1, position: "attacker" };

var soccerTeam = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];

var keepers = [];

var defenders = [];

var midfielders = [];

var attackers = [];

module.exports = {
  getDigits,
  logDigits,
  soccerTeam,
  keepers,
  defenders,
  midfielders,
  attackers,
};
