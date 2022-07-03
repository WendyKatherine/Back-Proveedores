"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const proveedor_1 = __importDefault(require("../models/proveedor"));
class ProveedorController {
    listProveedores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = req.query.searchBy;
            const findProveedor = yield proveedor_1.default.query('SELECT * FROM proveedor WHERE nombresproveedor LIKE "%' + filter + '%"');
            res.json(findProveedor);
        });
    }
    listProveedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const proveedor = yield proveedor_1.default.query('SELECT * FROM proveedor WHERE idproveedor = ?', [id]);
            if (proveedor.length > 0) {
                return res.json(proveedor[0]);
            }
            res.status(404).json({ text: "The proveedor doesn't exist" });
        });
    }
    createProveedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield proveedor_1.default.query('INSERT INTO proveedor set ?', [req.body]);
            res.json({ message: 'Proveedor saved' });
        });
    }
    updateProveedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield proveedor_1.default.query('UPDATE proveedor set ? WHERE idproveedor = ?', [req.body, id]);
            res.json({ text: 'The proveedor was updated' + req.params.id });
        });
    }
    deleteProveedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield proveedor_1.default.query('DELETE FROM proveedor WHERE idproveedor = ?', [id]);
            res.json({ message: 'The proveedor was deleted' });
        });
    }
}
const proveedorController = new ProveedorController();
exports.default = proveedorController;
