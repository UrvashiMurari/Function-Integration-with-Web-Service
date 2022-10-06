exports.handler = async (event) => {
    // TODO implement
    const keyword = event.queryStringParameters.keyword;
    const msg = "Urvashi Says "+keyword;
    const response = {
        statusCode: 200,
        body: JSON.stringify({
      msg
    })
    
    };
    return response;
};