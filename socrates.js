//homework #3

const MEN = {
		members: [],
		couldItBeAMember: function(candidate) {
				if (candidate instanceof Man) {
						return candidate.isMortal() ? this.pushCandidate(candidate) : candidate.name + ' maybe immortal, but real men are mortals!';
				} else {
						return "Only a real man could be a part of men!";
				}
		},
		//pushCandidate function also try to find Socrates only for printing the original logical argument
		pushCandidate: function(candidate) {
				this.members.push(candidate);
				if (candidate.name === "Socrates") {
						return '\nAll men are mortal\n' +
								'Socrates is a man\n' +
								'Therefore, socrates is mortal.';
				} else {
						return '\n' + candidate.name + ' is a man and mortal.';
				}
		}
};


class Man {
		constructor(name) {
				this.name = name;
				this.mortal = true;
				this.isMortal = function() {
						return this.mortal;
				};
		}
}


/*All men are mortal
* Socrates is a man.
* Therefore, socrates is mortal.
*/
function socratesSyllogism(candidates) {
		for (let i = 0; i < candidates.length; i++) {
				console.log(MEN.couldItBeAMember(candidates[i]));
		}
}


/* This cake is either vanilla or chocolate.
*  This cake is not chocolate.
*  Therefore, this cake is vanilla.
*/
function cakeSyllogism() {
		const possibleTastes = ['vanilla', 'chocolate'];
		const cake = {
				isChocolate: true,
				actualTaste: possibleTastes[Math.round(Math.random())],
				checkIfChocolate: function() {
						this.isChocolate = this.actualTaste === possibleTastes[1];
						return this.isChocolate;
				}
		};

		if (cake.actualTaste === 'vanilla' || cake.actualTaste === 'chocolate') {
				console.log('This cake is either vanilla or chocolate.');
				if (!cake.checkIfChocolate()) {
						console.log('This cake is not chocolate.\n' +
								'Therefore, this cake is ' +
								cake.actualTaste + '.');

				} else {
						console.log("Now it sure. This cake is " +
								cake.actualTaste + ".");
				}
		}
}


const manA = new Man('Aristotle');
const manB = new Man('Plato');
const manC = new Man('Socrates');
let candidates = [manA, manB, manC];

const syllogismHomework = () => {
		socratesSyllogism(candidates);
		console.log('------------------------------------');
		cakeSyllogism();
};

syllogismHomework();