const axios = require('axios'),
    { success } = require('../../middlewares/responseHandler')

module.exports = {


    async searchBook(req, res, next) {
        const { list } = req.query

        try {
            let base_url = `https://api.nytimes.com/svc/books/v3/lists.json`

            let get = await axios.get(base_url, {
                params: {
                    list: list ? list : 'hardcover-fiction',
                    "api-key": process.env.NYT_API_KEY
                }
            })

            let data = get.data.results.map(x => {
                return {
                    list_name: x.list_name,
                    amazon_product_url: x.amazon_product_url,
                    book_details: x.book_details
                }
                
            })

            res.status(200).json(
                success("Successfully retrieve data!", data)
            )

        } catch (error) {
            next(error)
        }
    },


}