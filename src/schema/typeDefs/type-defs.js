const { gql } = require("graphql-tag")

const typeDefs = gql`
	type User {
		id: ID!
		name: String!
		userName: String!
		age: Int!
		nationality: Nationality!
		friends: [User]
		favMovies: [Movie]
	}

	type Movie {
		id: ID!
		name: String!
		yearOfPublication: Int!
		isInTheaters: Boolean!
	}

	type Query {
		users: [User!]!
		user(id: ID!): User!
		movies: [Movie!]!
		movie(name: String!): Movie!
	}

	enum Nationality {
		UNITED_STATES
		SPAIN
		JAPAN
		UNITED_KINGDOM
		FRANCE
		INDIA
		BRAZIL
		GERMANY
		EGYPT
		CANADA
	}
`
module.exports = { typeDefs }
