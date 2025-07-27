const { ApolloServer } = require("@apollo/server")
const { startStandaloneServer } = require("@apollo/server/standalone")

const { typeDefs } = require("./src/schema/typeDefs/type-defs")
const { resolvers } = require("./src/schema/resolvers/resolvers")

async function startServer() {
	const server = new ApolloServer({ typeDefs, resolvers })

	const { url } = await startStandaloneServer(server, {
		listen: { port: 4000 },
	})

	console.log(`Server running at ${url}`)
}

startServer().catch((error) => {
	console.error("Error starting server:", error)
})
