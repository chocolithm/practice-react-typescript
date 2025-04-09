import { Router } from 'express';
import { MongoDB } from '../mongodb';
import { getUserIdFromJwtP } from './getUserIdFromJwtP';

export const testRouter = (...args: any[]) => {
  const db: MongoDB = args[0];
  const test = db.collection('test');
  const router = Router();

  return router
    .get('/', async (req, res) => {
      try {
        const userId = getUserIdFromJwtP(req);
        const findResult = await test.find({}).toArray();
        res.json({ ok: true, body: findResult });
      } catch (e) {
        if (e instanceof Error) res.json({ ok: false, errorMessage: e.message });
      }
    })
    .get('/:id', async (req, res) => {
      const { id } = req.params;
      try {
        const userId = getUserIdFromJwtP(req);
        const findResult = await test.findOne({ id });
        res.json({ ok: true, body: findResult });
      } catch (e) {
        if (e instanceof Error) res.json({ ok: false, errorMessage: e.message });
      }
    })
    .post('/', async (req, res) => {
      const { body } = req;
      try {
        const userId = getUserIdFromJwtP(req);
        try {
          await test.drop();
        } catch (e) {}

        const insertResult = await test.insertOne({ id: '1234', ...body });
        const { insertedId } = insertResult;
        const findResult = await test.findOne({ _id: insertedId });
        res.json({ ok: true, body: findResult });
      } catch (e) {
        if (e instanceof Error) res.json({ ok: false, errorMessage: e.message });
      }
    })
    .put('/:id', async (req, res) => {
      const { id } = req.params;
      const { body } = req;
      try {
        const userId = getUserIdFromJwtP(req);
        const updateResult = await test.findOneAndUpdate(
          { id },
          { $set: body },
          {
            returnDocument: 'after'
          }
        );
        res.json({ ok: true, body: updateResult && updateResult });
      } catch (e) {
        if (e instanceof Error) res.json({ ok: false, errorMessage: e.message });
      }
    })
    .delete('/:id', async (req, res) => {
      const { id } = req.params;
      try {
        const userId = getUserIdFromJwtP(req);
        await test.deleteOne({ id });
        res.json({ ok: true });
      } catch (e) {
        if (e instanceof Error) res.json({ ok: false, errorMessage: e.message });
      }
    });
};
