const Post = require('../model/postModel')


const getPosts = (req,res) => {
    Post.find()
    .then((result) => res.render('index', {posts : result, title: 'Posts'}) )
    .catch((err)=> console.log(err))
}

const createPost = (req,res)=>{
    let newPost = new Post(req.body);
    newPost.save()
        .then(()=> res.redirect('/'))
        .catch((err)=> console.log(err))
}

module.exports = { getPosts, createPost}