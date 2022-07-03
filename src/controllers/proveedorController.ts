import { Request, Response } from 'express';

import pool from '../models/proveedor';

class ProveedorController {

    public async listProveedores (req: Request, res: Response){

        const filter = req.query.searchBy;
        
        const findProveedor = await pool.query('SELECT * FROM proveedor WHERE nombresproveedor LIKE "%' + filter + '%"');
        
        res.json(findProveedor);
    }

    public async listProveedor (req: Request, res: Response): Promise<any>{
        const id = req.params.id;
        const proveedor = await pool.query('SELECT * FROM proveedor WHERE idproveedor = ?', [id]);
        if (proveedor.length > 0){
            return res.json(proveedor[0]);
        }
        res.status(404).json({text: "The proveedor doesn't exist"});
    } 

    public async createProveedor (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO proveedor set ?', [req.body]);
        res.json({message: 'Proveedor saved'});
    }

    public async updateProveedor (req: Request, res: Response): Promise<void>{
        const id = req.params.id;
        await pool.query('UPDATE proveedor set ? WHERE idproveedor = ?', [req.body, id]);
        res.json({text: 'The proveedor was updated' + req.params.id });
    }

    public async deleteProveedor (req: Request, res: Response): Promise<void>{
        const id = req.params.id;
        await pool.query('DELETE FROM proveedor WHERE idproveedor = ?', [id]);
        res.json({message: 'The proveedor was deleted'});
    }

}

const proveedorController = new ProveedorController(); 
export default proveedorController;