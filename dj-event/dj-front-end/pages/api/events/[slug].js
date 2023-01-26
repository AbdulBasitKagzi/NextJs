const { events } = require('./data.json')

export default function getEventDetails(req, res) {


    const data = events.filter((evt) => evt.slug === req.query.slug)
    res.status(200).json(data)

}