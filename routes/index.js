import express from "express";
import {getNotifs, getNotifID, saveNotif, UpdateNotif, deleteNotif  } from "../controllers/notificationController.js";
const router = express.Router();
//get all
router.get('/', getNotifs);
// create
router.post('/', saveNotif);
//get by ID
router.get('/:id', getNotifID);
//update
router.patch('/:id',UpdateNotif);
//delete
router.delete('/:id',deleteNotif);

export default router;