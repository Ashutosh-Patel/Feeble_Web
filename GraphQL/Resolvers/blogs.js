const Blog = require('../../Models/Blog');

module.exports = {
    Query : {
        async getBlogs(){
            try{
                const blogs = await Blog.find();
                return blogs;
            }catch(err){
                throw new Error(err);
            }
        }
    }
}