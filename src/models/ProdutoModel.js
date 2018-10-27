const mysql = require('mysql2/promise');

exports.getAll = async() => {
    
    const conn = await mysql.createConnection(global.config);

    const [rows] = await conn.query('select * from livros');

    conn.end();

    return rows;
}

exports.post = async(produto) => {

    const conn = await mysql.createConnection(global.config);

    const [rows] = await conn.query(`insert into livros set ?`, [produto]);

    conn.end();

    return rows;
}

exports.getById = async(id) => {
    const conn = await mysql.createConnection(global.config);

    const [rows] = await conn.query('select * from livros where id = ?', [id]);

    conn.end();

    return rows;
}
