
import User from '../models/User.js';
import CrudRepository from './crud-repository.js';

class UserRepository extends CrudRepository{

    constructor()
    {
        super(User);
    }

   async findBy(data)
   {
       try {
          const response=await User.findOne(data);
          return response;
       } 
       catch (error) {
        throw error;
       }
   }

   

}
export default UserRepository;