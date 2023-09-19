const express = require( 'express' ),
    router = express.Router();

    const countryController = require( '../controller/countryController' );
    
    router.post( '/', countryController.create );
    router.get( '/', countryController.getAll );
    router.put( '/', countryController.update );
    router.delete( '/', countryController.delete );

module.exports = router;


