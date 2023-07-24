import express from "express";
import gymMemberController from "../controllers/gym-member-controller";

const gymMemberRouter = express.Router();

gymMemberRouter
  .route("/")
  .get(gymMemberController.getAllMembers)
  .post(gymMemberController.insertMember);

gymMemberRouter
  .route("/:id")
  .get(gymMemberController.getMemberById)
  .put(gymMemberController.updateMember)
  .delete(gymMemberController.deleteMember);

  export default gymMemberRouter;