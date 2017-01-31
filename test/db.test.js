import Test from 'ava';
import Db from '../src/db';

Test(`initializes a InMemory database`, async t => {
  const db = Db(true);
  t.deepEqual((await db.recipes.find({})), []);
});

Test(`initializes a disk stored db`, async t => {
  const db = Db(false);
  t.deepEqual((await db.recipes.find({})), []);
});

