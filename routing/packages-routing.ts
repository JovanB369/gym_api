import express from 'express'; 
import packagesController from '../controllers/packages-controller';

const packagesRouter = express.Router();

packagesRouter
    .route("/packages")
    .get(packagesController.getAllPackages)
    .post(packagesController.insertPackages);

packagesRouter
    .route("/packages/:id")
    .get(packagesController.getPackageByID)
    .put(packagesController.updatePackages)
    .delete(packagesController.deletePackages);

    export default packagesRouter;