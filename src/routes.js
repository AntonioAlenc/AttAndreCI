import express from "express";
import { getClients, addClient, updateClient, deleteClient } from "./clients.js";

const router = express.Router();

router.get("/clients", (req, res) => {
  res.json(getClients());
});

router.post("/clients", (req, res) => {
  const client = addClient(req.body);
  res.status(201).json(client);
});

router.put("/clients/:id", (req, res) => {
  const updated = updateClient(req.params.id, req.body);

  if (!updated) return res.status(404).json({ message: "Not found" });

  res.json(updated);
});

router.delete("/clients/:id", (req, res) => {
  const deleted = deleteClient(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Not found" });

  res.status(204).send();
});

export default router;
