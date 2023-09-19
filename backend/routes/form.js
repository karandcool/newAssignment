const express = require( 'express' ),
    router = express.Router();

    const FormController = require( '../controller/formController' );
    
    router.post( '/', FormController.create );
    router.get( '/', FormController.getAll );
    router.put( '/', FormController.update );
    router.delete( '/', FormController.delete );

module.exports = router;


