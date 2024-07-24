import { HttpCode } from '../constants/httpCodes.js'

const eligibility = async (req, res) => {
    res.status(HttpCode.OK).send({ message: 'OK' })
}

export default { eligibility }
