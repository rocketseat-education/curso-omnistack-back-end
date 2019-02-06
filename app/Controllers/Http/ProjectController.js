'use strict'

/**
 * Resourceful controller for interacting with projects
 */
class ProjectController {
  /**
   * Show a list of all projects.
   * GET projects
   */
  async index ({ request }) {
    const projects = request.team.projects().fetch()

    return projects
  }

  /**
   * Create/save a new project.
   * POST projects
   */
  async store ({ request }) {
    const data = request.only(['title'])
    const project = request.team.projects().create(data)

    return project
  }

  /**
   * Display a single project.
   * GET projects/:id
   */
  async show ({ params, request }) {
    const project = await request.team
      .projects()
      .where('id', params.id)
      .first()

    return project
  }

  /**
   * Update project details.
   * PUT or PATCH projects/:id
   */
  async update ({ params, request }) {
    const data = request.only(['title'])
    const project = await request.team
      .projects()
      .where('id', params.id)
      .first()

    project.merge(data)

    await project.save()

    return project
  }

  /**
   * Delete a project with id.
   * DELETE projects/:id
   */
  async destroy ({ params, request }) {
    const project = await request.team
      .projects()
      .where('id', params.id)
      .first()

    await project.delete()
  }
}

module.exports = ProjectController
