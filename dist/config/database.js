"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: "postgres",
        connection: {
            host: env("POSTGRES_HOST", "127.0.0.1"),
            port: env.int("POSTGRES_PORT", 5432),
            database: env("POSTGRES_DB", "postgres"),
            user: env("POSTGRES_USER", "root"),
            password: env("POSTGRES_PASSWORD", "password"),
            ssl: env.bool("POSTGRES_SSL", false),
        },
    },
});
