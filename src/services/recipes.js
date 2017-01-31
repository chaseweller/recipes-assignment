export default ({ recipes }) => {

  return {

    /**
     * Finds all the documents by the predicate
     * @public
     *
     * @param {Object} predicate - the way to find a recipe
     * @param {Object} [projection] - restrict any fields
     *
     * @returns {Promise<Array>}
     */
    async all(predicate = {}, projection) {
      return recipes.find(predicate, projection);
    },

    /**
     * Find a single recipe
     *
     * @public
     *
     * @param {Object} predicate - the way to find a recipe
     * @param {Object} [projection] - restrict any fields
     *
     * @returns {Promise<Object>}
     */
    async one(predicate = {}, projection) {
      return recipes.findOne(predicate, projection)
    },

    /**
     * Saves a document
     *
     * @param {Object} document - the document
     * @param {String} [document._id] - optional id
     *
     * @returns {Promise.<Object|Array>}
     */
    async save(document = {}) {
      if (!document._id) {
        return await recipes.insert(document);
      } else {
        return await recipes.update({ _id: document._id }, { $set: document }, { returnUpdatedDocs: true })
      }
    },

    /**
     * Deletes a recipe
     *
     * @public
     * @param {Object} predicate - the way to find a recipe
     * @param {Object} [options] - any additional options
     *
     * @returns {Promise.<*>}
     */
    async delete(predicate = {}, options) {
      return await recipes.remove(predicate, options);
    }
  }
};
