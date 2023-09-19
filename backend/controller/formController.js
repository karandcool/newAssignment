// const autoBind = require( 'auto-bind' );
// const { AddressService } = require( '../services/AddressService' );
const Form = require( '../model/form' );

class FormController {

    async getAll( req, res, next ) {
        try {
            
           
            // console.log( response );

            // await res.status( response.statusCode ).json( response );
        }catch ( e ) {
            next( e );
        }
    }

    async create( req, res, next ) {
        try {
            // res.send("hello")
            console.log(req.body)
            const data = await Form.create(req.body);
            res.send(data)
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

module.exports = new FormController;
