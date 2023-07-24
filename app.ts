import 'reflect-metadata'; 

import express from 'express'; 
import cors from 'cors'; 
//import path from 'path'; 


import dbConnection from './common/db-connection';
import gymMemberRouter from './routing/gym-member-routing';



const app = express();

app.use(cors())
app.use(express.json())

app.use('/member', gymMemberRouter); 

dbConnection.initialize()
                    .then(() => {console.log('Connected to DB');})
                    .catch((err:any) => {console.log(err);})

app.listen(3000, () =>{
    console.log('Server is listening at port 3000');
})


