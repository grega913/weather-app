var getUser = (id, cb) => {
    var user = {
        id:id,
        name:'solatko'
    }

    setTimeout(()=>{
        cb(user)
    },1000)

}

getUser(31, (userObject) => {
    console.log(userObject)
})
