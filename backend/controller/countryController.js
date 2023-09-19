// const autoBind = require( 'auto-bind' );
// const { AddressService } = require( '../services/AddressService' );
const Country = require( '../model/country' );
// const Bottles = require( '../model/form' );

class countryController {

    async getAll( req, res, next ) {
        try {
            const data = await Country.find()
            res.send(data)
            // const getResult = await Product.findByIdAndUpdate("63a094396a470c90da8b71ed", {"name": "karan"});
            // const getResult = await Product.find()
         
            
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
            const data = await Country.create(req.body);
            res.send(data)
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

module.exports = new countryController;
