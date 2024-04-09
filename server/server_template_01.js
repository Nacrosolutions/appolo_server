import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
//Interface -> typeDefs (Defination Tells a)
const typeDefs=`#graphql 
type Query {
  greeting : String
}

`;


//Implemntation 

const resolvers= {
  Query :{
    greeting:()=>'Hello World !'  // Resolver function
  }
}


const server=new ApolloServer({typeDefs,resolvers})
const {url}=await startStandaloneServer(server,{listen:{port:9000}})
console.log(`Server runnning at  ${url}`) 