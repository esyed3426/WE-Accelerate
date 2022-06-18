const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        message: String
        patient(id: ID!): Patient 
        doctor(id: ID!): Doctor 
    }

    type Patient {
        id: ID
        name: String
        doctors: [Doctor]
    }

    type Doctor {
        id: ID
        name: String
        patients: [Patient]
    }
`;
module.exports = typeDefs;