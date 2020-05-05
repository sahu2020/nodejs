const http          =   require( 'http' );
const fs            =   require( 'fs' );

http.createServer(( req, res ) => {
    // console.log( req.url );
    // res.write( 'Hello world!' );
    // res.end();

    if( req.url === '/' ){
        fs.readFile( __dirname + '/index.html', ( err, data ) => {
            if( err ){
                res.writeHead( 404 );
                res.end();
                return console.log( err );
            }

            // console.log( data.toString() );
            res.write( data );
            res.end();
        });
    }else if( req.url === '/about' ){
        res.write( 'about page' );
        res.end();
    }else{
        res.writeHead(404);
        res.end();
    }
}).listen(3000, () => {
    console.log( 'server started!' );
});