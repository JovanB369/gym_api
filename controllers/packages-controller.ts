import { Request, Response } from "express";
import packagesServices from "../services/packages-services";

const getAllPackages = async (req: Request, res: Response) => {
    const data = await packagesServices.getAllPackages();
    res.send(data);
  };

  const getPackageByID = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await packagesServices.getPackageByID(parseInt(id));
    res.send(data);
  };

  const insertPackages = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await packagesServices.insertPackages(req.body);
    res.send(data);
  };

  const updatePackages = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await packagesServices.updatePackages(parseInt(id),req.body);
    res.send(data);
  };

  const deletePackages = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await packagesServices.deletePackages(parseInt(id));
    res.send(data);
  };

  export default { getAllPackages, getPackageByID, insertPackages, updatePackages, deletePackages}