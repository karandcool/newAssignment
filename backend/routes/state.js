const express = require( 'express' ),
    router = express.Router();

    const stateController = require( '../controller/stateController' );
    
    router.post( '/', stateController.create );
    router.get( '/', stateController.getAll );
    router.put( '/', stateController.update );
    router.delete( '/', stateController.delete );

module.exports = router;


