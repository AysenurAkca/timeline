const Post = require('../model/postModel')
const Comment = require('../model/commentModel')


const getPosts = (req,res) => {
    Post.find()
    .populate("comments","name comment")
    .sort({created_at : -1})
    .then((result) => res.render('index', {posts : result, title: 'Posts'}) )
    .catch((err)=> console.log(err))
}

const createPost = (req,res)=>{
    let newPost = new Post(req.body);
    newPost.save()
        .then(()=> res.redirect('/'))
        .catch((err)=> console.log(err))
}

const deletePost = async (req,res) => {
    const {id} = req.params;
    await Post.findOneAndDelete(id);
    res.redirect('/')
}

const editPost = async(req,res)=> {
    const {id} = req.params;
    const post = await Post.findById(id)
    res.render('edit', {post})
}
const updatePost = async (req,res) => {
    const {id} = req.params;
    await Post.findByIdAndUpdate(id,req.body,{runValidators:true})
    res.redirect('/')
}

    

module.exports = { getPosts, createPost, deletePost,editPost,updatePost}