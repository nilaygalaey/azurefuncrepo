module.exports = async function (context, req) {
    context.log("Javascript HTTP trigger processed a request.");

    if((req.query.num1 && req.query.num2)&&(!isNaN(req.query.num1) && !isNaN(req.query.num2))){
        context.res = {
            body: req.query.num1 * req.query.num2
        };
    }
    else{
        context.res = {
            status:400,
            body:'Pass two numberss'
        }
    }        
};