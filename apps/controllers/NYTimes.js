const axios = require('axios'),
{success} = require('../../middlewares/responseHandler')

module.exports = {
    async searchData(req, res, next) {

        const {sort, q , page } = req.query
        try {

            console.log(Object.keys(req.query).length)

            let query = ""
           
            if(sort) {
                if(query == 0) { query += `?sort=${sort}&` }
                else { query += `sort=${sort}&` }
            }
            
            if(page) {
                if(query == 0) { query += `?page=${page}&` }
                else { query += `page=${page}&` }
            }
            if(q) {
                if(query == 0) { query += `?q=${q}&` }
                else { query += `q=${q}&` }
            }

            console.log(query)

            let base_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json`

            let get = await axios({
                method: 'GET',
                url:  (Object.keys(req.query).length !== 0) ? base_url+query+`api-key=${process.env.NYT_API_KEY}`: base_url+`?page=10&sort=newest&api-key=${process.env.NYT_API_KEY}`,
                headers: {
                    "Content-type" : "application/json"
                }
            })
            let data =  get.data.response.docs.map(x => { return {judul: x.abstract}})
            
            res.status(200).json(
                success("Successfully retrieve data!", get.data.response.docs)
            )
        } catch (error) {
           next(error)
        }
    }
}