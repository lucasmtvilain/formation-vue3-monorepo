type milliseconde = number;

export const sleep = (delay: milliseconde): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};
