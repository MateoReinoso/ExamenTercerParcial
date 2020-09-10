import { Request, Response } from 'express';

import db from '../database';

class GamesController {
    public async list(req: Request, res: Response): Promise<void> {
        const categoria = await db.query('SELECT * FROM subcategoria');
        res.json(categoria);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await db.query('SELECT * FROM subcategoria WHERE COD_SUB_CATEGORIA = ?', [id]);
        res.json(games[0]);
    }

    public async create(req: Request, res: Response): Promise<void> {

        console.log(req.body);
        await db.query('INSERT INTO subcategoria set ?', [req.body])
        res.json({message: 'subcategoria saved!'});
    }

    public async update(req: Request, res: Response):Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE subcategoria set ? WHERE COD_SUB_CATEGORIA = ?', [req.body, id]);
        res.json({ messasge: 'actu un juego' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM subcategoria WHERE COD_SUB_CATEGORIA = ?', [id]);
        res.json({ messge: 'Juego borrado' })
    }

    
}

const gamesController = new GamesController();
export default gamesController;