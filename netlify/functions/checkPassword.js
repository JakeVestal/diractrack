exports.handler = async (event) => {
    try {
        const { password } = JSON.parse(event.body);
        const isValid = password === process.env.LOGIN_PW;

        return {
            statusCode: 200,
            body: JSON.stringify({ isValid }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ isValid: false, error: "Server error" }),
        };
    }
};