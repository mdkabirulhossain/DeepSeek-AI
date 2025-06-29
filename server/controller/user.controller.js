export const signup = (req, res) =>{
    const data = req.body;
    console.log(data)
    res.send(data)
}

export const login = (req, res) =>{
    console.log("login in function!!");
    res.end("login in function!!");
}

export const logout = (req, res) =>{
    console.log("logout function!!");
    res.end("logout function!!");
}