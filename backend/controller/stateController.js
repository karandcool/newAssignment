// const autoBind = require( 'auto-bind' );
// const { AddressService } = require( '../services/AddressService' );
// const State = require( '../model/state' );
// const Bottles = require( '../model/form' );

const State = require("../model/state");

class stateController {

    async getAll( req, res, next ) {
        try {
            console.log(req.headers.country)
            const data = await State.find({country: req.headers.country})
            res.send(data)
            // const getResult = await Product.findByIdAndUpdate("63a094396a470c90da8b71ed", {"name": "karan"});
            // const getResult = await Product.find()
            // const response = await DailyUpdate.find( );
            // res.send(response);
            
            // res.send("helo get all")
            
            
            // const response = await Product.( req.query );

            // console.log( response );

            // await res.status( response.statusCode ).json( response );
        }catch ( e ) {
            next( e );
        }
    }

    async create( req, res, next ) {
        try {
            console.log(req.body)
            const data = await State.create(req.body);
            res.send(data)
            // await res.status(result.statusCode).json("registration is successfull", data)
            // await res.status( res.statusCode ).json( 'Employee creted' );
            // const response = await this.service.createAddress( req.body );

            // await res.status( response.statusCode ).json( response );
        } catch ( e ) {
            next( e );
        }
    }

    async delete( req, res, next ) {

        try {
            res.send("hello")
            // req.param.id
            // console.log(req.query);
            
            // const response = await this.service.Delete( req.query.id );
            

            // return res.status( response.statusCode ).json( response );
        } catch ( e ) {
            next( e );
        }
    }

    async update( req, res, next ) {

        try {

            // console.log(req.query.id);
            res.send("hrllo")
            // const response = await this.service.Update( req.query.id, req.body );

            // return res.status( response.statusCode ).json( response );
        }catch ( e ) {
            next( e );
        }
    }

    async getbyid( req, res, next ) {
        try {
            // console.log( 'enter' );
            res.send("hello")
            // const response = await this.service.getById( req.params.id );

            // console.log( response );

            // await res.status( response.statusCode ).json( response );
        }catch ( e ) {
            next( e );
        }
    }
}

module.exports = new stateController;
