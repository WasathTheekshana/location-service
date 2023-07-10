import express from 'express';
import locations from './locations.route.js';
import devices from './devices.route.js';

const router = express.Router();

//Test route
router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.use('/locations', locations);
router.use('/devices', devices);

export default router;