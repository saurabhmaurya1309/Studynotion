import React, { useEffect, useState } from "react"
// Icons
import { FaRegStar, FaStar } from "react-icons/fa"
import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom"

import GetAvgRating from "../../../utils/avgRating"
import RatingStars from "../../Common/RatingStars"

function Course_Card({ course, Height }) {
  // const avgReviewCount = GetAvgRating(course.ratingAndReviews)
  // console.log(course.ratingAndReviews)
  const [avgReviewCount, setAvgReviewCount] = useState(0)
  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews)
    setAvgReviewCount(count)
  }, [course])
  // console.log("count............", avgReviewCount)

  return (
    // <>
    //   <Link to={`/courses/${course._id}`}>
    //     <div className="">
    //       <div className="rounded-lg">
    //         <img
    //           src={course?.thumbnail}
    //           alt="course thumnail"
    //           className={`${Height} w-full rounded-xl object-cover `}
    //         />
    //       </div>
    //       <div className="flex flex-col gap-2 px-1 py-3">
    //         <p className="text-xl text-richblack-5">{course?.courseName}</p>
    //         <p className="text-sm text-richblack-50">
    //           {course?.instructor?.firstName} {course?.instructor?.lastName}
    //         </p>
    //         <div className="flex items-center gap-2">
    //           <span className="text-yellow-5">{avgReviewCount || 0}</span>
    //           {/* <ReactStars
    //             count={5}
    //             value={avgReviewCount || 0}
    //             size={20}
    //             edit={false}
    //             activeColor="#ffd700"
    //             emptyIcon={<FaRegStar />}
    //             fullIcon={<FaStar />}
    //           /> */}
    //           <RatingStars Review_Count={avgReviewCount} />
    //           <span className="text-richblack-400">
    //             {course?.ratingAndReviews?.length} Ratings
    //           </span>
    //         </div>
    //         <p className="text-xl text-richblack-5">Rs. {course?.price}</p>
    //       </div>
    //     </div>
    //   </Link>
    // </>
   <>
   <Link to={`/courses/${course._id}`}>
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl max-w-xs mx-auto">
      <div className="relative">
        <img
          src={course?.thumbnail}
          alt="course thumbnail"
          className="h-40 w-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
          Featured
        </div>
      </div>
      <div className="p-4">
        <p className="text-xl font-semibold text-gray-800">
          {course?.courseName}
        </p>
        <p className="text-sm text-gray-500">
          {course?.instructor?.firstName} {course?.instructor?.lastName}
        </p>
        <div className="flex items-center gap-2 my-2">
          <span className="text-yellow-500">{avgReviewCount || 0}</span>
          <RatingStars Review_Count={avgReviewCount} />
          <span className="text-gray-400">
            ({course?.ratingAndReviews?.length} Ratings)
          </span>
        </div>
        <p className="text-xl font-bold text-gray-800">Rs. {course?.price}</p>
      </div>
    </div>
  </Link>
      
   </>

  )
}

export default Course_Card
