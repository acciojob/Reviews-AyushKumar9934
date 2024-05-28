import React,{useState} from 'react'

let reviews=[
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  
 
const Review = () => {
    const [currentReviewIndex,setCurrentReviewIndex ]=useState(0);
    const update=(type)=>{
        if(type=="prev"){
            currentReviewIndex-1>=0?setCurrentReviewIndex(currentReviewIndex-1):currentReviewIndex;
        }
        if(type=="next"){
            currentReviewIndex+1<=reviews.length-1?setCurrentReviewIndex(currentReviewIndex+1):currentReviewIndex;
        }
        if(type=="random"){
            let newIndex;
            do{
                newIndex=Math.floor(Math.random()*reviews.length);

            }while(newIndex==currentReviewIndex)
                setCurrentReviewIndex(newIndex);
        }

    }


    
  return (
    
    <div >
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
        <button onClick={()=>{update("prev")}}  className='prev-btn'>previous</button>
        <button onClick={()=>{update("next")}} className='next-btn'>next</button>
        <button onClick={()=>{update("random")}} className='random-btn'>surprise me</button>
        </div>
        <div className='review' >
         <h1 className='author' id={`author-${reviews[currentReviewIndex].id}`}>{reviews[currentReviewIndex].name}</h1>
         <h2 className='job'>{reviews[currentReviewIndex].job}</h2>
         <h3 className='info'>{reviews[currentReviewIndex].text}</h3>
         <img height={"100px"} width={"100px"} className="person-img" src={reviews[currentReviewIndex].image} alt={reviews[currentReviewIndex].name} />
        </div>
    </div>

  )
}

export default Review



// Display one review at a time in a container with className="review".
// The review container should include the author's name, job, review text, and image with respective class names: author, job, info, and person-img.
// Include previous and next buttons with class names prev-btn and next-btn.
// Add a button to display a random review, avoiding the current index, with the class name random-btn and text "surprise me".
// For displaying the author's name, use a tag with an id formatted as author-id, where id is the review's id.