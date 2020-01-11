const { buildSchema } = require(`graphql`);

const alumniSchema = buildSchema(`
    type Alumni {
        nama: String,
        tahun_lulus: Int,
        email: String,
        pekerjaan: String
    },
    
    input AlumniInput {
        nama: String!,
        tahun_lulus: Int,
        email: String,
        pekerjaan: String
    },

    type Total {
        alumni: Int,
        not_working: Int,
        
        have_email: Int
        
    },

    type Query {
        getAlumni: [Alumni],
        total: Total,
        getAlumniByIndex(index: Int!): Alumni
    },

    type Mutation {
        createAlumni (newAlumni: AlumniInput!): Alumni,
        updateAlumni (index: Int!, newAlumni: AlumniInput!): Alumni,
        deleteAlumni (index: Int!): Alumni
    }
`);

module.exports = alumniSchema;
