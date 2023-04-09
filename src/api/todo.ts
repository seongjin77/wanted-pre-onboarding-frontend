import { axiosAuthApi } from "./client";

const getTodoAxios = async () => {
    try {
        const res = await axiosAuthApi.get("/todos");

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export { getTodoAxios };