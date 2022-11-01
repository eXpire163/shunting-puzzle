import { DataStore } from '@aws-amplify/datastore';
import { Stock } from './models';

test('create', () => {
    await DataStore.save(
        new Stock({
            "name": "Lorem ipsum dolor sit amet",
            "description": "Lorem ipsum dolor sit amet",
            "url":  /* Provide init commands */,
            "favorite": true,
            "ontrack": true
        })
    );
});

test('upate', () => {

    /* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
    await DataStore.save(Stock.copyOf(CURRENT_ITEM, item => {
        // Update the values on {item} variable to update DataStore entry
    }));
});


test('read', () => {
    const models = await DataStore.query(Stock);
    console.log(models);
});

test('delete', () => {
    const modelToDelete = await DataStore.query(Stock, 123456789);
    DataStore.delete(modelToDelete);
});
