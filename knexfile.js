module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    // needed when using sqlite3
    useNullAsDefault: true
  },
};
