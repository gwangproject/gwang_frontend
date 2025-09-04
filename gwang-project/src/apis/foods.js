import instance from './axios';

export const fetchFoods = async () => { // foodId 파라미터 제거
  try {
    // 전체 음식 목록을 가져옴
    const response = await instance.get('/api/foods'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching foods:', error);
    throw error;
  }
};