/////////////////////////////////////////////////////////////////////////
// This file was automatically generated by pg-promise v.4.3.8
//
// Generated on: 6/2/2016, at 2:06:58 PM
// Total files: 4
//
// API: http://vitaly-t.github.io/pg-promise/utils.html#.buildSqlModule
/////////////////////////////////////////////////////////////////////////

'use strict';

var load = require('./loadSql');

module.exports = {
    allUsers: load("test\\sql\\allUsers.sql"),
    invalid: load("test\\sql\\invalid.sql"),
    params: load("test\\sql\\params.sql"),
    simple: load("test\\sql\\simple.sql")
};