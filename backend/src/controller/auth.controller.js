

const signUp  = (req, res) => {
    // TODO: 1) validate the input
    // TODO: 2) validate the user not exist in DB
    // TODO: 3) validate the password and information
    // TODO: 4) add the user in the database
    const {name, email, password, confirmPassword} = req.body
    return res.status(200).json({
        status: "success",
        message: "you have register successfully"
    })
}



const signIn = (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        return res.status(400).json({
            status: "fail",
            message: "please provide email and password"
        })
    }

    // TODO: 01) check the user exist in the database
    // TODO: 02) check the password is correct
    // TODO: 03) login the user successfully by return the token
    return res.status(200).json({
        status: "success",
        message: "you have login successfully"
    })

}

const signOut = (req, res) => {
    return res.status(200).json({
        status: "success",
        message: "you have logout successfully"
    })
}


export {signIn, signUp, signOut}