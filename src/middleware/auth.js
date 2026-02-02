const adminAuth =  (req, res , next)=>{
    console.log("admin auth gateing checked!!!");
    const token= "xyz";
    const isAdminAuthorized = token==="xyz";

    if (!isAdminAuthorized){
        res.status(401).send("admin unauthorized reqest");
    }else{
        next();
    }
};
const userAuth = (req, res , next)=>{
    console.log("admin auth gatting checked!!!");
    const token= "xyz";
    const isAdminAuthorized = token==="xyz";

    if (!isAdminAuthorized){
        res.status(401).send("user is unauthorized");
    }else{
        next();
    }
};

module.exports = {adminAuth, userAuth};