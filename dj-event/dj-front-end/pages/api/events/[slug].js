const { events } = require('./data.json')

export default function getEventDetails(req, res) {

    console.log(req.query.slug)

    const data = events.filter((evt) => evt.slug === req.query.slug)
    res.status(200).json(data)

}