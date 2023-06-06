class ApiFeatures{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }

    //methods:
    pagination(size){
        const currentpage = Number(this.queryString.page) || 1;
        const limit = this.queryString.size * 1 || size;
        const startIndex = (currentpage - 1) * limit;
        const endIndex = currentpage * limit;

        this.query = this.query.slice(startIndex, endIndex);
        return this;
    }
};

export default ApiFeatures;