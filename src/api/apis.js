import {get,post} from './config'

function getAllUsers(pageSize,pageNum,status,type){
    return get('/user/all',{
        pageSize,pageNum,status,type
    })
}

function delUser(uid){
    return get('/user/delete/'+uid)
}

function login (name, pwd) {
    return post('/user/login', {name, pwd})
}

function addAdmin(){}

function delAdmin(){}

function getAllGoods(){}

export {
    getAllUsers,
    delUser,
    delAdmin,
    addAdmin,
    getAllGoods,
    login,
}
