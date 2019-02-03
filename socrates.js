//homework #3

/*All men are mortal
* Socrates is a man.
* Therefore, socrates is mortal.
*/


const MEN = {
		members: [],
		couldItBeAMember: function(candidate) {
				if (candidate instanceof Man) {
						return candidate.isMortal() ? this.pushCandidate(candidate) : console.log(candidate.name + ' maybe immortal, but real men are mortals!');
				} else {
						console.log("Only a real man could be a part of men!");
				}
		},
		//pushCandidate function also try to find Socrates only for printing the original argument because after this point everything is checked
		pushCandidate: function(candidate) {
				this.members.push(candidate);
				if (candidate.name === "Socrates") {
						console.log('All men are mortal\n' +
								'Socrates is a man\n' +
								'Therefore, socrates is mortal.'
						);
				}
		},
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

const manA = new Man('Aristotle');
const manB = new Man('Plato');
const manC = new Man('Socrates');
// const manC = new Object('Socrates');
// manC.mortal = false;

let candidates = [manA, manB, manC];

for (let m in candidates) {
		MEN.couldItBeAMember(candidates[m]);
}

console.log('');


/* This cake is either vanilla or chocolate.
*  This cake is not chocolate.
*  Therefore, this cake is vanilla.
*/

const tastes = ['vanilla', 'chocolate'];
const cake = {
		isChocolate: function(){
			return cake.taste === tastes[1];
		},
		taste: tastes[0] || tastes[1]
};


if (cake.taste === 'vanilla' || cake.taste === 'chocolate') {
		console.log('This cake is either vanilla or chocolate.');
		if (!cake.isChocolate()) {
				console.log('This cake is not chocolate.');
				console.log('Therefore, this cake is ' + cake.taste + '.');
		}else{
				console.log("Now it sure. This cake is chocolate.");
		}
}