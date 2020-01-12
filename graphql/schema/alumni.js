const { buildSchema } = require(`graphql`);

const alumniSchema = buildSchema(`
    type Alumni {
        _id: ID!,
        nama: String,
        tahun_lulus: String,
        email: String,
        pekerjaan: String
    },
    
    input AlumniInput {
        nama: String!,
        tahun_lulus: String,
        email: String,
        pekerjaan: String
    },

    type Total {
        alumni: Int,
        working: Int,
        not_working: Int,
        have_email: Int,
        no_email: Int
        
    },

    type Query {
        getAlumni: [Alumni],
        total: Total,
        getAlumniByIndex(index: String!): Alumni
    },

    type Mutation {
        createAlumni (newAlumni: AlumniInput!): Alumni,
        updateAlumni (index: Int!, newAlumni: AlumniInput!): Alumni,
        deleteAlumni (index: Int!): Alumni
    }
`);

module.exports = alumniSchema;
