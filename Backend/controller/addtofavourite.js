const User= require('../Models/user')

// add book to favourite 
exports.addfavourite= async (req,res)=>{
    try{
        const {bookid ,id} = req.headers;
        const userdata =  await User.findById(id);
        const isBookFavourite = userdata.favourites.includes(bookid)

        if(isBookFavourite){
           return res.status(200).json({message:"book is already in favourite"}) 
        }

        await User.findByIdAndUpdate(id,{$push:{favourites:bookid}})
        return res.status(200).json({message:"book added to favourites"})
    }
    catch(err){
        res.status(500).json({message:"internal server error"})

    }


    
}