"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookByEmail = exports.getBookByIsbn = exports.getMagazines = exports.getBooks = void 0;
// import parse from 'csv-parse';
const csvtojson_1 = __importDefault(require("csvtojson"));
const getBooks = (req, res) => {
    (0, csvtojson_1.default)({ delimiter: ';' })
        .fromFile('./Books.csv')
        .then((json) => {
        res.status(200).send({ status: true, message: "Books Access Successfully", data: json });
    });
};
exports.getBooks = getBooks;
const getMagazines = (req, res) => {
    (0, csvtojson_1.default)({ delimiter: ';' })
        .fromFile('./Magazines.csv')
        .then((json) => {
        res.status(200).send({ status: true, message: "Magazines Access Successfully", data: json });
    });
};
exports.getMagazines = getMagazines;
const getBookByIsbn = (req, res) => {
    let isbn = req.query;
    let result = [];
    (0, csvtojson_1.default)({ delimiter: ';' })
        .fromFile('./Books.csv')
        .then((row) => {
        const headers = Object.keys(row);
        if ((row[headers[1]]) === isbn)
            result.push(row);
        console.log(result);
        res.status(200).send({ status: true, message: "Book Access Successfully", data: result });
        //     let sample = isbn
        //     sample.forEach(element => {
        //         console.log(element.isbn.replaceAll('-', ''))
        //         res.send({ data: element.isbn.replaceAll('-', '') })
        //     });
    });
};
exports.getBookByIsbn = getBookByIsbn;
const getBookByEmail = (req, res) => {
    const data = (0, csvtojson_1.default)({ delimiter: ';' })
        .fromFile('./Books.csv')
        .then((data) => {
        let sample = data;
        sample.forEach(element => {
            console.log(element.authors);
        });
    });
    // parse(data, (err, records) => {
    //     if (err) {
    //         console.error(err)
    //         return res.status(400).json({ success: false, message: 'An error occurred' })
    //     }
    //     return res.json({ data: records })
    // })
};
exports.getBookByEmail = getBookByEmail;
