import express from 'express'

import systemRouter from './system'
import pokemonRouter from './pokemon'

const router = express.Router()

router.use(systemRouter)
router.use(pokemonRouter)

export default router
