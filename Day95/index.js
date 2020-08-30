import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
if(process.env.PRD !== 'true') console.log(process.env.USERDB, process.env.PWDB, process.env.BD);

(async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PWDB}@clusterbootcamp.bbalc.mongodb.net/${process.env.BD}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        console.log(error);
    }
})();

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    value: {
        type: Number,
        require: true
    },
    lastModified: {
        type: Date,
        default: Date.now
    }
});

const student = mongoose.model('student', studentSchema, 'student');

new student({
    name: "Paulo Assis",
    subject: "Fisica",
    type: "Trabalho pratico",
    value: 22
})
    .save()
    .then(() => console.log("Documento inserido com sucesso"))
    .catch(err => {
        console.log("Erro ao inserir o Documento")
    })