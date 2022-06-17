const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        message: String
        patient(id: ID!): Patient  
    }

    type Patient {
        id: ID
        name: String
        doctors: [Doctor]
    }

    type Doctor {
        id: ID
        name: String
    }
`;
module.exports = typeDefs;