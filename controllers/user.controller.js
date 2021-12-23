import {User} from '../models/user.model.js'

export const signUp = (req,res) => {
    const newUser = new User(req.body)
 
    User.findOne({userMail: newUser.userMail}, (err,user) => {
        if(user == null) {
            newUser.save()
                .then(user => console.log('save successful',user))
                .catch(err => console.log(err))
            res.send('successful')
        }else {
           console.log(user)
           res.send('not')
        }

    })
}

export const logIn = (req,res) => {
    const newUser = new User(req.body)
    User.findOne({userMail: newUser.userMail})
         .then(user => 
         {
            if (user == null || user.password != newUser.password ) {
                res.send('not')
            }else {
                res.send('successful')
            }
         })
         .catch(err => console.log(err))
    
}