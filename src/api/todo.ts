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

const UpdateAxios = async (Id: number, todo : string, isCompleted: boolean ) => {
  try {
      const res = await axiosAuthApi.put(`/todos/${Id}`, {todo, isCompleted});
      console.log(res)
      return res;
  } catch (error) {
      console.log(error);
  }
};

const deleteTodoAxios = async (Id : number) => {
  try {
      const res = await axiosAuthApi.delete(`/todos/${Id}`);

      return res;
  } catch (error) {
      console.log(error);
  }
};

export { getTodoAxios,createTodoAxios,UpdateAxios,deleteTodoAxios };