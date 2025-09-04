import React from "react";
import PropTypes from "prop-types";

const FoodCard = ({ food }) => {
    return(
        <div className="p-[8px] border-b-1 border-black flex w-full bg-white">
            <div className="flex flex-col w-full">
                <div className="text-[20px] font-bold">{food.name}</div>
                <div className="text-[16px]">요리사 : {food.chef}</div>
                <div className="text-[16px]">식당 주소 : {food.address}</div>
            </div>
        </div>
    )
}

FoodCard.propTypes = {
  food: PropTypes.object.isRequired, // 'store'를 'food'로 변경
};

export default FoodCard;