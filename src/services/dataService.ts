import config from "../config.json";

export const getApiData = async () => {
  try {
    const result = await fetch(config.url);
    return result.status === 200
      ? Promise.resolve(result.json())
      : Promise.reject(new Error(result.statusText));
  } catch (error) {
    return error;
  }
};
