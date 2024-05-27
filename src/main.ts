import { client } from "./valkey-client";

const createData = async (key: string, value: string) => {
  await client.set(key, value);
};

const readData = async (key: string) => {
  const value = await client.get(key);
  console.log(value);
  return value;
};

const updateData = async (key: string, value: string) => {
  await client.set(key, value);
};

const deleteData = async (key: string) => {
  await client.del(key);
};

const main = async () => {
  try {
    await client.connect();

    await createData("customer:1", "John Doe");
    await readData("customer:1");

    // Update
    await updateData("customer:1", "Jane Doe");
    await readData("customer:1");

    await client.disconnect();
  } catch (error) {
    console.error(error);
    client.disconnect();
  }
};
main();
