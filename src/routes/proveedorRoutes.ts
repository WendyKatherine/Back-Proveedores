import { Router } from 'express';

import proveedorController from '../controllers/proveedorController';

class ProveedorRoutes  {
    
    public router: Router = Router ();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.get('/proveedores', proveedorController.listProveedores);
        this.router.get('/proveedor/:id', proveedorController.listProveedor);
        this.router.post('/create-proveedor', proveedorController.createProveedor);
        this.router.put('/proveedor/:id', proveedorController.updateProveedor);
        this.router.delete('/proveedor/:id', proveedorController.deleteProveedor);
    }

}

const proveedorRoutes = new ProveedorRoutes();
export default proveedorRoutes.router;