import { Request, Response } from "express";
import gymMemberService from "../services/gym-member-service";

const getAllMembers = async (req: Request, res: Response) => {
    const data = await gymMemberService.getAllMembers();
    res.send(data);
  };
  
  const getMemberById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await gymMemberService.getMemberByID(parseInt(id));
    res.send(data);
  };
  
  const insertMember = async (req: Request, res: Response) => {
    const data = await gymMemberService.insertMember(req.body);
    res.send(data);
  };
  
  const updateMember = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await gymMemberService.updateMember(parseInt(id),req.body);
    res.send(data);
  };
  
  const deleteMember = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await gymMemberService.deleteMember(parseInt(id));
    res.send(data);
  };
  

  export default { getAllMembers, getMemberById, insertMember, updateMember, deleteMember}

  