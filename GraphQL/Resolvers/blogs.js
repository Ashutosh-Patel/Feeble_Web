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
        },
        async getBlog(_,{ blogId }){
            try{
                const blog = await Blog.findById(blogId);
                if(blog) return blog;
                else{
                    throw new Error('Blog not found')
                }
            }catch(err){
                throw new Error(err);
            }
        },

        
    },
    Mutation: {
        async createBlog(_,{body}, context){
            // const newBlog  = new Blog({
            //     body,
            //     username,
            //     createdAt: new Date().toISOString(),
            // });

            // const res = await newBlog.save();
            // // const token = generateToken(res);

            // return {
            //     ...res._doc,
            //     id: res.id,
            // };
        }
    }

}