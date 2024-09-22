import {db} from "../src/utils/db.server"

type Author ={
    firstName: string,
    lastName: string,
}

type Book ={
    title: string,
    isFiction:boolean,
    datesPublished: Date;

}

function getAuthors() : Array<Author> {
    return [
        {firstName: "John", lastName: "Doe"},
        {firstName: "Jane", lastName: "Doe"},
        {firstName: "Bob", lastName: "Smith"},
    ]
}