const Post = require('../model/postModel')
const Comment = require('../model/commentModel')
const User = require('../model/userModel')


const getPosts = (req,res) => {
    Post.find()
    .populate("comments","user_id comment")
    .populate("user_id", "firstname")
    // .populate({path: 'comments', populate:{path: 'user_id', populate : {path:'firstname'}}})
    .sort({created_at : -1})
    .then((result) => res.render('index', {posts : result, title: 'Posts'}) )
    .catch((err)=> console.log(err))
}

const createPost = async (req,res)=>{
    let newPost = new Post({
        review : req.body.review,
        user_id : res.locals.id
    })
    await newPost.save()
    const postedUser = await User.findById(res.locals.id)
    postedUser.posts.push(newPost._id)
    postedUser.save()
    res.redirect('/')

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