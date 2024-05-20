"use server";

export const testing = async () => {
  const response = await fetch(`${process.env.NEXT_API_URL}`, {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();
  return data
};
