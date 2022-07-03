"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proveedorController_1 = __importDefault(require("../controllers/proveedorController"));
class ProveedorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/proveedores', proveedorController_1.default.listProveedores);
        this.router.get('/proveedor/:id', proveedorController_1.default.listProveedor);
        this.router.post('/create-proveedor', proveedorController_1.default.createProveedor);
        this.router.put('/proveedor/:id', proveedorController_1.default.updateProveedor);
        this.router.delete('/proveedor/:id', proveedorController_1.default.deleteProveedor);
    }
}
const proveedorRoutes = new ProveedorRoutes();
exports.default = proveedorRoutes.router;
