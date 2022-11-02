import { DataStore } from '@aws-amplify/datastore';
import { Stock } from './models';

export async function createItem({ name, description, url, favorite, ontrack }) {
  await DataStore.save(
    new Stock({ name, description, url, favorite, ontrack })
  );
};

export async function updateItem(stockId, name, description, url, favorite, ontrack) {
  const original = await DataStore.query(Stock, stockId);
  console.log("id", stockId);
  console.log("original", original);
  await DataStore.save(
    Stock.copyOf(original, updated => {
      updated.name = name
      updated.url = url
      updated.description = description
      updated.favorite = favorite
      updated.ontrack = ontrack
    })
  );
}


function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

export async function getItems() {
  return await DataStore.query(Stock);
}

export async function getRandomItems(amount) {
  const models = await getItems(amount);
  return getMultipleRandom(models, amount);
}

export async function getFavorites() {
  return await DataStore.query(Stock, c => c.favorite("eq", true));
}

export async function getItem(id) {
  return await DataStore.query(Stock, id);
}


export async function deleteItem(id) {
  const modelToDelete = await DataStore.query(Stock, id);
  DataStore.delete(modelToDelete);
};


export default getItems;
