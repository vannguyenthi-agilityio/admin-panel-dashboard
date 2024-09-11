export const isBrowser = typeof window !== "undefined";

export const getObjectValue = <T, Key extends keyof T>(obj: T, key: string) => {
  return obj[key as Key] as string;
};

export const splitFullName = (name = '') => {
  const [firstName, ...lastName] = name.split(' ').filter(Boolean);
  return {
    firstName: firstName,
    lastName: lastName.join(' ')
  }
}
