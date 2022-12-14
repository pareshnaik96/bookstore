import csv from 'csvtojson';
import { Request, Response } from 'express'



const getBooks = (req: Request, res: Response) => {

    csv({ delimiter: ';' })
        .fromFile('./Books.csv')
        .then((json) => {
            res.status(200).send({ status: true, message: "Books Access Successfully", data: json });
        })
}


const getMagazines = (req: Request, res: Response) => {

    csv({ delimiter: ';' })
        .fromFile('./Magazines.csv')
        .then((json) => {
            res.status(200).send({ status: true, message: "Magazines Access Successfully", data: json });
        })
}




export { getBooks, getMagazines }
