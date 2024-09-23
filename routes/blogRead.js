const router = require("express").Router()
const Blog = require("../models/blogs")





router.get("/search/:searchValue", async(req,res)=>{

    const searchValue = req.params.searchValue
    try{
        const result = await Blog.find({title: new RegExp(searchValue,'i')})
        res.status(200).json(result);

    }
    catch(err){
        res.status(500).json(err)
    }


})


router.post("/upload", async(req,res)=>{

    try{
        const newBlog = new Blog({
            content: req.body.content,
            images: req.body.images,
            title: req.body.title,
            cover: req.body.cover,
            desc: req.body.desc,
        })

        const post = newBlog.save();
        res.status(200).json(post);
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.get("/fetchBlog/:id", async(req,res)=>{

    const blogId = req.params.id;
    console.log(blogId)
    try{
        const blog = await Blog.findById(blogId);
        console.log(blog)
        res.status(200).json(blog); 
    }
    catch(err){
        res.status(200).json(err);
    }

})


module.exports = router