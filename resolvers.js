export default {
	Query: {
		allCats : async (parents, args, { Cat }) => {
			const cats = await Cat.find();
			return cats.map(x => {
				x.id = x._id.toString();
				return x;
			});
		}
	}, 

	Mutation: {
		createCat : async (parents, args, { Cat }) => {
			const kitty = await new Cat(args).save();
			kitty._id = kitty._id.toString();
			return kitty
		},
	},
};