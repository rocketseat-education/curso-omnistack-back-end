'use strict'

const Model = use('Model')

class Invite extends Model {
  static boot () {
    super.boot()

    this.addHook('afterCreate', 'InviteHook.sendInvitationEmail')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  team () {
    return this.belongsTo('App/Models/Team')
  }
}

module.exports = Invite
