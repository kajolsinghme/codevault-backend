import express from "express";
import { createSnippet, deleteSnippet, getAllSnippets, searchSnippets } from "../controllers/snippetController.js";

const router = express.Router();

router.post("/", createSnippet);
router.get("/", getAllSnippets);
router.get("/search", searchSnippets);
router.delete("/:id", deleteSnippet)

export default router;
