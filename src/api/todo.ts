import { axiosAuthApi } from "./client";

const getTodoAxios = async () => {
    try {
        const res = await axiosAuthApi.get("/todos");

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

const createTodoAxios = async (todo: string) => {
  try{
    const res = await axiosAuthApi.post('/todos',{todo})
    
    return res
  }
  catch(error){
      console.log('createTodoAxios',error)
      return error;
    
  }
}

export { getTodoAxios,createTodoAxios };