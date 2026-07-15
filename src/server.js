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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
                    
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var app_1 = require("./app");
var db_1 = require("./config/db");
var mongodb_1 = require("mongodb");
var _a = require("jose-cjs"), createRemoteJWKSet = _a.createRemoteJWKSet, jwtVerify = _a.jwtVerify;
var PORT = process.env.PORT || 5000;
var JWKS = createRemoteJWKSet(new URL("".concat(process.env.CLIENT_URL, "/api/auth/jwks")));
var verifyToken = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var authHeader, token, payload, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                authHeader = req === null || req === void 0 ? void 0 : req.headers.authorization;
                if (!authHeader) {
                    return [2 /*return*/, res.status(401).json({ message: "Unauthorized" })];
                }
                token = authHeader.split(" ")[1];
                if (!token) {
                    return [2 /*return*/, res.status(401).json({ message: "Unauthorized" })];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, jwtVerify(token, JWKS)];
            case 2:
                payload = (_a.sent()).payload;
                req.user = payload;
                next();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                return [2 /*return*/, res.status(403).json({ message: "Forbidden" })];
            case 4: return [2 /*return*/];
        }
    });
}); };
var startServer = function () { return __awaiter(void 0, void 0, void 0, function () {
    var db, userCollection, housepostCollection, addedfavoritestCollection, contactCollection;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, db_1.connectDB)()];
            case 1:
                _a.sent();
                db = db_1.client.db(process.env.DATABASE_NAME);
                userCollection = db.collection("user");
                housepostCollection = db.collection("housepost");
                addedfavoritestCollection = db.collection("favorites");
                contactCollection = db.collection("contact");
                // admin
                app_1.default.get("/housepost", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, housepostCollection.find().toArray()];
                            case 1:
                                result = _a.sent();
                                res.json(result);
                                return [2 /*return*/];
                        }
                    });
                }); });
                app_1.default.get("/user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, userCollection.find().toArray()];
                            case 1:
                                result = _a.sent();
                                res.json(result);
                                return [2 /*return*/];
                        }
                    });
                }); });
                app_1.default.delete("/user/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var id, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                id = req.params.id;
                                return [4 /*yield*/, userCollection.deleteOne({ _id: new mongodb_1.ObjectId(id) })];
                            case 1:
                                result = _a.sent();
                                res.json(result);
                                return [2 /*return*/];
                        }
                    });
                }); });
                app_1.default.patch("/user/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var id, role, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                id = req.params.id;
                                role = req.body.role;
                                return [4 /*yield*/, userCollection.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { role: role } })];
                            case 1:
                                result = _a.sent();
                                res.json(result);
                                return [2 /*return*/];
                        }
                    });
                }); });
                app_1.default.patch("/housepost/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var id, status, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                id = req.params.id;
                                status = req.body.status;
                                return [4 /*yield*/, housepostCollection.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { status: status } })];
                            case 1:
                                result = _a.sent();
                                res.json(result);
                                return [2 /*return*/];
                        }
                    });
                }); });
                //user
                app_1.default.post("/housepost", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var requestData, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                requestData = req.body;
                                return [4 /*yield*/, housepostCollection.insertOne(requestData)];
                            case 1:
                                result = _a.sent();
                                res.json(result);
                                return [2 /*return*/];
                        }
                    });
                }); });
                app_1.default.get("/housepost/email/:email", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var email, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                email = req.params.email;
                                return [4 /*yield*/, housepostCollection.find({ email: email }).toArray()];
                            case 1:
                                result = _a.sent();
                                res.json(result);
                                return [2 /*return*/];
                        }
                    });
                }); });
                app_1.default.delete("/housepost/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var id, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                id = req.params.id;
                                return [4 /*yield*/, housepostCollection.deleteOne({ _id: new mongodb_1.ObjectId(id) })];
                            case 1:
                                result = _a.sent();
                                res.json(result);
                                return [2 /*return*/];
                        }
                    });
                }); });
                app_1.default.get("/housepost/published/four", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, housepostCollection.find({ status: "published" }).limit(4).toArray()];
                            case 1:
                                result = _a.sent();
                                res.json(result);
                                return [2 /*return*/];
                        }
                    });
                }); });
                app_1.default.get("/housepost/published", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, _b, page, _c, limit, pageNumber, limitNumber, skip, result, total, totalPage;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                _a = req.query, _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 8 : _c;
                                pageNumber = Number(page);
                                limitNumber = Number(limit);
                                skip = (pageNumber - 1) * limitNumber;
                                return [4 /*yield*/, housepostCollection
                                        .find({ status: "published" })
                                        .skip(skip)
                                        .limit(limitNumber)
                                        .toArray()];
                            case 1:
                                result = _d.sent();
                                return [4 /*yield*/, housepostCollection.countDocuments({
                                        status: "published",
                                    })];
                            case 2:
                                total = _d.sent();
                                totalPage = Math.ceil(total / limitNumber);
                                console.log({
                                    data: result,
                                    page: pageNumber,
                                    totalPage: totalPage,
                                    total: total,
                                });
                                res.json({
                                    total: total,
                                    totalPage: totalPage,
                                    page: pageNumber,
                                    limit: limitNumber,
                                    data: result,
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                app_1.default.get("/housepost/published/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var id, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                id = req.params.id;
                                return [4 /*yield*/, housepostCollection.findOne({
                                        _id: new mongodb_1.ObjectId(id),
                                        status: "published",
                                    })];
                            case 1:
                                result = _a.sent();
                                res.json(result);
                                return [2 /*return*/];
                        }
                    });
                }); });
                app_1.default.post("/favorites", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var requestData, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                requestData = req.body;
                                return [4 /*yield*/, addedfavoritestCollection.insertOne(requestData)];
                            case 1:
                                result = _a.sent();
                                res.json(result);
                                return [2 /*return*/];
                        }
                    });
                }); });
                app_1.default.post("/contact", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var requestData, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                requestData = req.body;
                                return [4 /*yield*/, contactCollection.insertOne(requestData)];
                            case 1:
                                result = _a.sent();
                                res.json(result);
                                return [2 /*return*/];
                        }
                    });
                }); });
                app_1.default.get("/favorites/email/:email", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var email, result, error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                email = req.params.email;
                                return [4 /*yield*/, addedfavoritestCollection
                                        .find({ customerEmail: email })
                                        .toArray()];
                            case 1:
                                result = _a.sent();
                                res.status(200).json(result);
                                return [3 /*break*/, 3];
                            case 2:
                                error_2 = _a.sent();
                                res.status(500).json({
                                    message: "Failed to fetch favorite properties",
                                    error: error_2 instanceof Error ? error_2.message : "An unknown error occurred",
                                });
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                app_1.default.get("/", function (req, res) {
                    res.send("Server is running fine!");
                });
                app_1.default.listen(PORT, function () {
                    console.log("Server Running ".concat(PORT));
                });
                return [2 /*return*/];
        }
    });
}); };
startServer();
