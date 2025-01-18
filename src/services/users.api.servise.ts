const baseURL = import.meta.env.VITE_BASE_URL;

export const  getUsers = async () => await fetch(`${baseURL}/users`).then(response => response.json());
