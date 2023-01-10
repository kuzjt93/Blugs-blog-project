"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();
const blogsRouter = require('./blogs/blogs.router');
const commentsRouter = require('./comments/comments.router');
const app = (0, express_1.default)();
const version = "/api/v1";
app.use(cors());
app.use(morgan('dev'));
app.use(express_1.default.json());
app.use(`${version}/blogs`, blogsRouter);
app.use(`${version}/comments`, commentsRouter);
module.exports = app;