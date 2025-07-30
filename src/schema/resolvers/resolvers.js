const { UserList, MovieList } = require("../../../DummyData")
const lodash = require("lodash")

const resolvers = {
	Query: {
		users: () => {
			return UserList
		},
		user: (_, args) => {
			console.log("args.id:", args.id)
			const id = args.id
			const user = lodash.find(UserList, { id: id })
			console.log("Found user:", user) // Debug log

			return user
		},

		movies: () => {
			return MovieList
		},
		movie: (parent, args) => {
			const name = args.name
			const movie = lodash.find(MovieList, { name: name })
			return movie
		},
	},
	User: {
		favMovies: () => {
			return lodash.filter(
				MovieList,
				(movie) => movie.yearOfPublication >= 2010
			)
		},
	},

	// No need for a User.friends resolver since friends are already complete objects in the data
}

module.exports = { resolvers }
