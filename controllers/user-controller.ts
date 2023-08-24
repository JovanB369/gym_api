import userService from "../services/user-services";
import { Request, Response } from 'express'; 

const getAllUsers = async (req: Request, res: Response) => {
    const data = await userService.getAllUsers();
    res.send(data);
  };
  
  const getUserByID = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await userService.getUserByID(parseInt(id));
    res.send(data);
  };
  
  const insertUserManually = async (req: Request, res: Response) => {
    const data = await userService.insertUserManually(req.body);
    res.send(data);
  };
  
  const updateUserData = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await userService.updateUserData(parseInt(id),req.body);
    res.send(data);
  };
  
  const deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await userService.deleteUser(parseInt(id));
    res.send(data);
  };

  const register = async (req: Request, res: Response) => {
    const result = await userService.register(req.body); 
    res.send(result); 
}

const login = async (req: Request, res: Response) => {
    const result = await userService.login(req.body); 
    res.send(result); 
}



export default { getAllUsers, getUserByID, insertUserManually, updateUserData, deleteUser, register, login}