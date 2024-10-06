export const handler = async (event) => {
    // TODO implement
    const keyword = event.queryStringParameters.keyword;
    const name = "Praveen kumar Chettibilli";
    const message = `${name} says ${keyword}`;
    
    const response = {
      statusCode: 200,
      body: JSON.stringify(message),
    };
    return response;
  };