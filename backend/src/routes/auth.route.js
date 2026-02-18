    import express from 'express';
    const router = express.Router();

    router.get('/signup', (req, res) => {
        res.send('sign up end point');
    });

    router.get('/signin', (req, res) => {
        res.send('sing in page ');
    });

    router.get('/logout', (req, res) => {
        res.send('logout end poin ');
    });

    export default router;   