 

const createErr = (status = 500, message = "Something went wrong") => {
    const err = new Error(); // Automatically sets the stack trace
    err.status = status;
    err.message=message;
    return err;
};


module.exports = { createErr };
