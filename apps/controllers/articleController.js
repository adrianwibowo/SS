const axios = require('axios'),
    { success } = require('../../middlewares/responseHandler')

module.exports = {
    async searchData(req, res, next) {

        const { sort, q, page } = req.query
        try {

            let base_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json`

            let get = await axios.get(`${base_url}`, {
                params: {
                    sort,
                    page,
                    q,
                    "api-key": process.env.NYT_API_KEY
                }
            })
            let data = get.data.response.docs.map(x => {
                return {
                    abstract: x.abstract,
                    lead_paragraph: x.lead_paragraph,
                    images: x.multimedia.filter(item => item.type == "image")
                }
            })

            res.status(200).json(
                success("Successfully retrieve data!",data )
            )
        } catch (error) {
            next(error)
        }
    },

    async getSpecific(req, res, next) {
        const { id } = req.query

        try {
            let base_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json`

            let get = await axios.get(base_url, {
                params: {
                    fq: `_id:"${id}"`,
                    "api-key": process.env.NYT_API_KEY
                }
            })
            res.status(200).json(
                success("Successfully retrieve data!", get.data.response.docs[0])
            )

        } catch (error) {
            next(error)
        }
    }

}