import { Router } from 'express';
const router = Router();

router.get('/analyze/:repo', (req, res) => {
    res.json({
        status: "success",
        message: "Analysis in development"
    });
});

export default router;