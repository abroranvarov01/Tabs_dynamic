const url = "http://localhost:3000";

export const getDataTabs = async () => {
  try {
    const res = await fetch(`${url}/category_names`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getDatacontent = async (path) => {
  try {
    const res = await fetch(`${url}${path}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
