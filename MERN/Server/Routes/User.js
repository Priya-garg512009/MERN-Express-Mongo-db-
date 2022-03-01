const express = require('express')
const {MongoClient,ObjectId} = require('mongodb')
const route = express.Router()
const url = "mongodb://localhost:27017"
const dbname= 'merndb'

//clouddb
/*route.get('/clouddb',function(req,res){
    console.log("h")
    MongoClient.connect("mongodb+srv://EdystPriya:garg@merndb.ozeap.mongodb.net/LoginDb?retryWrites=true&w=majority",function(err,cluster){
        if(err)
        {
            res.send("Connection with DB Failed")
        }else 
        {
            const dbRef=cluster.db('LoginDb')
            const collectionRef=   dbRef.collection('secondcollection')
            collectionRef.find().toArray(function(err,successResponse)
            {
                if(err)
                {
                    res.send("Error while accessing the data")
                  } else 
                  {
                    res.send(successResponse)
                  }

            })
        }
    })
})*/
route.get('/',function(req,res){
    MongoClient.connect(url,function(err,cluster){
           if(err){
               res.send("Connection with DB Failed")
           } else {
               const dbRef=cluster.db(dbname)
            const collectionRef=   dbRef.collection('mernCollection')
            collectionRef.find().toArray(function(err,successResponse){
                     if(err){
                         res.send("Error while accessing the data")
                     } else {
                         res.send(successResponse)
                     }
            })
           }
    })
})

route.post('/userdata',function(req,res){
           var name = req.body.uname
           var password = req.body.upassword

           var userData = {
               name:name,
               password:password
           }

            MongoClient.connect(url,function(err,cluster){
                if(err){
                    res.send("error while connecting with DB")
                } else {
                   const dbRef = cluster.db('merndb')
                    const collectionRef=  dbRef.collection('mernCollection')

                    collectionRef.insertOne(userData,function(err,successMsg){
                                  if(err){
                                      res.send("Error while inserting data")
                                  } else {
                                      res.send("Data Inserted Successfully")
                                  }
                    })
                }
            })

         
            
})

route.delete('/delete/:id',function(req,res){
    var id=req.params.id;
    MongoClient.connect(url,function(err,cluster){
        if(err){
            res.send("error while connecting to db")
        } else{
            const dbRef = cluster.db('merndb')
            const collectionRef=  dbRef.collection('mernCollection')
            collectionRef.deleteOne({_id:ObjectId(id)},function(err,successResponse){
                if(err){
                    res.send("error")
                } else{
                    res.send("deleted successfully")
                }
            })

            
        }
    })
})



module.exports = route