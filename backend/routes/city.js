const express = require( 'express' ),
    router = express.Router();

    const cityController = require( '../controller/cityController' );
    
    router.post( '/', cityController.create );
    router.get( '/', cityController.getAll );
    router.put( '/', cityController.update );
    router.delete( '/', cityController.delete );

module.exports = router;


