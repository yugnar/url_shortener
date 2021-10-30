export default function getPathDefinition(req, res) {
    res.status(200).json({ path: req.query.shortId })
}