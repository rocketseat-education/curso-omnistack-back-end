'use strict'

const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', table => {
      table.increments()
      table.string('title').notNullable()
      table
        .integer('team_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('teams')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
