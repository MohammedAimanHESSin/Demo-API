



exports.getPosts= (req,res,next)=>{
    res.status(200).json( {
        posts: "This is my potst",
        message: "Response successfully done"
    })

}

exports.creatPost= (req,res,next)=>{
   let title = req.body.title
   let time = req.body.time
   let creator = req.body.creator

   res.status(201).json({
    title: title,
    time:time,
    creator:creator
   })

}