import React from 'react'
import FoodCard from '../components/FoodCard'
import { useQuery } from '@tanstack/react-query';
import { fetchFoods } from '../apis/foods';

const Main = () => {
    const {
    data: foods = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['foods'],
    queryFn: fetchFoods,
  });

  if (isLoading)
    return (
      <div className="p-4 text-center">음식 목록을 불러오는 중...</div>
    );
  if (error)
    return (
      <div className="p-4 text-center text-red-500">오류가 발생했습니다.</div>
    );

      console.log('API로부터 받은 실제 데이터:', foods);

    return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">전체 음식 목록</h1>
      <div className="flex flex-col items-center gap-6 w-full max-w-4xl mx-auto">
        {foods.length === 0 ? (
          <div className="text-gray-500">등록된 음식이 없습니다.</div>
        ) : ( foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))
        )}
      </div>
    </div>
)
}

export default Main